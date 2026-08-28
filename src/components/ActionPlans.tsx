import React, { useState, useMemo } from 'react';
import { EvaluationRecord, ActionPlan, ActionPlanStatus, GabaritoType } from '../types';
import { formatDateBR } from '../utils/storage';
import { 
  AlertTriangle, CheckCircle2, Clock, Plus, Search, Filter, Calendar, 
  User, ShieldAlert, Check, X, Edit3, Trash2, Eye, FileText, 
  ArrowRight, Sparkles, AlertCircle, ShieldCheck
} from 'lucide-react';

interface ActionPlansProps {
  evaluations: EvaluationRecord[];
  actionPlans: ActionPlan[];
  onUpdateActionPlanStatus: (planId: string, newStatus: ActionPlanStatus, notes?: string) => void;
  onAddActionPlan: (plan: ActionPlan) => void;
  onEditActionPlan?: (updatedPlan: ActionPlan) => void;
  onDeleteActionPlan: (planId: string) => void;
  selectedUnit: string;
  unitsList: string[];
}

export interface NokSignalItem {
  id: string;
  evaluationId: string;
  gabaritoType: GabaritoType;
  unit: string;
  evalDate: string;
  evaluator: string;
  employeeName?: string;
  vehiclePlate?: string;
  quickGestaoRef?: string;
  questionId: string;
  questionText: string;
  category: string;
  observation: string;
  existingPlan?: ActionPlan;
}

export const ActionPlans: React.FC<ActionPlansProps> = ({
  evaluations = [],
  actionPlans = [],
  onUpdateActionPlanStatus,
  onAddActionPlan,
  onEditActionPlan,
  onDeleteActionPlan,
  selectedUnit,
  unitsList
}) => {
  // Main view switcher: 'nok-signals' | 'action-matrix'
  const [activeSubTab, setActiveSubTab] = useState<'nok-signals' | 'action-matrix'>('nok-signals');

  // Filters state
  const [statusFilter, setStatusFilter] = useState<string>('TODOS');
  const [typeFilter, setTypeFilter] = useState<string>('TODOS');
  const [nokFilter, setNokFilter] = useState<'TODOS' | 'PENDENTE_CADASTRO' | 'COM_PLANO'>('PENDENTE_CADASTRO');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Modals state
  const [isAddingManualPlan, setIsAddingManualPlan] = useState<boolean>(false);
  const [registeringNokItem, setRegisteringNokItem] = useState<NokSignalItem | null>(null);
  const [editingPlan, setEditingPlan] = useState<ActionPlan | null>(null);
  const [planToDelete, setPlanToDelete] = useState<ActionPlan | null>(null);

  // Form state for creating plan for a specific NOK item
  const [nokActionRequired, setNokActionRequired] = useState<string>('');
  const [nokResponsible, setNokResponsible] = useState<string>('');
  const [nokDeadline, setNokDeadline] = useState<string>('');
  const [nokStatus, setNokStatus] = useState<ActionPlanStatus>('Pendente');
  const [nokNotes, setNokNotes] = useState<string>('');

  // Form state for editing existing plan
  const [editProblem, setEditProblem] = useState<string>('');
  const [editActionRequired, setEditActionRequired] = useState<string>('');
  const [editResponsible, setEditResponsible] = useState<string>('');
  const [editDeadline, setEditDeadline] = useState<string>('');
  const [editStatus, setEditStatus] = useState<ActionPlanStatus>('Pendente');
  const [editNotes, setEditNotes] = useState<string>('');

  // Form state for manual action plan creation
  const [manualUnit, setManualUnit] = useState<string>(selectedUnit === 'TODAS' ? (unitsList[0] || 'Pau Brasil Guarabira') : selectedUnit);
  const [manualGabarito, setManualGabarito] = useState<GabaritoType>('GSD');
  const [manualItemText, setManualItemText] = useState<string>('');
  const [manualProblem, setManualProblem] = useState<string>('');
  const [manualAction, setManualAction] = useState<string>('');
  const [manualResponsible, setManualResponsible] = useState<string>('');
  const [manualDeadline, setManualDeadline] = useState<string>(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

  // Extract all NOK items from evaluations and match with existing action plans
  const nokSignals: NokSignalItem[] = useMemo(() => {
    const items: NokSignalItem[] = [];

    evaluations.forEach(ev => {
      if (selectedUnit !== 'TODAS' && ev.unit !== selectedUnit) return;

      ev.responses.forEach(resp => {
        if (resp.status === 'NOK') {
          // Check if there is an existing ActionPlan linked to this evaluation & item
          const matchedPlan = actionPlans.find(plan => {
            if (plan.evaluationId !== ev.id) return false;
            if (plan.questionId && plan.questionId === resp.questionId) return true;
            
            // Match by question code (e.g. GSD-12 or GSA-04)
            const qCode = resp.questionText.split(' - ')[0] || '';
            if (qCode && plan.itemText.includes(qCode)) return true;
            
            // Match by itemText or problemDescription similarity
            if (plan.itemText === resp.questionText) return true;
            if (resp.observation && plan.problemDescription.toLowerCase().includes(resp.observation.toLowerCase().slice(0, 15))) return true;

            return false;
          });

          items.push({
            id: `${ev.id}_${resp.questionId}`,
            evaluationId: ev.id,
            gabaritoType: ev.gabaritoType,
            unit: ev.unit,
            evalDate: ev.date,
            evaluator: ev.evaluator,
            employeeName: ev.employeeName,
            vehiclePlate: ev.vehiclePlate,
            quickGestaoRef: ev.quickGestaoRef,
            questionId: resp.questionId,
            questionText: resp.questionText,
            category: resp.category,
            observation: resp.observation || 'Inconformidade detectada durante auditoria de campo.',
            existingPlan: matchedPlan
          });
        }
      });
    });

    return items;
  }, [evaluations, actionPlans, selectedUnit]);

  // Filtered NOK Signals
  const filteredNokSignals = useMemo(() => {
    return nokSignals.filter(nok => {
      if (typeFilter !== 'TODOS' && nok.gabaritoType !== typeFilter) return false;
      if (nokFilter === 'PENDENTE_CADASTRO' && nok.existingPlan) return false;
      if (nokFilter === 'COM_PLANO' && !nok.existingPlan) return false;

      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchObs = nok.observation.toLowerCase().includes(q);
        const matchItem = nok.questionText.toLowerCase().includes(q);
        const matchEmp = (nok.employeeName || '').toLowerCase().includes(q);
        const matchEval = nok.evaluator.toLowerCase().includes(q);
        const matchRef = (nok.quickGestaoRef || '').toLowerCase().includes(q);
        if (!matchObs && !matchItem && !matchEmp && !matchEval && !matchRef) return false;
      }

      return true;
    });
  }, [nokSignals, typeFilter, nokFilter, searchTerm]);

  // Filtered Action Plans (Matrix)
  const filteredActionPlans = useMemo(() => {
    return actionPlans.filter(plan => {
      if (selectedUnit !== 'TODAS' && plan.unit !== selectedUnit) return false;
      if (statusFilter !== 'TODOS' && plan.status !== statusFilter) return false;
      if (typeFilter !== 'TODOS' && plan.gabaritoType !== typeFilter) return false;

      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchProblem = plan.problemDescription.toLowerCase().includes(q);
        const matchAction = plan.actionRequired.toLowerCase().includes(q);
        const matchResp = plan.responsible.toLowerCase().includes(q);
        const matchItem = plan.itemText.toLowerCase().includes(q);
        if (!matchProblem && !matchAction && !matchResp && !matchItem) return false;
      }

      return true;
    });
  }, [actionPlans, selectedUnit, statusFilter, typeFilter, searchTerm]);

  // Stats
  const totalNokCount = nokSignals.length;
  const unlinkedNokCount = nokSignals.filter(n => !n.existingPlan).length;
  const linkedNokCount = nokSignals.filter(n => Boolean(n.existingPlan)).length;
  const pendingPlansCount = actionPlans.filter(p => p.status === 'Pendente' || p.status === 'Em Andamento' || p.status === 'Atrasado').length;

  // Open modal to register plan for a specific NOK item
  const handleOpenRegisterNokModal = (nok: NokSignalItem) => {
    setRegisteringNokItem(nok);
    setNokActionRequired(`Adequar item (${nok.questionText.split(' - ')[0]}) conforme diretriz de segurança de campo da unidade.`);
    setNokResponsible(nok.employeeName || nok.evaluator || 'Supervisor Operacional');
    setNokDeadline(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
    setNokStatus('Pendente');
    setNokNotes('');
  };

  // Submit registration for NOK item
  const handleSaveNokActionPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeringNokItem) return;

    if (!nokActionRequired.trim() || !nokResponsible.trim() || !nokDeadline) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newPlan: ActionPlan = {
      id: `PA_${Date.now().toString().slice(-6)}`,
      evaluationId: registeringNokItem.evaluationId,
      gabaritoType: registeringNokItem.gabaritoType,
      unit: registeringNokItem.unit,
      itemText: registeringNokItem.questionText,
      problemDescription: registeringNokItem.observation,
      actionRequired: nokActionRequired,
      responsible: nokResponsible,
      deadline: nokDeadline,
      status: nokStatus,
      createdAt: new Date().toISOString().split('T')[0],
      notes: nokNotes,
      questionId: registeringNokItem.questionId
    };

    onAddActionPlan(newPlan);
    setRegisteringNokItem(null);
  };

  // Open Edit Modal for existing plan
  const handleOpenEditPlanModal = (plan: ActionPlan) => {
    setEditingPlan(plan);
    setEditProblem(plan.problemDescription);
    setEditActionRequired(plan.actionRequired);
    setEditResponsible(plan.responsible);
    setEditDeadline(plan.deadline);
    setEditStatus(plan.status);
    setEditNotes(plan.notes || '');
  };

  // Save edited plan
  const handleSaveEditPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPlan) return;

    if (!editActionRequired.trim() || !editResponsible.trim() || !editDeadline) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const updated: ActionPlan = {
      ...editingPlan,
      problemDescription: editProblem,
      actionRequired: editActionRequired,
      responsible: editResponsible,
      deadline: editDeadline,
      status: editStatus,
      completedAt: editStatus === 'Concluido' ? (editingPlan.completedAt || new Date().toISOString().split('T')[0]) : undefined,
      notes: editNotes
    };

    if (onEditActionPlan) {
      onEditActionPlan(updated);
    } else {
      onUpdateActionPlanStatus(editingPlan.id, editStatus, editNotes);
    }

    setEditingPlan(null);
  };

  // Manual Creation Submission
  const handleCreateManualPlan = (e: React.FormEvent) => {
    e.preventDefault();

    if (!manualProblem.trim() || !manualAction.trim() || !manualResponsible.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newPlan: ActionPlan = {
      id: `PA_MANUAL_${Date.now().toString().slice(-6)}`,
      evaluationId: 'MANUAL',
      gabaritoType: manualGabarito,
      unit: manualUnit,
      itemText: manualItemText || 'Observação de Segurança de Campo',
      problemDescription: manualProblem,
      actionRequired: manualAction,
      responsible: manualResponsible,
      deadline: manualDeadline,
      status: 'Pendente',
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddActionPlan(newPlan);
    setIsAddingManualPlan(false);
    setManualItemText('');
    setManualProblem('');
    setManualAction('');
    setManualResponsible('');
  };

  const getStatusBadge = (status: ActionPlanStatus) => {
    switch (status) {
      case 'Concluido':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">🟢 Concluído</span>;
      case 'Em Andamento':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">🟡 Em Andamento</span>;
      case 'Pendente':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">🔵 Pendente</span>;
      case 'Atrasado':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">🔴 Atrasado</span>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Page Title & Manual Add CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            Gestão de Planos de Ação & Inconformidades (NOK)
          </h2>
          <p className="text-xs text-slate-500">
            Sinalização automática de itens NOK das auditorias e cadastro autônomo de planos de ação corretivos.
          </p>
        </div>

        <button
          onClick={() => setIsAddingManualPlan(true)}
          className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>+ Criar Plano de Ação Manual</span>
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div 
          onClick={() => { setActiveSubTab('nok-signals'); setNokFilter('PENDENTE_CADASTRO'); }}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            activeSubTab === 'nok-signals' && nokFilter === 'PENDENTE_CADASTRO'
              ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-300'
              : 'bg-white border-slate-200 hover:border-rose-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Itens NOK Sem Plano</span>
            <span className="p-1.5 bg-rose-100 text-rose-700 rounded-lg"><AlertCircle className="w-4 h-4" /></span>
          </div>
          <div className="text-2xl font-extrabold text-rose-700 mt-2">{unlinkedNokCount}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">Sinalizados aguardando cadastro de plano de ação</p>
        </div>

        <div 
          onClick={() => { setActiveSubTab('nok-signals'); setNokFilter('COM_PLANO'); }}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            activeSubTab === 'nok-signals' && nokFilter === 'COM_PLANO'
              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
              : 'bg-white border-slate-200 hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">NOKs Com Plano Vinculado</span>
            <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
          </div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-2">{linkedNokCount}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">Inconformidades tratadas com plano ativo</p>
        </div>

        <div 
          onClick={() => { setActiveSubTab('action-matrix'); setStatusFilter('TODOS'); }}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            activeSubTab === 'action-matrix'
              ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-300'
              : 'bg-white border-slate-200 hover:border-blue-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Total de Planos Ativos</span>
            <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg"><ShieldCheck className="w-4 h-4" /></span>
          </div>
          <div className="text-2xl font-extrabold text-blue-800 mt-2">{actionPlans.length}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">{pendingPlansCount} planos pendentes/em andamento</p>
        </div>
      </div>

      {/* Sub-Tab Navigation Bar */}
      <div className="bg-white rounded-xl p-1.5 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setActiveSubTab('nok-signals')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeSubTab === 'nok-signals'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <AlertTriangle className={`w-4 h-4 ${unlinkedNokCount > 0 ? 'text-amber-400' : 'text-slate-400'}`} />
            <span>Sinalizador de Itens NOK ({totalNokCount})</span>
            {unlinkedNokCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500 text-white animate-pulse">
                {unlinkedNokCount} pendentes
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveSubTab('action-matrix')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
              activeSubTab === 'action-matrix'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Matriz de Planos de Ação Cadastrados ({actionPlans.length})</span>
          </button>
        </div>

        {/* Global Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar por item, responsável, problema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* ==================== SUB-TAB 1: SINALIZADOR DE ITENS NOK ==================== */}
      {activeSubTab === 'nok-signals' && (
        <div className="space-y-4">
          
          {/* Sub-filters for NOK Signals */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">Filtrar Sinalizações:</span>
              <button
                onClick={() => setNokFilter('PENDENTE_CADASTRO')}
                className={`px-3 py-1 rounded-lg font-bold transition border ${
                  nokFilter === 'PENDENTE_CADASTRO'
                    ? 'bg-rose-600 text-white border-rose-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                🔴 Sem Plano Cadastrado ({unlinkedNokCount})
              </button>
              <button
                onClick={() => setNokFilter('COM_PLANO')}
                className={`px-3 py-1 rounded-lg font-bold transition border ${
                  nokFilter === 'COM_PLANO'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                🟢 Com Plano Cadastrado ({linkedNokCount})
              </button>
              <button
                onClick={() => setNokFilter('TODOS')}
                className={`px-3 py-1 rounded-lg font-bold transition border ${
                  nokFilter === 'TODOS'
                    ? 'bg-slate-800 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                Ver Todas ({totalNokCount})
              </button>
            </div>

            {/* Gabarito Type filter */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-600">Gabarito:</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none"
              >
                <option value="TODOS">Todos os Gabaritos</option>
                <option value="GSD">GSD (Distribuição)</option>
                <option value="GSA">GSA (Armazém)</option>
                <option value="GSP">GSP (Puxada)</option>
              </select>
            </div>
          </div>

          {/* NOK Signals Cards Grid */}
          {filteredNokSignals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredNokSignals.map(nok => {
                const hasPlan = Boolean(nok.existingPlan);

                return (
                  <div 
                    key={nok.id} 
                    className={`bg-white rounded-2xl p-4 border shadow-sm transition flex flex-col justify-between space-y-3 ${
                      hasPlan ? 'border-emerald-200 hover:border-emerald-300' : 'border-rose-300 bg-rose-50/20 hover:border-rose-400'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Badge Header */}
                      <div className="flex items-center justify-between gap-2 border-b pb-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase border ${
                            nok.gabaritoType === 'GSD' 
                              ? 'bg-blue-100 text-blue-800 border-blue-200'
                              : nok.gabaritoType === 'GSA'
                              ? 'bg-amber-100 text-amber-800 border-amber-200'
                              : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          }`}>
                            Gabarito {nok.gabaritoType}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {formatDateBR(nok.evalDate)}
                          </span>
                        </div>

                        {hasPlan ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Plano Cadastrado
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-300 flex items-center gap-1 animate-pulse">
                            <AlertCircle className="w-3 h-3 text-rose-600" /> Requer Plano de Ação
                          </span>
                        )}
                      </div>

                      {/* Question Item & Observation */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-snug">
                          {nok.questionText}
                        </h4>
                        <p className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200 mt-1.5 italic">
                          <strong className="text-rose-700 not-italic">Inconformidade Apontada:</strong> {nok.observation}
                        </p>
                      </div>

                      {/* Details row */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-1">
                        <div>
                          <strong>Avaliador:</strong> {nok.evaluator}
                        </div>
                        <div>
                          <strong>Colaborador / Veículo:</strong> {nok.employeeName || nok.vehiclePlate || 'N/A'}
                        </div>
                      </div>

                      {/* Linked Action Plan details if present */}
                      {nok.existingPlan && (
                        <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1 mt-2">
                          <div className="flex items-center justify-between">
                            <strong className="text-emerald-950 font-bold">Plano de Ação Proposto:</strong>
                            {getStatusBadge(nok.existingPlan.status)}
                          </div>
                          <p className="font-medium">{nok.existingPlan.actionRequired}</p>
                          <div className="flex justify-between text-[10px] text-emerald-700 font-semibold pt-1">
                            <span>Responsável: {nok.existingPlan.responsible}</span>
                            <span>Prazo: {formatDateBR(nok.existingPlan.deadline)}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Footer */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-2">
                      {hasPlan ? (
                        <button
                          onClick={() => handleOpenEditPlanModal(nok.existingPlan!)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 transition flex items-center gap-1.5"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Editar Plano de Ação</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOpenRegisterNokModal(nok)}
                          className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Cadastrar Plano de Ação</span>
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center text-slate-500 border border-slate-200 space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-800">Nenhuma inconformidade NOK encontrada com os filtros selecionados.</p>
              <p className="text-xs text-slate-500">Todas as avaliações registradas estão sem pendências ou foram tratadas.</p>
            </div>
          )}

        </div>
      )}

      {/* ==================== SUB-TAB 2: MATRIZ DE PLANOS DE AÇÃO CADASTRADOS ==================== */}
      {activeSubTab === 'action-matrix' && (
        <div className="space-y-4">
          
          {/* Status & Type Filter bar */}
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-700">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:outline-none"
              >
                <option value="TODOS">Todos os Status</option>
                <option value="Pendente">🔵 Pendente</option>
                <option value="Em Andamento">🟡 Em Andamento</option>
                <option value="Concluido">🟢 Concluído</option>
                <option value="Atrasado">🔴 Atrasado</option>
              </select>

              <span className="font-bold text-slate-700 ml-2">Gabarito:</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:outline-none"
              >
                <option value="TODOS">Todos os Gabaritos</option>
                <option value="GSD">GSD (Distribuição)</option>
                <option value="GSA">GSA (Armazém)</option>
                <option value="GSP">GSP (Puxada)</option>
              </select>
            </div>

            <div className="text-xs font-semibold text-slate-500">
              Exibindo <strong>{filteredActionPlans.length}</strong> de <strong>{actionPlans.length}</strong> planos de ação
            </div>
          </div>

          {/* Action Plans Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {filteredActionPlans.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Gabarito / Unidade</th>
                      <th className="p-3.5">Inconformidade / Item (NOK)</th>
                      <th className="p-3.5">Ação Corretiva Proposta</th>
                      <th className="p-3.5">Responsável</th>
                      <th className="p-3.5">Prazo Limite</th>
                      <th className="p-3.5 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                    {filteredActionPlans.map(plan => {
                      const isOverdue = plan.status !== 'Concluido' && new Date(plan.deadline) < new Date();

                      return (
                        <tr key={plan.id} className={`hover:bg-slate-50/80 transition ${isOverdue ? 'bg-rose-50/30' : ''}`}>
                          <td className="p-3.5">{getStatusBadge(isOverdue && plan.status !== 'Concluido' ? 'Atrasado' : plan.status)}</td>
                          <td className="p-3.5">
                            <span className="font-bold text-slate-800 block">{plan.gabaritoType}</span>
                            <span className="text-[10px] text-slate-500">{plan.unit}</span>
                          </td>
                          <td className="p-3.5 max-w-xs">
                            <p className="font-semibold text-slate-900">{plan.problemDescription}</p>
                            <span className="text-[10px] text-slate-400 block truncate">{plan.itemText}</span>
                          </td>
                          <td className="p-3.5 max-w-xs font-medium text-slate-800">
                            {plan.actionRequired}
                            {plan.notes && (
                              <span className="block text-[10px] text-emerald-700 font-semibold mt-1 bg-emerald-50 p-1 rounded border border-emerald-200">
                                Obs: {plan.notes}
                              </span>
                            )}
                          </td>
                          <td className="p-3.5 font-bold text-slate-800">{plan.responsible}</td>
                          <td className="p-3.5">
                            <span className={`font-semibold ${isOverdue ? 'text-rose-600 font-bold' : 'text-slate-700'}`}>
                              {formatDateBR(plan.deadline)}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <select
                                value={plan.status}
                                onChange={(e) => onUpdateActionPlanStatus(plan.id, e.target.value as ActionPlanStatus)}
                                className="bg-slate-100 border border-slate-300 text-slate-800 rounded px-2 py-1 text-[11px] font-bold focus:outline-none cursor-pointer"
                              >
                                <option value="Pendente">🔵 Pendente</option>
                                <option value="Em Andamento">🟡 Em Andamento</option>
                                <option value="Concluido">🟢 Concluído</option>
                                <option value="Atrasado">🔴 Atrasado</option>
                              </select>

                              <button
                                onClick={() => handleOpenEditPlanModal(plan)}
                                title="Editar Detalhes do Plano"
                                className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => setPlanToDelete(plan)}
                                title="Excluir Plano de Ação"
                                className="p-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-300 mx-auto" />
                <p className="text-sm font-semibold text-slate-800">Nenhum plano de ação encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>

        </div>
      )}

      {/* ==================== MODAL: REGISTER PLAN FOR SPECIFIC NOK ITEM ==================== */}
      {registeringNokItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl overflow-hidden p-6 space-y-4 my-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Cadastrar Plano de Ação para Item Inconforme</h3>
                  <p className="text-xs text-slate-500">Defina o responsável, ação e prazo com autonomia total</p>
                </div>
              </div>
              <button onClick={() => setRegisteringNokItem(null)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>

            {/* Readonly Summary Card of the NOK Item */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between items-center text-[11px] font-bold text-slate-500">
                <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800">Gabarito {registeringNokItem.gabaritoType}</span>
                <span>Data: {formatDateBR(registeringNokItem.evalDate)}</span>
              </div>
              <p className="font-bold text-slate-900 text-xs">{registeringNokItem.questionText}</p>
              <p className="text-rose-700 bg-rose-50 p-2 rounded border border-rose-200 italic text-[11px]">
                <strong>Inconformidade/Obs:</strong> {registeringNokItem.observation}
              </p>
              <div className="text-[10px] text-slate-500 flex justify-between pt-1">
                <span>Avaliador: {registeringNokItem.evaluator}</span>
                <span>Colaborador/Veículo: {registeringNokItem.employeeName || registeringNokItem.vehiclePlate || 'N/A'}</span>
              </div>
            </div>

            <form onSubmit={handleSaveNokActionPlan} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Ação Corretiva Proposta *</label>
                <textarea
                  rows={3}
                  placeholder="Descreva a ação corretiva com detalhes..."
                  value={nokActionRequired}
                  onChange={(e) => setNokActionRequired(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Responsável *</label>
                  <input
                    type="text"
                    placeholder="Nome do responsável..."
                    value={nokResponsible}
                    onChange={(e) => setNokResponsible(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Prazo Limite *</label>
                  <input
                    type="date"
                    value={nokDeadline}
                    onChange={(e) => setNokDeadline(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Status Inicial</label>
                  <select
                    value={nokStatus}
                    onChange={(e) => setNokStatus(e.target.value as ActionPlanStatus)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-bold"
                  >
                    <option value="Pendente">🔵 Pendente</option>
                    <option value="Em Andamento">🟡 Em Andamento</option>
                    <option value="Concluido">🟢 Concluído</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Observação / Nota</label>
                  <input
                    type="text"
                    placeholder="Ex: Alinhado em reunião operacional..."
                    value={nokNotes}
                    onChange={(e) => setNokNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setRegisteringNokItem(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition shadow-sm uppercase tracking-wider"
                >
                  Salvar Plano de Ação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: EDIT EXISTING ACTION PLAN ==================== */}
      {editingPlan && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl overflow-hidden p-6 space-y-4 my-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Editar Plano de Ação</h3>
                  <p className="text-xs text-slate-500">{editingPlan.gabaritoType} - {editingPlan.unit}</p>
                </div>
              </div>
              <button onClick={() => setEditingPlan(null)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveEditPlan} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Item / Referência do Checklist</label>
                <input
                  type="text"
                  value={editingPlan.itemText}
                  disabled
                  className="w-full bg-slate-100 border border-slate-300 p-2 rounded-lg font-bold text-slate-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Inconformidade Apontada (Problema)</label>
                <input
                  type="text"
                  value={editProblem}
                  onChange={(e) => setEditProblem(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Ação Corretiva Proposta *</label>
                <textarea
                  rows={3}
                  value={editActionRequired}
                  onChange={(e) => setEditActionRequired(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Responsável *</label>
                  <input
                    type="text"
                    value={editResponsible}
                    onChange={(e) => setEditResponsible(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Prazo Limite *</label>
                  <input
                    type="date"
                    value={editDeadline}
                    onChange={(e) => setEditDeadline(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Status</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as ActionPlanStatus)}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-bold"
                  >
                    <option value="Pendente">🔵 Pendente</option>
                    <option value="Em Andamento">🟡 Em Andamento</option>
                    <option value="Concluido">🟢 Concluído</option>
                    <option value="Atrasado">🔴 Atrasado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Notas do Acompanhamento</label>
                <input
                  type="text"
                  placeholder="Ex: Treinamento realizado em 07/08/2026..."
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingPlan(null)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== MODAL: MANUAL CREATION ==================== */}
      {isAddingManualPlan && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-xl overflow-hidden p-6 space-y-4 my-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Novo Plano de Ação Manual de Segurança</h3>
              <button onClick={() => setIsAddingManualPlan(false)} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleCreateManualPlan} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Unidade</label>
                  <input
                    type="text"
                    value="Pau Brasil Guarabira"
                    disabled
                    className="w-full bg-slate-100 border p-2 rounded-lg font-bold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Gabarito Origem</label>
                  <select value={manualGabarito} onChange={(e) => setManualGabarito(e.target.value as GabaritoType)} className="w-full bg-slate-50 border p-2 rounded-lg font-medium">
                    <option value="GSD">GSD - Distribuição</option>
                    <option value="GSA">GSA - Armazém</option>
                    <option value="GSP">GSP - Puxada</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Item / Ponto de Inconformidade *</label>
                <input
                  type="text"
                  placeholder="Ex: Utilização incorreta de EPI ou extintor obstruído..."
                  value={manualProblem}
                  onChange={(e) => setManualProblem(e.target.value)}
                  className="w-full bg-slate-50 border p-2 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Ação Corretiva Proposta *</label>
                <textarea
                  rows={2}
                  placeholder="Descreva detalhadamente o que deve ser feito para corrigir o problema..."
                  value={manualAction}
                  onChange={(e) => setManualAction(e.target.value)}
                  className="w-full bg-slate-50 border p-2 rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Responsável *</label>
                  <input
                    type="text"
                    placeholder="Nome do executor..."
                    value={manualResponsible}
                    onChange={(e) => setManualResponsible(e.target.value)}
                    className="w-full bg-slate-50 border p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Prazo Limite *</label>
                  <input
                    type="date"
                    value={manualDeadline}
                    onChange={(e) => setManualDeadline(e.target.value)}
                    className="w-full bg-slate-50 border p-2 rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setIsAddingManualPlan(false)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 font-semibold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-bold">Salvar Plano de Ação</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {planToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2.5 bg-rose-100 rounded-full">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Excluir Plano de Ação</h3>
                <p className="text-xs text-slate-500">Esta ação não poderá ser desfeita.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Gabarito:</strong> {planToDelete.gabaritoType} - {planToDelete.unit}</p>
              <p><strong>Problema:</strong> {planToDelete.problemDescription}</p>
              <p><strong>Ação:</strong> {planToDelete.actionRequired}</p>
              <p><strong>Responsável:</strong> {planToDelete.responsible}</p>
            </div>

            <p className="text-xs text-slate-600">
              Tem certeza que deseja apagar este plano de ação permanentemente?
            </p>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setPlanToDelete(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  onDeleteActionPlan(planToDelete.id);
                  setPlanToDelete(null);
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-sm"
              >
                Sim, Excluir Plano de Ação
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
