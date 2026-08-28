import React, { useState, useEffect, useRef } from 'react';
import { loadStoredData, saveStoredData, resetToInitialData, computeEmployeePeriodicity, calculateFarol, syncEmployeesWithEvaluations } from './utils/storage';
import { EvaluationRecord, ActionPlan, Employee, ActionPlanStatus, GabaritoType } from './types';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { EvaluationsList } from './components/EvaluationsList';
import { ActionPlans } from './components/ActionPlans';
import { PeriodicityManager } from './components/PeriodicityManager';
import { CollaboratorsManager } from './components/CollaboratorsManager';
import { QuestionCatalog } from './components/QuestionCatalog';
import { NewEvaluationModal } from './components/NewEvaluationModal';
import { ExportImportModal } from './components/ExportImportModal';
import { QuickGestaoPasteModal } from './components/QuickGestaoPasteModal';
import { 
  auth, 
  db, 
  signInWithGoogle, 
  logoutUser, 
  testConnection, 
  saveEvaluationToFirestore, 
  deleteEvaluationFromFirestore, 
  saveActionPlanToFirestore, 
  deleteActionPlanFromFirestore, 
  saveEmployeeToFirestore, 
  deleteEmployeeFromFirestore,
  bulkSyncToFirestore,
  handleFirestoreError,
  OperationType
} from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';

export default function App() {
  const [appData, setAppData] = useState(() => loadStoredData());
  const [activeTab, setActiveTab] = useState<'dashboard' | 'evaluations' | 'action-plans' | 'periodicity' | 'collaborators' | 'questions'>('dashboard');
  const [selectedUnit, setSelectedUnit] = useState<string>('Pau Brasil Guarabira');

  // Firebase Auth and Cloud state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isCloudConnected, setIsCloudConnected] = useState<boolean>(true);
  const isInitialSyncDone = useRef(false);

  // Modals state
  const [isNewEvaluationOpen, setIsNewEvaluationOpen] = useState(false);
  const [isQuickGestaoPasteOpen, setIsQuickGestaoPasteOpen] = useState(false);
  const [newEvaluationDefaultType, setNewEvaluationDefaultType] = useState<GabaritoType>('GSD');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Check connection to Firestore
  useEffect(() => {
    testConnection().then(connected => {
      setIsCloudConnected(connected);
    });
  }, []);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Real-time Firestore Listeners
  useEffect(() => {
    if (!currentUser) return;

    // Listen to Evaluations
    const unsubEvals = onSnapshot(
      collection(db, 'evaluations'),
      (snapshot) => {
        if (!snapshot.empty) {
          const remoteEvals: EvaluationRecord[] = [];
          snapshot.forEach((docSnap) => {
            remoteEvals.push(docSnap.data() as EvaluationRecord);
          });
          remoteEvals.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
          setAppData((prev) => {
            const syncedEmployees = syncEmployeesWithEvaluations(prev.employees, remoteEvals);
            return {
              ...prev,
              evaluations: remoteEvals,
              employees: syncedEmployees
            };
          });
        } else if (!isInitialSyncDone.current && appData.evaluations.length > 0) {
          // Seed to Firestore on first connection if cloud is empty
          isInitialSyncDone.current = true;
          bulkSyncToFirestore(appData.evaluations, appData.actionPlans, appData.employees).catch(err => {
            console.warn("Initial bulk sync notice:", err);
          });
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'evaluations');
      }
    );

    // Listen to Action Plans
    const unsubPlans = onSnapshot(
      collection(db, 'actionPlans'),
      (snapshot) => {
        if (!snapshot.empty) {
          const remotePlans: ActionPlan[] = [];
          snapshot.forEach((docSnap) => {
            remotePlans.push(docSnap.data() as ActionPlan);
          });
          setAppData((prev) => ({
            ...prev,
            actionPlans: remotePlans
          }));
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'actionPlans');
      }
    );

    // Listen to Employees
    const unsubEmployees = onSnapshot(
      collection(db, 'employees'),
      (snapshot) => {
        if (!snapshot.empty) {
          const remoteEmployees: Employee[] = [];
          snapshot.forEach((docSnap) => {
            remoteEmployees.push(docSnap.data() as Employee);
          });
          setAppData((prev) => {
            const synced = syncEmployeesWithEvaluations(remoteEmployees, prev.evaluations);
            return {
              ...prev,
              employees: synced
            };
          });
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'employees');
      }
    );

    return () => {
      unsubEvals();
      unsubPlans();
      unsubEmployees();
    };
  }, [currentUser]);

  // Re-compute employee periodicities on load
  useEffect(() => {
    const updatedEmployees = appData.employees.map(emp => computeEmployeePeriodicity(emp));
    setAppData(prev => ({
      ...prev,
      employees: updatedEmployees
    }));
  }, []);

  // Save to localStorage whenever appData updates
  useEffect(() => {
    saveStoredData(appData);
  }, [appData]);

  // List of unique units (Fixed strictly to Guarabira)
  const unitsList = ['Pau Brasil Guarabira'];

  // Recalculate Unit Summaries
  const recalculateUnits = (evaluations: EvaluationRecord[]) => {
    return unitsList.map(unitName => {
      const unitEvals = evaluations.filter(e => e.unit === unitName);
      if (unitEvals.length === 0) {
        return {
          unitName,
          totalEvaluations: 0,
          complianceRate: 100,
          gsdCompliance: 100,
          gsaCompliance: 100,
          gspCompliance: 100,
          farolStatus: 'VERDE' as const,
          openActionPlans: appData.actionPlans.filter(p => p.unit === unitName && p.status !== 'Concluido').length
        };
      }

      const calcAvg = (list: EvaluationRecord[]) => {
        if (list.length === 0) return 100;
        return Math.round((list.reduce((acc, curr) => acc + curr.score, 0) / list.length) * 10) / 10;
      };

      const gsdList = unitEvals.filter(e => e.gabaritoType === 'GSD');
      const gsaList = unitEvals.filter(e => e.gabaritoType === 'GSA');
      const gspList = unitEvals.filter(e => e.gabaritoType === 'GSP');

      const overall = calcAvg(unitEvals);

      return {
        unitName,
        totalEvaluations: unitEvals.length,
        complianceRate: overall,
        gsdCompliance: calcAvg(gsdList),
        gsaCompliance: calcAvg(gsaList),
        gspCompliance: calcAvg(gspList),
        farolStatus: calculateFarol(overall),
        openActionPlans: appData.actionPlans.filter(p => p.unit === unitName && p.status !== 'Concluido').length
      };
    });
  };

  // Handlers
  const handleAddEvaluation = async (newEval: EvaluationRecord, newPlans: ActionPlan[]) => {
    const updatedEvaluations = [newEval, ...appData.evaluations];
    const updatedActionPlans = [...newPlans, ...appData.actionPlans];
    const updatedEmployees = syncEmployeesWithEvaluations(appData.employees, updatedEvaluations);
    const updatedUnits = recalculateUnits(updatedEvaluations);

    setAppData({
      evaluations: updatedEvaluations,
      actionPlans: updatedActionPlans,
      employees: updatedEmployees,
      units: updatedUnits
    });

    if (currentUser) {
      try {
        await saveEvaluationToFirestore(newEval);
        for (const plan of newPlans) {
          await saveActionPlanToFirestore(plan);
        }
      } catch (err) {
        console.error("Error saving evaluation to Firestore:", err);
      }
    }
  };

  const handleDeleteEvaluation = async (id: string) => {
    const updatedEvaluations = appData.evaluations.filter(e => e.id !== id);
    const updatedEmployees = syncEmployeesWithEvaluations(appData.employees, updatedEvaluations);
    const updatedUnits = recalculateUnits(updatedEvaluations);

    setAppData(prev => ({
      ...prev,
      evaluations: updatedEvaluations,
      employees: updatedEmployees,
      units: updatedUnits
    }));

    if (currentUser) {
      try {
        await deleteEvaluationFromFirestore(id);
      } catch (err) {
        console.error("Error deleting evaluation from Firestore:", err);
      }
    }
  };

  const handleUpdateActionPlanStatus = async (planId: string, newStatus: ActionPlanStatus, notes?: string) => {
    let updatedTargetPlan: ActionPlan | null = null;
    const updatedPlans = appData.actionPlans.map(plan => {
      if (plan.id === planId) {
        const p: ActionPlan = {
          ...plan,
          status: newStatus,
          completedAt: newStatus === 'Concluido' ? new Date().toISOString().split('T')[0] : plan.completedAt,
          notes: notes !== undefined ? notes : plan.notes
        };
        updatedTargetPlan = p;
        return p;
      }
      return plan;
    });

    const updatedUnits = recalculateUnits(appData.evaluations);

    setAppData(prev => ({
      ...prev,
      actionPlans: updatedPlans,
      units: updatedUnits
    }));

    if (currentUser && updatedTargetPlan) {
      try {
        await saveActionPlanToFirestore(updatedTargetPlan);
      } catch (err) {
        console.error("Error updating action plan in Firestore:", err);
      }
    }
  };

  const handleAddActionPlan = async (plan: ActionPlan) => {
    const updatedPlans = [plan, ...appData.actionPlans];
    setAppData(prev => ({
      ...prev,
      actionPlans: updatedPlans
    }));

    if (currentUser) {
      try {
        await saveActionPlanToFirestore(plan);
      } catch (err) {
        console.error("Error saving action plan to Firestore:", err);
      }
    }
  };

  const handleAddEmployee = async (emp: Employee) => {
    const computed = computeEmployeePeriodicity(emp);
    const updatedEmployees = [computed, ...appData.employees];
    setAppData(prev => ({
      ...prev,
      employees: updatedEmployees
    }));

    if (currentUser) {
      try {
        await saveEmployeeToFirestore(computed);
      } catch (err) {
        console.error("Error saving employee to Firestore:", err);
      }
    }
  };

  const handleUpdateEmployee = async (updatedEmp: Employee) => {
    const computed = computeEmployeePeriodicity(updatedEmp);
    const updatedEmployees = appData.employees.map(e => e.id === updatedEmp.id ? computed : e);
    setAppData(prev => ({
      ...prev,
      employees: updatedEmployees
    }));

    if (currentUser) {
      try {
        await saveEmployeeToFirestore(computed);
      } catch (err) {
        console.error("Error updating employee in Firestore:", err);
      }
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    setAppData(prev => ({
      ...prev,
      employees: prev.employees.filter(e => e.id !== id)
    }));

    if (currentUser) {
      try {
        await deleteEmployeeFromFirestore(id);
      } catch (err) {
        console.error("Error deleting employee from Firestore:", err);
      }
    }
  };

  const handleOpenNewEvaluationWithDefault = (type?: GabaritoType) => {
    if (type) setNewEvaluationDefaultType(type);
    setIsNewEvaluationOpen(true);
  };

  const handleOpenNewEvaluationForEmployee = (employee: Employee) => {
    setNewEvaluationDefaultType(employee.gabaritoType);
    setIsNewEvaluationOpen(true);
  };

  const handleResetData = () => {
    const initial = resetToInitialData();
    setAppData(initial);
    if (currentUser) {
      bulkSyncToFirestore(initial.evaluations, initial.actionPlans, initial.employees).catch(console.error);
    }
  };

  const handleResetToRealData = () => {
    setAppData(prev => {
      const resetEmployees = prev.employees.map(emp => ({
        ...emp,
        lastEvaluationDate: undefined,
        evaluationsCountInPeriod: 0,
        nextEvaluationDueDate: emp.hireDate,
        periodicityStatus: emp.type === 'Novato' ? ('NOVATO_REQUER_AVALIACAO' as const) : ('ATRASADO' as const)
      }));

      const newState = {
        evaluations: [],
        actionPlans: [],
        employees: resetEmployees,
        units: [
          {
            unitName: 'Pau Brasil Guarabira',
            totalEvaluations: 0,
            complianceRate: 0,
            gsdCompliance: 0,
            gsaCompliance: 0,
            gspCompliance: 0,
            farolStatus: 'VERMELHO' as const,
            openActionPlans: 0
          }
        ]
      };
      saveStoredData(newState);
      if (currentUser) {
        bulkSyncToFirestore([], [], resetEmployees).catch(console.error);
      }
      return newState;
    });
  };

  const handleImportData = (newData: typeof appData) => {
    const syncedEmployees = syncEmployeesWithEvaluations(newData.employees || [], newData.evaluations || []);
    const syncedData = {
      ...newData,
      employees: syncedEmployees
    };
    setAppData(syncedData);
    saveStoredData(syncedData);
    if (currentUser) {
      bulkSyncToFirestore(syncedData.evaluations, syncedData.actionPlans, syncedData.employees).catch(console.error);
    }
  };

  const pendingActionPlansCount = appData.actionPlans.filter(p => p.status === 'Pendente' || p.status === 'Em Andamento' || p.status === 'Atrasado').length;
  const overduePeriodicityCount = appData.employees.filter(e => 
    (e.status || 'ATIVO') === 'ATIVO' && 
    (e.periodicityStatus === 'ATRASADO' || e.periodicityStatus === 'NOVATO_REQUER_AVALIACAO')
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* App Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        unitsList={unitsList}
        onOpenNewEvaluation={() => handleOpenNewEvaluationWithDefault('GSD')}
        onOpenQuickGestaoPaste={() => setIsQuickGestaoPasteOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        pendingActionPlansCount={pendingActionPlansCount}
        overduePeriodicityCount={overduePeriodicityCount}
        currentUser={currentUser}
        isCloudConnected={isCloudConnected}
        onLogin={signInWithGoogle}
        onLogout={logoutUser}
      />

      {/* Main Tab Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'dashboard' && (
          <DashboardOverview
            evaluations={appData.evaluations}
            actionPlans={appData.actionPlans}
            employees={appData.employees}
            units={recalculateUnits(appData.evaluations)}
            selectedUnit={selectedUnit}
            onNavigateToTab={(tab) => setActiveTab(tab)}
            onOpenNewEvaluation={handleOpenNewEvaluationWithDefault}
            onOpenQuickGestaoPaste={() => setIsQuickGestaoPasteOpen(true)}
          />
        )}

        {activeTab === 'evaluations' && (
          <EvaluationsList
            evaluations={appData.evaluations}
            onDeleteEvaluation={handleDeleteEvaluation}
            selectedUnit={selectedUnit}
            onOpenNewEvaluation={() => handleOpenNewEvaluationWithDefault('GSD')}
            onOpenQuickGestaoPaste={() => setIsQuickGestaoPasteOpen(true)}
          />
        )}

        {activeTab === 'action-plans' && (
          <ActionPlans
            evaluations={appData.evaluations}
            actionPlans={appData.actionPlans}
            onUpdateActionPlanStatus={handleUpdateActionPlanStatus}
            onAddActionPlan={handleAddActionPlan}
            onEditActionPlan={async (updatedPlan) => {
              const updatedPlans = appData.actionPlans.map(p => p.id === updatedPlan.id ? updatedPlan : p);
              setAppData(prev => ({ ...prev, actionPlans: updatedPlans }));
              if (currentUser) {
                await saveActionPlanToFirestore(updatedPlan);
              }
            }}
            onDeleteActionPlan={async (id) => {
              setAppData(prev => ({ ...prev, actionPlans: prev.actionPlans.filter(p => p.id !== id) }));
              if (currentUser) {
                await deleteActionPlanFromFirestore(id);
              }
            }}
            selectedUnit={selectedUnit}
            unitsList={unitsList}
          />
        )}

        {activeTab === 'periodicity' && (
          <PeriodicityManager
            employees={appData.employees}
            onAddEmployee={handleAddEmployee}
            onDeleteEmployee={handleDeleteEmployee}
            onOpenNewEvaluationForEmployee={handleOpenNewEvaluationForEmployee}
            onResetControlToRealData={handleResetToRealData}
            selectedUnit={selectedUnit}
            unitsList={unitsList}
          />
        )}

        {activeTab === 'collaborators' && (
          <CollaboratorsManager
            employees={appData.employees}
            onAddEmployee={handleAddEmployee}
            onUpdateEmployee={handleUpdateEmployee}
            onDeleteEmployee={handleDeleteEmployee}
            selectedUnit={selectedUnit}
            unitsList={unitsList}
          />
        )}

        {activeTab === 'questions' && (
          <QuestionCatalog />
        )}
      </main>

      {/* New Evaluation Modal */}
      <NewEvaluationModal
        isOpen={isNewEvaluationOpen}
        onClose={() => setIsNewEvaluationOpen(false)}
        onSubmit={handleAddEvaluation}
        unitsList={unitsList}
        employeesList={appData.employees}
        defaultType={newEvaluationDefaultType}
      />

      {/* Export / Import / Reset Modal */}
      <ExportImportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        data={appData}
        onImportData={handleImportData}
        onResetData={handleResetData}
        onResetToRealData={handleResetToRealData}
      />

      {/* Colar Checklist Quick Gestão Modal */}
      <QuickGestaoPasteModal
        isOpen={isQuickGestaoPasteOpen}
        onClose={() => setIsQuickGestaoPasteOpen(false)}
        onAddEvaluation={handleAddEvaluation}
        employees={appData.employees}
      />

    </div>
  );
}
