import React, { useState, useEffect } from 'react';
import { GabaritoType, ResponseStatus, EvaluationRecord, ActionPlan, Employee, EmployeeRole } from '../types';
import { GSD_QUESTIONS, GSA_QUESTIONS, GSP_QUESTIONS } from '../data/initialData';
import { calculateFarol } from '../utils/storage';
import { X, CheckCircle, AlertOctagon, HelpCircle, AlertTriangle, ShieldCheck, User, Calendar, Truck, Warehouse, Navigation, Plus } from 'lucide-react';

interface NewEvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (evaluation: EvaluationRecord, actionPlans: ActionPlan[]) => void;
  unitsList: string[];
  employeesList: Employee[];
  defaultType?: GabaritoType;
}

interface ResponseItemState {
  status: ResponseStatus;
  observation: string;
  actionPlanRequired: boolean;
  actionPlanText: string;
  responsible: string;
  deadline: string;
}

export const NewEvaluationModal: React.FC<NewEvaluationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  unitsList,
  employeesList,
  defaultType = 'GSD'
}) => {
  const [gabaritoType, setGabaritoType] = useState<GabaritoType>(defaultType);
  const [unit, setUnit] = useState<string>(unitsList[0] || 'Pau Brasil Guarabira');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [evaluator, setEvaluator] = useState<string>('');
  const [vehiclePlate, setVehiclePlate] = useState<string>('');
  const [matricula, setMatricula] = useState<string>('');
  const [selectedEmployeeName, setSelectedEmployeeName] = useState<string>('');
  const [employeeRole, setEmployeeRole] = useState<EmployeeRole>('Motorista');
  const [employeeType, setEmployeeType] = useState<'Novato' | 'Veterano'>('Novato');
  const [semana, setSemana] = useState<string>('1º semana');
  const [quickGestaoRef, setQuickGestaoRef] = useState<string>('');
  const [generalNotes, setGeneralNotes] = useState<string>('');

  // Synchronize state when modal opens or defaultType changes
  useEffect(() => {
    if (isOpen) {
      setGabaritoType(defaultType);
      const qList = defaultType === 'GSD' ? GSD_QUESTIONS : defaultType === 'GSA' ? GSA_QUESTIONS : GSP_QUESTIONS;
      const initialResponses: Record<string, ResponseItemState> = {};
      qList.forEach(q => {
        initialResponses[q.id] = {
          status: 'OK',
          observation: '',
          actionPlanRequired: false,
          actionPlanText: '',
          responsible: '',
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        };
      });
      setResponses(initialResponses);
      setSelectedEmployeeName('');
      setVehiclePlate('');
      setMatricula('');
      setGeneralNotes('');

      if (defaultType === 'GSA') setEmployeeRole('Operador Armazém');
      else if (defaultType === 'GSP') setEmployeeRole('Carreteiro');
      else setEmployeeRole('Motorista');
    }
  }, [isOpen, defaultType]);

  // Questions for chosen type
  const questionsList = 
    gabaritoType === 'GSD' ? GSD_QUESTIONS :
    gabaritoType === 'GSA' ? GSA_QUESTIONS : GSP_QUESTIONS;

  // Question responses state
  const [responses, setResponses] = useState<Record<string, ResponseItemState>>(() => {
    const initial: Record<string, ResponseItemState> = {};
    const qList = defaultType === 'GSD' ? GSD_QUESTIONS : defaultType === 'GSA' ? GSA_QUESTIONS : GSP_QUESTIONS;
    qList.forEach(q => {
      initial[q.id] = {
        status: 'OK',
        observation: '',
        actionPlanRequired: false,
        actionPlanText: '',
        responsible: '',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
    });
    return initial;
  });

  if (!isOpen) return null;

  // When changing gabarito type, re-initialize response state
  const handleTypeChange = (newType: GabaritoType) => {
    setGabaritoType(newType);
    const qList = newType === 'GSD' ? GSD_QUESTIONS : newType === 'GSA' ? GSA_QUESTIONS : GSP_QUESTIONS;
    const newResponses: Record<string, ResponseItemState> = {};
    qList.forEach(q => {
      newResponses[q.id] = {
        status: 'OK',
        observation: '',
        actionPlanRequired: false,
        actionPlanText: '',
        responsible: '',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
    });
    setResponses(newResponses);

    if (newType === 'GSA') setEmployeeRole('Operador Armazém');
    else if (newType === 'GSP') setEmployeeRole('Carreteiro');
    else setEmployeeRole('Motorista');
  };

  // Auto populate employee details if selected
  const handleEmployeeSelect = (empName: string) => {
    setSelectedEmployeeName(empName);
    const emp = employeesList.find(e => e.name === empName);
    if (emp) {
      setUnit(emp.unit);
      setEmployeeRole(emp.role);
      setEmployeeType(emp.type);
      if (emp.matricula) setMatricula(emp.matricula);
      if (emp.assignedVehicle) setVehiclePlate(emp.assignedVehicle);
    }
  };

  const updateResponseStatus = (questionId: string, status: ResponseStatus) => {
    setResponses(prev => {
      const current = prev[questionId] || {
        status: 'OK',
        observation: '',
        actionPlanRequired: false,
        actionPlanText: '',
        responsible: '',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      const isNok = status === 'NOK';
      return {
        ...prev,
        [questionId]: {
          ...current,
          status,
          actionPlanRequired: isNok ? true : current.actionPlanRequired
        }
      };
    });
  };

  const updateResponseDetail = (questionId: string, field: keyof ResponseItemState, value: any) => {
    setResponses(prev => {
      const current = prev[questionId] || {
        status: 'OK',
        observation: '',
        actionPlanRequired: false,
        actionPlanText: '',
        responsible: '',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      return {
        ...prev,
        [questionId]: {
          ...current,
          [field]: value
        }
      };
    });
  };

  // Calculate live Score
  const responseValues: ResponseItemState[] = Object.values(responses);
  const totalItems = questionsList.length;
  const applicableItems = responseValues.filter((r) => r.status !== 'N_A').length;
  const totalOk = responseValues.filter((r) => r.status === 'OK').length;
  const totalNok = responseValues.filter((r) => r.status === 'NOK').length;
  const totalNa = responseValues.filter((r) => r.status === 'N_A').length;

  const score = applicableItems > 0 ? Math.round((totalOk / applicableItems) * 100 * 10) / 10 : 100;
  const farol = calculateFarol(score);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!evaluator.trim()) {
      alert('Por favor, informe o nome do Avaliador/Criador.');
      return;
    }

    const evaluationId = `EV_${gabaritoType}_${Date.now()}`;
    const newActionPlans: ActionPlan[] = [];

    const checklistResponses = questionsList.map(q => {
      const resp = responses[q.id] || { status: 'OK', observation: '' };
      
      // If NOK, generate an action plan
      if (resp.status === 'NOK') {
        const planId = `PA_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        newActionPlans.push({
          id: planId,
          evaluationId,
          gabaritoType,
          unit,
          itemText: q.question,
          problemDescription: resp.observation || `Inconformidade identificada no item ${q.code}`,
          actionRequired: resp.actionPlanText || `Adequar item ${q.code} conforme padrão de segurança.`,
          responsible: resp.responsible || evaluator || 'Técnico de Segurança',
          deadline: resp.deadline || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          status: 'Pendente',
          createdAt: date,
          notes: `Gerado automaticamente na avaliação ${evaluationId}`
        });
      }

      return {
        questionId: q.id,
        questionText: q.question,
        category: q.category,
        status: resp.status,
        isCompliant: resp.status === 'OK' || resp.status === 'N_A',
        observation: resp.observation
      };
    });

    const newEvaluation: EvaluationRecord = {
      id: evaluationId,
      gabaritoType,
      unit,
      date,
      evaluator,
      semana: gabaritoType === 'GSA' ? semana : undefined,
      vehiclePlate: gabaritoType !== 'GSA' ? vehiclePlate : undefined,
      matricula: gabaritoType !== 'GSA' ? matricula : undefined,
      employeeName: selectedEmployeeName || undefined,
      employeeRole,
      employeeType,
      responses: checklistResponses,
      score,
      totalItems,
      totalOk,
      totalNok,
      totalNa,
      actionPlansCreatedCount: newActionPlans.length,
      quickGestaoRef: quickGestaoRef.trim() || undefined,
      generalNotes
    };

    onSubmit(newEvaluation, newActionPlans);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                Lançar Relatório de Avaliação (Quick Gestão)
              </h2>
              <p className="text-xs text-slate-400">
                Lançamento para controle de periodicidade, farol e planos de ação em Guarabira
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Gabarito Type Selection Tabs */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Selecione o Tipo de Gabarito:
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleTypeChange('GSD')}
                className={`p-3 rounded-xl border font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition ${
                  gabaritoType === 'GSD'
                    ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span>GSD - Distribuição</span>
                <span className="text-[10px] font-normal text-slate-500">Motoristas / Ajudantes</span>
              </button>

              <button
                type="button"
                onClick={() => handleTypeChange('GSA')}
                className={`p-3 rounded-xl border font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition ${
                  gabaritoType === 'GSA'
                    ? 'bg-amber-50 border-amber-500 text-amber-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Warehouse className="w-5 h-5" />
                <span>GSA - Armazém</span>
                <span className="text-[10px] font-normal text-slate-500">Semanal / Depósito</span>
              </button>

              <button
                type="button"
                onClick={() => handleTypeChange('GSP')}
                className={`p-3 rounded-xl border font-bold text-xs sm:text-sm flex flex-col items-center gap-1.5 transition ${
                  gabaritoType === 'GSP'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Navigation className="w-5 h-5" />
                <span>GSP - Puxada</span>
                <span className="text-[10px] font-normal text-slate-500">Carreteiros / Sider</span>
              </button>
            </div>
          </div>

          {/* Metadata Section */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Unidade */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Unidade de Negócio *</label>
              <input
                type="text"
                value="Pau Brasil Guarabira"
                disabled
                className="w-full bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-800"
              />
            </div>

            {/* Data da Avaliação */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Data da Avaliação *</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
            </div>

            {/* Avaliador / Criador */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Avaliador / Criador *</label>
              <input
                type="text"
                placeholder="Ex: Rafael, Alisson, Djeanderson..."
                value={evaluator}
                onChange={(e) => setEvaluator(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            {/* Nº Relatório Quick Gestão */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nº / Ref. Relatório Quick Gestão</label>
              <input
                type="text"
                placeholder="Ex: QG-2026-8812 (Opcional)"
                value={quickGestaoRef}
                onChange={(e) => setQuickGestaoRef(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* GSA Specific: Semana */}
            {gabaritoType === 'GSA' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Semana de Referência</label>
                <select
                  value={semana}
                  onChange={(e) => setSemana(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="1º semana">1º Semana do Mês</option>
                  <option value="2º semana">2º Semana do Mês</option>
                  <option value="3º semana">3º Semana do Mês</option>
                  <option value="4º semana">4º Semana do Mês</option>
                </select>
              </div>
            )}

            {/* GSD & GSP Specific: Employee Name */}
            {gabaritoType !== 'GSA' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Colaborador Avaliado</label>
                  <select
                    value={selectedEmployeeName}
                    onChange={(e) => handleEmployeeSelect(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="">-- Selecionar ou Digitar Nome --</option>
                    {employeesList.map(e => (
                      <option key={e.id} value={e.name}>
                        {e.name} ({e.role} - {e.type}){e.status && e.status !== 'ATIVO' ? ` [${e.status}]` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nome do Colaborador (se não listado)</label>
                  <input
                    type="text"
                    placeholder="Nome completo..."
                    value={selectedEmployeeName}
                    onChange={(e) => setSelectedEmployeeName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo do Colaborador</label>
                  <select
                    value={employeeType}
                    onChange={(e) => setEmployeeType(e.target.value as 'Novato' | 'Veterano')}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="Novato">Novato (Trilha 3 Meses)</option>
                    <option value="Veterano">Veterano (Ciclo 60 dias)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Placa do Veículo / Carreta</label>
                  <input
                    type="text"
                    placeholder="Ex: RLR8G79"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value.toUpperCase())}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Matrícula</label>
                  <input
                    type="text"
                    placeholder="Ex: G1110 / A1042"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </>
            )}

          </div>

          {/* Live Score Bar Sticky Header */}
          <div className="bg-slate-900 text-white rounded-xl p-3.5 flex items-center justify-between sticky top-0 z-10 shadow-md">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                Resumo da Avaliação:
              </span>
              <span className="text-sm font-semibold text-emerald-400">{totalOk} OK</span>
              <span className="text-sm font-semibold text-rose-400">{totalNok} NOK</span>
              <span className="text-sm font-semibold text-slate-400">{totalNa} N/A</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase block font-bold">Aproveitamento</span>
                <span className="text-lg font-extrabold text-white">{score}%</span>
              </div>
              <div className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                farol === 'VERDE' ? 'bg-emerald-500 text-slate-950' :
                farol === 'AMARELO' ? 'bg-amber-400 text-slate-950' : 'bg-rose-500 text-white'
              }`}>
                Farol {farol}
              </div>
            </div>
          </div>

          {/* Questions Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Itens de Verificação do Gabarito ({questionsList.length} perguntas)
            </h3>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
              {questionsList.map((q) => {
                const resp: ResponseItemState = responses[q.id] || {
                  status: 'OK',
                  observation: '',
                  actionPlanRequired: false,
                  actionPlanText: '',
                  responsible: '',
                  deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                };
                const isNok = resp.status === 'NOK';

                return (
                  <div key={q.id} className={`p-3.5 transition ${isNok ? 'bg-rose-50/50' : 'hover:bg-slate-50'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                          {q.code}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-slate-900 leading-snug">
                            {q.question}
                          </p>
                          <span className="text-[10px] text-slate-500 font-medium">{q.category}</span>
                        </div>
                      </div>

                      {/* Toggle Option Buttons: OK, NOK, N/A */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => updateResponseStatus(q.id, 'OK')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                            resp.status === 'OK'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-800'
                          }`}
                        >
                          OK
                        </button>

                        <button
                          type="button"
                          onClick={() => updateResponseStatus(q.id, 'NOK')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                            resp.status === 'NOK'
                              ? 'bg-rose-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 hover:bg-rose-100 hover:text-rose-800'
                          }`}
                        >
                          NOK
                        </button>

                        <button
                          type="button"
                          onClick={() => updateResponseStatus(q.id, 'N_A')}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                            resp.status === 'N_A'
                              ? 'bg-slate-700 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                          }`}
                        >
                          N/A
                        </button>
                      </div>

                    </div>

                    {/* If NOK or observation added, show details & Action Plan fields */}
                    {(isNok || resp.observation) && (
                      <div className="mt-3 pt-3 border-t border-rose-200/80 space-y-3 bg-white p-3 rounded-lg border border-rose-100">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Inconformidade Detectada — Plano de Ação Automático</span>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                            Descrição do Problema / Observação no Local:
                          </label>
                          <input
                            type="text"
                            placeholder="Descreva detalhadamente o que foi identificado..."
                            value={resp.observation}
                            onChange={(e) => updateResponseDetail(q.id, 'observation', e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-rose-500"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                              Ação Corretiva Proposta:
                            </label>
                            <input
                              type="text"
                              placeholder="O que será feito para solucionar..."
                              value={resp.actionPlanText}
                              onChange={(e) => updateResponseDetail(q.id, 'actionPlanText', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-rose-500"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                              Prazo de Conclusão:
                            </label>
                            <input
                              type="date"
                              value={resp.deadline}
                              onChange={(e) => updateResponseDetail(q.id, 'deadline', e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-rose-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* General Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Observações Gerais da Avaliação</label>
            <textarea
              rows={2}
              placeholder="Anotações complementares, clima no local, rota ou apontamentos do auditor..."
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider bg-orange-500 hover:bg-orange-600 transition shadow-md flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Salvar Avaliação & Gerar Planos ({totalNok} NOK)</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
