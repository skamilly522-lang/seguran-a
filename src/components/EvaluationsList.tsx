import React, { useState } from 'react';
import { EvaluationRecord, GabaritoType } from '../types';
import { calculateFarol, formatDateBR } from '../utils/storage';
import { GSD_QUESTIONS, GSA_QUESTIONS, GSP_QUESTIONS } from '../data/initialData';
import { Search, Filter, ShieldCheck, Eye, Trash2, Calendar, User, Truck, Warehouse, Navigation, CheckCircle2, AlertOctagon, Printer, ArrowUpDown } from 'lucide-react';

interface EvaluationsListProps {
  evaluations: EvaluationRecord[];
  onDeleteEvaluation: (id: string) => void;
  selectedUnit: string;
  onOpenNewEvaluation: () => void;
  onOpenQuickGestaoPaste?: () => void;
}

export const EvaluationsList: React.FC<EvaluationsListProps> = ({
  evaluations,
  onDeleteEvaluation,
  selectedUnit,
  onOpenNewEvaluation,
  onOpenQuickGestaoPaste
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('TODOS');
  const [farolFilter, setFarolFilter] = useState<string>('TODOS');
  const [selectedEvaluation, setSelectedEvaluation] = useState<EvaluationRecord | null>(null);
  const [evaluationToDelete, setEvaluationToDelete] = useState<EvaluationRecord | null>(null);

  // Filtering logic
  const filtered = evaluations.filter(item => {
    // Unit match
    if (selectedUnit !== 'TODAS' && item.unit !== selectedUnit) return false;

    // Type match
    if (typeFilter !== 'TODOS' && item.gabaritoType !== typeFilter) return false;

    // Farol match
    const farol = calculateFarol(item.score);
    if (farolFilter !== 'TODOS' && farol !== farolFilter) return false;

    // Search query match
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = item.employeeName?.toLowerCase().includes(q);
      const matchEvaluator = item.evaluator.toLowerCase().includes(q);
      const matchPlate = item.vehiclePlate?.toLowerCase().includes(q);
      const matchUnit = item.unit.toLowerCase().includes(q);
      if (!matchName && !matchEvaluator && !matchPlate && !matchUnit) return false;
    }

    return true;
  });

  const getGabaritoBadge = (type: GabaritoType) => {
    switch (type) {
      case 'GSD':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">GSD - Distribuição</span>;
      case 'GSA':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">GSA - Armazém</span>;
      case 'GSP':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">GSP - Puxada</span>;
    }
  };

  const getFarolBadge = (score: number) => {
    const f = calculateFarol(score);
    if (f === 'VERDE') {
      return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">🟢 {score}% Conforme</span>;
    } else if (f === 'AMARELO') {
      return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">🟡 {score}% Atenção</span>;
    } else {
      return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">🔴 {score}% Crítico</span>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-500" />
            Histórico Unificado de Avaliações ({filtered.length})
          </h2>
          <p className="text-xs text-slate-500">
            Registro de gabaritos aplicados nas rotas, armazém e operações de puxada.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {onOpenQuickGestaoPaste && (
            <button
              onClick={onOpenQuickGestaoPaste}
              className="px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm border border-orange-400/30"
            >
              📋 Colar Checklist Quick Gestão
            </button>
          )}
          <button
            onClick={onOpenNewEvaluation}
            className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition border border-slate-700"
          >
            + Lançamento Manual
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar por colaborador, avaliador, placa do veículo, unidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Gabarito Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Gabaritos</option>
            <option value="GSD">GSD (Distribuição)</option>
            <option value="GSA">GSA (Armazém)</option>
            <option value="GSP">GSP (Puxada)</option>
          </select>

          {/* Farol Filter */}
          <select
            value={farolFilter}
            onChange={(e) => setFarolFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Faróis</option>
            <option value="VERDE">🟢 Verde (≥90%)</option>
            <option value="AMARELO">🟡 Amarelo (75-89%)</option>
            <option value="VERMELHO">🔴 Vermelho (&lt;75%)</option>
          </select>
        </div>

      </div>

      {/* Evaluations Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {filtered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-3.5">Gabarito</th>
                  <th className="p-3.5">Data</th>
                  <th className="p-3.5">Unidade / Operação</th>
                  <th className="p-3.5">Avaliador</th>
                  <th className="p-3.5">Colaborador / Placa</th>
                  <th className="p-3.5">Conformidade</th>
                  <th className="p-3.5">Ações NOK</th>
                  <th className="p-3.5 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filtered.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-3.5">{getGabaritoBadge(item.gabaritoType)}</td>
                    <td className="p-3.5 font-semibold text-slate-900">
                      {formatDateBR(item.date)}
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-slate-800">{item.unit}</span>
                      {item.semana && <span className="block text-[10px] text-slate-500">{item.semana}</span>}
                      {item.quickGestaoRef && (
                        <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-orange-100 text-orange-800 border border-orange-200">
                          QG: {item.quickGestaoRef}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 font-medium text-slate-700">{item.evaluator}</td>
                    <td className="p-3.5">
                      {item.employeeName ? (
                        <div>
                          <span className="font-bold text-slate-900 block">{item.employeeName}</span>
                          <span className="text-[10px] text-slate-500">
                            {item.employeeRole} {item.vehiclePlate && `• Placa: ${item.vehiclePlate}`}
                          </span>
                        </div>
                      ) : (
                        <span className="text-slate-500 font-medium">
                          {item.vehiclePlate ? `Veículo: ${item.vehiclePlate}` : 'Operação de Armazém'}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5">{getFarolBadge(item.score)}</td>
                    <td className="p-3.5">
                      {item.totalNok > 0 ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                          {item.totalNok} NOK ({item.actionPlansCreatedCount} P.A.)
                        </span>
                      ) : (
                        <span className="text-emerald-600 font-semibold text-[11px]">100% OK</span>
                      )}
                    </td>
                    <td className="p-3.5 text-right space-x-1">
                      <button
                        onClick={() => setSelectedEvaluation(item)}
                        className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                        title="Ver Detalhes do Gabarito"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEvaluationToDelete(item)}
                        className="p-1.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 transition"
                        title="Excluir Avaliação"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500 space-y-2">
            <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">Nenhuma avaliação encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedEvaluation && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {selectedEvaluation.gabaritoType}
                  </span>
                  <h3 className="text-base font-bold">
                    Detalhamento do Gabarito - {selectedEvaluation.unit}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Realizado em {formatDateBR(selectedEvaluation.date)} por {selectedEvaluation.evaluator}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setEvaluationToDelete(selectedEvaluation)}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
                  title="Excluir esta avaliação"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Excluir</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  title="Imprimir Relatório"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedEvaluation(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-800">
              
              {/* Summary Score Header */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Aproveitamento</span>
                  <span className="text-xl font-extrabold text-slate-900">{selectedEvaluation.score}%</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Conformidade</span>
                  {getFarolBadge(selectedEvaluation.score)}
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Avaliados</span>
                  <span className="font-bold text-slate-800">
                    {selectedEvaluation.employeeName || 'Equipe Armazém'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Placa / Veículo</span>
                  <span className="font-bold text-slate-800">{selectedEvaluation.vehiclePlate || 'N/A'}</span>
                </div>
              </div>

              {selectedEvaluation.generalNotes && (
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-slate-800">
                  <strong>Observações Gerais:</strong> {selectedEvaluation.generalNotes}
                </div>
              )}

              {/* Responses List */}
              {(() => {
                const qSet = selectedEvaluation.gabaritoType === 'GSA'
                  ? GSA_QUESTIONS
                  : selectedEvaluation.gabaritoType === 'GSP'
                  ? GSP_QUESTIONS
                  : GSD_QUESTIONS;
                
                // Cap responses display at qSet length
                const responsesToDisplay = selectedEvaluation.responses.slice(0, qSet.length);

                return (
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Respostas do Gabarito ({responsesToDisplay.length} perguntas)
                    </h4>

                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                      {responsesToDisplay.map((resp, idx) => {
                        const qDef = qSet.find(q => q.id === resp.questionId) || qSet[idx];
                        
                        const isMismatchedText = resp.questionText && (
                          (selectedEvaluation.gabaritoType === 'GSP' && resp.questionText.startsWith('GSA-')) ||
                          (selectedEvaluation.gabaritoType === 'GSA' && resp.questionText.startsWith('GSD-')) ||
                          (selectedEvaluation.gabaritoType === 'GSD' && resp.questionText.startsWith('GSA-'))
                        );

                        const questionText = (!resp.questionText || isMismatchedText) && qDef
                          ? `${qDef.code} - ${qDef.question}`
                          : (resp.questionText || (qDef ? `${qDef.code} - ${qDef.question}` : `Pergunta #${idx + 1}`));
                        
                        const category = qDef?.category || resp.category || 'Geral';

                        return (
                          <div
                            key={resp.questionId || idx}
                            className={`p-3.5 flex items-start justify-between gap-3 transition ${
                              resp.status === 'NOK'
                                ? 'bg-rose-50/80'
                                : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                  #{idx + 1}
                                </span>
                                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                                  {category}
                                </span>
                              </div>
                              <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                                {questionText}
                              </p>
                              {resp.observation && (
                                <p className="mt-1 text-xs text-rose-700 font-medium bg-rose-100/60 p-2 rounded-lg border border-rose-200">
                                  ⚠️ <strong>Inconformidade / Observação:</strong> {resp.observation}
                                </p>
                              )}
                            </div>

                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 border ${
                              resp.status === 'OK'
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                : resp.status === 'NOK'
                                ? 'bg-rose-100 text-rose-800 border-rose-300'
                                : 'bg-slate-100 text-slate-600 border-slate-300'
                            }`}>
                              {resp.status === 'OK' ? 'OK (100%)' : resp.status === 'NOK' ? 'NOK (0%)' : 'N/A'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {evaluationToDelete && (
        <div className="fixed inset-0 z-[70] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-3 rounded-full bg-rose-100 shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Confirmar Exclusão de Gabarito</h3>
                <p className="text-xs text-slate-500">Esta ação irá remover o registro e atualizar o Farol de Conformidade.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <p><strong>Gabarito:</strong> <span className="font-bold text-slate-900">{evaluationToDelete.gabaritoType}</span> - {evaluationToDelete.unit}</p>
              <p><strong>Data da Aplicação:</strong> {formatDateBR(evaluationToDelete.date)}</p>
              <p><strong>Avaliador:</strong> {evaluationToDelete.evaluator}</p>
              {evaluationToDelete.employeeName && (
                <p><strong>Avaliados / Equipe:</strong> {evaluationToDelete.employeeName}</p>
              )}
              {evaluationToDelete.vehiclePlate && (
                <p><strong>Placa do Veículo:</strong> {evaluationToDelete.vehiclePlate}</p>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setEvaluationToDelete(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onDeleteEvaluation(evaluationToDelete.id);
                  if (selectedEvaluation?.id === evaluationToDelete.id) {
                    setSelectedEvaluation(null);
                  }
                  setEvaluationToDelete(null);
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-sm flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" />
                <span>Sim, Excluir Registro</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
