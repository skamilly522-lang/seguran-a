import { EvaluationRecord, ActionPlan, Employee, UnitSummary, ChecklistResponseItem } from '../types';
import { INITIAL_EVALUATIONS, INITIAL_ACTION_PLANS, INITIAL_EMPLOYEES, INITIAL_UNITS, GSD_QUESTIONS, GSA_QUESTIONS, GSP_QUESTIONS } from '../data/initialData';

const STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V6';

export function sanitizeEvaluations(evaluations: EvaluationRecord[]): EvaluationRecord[] {
  return evaluations.map(ev => {
    let qSet = GSD_QUESTIONS;
    if (ev.gabaritoType === 'GSA') qSet = GSA_QUESTIONS;
    else if (ev.gabaritoType === 'GSP') qSet = GSP_QUESTIONS;

    const isMismatched = (
      ev.responses.some(r => {
        if (ev.gabaritoType === 'GSP' && (r.questionId.startsWith('GSA_') || (r.questionText && r.questionText.startsWith('GSA-')))) return true;
        if (ev.gabaritoType === 'GSA' && (r.questionId.startsWith('GSD_') || (r.questionText && r.questionText.startsWith('GSD-')))) return true;
        return false;
      }) || (ev.gabaritoType === 'GSP' && ev.responses.length > GSP_QUESTIONS.length)
    );

    if (isMismatched) {
      const targetResponses: ChecklistResponseItem[] = qSet.map((q, idx) => {
        const existingResp = ev.responses[idx];
        const status = existingResp?.status || 'OK';
        return {
          questionId: q.id,
          questionText: `${q.code} - ${q.question}`,
          category: q.category,
          status,
          isCompliant: status !== 'NOK',
          observation: existingResp?.observation || ''
        };
      });

      const totalOk = targetResponses.filter(r => r.status === 'OK').length;
      const totalNok = targetResponses.filter(r => r.status === 'NOK').length;
      const totalNa = targetResponses.filter(r => r.status === 'N_A').length;
      const validTotal = totalOk + totalNok;
      const score = validTotal > 0 ? Math.round((totalOk / validTotal) * 100) : 100;

      return {
        ...ev,
        responses: targetResponses,
        totalItems: targetResponses.length,
        totalOk,
        totalNok,
        totalNa,
        score
      };
    }

    return ev;
  });
}

export interface AppStateData {
  evaluations: EvaluationRecord[];
  actionPlans: ActionPlan[];
  employees: Employee[];
  units: UnitSummary[];
}

export function calculateFarol(score: number): 'VERDE' | 'AMARELO' | 'VERMELHO' {
  if (score >= 90) return 'VERDE';
  if (score >= 75) return 'AMARELO';
  return 'VERMELHO';
}

export function formatDateBR(dateStr?: string): string {
  if (!dateStr) return '-';
  try {
    const clean = String(dateStr).split('T')[0];
    const parts = clean.split('-');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}/${month}/${year}`;
    }
    return dateStr;
  } catch {
    return dateStr || '-';
  }
}

export function daysBetween(date1Str?: string, date2Str?: string): number {
  if (!date1Str || !date2Str) return 0;
  try {
    const d1 = new Date(date1Str);
    const d2 = new Date(date2Str);
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return 0;
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } catch {
    return 0;
  }
}

export function addDays(dateStr: string | undefined, days: number): string {
  try {
    const base = dateStr ? new Date(dateStr) : new Date();
    const validDate = isNaN(base.getTime()) ? new Date() : base;
    validDate.setDate(validDate.getDate() + days);
    return validDate.toISOString().split('T')[0];
  } catch {
    const fallback = new Date();
    fallback.setDate(fallback.getDate() + days);
    return fallback.toISOString().split('T')[0];
  }
}

// Compute Employee Periodicity Status based on Prompt Rules
export function computeEmployeePeriodicity(employee: Employee, todayStr: string = '2026-08-08'): Employee {
  if (!employee) return employee;
  const emp = { ...employee };
  const baseHireDate = emp.hireDate || '2026-01-01';

  try {
    if (emp.gabaritoType === 'GSA') {
      // GSA: Weekly (every 7 days)
      if (!emp.lastEvaluationDate) {
        emp.nextEvaluationDueDate = baseHireDate;
        emp.periodicityStatus = 'ATRASADO';
      } else {
        emp.nextEvaluationDueDate = addDays(emp.lastEvaluationDate, 7);
        const dueTime = new Date(emp.nextEvaluationDueDate).getTime();
        const todayTime = new Date(todayStr).getTime();
        const daysOverdue = (todayTime - dueTime) / (1000 * 60 * 60 * 24);
        if (daysOverdue > 0) {
          emp.periodicityStatus = 'ATRASADO';
        } else if (daysOverdue >= -2) {
          emp.periodicityStatus = 'ALERTA';
        } else {
          emp.periodicityStatus = 'EM_DIA';
        }
      }
      return emp;
    }

    // GSD & GSP:
    if (emp.type === 'Novato') {
      // Novato Rule: 3 consecutive months. 1st evaluation MUST be within 15 days of hiring.
      if (!emp.lastEvaluationDate || (emp.evaluationsCountInPeriod || 0) === 0) {
        const firstDue = addDays(baseHireDate, 15);
        emp.nextEvaluationDueDate = firstDue;
        const dueTime = new Date(firstDue).getTime();
        const todayTime = new Date(todayStr).getTime();
        const daysRemaining = (dueTime - todayTime) / (1000 * 60 * 60 * 24);
        if (daysRemaining < 0) {
          emp.periodicityStatus = 'ATRASADO';
        } else if (daysRemaining <= 5) {
          emp.periodicityStatus = 'ALERTA';
        } else {
          emp.periodicityStatus = 'NOVATO_REQUER_AVALIACAO';
        }
      } else if ((emp.evaluationsCountInPeriod || 0) < 3) {
        // 2nd or 3rd month evaluation (every 30 days)
        const monthDue = addDays(emp.lastEvaluationDate, 30);
        emp.nextEvaluationDueDate = monthDue;
        const dueTime = new Date(monthDue).getTime();
        const todayTime = new Date(todayStr).getTime();
        const daysRemaining = (dueTime - todayTime) / (1000 * 60 * 60 * 24);
        if (daysRemaining < 0) {
          emp.periodicityStatus = 'ATRASADO';
        } else if (daysRemaining <= 5) {
          emp.periodicityStatus = 'ALERTA';
        } else {
          emp.periodicityStatus = 'EM_DIA';
        }
      } else {
        // Completed 3 consecutive months as novato! Switch to 60-day cycle
        emp.type = 'Veterano';
        const due60 = addDays(emp.lastEvaluationDate, 60);
        emp.nextEvaluationDueDate = due60;
        emp.periodicityStatus = 'EM_DIA';
      }
    } else {
      // Regular / Veterano: Every 60 days
      if (!emp.lastEvaluationDate) {
        emp.nextEvaluationDueDate = baseHireDate;
        emp.periodicityStatus = 'ATRASADO';
      } else {
        const due60 = addDays(emp.lastEvaluationDate, 60);
        emp.nextEvaluationDueDate = due60;
        const dueTime = new Date(due60).getTime();
        const todayTime = new Date(todayStr).getTime();
        const daysRemaining = (dueTime - todayTime) / (1000 * 60 * 60 * 24);
        if (daysRemaining < 0) {
          emp.periodicityStatus = 'ATRASADO';
        } else if (daysRemaining <= 10) {
          emp.periodicityStatus = 'ALERTA';
        } else {
          emp.periodicityStatus = 'EM_DIA';
        }
      }
    }
  } catch (err) {
    console.error('Error computing periodicity for employee:', emp.name, err);
    emp.periodicityStatus = 'EM_DIA';
  }

  return emp;
}

export function syncEmployeesWithEvaluations(
  employees: Employee[],
  evaluations: EvaluationRecord[],
  todayStr: string = '2026-08-08'
): Employee[] {
  if (!Array.isArray(employees)) return [];
  const safeEvals = Array.isArray(evaluations) ? evaluations.filter(Boolean) : [];

  return employees.filter(Boolean).map(emp => {
    if (!emp.name) return emp;
    const nameNorm = emp.name.trim().toUpperCase();
    const empEvals = safeEvals.filter(e => e.employeeName && e.employeeName.trim().toUpperCase() === nameNorm);

    if (empEvals.length === 0) {
      return {
        ...emp,
        lastEvaluationDate: undefined,
        evaluationsCountInPeriod: 0,
        nextEvaluationDueDate: emp.hireDate || '2026-01-01',
        periodicityStatus: emp.type === 'Novato' ? 'NOVATO_REQUER_AVALIACAO' : 'ATRASADO'
      };
    }

    const sorted = [...empEvals].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    const latestDate = sorted[0].date;
    const count = empEvals.length;
    const lastEval = sorted[0];
    const eType = lastEval.employeeType || emp.type || 'Veterano';

    const updatedEmp: Employee = {
      ...emp,
      type: eType,
      lastEvaluationDate: latestDate,
      evaluationsCountInPeriod: count
    };

    return computeEmployeePeriodicity(updatedEmp, todayStr);
  });
}

export function saveStoredData(data: AppStateData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Erro ao salvar dados no localStorage', err);
  }
}

export function loadStoredData(): AppStateData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const syncedEmployees = syncEmployeesWithEvaluations(INITIAL_EMPLOYEES, INITIAL_EVALUATIONS);
      const initial = {
        evaluations: INITIAL_EVALUATIONS,
        actionPlans: INITIAL_ACTION_PLANS,
        employees: syncedEmployees,
        units: INITIAL_UNITS,
      };
      saveStoredData(initial);
      return initial;
    }
    const parsed = JSON.parse(raw) as AppStateData;

    // Enforce single unit Guarabira
    parsed.units = INITIAL_UNITS;

    // Ensure evaluations array contains all initial real evaluations
    if (parsed.evaluations && parsed.evaluations.length > 0) {
      const existingEvalIds = new Set(parsed.evaluations.map(e => e.id));
      INITIAL_EVALUATIONS.forEach(initEval => {
        if (!existingEvalIds.has(initEval.id)) {
          parsed.evaluations.push(initEval);
        }
      });
      parsed.evaluations = sanitizeEvaluations(parsed.evaluations.map(e => ({ ...e, unit: 'Pau Brasil Guarabira' })));
    } else {
      parsed.evaluations = sanitizeEvaluations(INITIAL_EVALUATIONS);
    }

    if (parsed.actionPlans) {
      parsed.actionPlans = parsed.actionPlans.map(p => ({ ...p, unit: 'Pau Brasil Guarabira' }));
    } else {
      parsed.actionPlans = INITIAL_ACTION_PLANS;
    }

    if (parsed.employees && parsed.employees.length > 0) {
      const existingMap = new Map(parsed.employees.map(e => [e.matricula || e.name, { ...e, unit: 'Pau Brasil Guarabira' }]));
      INITIAL_EMPLOYEES.forEach(initEmp => {
        const key = initEmp.matricula || initEmp.name;
        if (!existingMap.has(key)) {
          existingMap.set(key, initEmp);
        }
      });
      parsed.employees = Array.from(existingMap.values()).map(e => {
        let correctGabarito = e.gabaritoType;
        if (e.role === 'Carreteiro') {
          correctGabarito = 'GSP';
        } else if (e.role === 'Motorista' || e.role === 'Ajudante') {
          correctGabarito = 'GSD';
        } else if (e.role === 'Operador Armazém' || e.role === 'Líder Armazém') {
          correctGabarito = 'GSA';
        }
        return {
          ...e,
          gabaritoType: correctGabarito
        };
      });
    } else {
      parsed.employees = INITIAL_EMPLOYEES;
    }

    // Always synchronize employee last evaluation dates and periodicities with evaluations
    parsed.employees = syncEmployeesWithEvaluations(parsed.employees, parsed.evaluations);

    saveStoredData(parsed);

    return parsed;
  } catch (err) {
    console.error('Erro ao carregar dados do localStorage', err);
    const syncedEmployees = syncEmployeesWithEvaluations(INITIAL_EMPLOYEES, INITIAL_EVALUATIONS);
    return {
      evaluations: INITIAL_EVALUATIONS,
      actionPlans: INITIAL_ACTION_PLANS,
      employees: syncedEmployees,
      units: INITIAL_UNITS,
    };
  }
}

export function resetToInitialData(): AppStateData {
  const syncedEmployees = syncEmployeesWithEvaluations(INITIAL_EMPLOYEES, INITIAL_EVALUATIONS);
  const initial = {
    evaluations: INITIAL_EVALUATIONS,
    actionPlans: INITIAL_ACTION_PLANS,
    employees: syncedEmployees,
    units: INITIAL_UNITS,
  };
  saveStoredData(initial);
  return initial;
}
