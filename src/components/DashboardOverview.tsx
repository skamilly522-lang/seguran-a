import React from 'react';
import { EvaluationRecord, ActionPlan, Employee, UnitSummary, GabaritoType } from '../types';
import { calculateFarol } from '../utils/storage';
import { ShieldCheck, AlertOctagon, CheckCircle2, Clock, Truck, Warehouse, Navigation, AlertTriangle, ArrowUpRight, Award } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from 'recharts';

interface DashboardOverviewProps {
  evaluations: EvaluationRecord[];
  actionPlans: ActionPlan[];
  employees: Employee[];
  units: UnitSummary[];
  selectedUnit: string;
  onNavigateToTab: (tab: 'evaluations' | 'action-plans' | 'periodicity' | 'questions') => void;
  onOpenNewEvaluation: (defaultType?: GabaritoType) => void;
  onOpenQuickGestaoPaste?: () => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  evaluations,
  actionPlans,
  employees,
  units,
  selectedUnit,
  onNavigateToTab,
  onOpenNewEvaluation,
  onOpenQuickGestaoPaste
}) => {
  // Filter records by unit if selected
  const filteredEvaluations = selectedUnit === 'TODAS' 
    ? evaluations 
    : evaluations.filter(e => e.unit === selectedUnit);

  const filteredActionPlans = selectedUnit === 'TODAS'
    ? actionPlans
    : actionPlans.filter(p => p.unit === selectedUnit);

  const filteredEmployees = selectedUnit === 'TODAS'
    ? employees
    : employees.filter(e => e.unit === selectedUnit);

  // Compute Overall Scores
  const totalEvals = filteredEvaluations.length;
  
  const gsdEvals = filteredEvaluations.filter(e => e.gabaritoType === 'GSD');
  const gsaEvals = filteredEvaluations.filter(e => e.gabaritoType === 'GSA');
  const gspEvals = filteredEvaluations.filter(e => e.gabaritoType === 'GSP');

  const calcAvgScore = (list: EvaluationRecord[]) => {
    if (list.length === 0) return 100;
    const sum = list.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round((sum / list.length) * 10) / 10;
  };

  const overallScore = calcAvgScore(filteredEvaluations);
  const gsdScore = calcAvgScore(gsdEvals);
  const gsaScore = calcAvgScore(gsaEvals);
  const gspScore = calcAvgScore(gspEvals);

  const overallFarol = calculateFarol(overallScore);
  const gsdFarol = calculateFarol(gsdScore);
  const gsaFarol = calculateFarol(gsaScore);
  const gspFarol = calculateFarol(gspScore);

  // Action Plans metrics
  const pendingPlans = filteredActionPlans.filter(p => p.status === 'Pendente' || p.status === 'Em Andamento' || p.status === 'Atrasado');
  const overduePlans = filteredActionPlans.filter(p => p.status === 'Atrasado');

  // Periodicity metrics
  const overdueEmployees = filteredEmployees.filter(e => e.periodicityStatus === 'ATRASADO');
  const alertEmployees = filteredEmployees.filter(e => e.periodicityStatus === 'ALERTA' || e.periodicityStatus === 'NOVATO_REQUER_AVALIACAO');

  // Data for Charts
  const typeComparisonData = [
    { name: 'GSD (Distribuição)', score: gsdScore, avaliacoes: gsdEvals.length },
    { name: 'GSA (Armazém)', score: gsaScore, avaliacoes: gsaEvals.length },
    { name: 'GSP (Puxada)', score: gspScore, avaliacoes: gspEvals.length },
  ];

  const actionStatusData = [
    { name: 'Concluído', value: filteredActionPlans.filter(p => p.status === 'Concluido').length, color: '#10B981' },
    { name: 'Em Andamento', value: filteredActionPlans.filter(p => p.status === 'Em Andamento').length, color: '#F59E0B' },
    { name: 'Pendente', value: filteredActionPlans.filter(p => p.status === 'Pendente').length, color: '#3B82F6' },
    { name: 'Atrasado', value: filteredActionPlans.filter(p => p.status === 'Atrasado').length, color: '#EF4444' },
  ].filter(d => d.value > 0);

  // Monthly trend mock + real data aggregation
  const monthlyData = [
    { mes: 'Out/25', GSD: 88, GSA: 91, GSP: 89, Geral: 89.3 },
    { mes: 'Nov/25', GSD: 90, GSA: 93, GSP: 91, Geral: 91.3 },
    { mes: 'Dez/25', GSD: 87, GSA: 94, GSP: 88, Geral: 89.6 },
    { mes: 'Jan/26', GSD: 92, GSA: 98, GSP: 93, Geral: 94.3 },
    { mes: 'Fev/26', GSD: gsdScore, GSA: gsaScore, GSP: gspScore, Geral: overallScore },
  ];

  const getFarolBadge = (status: 'VERDE' | 'AMARELO' | 'VERMELHO') => {
    switch (status) {
      case 'VERDE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Farol Verde (Conforme)
          </span>
        );
      case 'AMARELO':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            Farol Amarelo (Atenção)
          </span>
        );
      case 'VERMELHO':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            Farol Vermelho (Crítico)
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Rules & Periodicity Info Banner */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-lg text-slate-200 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-500 opacity-10 rounded-full pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Unidade Guarabira • Integração Quick Gestão
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Fluxo Oficial
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                <strong>Fluxo:</strong> Checklist realizado no <strong>Quick Gestão</strong> ➔ Baixar Relatório ➔ <strong>Lançar aqui</strong> para acompanhamento de prazos, controle de vencimentos e planos de ação.
              </p>
              <div className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-3">
                <span>• <strong>GSD/GSP:</strong> Novatos 15 dias + 3 meses / Veteranos 60 dias</span>
                <span>• <strong>GSA:</strong> Armazém Semanal</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {onOpenQuickGestaoPaste && (
              <button
                onClick={onOpenQuickGestaoPaste}
                className="px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-extrabold uppercase tracking-wider transition shadow-md flex items-center gap-1.5 border border-orange-400/30"
              >
                <span>📋 Colar Checklist do Quick Gestão</span>
              </button>
            )}
            <button
              onClick={() => onOpenNewEvaluation('GSD')}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5"
            >
              <span>+ Lançamento Manual</span>
            </button>
          </div>
        </div>
      </div>

      {/* Faróis Principais & Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Global Compliance Farol */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm border-r-4 border-r-orange-500 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Índice Global de Segurança
              </span>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">
                {overallScore}%
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            {getFarolBadge(overallFarol)}
            <span className="text-xs text-slate-500 font-bold">{totalEvals} avaliações</span>
          </div>
        </div>

        {/* GSD Farol */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm border-l-4 border-l-blue-500 hover:shadow-md transition cursor-pointer" onClick={() => onNavigateToTab('evaluations')}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> GSD - Distribuição
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {gsdScore}%
              </div>
            </div>
            {getFarolBadge(gsdFarol)}
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            {gsdEvals.length} rotas avaliadas • Ajudantes e Motoristas
          </p>
        </div>

        {/* GSA Farol */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm border-l-4 border-l-amber-500 hover:shadow-md transition cursor-pointer" onClick={() => onNavigateToTab('evaluations')}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                <Warehouse className="w-3.5 h-3.5" /> GSA - Armazém
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {gsaScore}%
              </div>
            </div>
            {getFarolBadge(gsaFarol)}
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            {gsaEvals.length} auditorias semanais do depósito
          </p>
        </div>

        {/* GSP Farol */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm border-l-4 border-l-emerald-500 hover:shadow-md transition cursor-pointer" onClick={() => onNavigateToTab('evaluations')}>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5" /> GSP - Puxada
              </span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {gspScore}%
              </div>
            </div>
            {getFarolBadge(gspFarol)}
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">
            {gspEvals.length} viagens de transferências/carretas
          </p>
        </div>

      </div>

      {/* Secondary Quick Alert Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Action Plans Alert */}
        <div
          onClick={() => onNavigateToTab('action-plans')}
          className="bg-white rounded-xl p-4 border border-slate-200 border-l-4 border-l-orange-500 shadow-sm hover:shadow transition cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${overduePlans.length > 0 ? 'bg-rose-100 text-rose-700' : 'bg-orange-100 text-orange-700'}`}>
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Planos de Ação Pendentes</div>
              <div className="text-xl font-extrabold text-slate-900">
                {pendingPlans.length} <span className="text-xs font-semibold text-slate-500">({overduePlans.length} atrasados)</span>
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-orange-500" />
        </div>

        {/* Periodicity Overdue Alert */}
        <div
          onClick={() => onNavigateToTab('periodicity')}
          className="bg-white rounded-xl p-4 border border-slate-200 border-l-4 border-l-rose-500 shadow-sm hover:shadow transition cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg ${overdueEmployees.length > 0 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Periodicidade / Atrasos</div>
              <div className="text-xl font-extrabold text-slate-900">
                {overdueEmployees.length} <span className="text-xs font-semibold text-slate-500">colaboradores vencidos</span>
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-rose-500" />
        </div>

        {/* Novatos Alert */}
        <div
          onClick={() => onNavigateToTab('periodicity')}
          className="bg-white rounded-xl p-4 border border-slate-200 border-l-4 border-l-blue-500 shadow-sm hover:shadow transition cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Integração de Novatos</div>
              <div className="text-xl font-extrabold text-slate-900">
                {alertEmployees.length} <span className="text-xs font-semibold text-slate-500">em acompanhamento</span>
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-blue-500" />
        </div>

      </div>

      {/* Visual Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Compliance Trend Chart */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Evolução do Índice de Conformidade (%)
            </h3>
            <span className="text-xs text-slate-500">Últimos 5 meses</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="mes" tick={{ fontSize: 11 }} />
                <YAxis domain={[60, 100]} tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line type="monotone" dataKey="GSD" stroke="#3B82F6" strokeWidth={2} name="GSD Distribuição" />
                <Line type="monotone" dataKey="GSA" stroke="#F59E0B" strokeWidth={2} name="GSA Armazém" />
                <Line type="monotone" dataKey="GSP" stroke="#10B981" strokeWidth={2} name="GSP Puxada" />
                <Line type="monotone" dataKey="Geral" stroke="#0F172A" strokeWidth={3} strokeDasharray="4 4" name="Média Geral" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gabarito Performance Comparison Bar Chart */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Conformidade por Tipo de Gabarito
            </h3>
            <span className="text-xs text-slate-500">Média das avaliações</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={typeComparisonData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="score" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Aproveitamento %">
                  {typeComparisonData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.score >= 90 ? '#10B981' : entry.score >= 75 ? '#F59E0B' : '#EF4444'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Units Status Grid & Action Plan Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Farol por Unidade de Negócio */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Farol de Conformidade por Unidade de Negócio
            </h3>
            <span className="text-xs text-slate-500 font-medium">Metas: ≥90% Verde</span>
          </div>

          <div className="divide-y divide-slate-100">
            {units.map((unit) => (
              <div key={unit.unitName} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${unit.farolStatus === 'VERDE' ? 'bg-emerald-500' : unit.farolStatus === 'AMARELO' ? 'bg-amber-500' : 'bg-rose-500'}`} />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{unit.unitName}</div>
                    <div className="text-xs text-slate-500">
                      {unit.totalEvaluations} avaliações • {unit.openActionPlans} planos pendentes
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">GSD</span>
                    <span className="font-bold text-slate-700">{unit.gsdCompliance}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">GSA</span>
                    <span className="font-bold text-slate-700">{unit.gsaCompliance}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">GSP</span>
                    <span className="font-bold text-slate-700">{unit.gspCompliance}%</span>
                  </div>
                  <div className="text-right pl-3 border-l border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Geral</span>
                    <span className="text-sm font-extrabold text-slate-900">{unit.complianceRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Plan Status Pie Chart */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Status dos Planos de Ação
            </h3>
            <p className="text-xs text-slate-500 mb-4">Ações geradas por inconformidades (NOK)</p>

            {actionStatusData.length > 0 ? (
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={actionStatusData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={4}
                    >
                      {actionStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center text-xs text-slate-400">
                Nenhum plano de ação registrado.
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-[11px]">
            {actionStatusData.map(item => (
              <div key={item.name} className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}: <strong>{item.value}</strong></span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
