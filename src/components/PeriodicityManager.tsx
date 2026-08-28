import React, { useState } from 'react';
import { Employee, EmployeeRole, GabaritoType } from '../types';
import { formatDateBR } from '../utils/storage';
import { Clock, Calendar, AlertTriangle, CheckCircle, UserPlus, Search, User, ShieldCheck, ArrowRight, Truck, Warehouse, Navigation, Plus, Trash2, RotateCcw } from 'lucide-react';

interface PeriodicityManagerProps {
  employees: Employee[];
  onAddEmployee: (emp: Employee) => void;
  onDeleteEmployee: (id: string) => void;
  onOpenNewEvaluationForEmployee: (emp: Employee) => void;
  onResetControlToRealData?: () => void;
  selectedUnit: string;
  unitsList: string[];
}

export const PeriodicityManager: React.FC<PeriodicityManagerProps> = ({
  employees,
  onAddEmployee,
  onDeleteEmployee,
  onOpenNewEvaluationForEmployee,
  onResetControlToRealData,
  selectedUnit,
  unitsList
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('TODOS');
  const [typeFilter, setTypeFilter] = useState<string>('TODOS');
  const [statusFilter, setStatusFilter] = useState<string>('TODOS');
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // New employee form state
  const [name, setName] = useState('');
  const [role, setRole] = useState<EmployeeRole>('Motorista');
  const [unit, setUnit] = useState(selectedUnit === 'TODAS' ? (unitsList[0] || 'Pau Brasil Guarabira') : selectedUnit);
  const [matricula, setMatricula] = useState('');
  const [hireDate, setHireDate] = useState(new Date().toISOString().split('T')[0]);
  const [empType, setEmpType] = useState<'Novato' | 'Veterano'>('Novato');
  const [gabaritoType, setGabaritoType] = useState<GabaritoType>('GSD');
  const [assignedVehicle, setAssignedVehicle] = useState('');

  const filtered = employees.filter(emp => {
    if (selectedUnit !== 'TODAS' && emp.unit !== selectedUnit) return false;
    if (roleFilter !== 'TODOS' && emp.role !== roleFilter) return false;
    if (typeFilter !== 'TODOS' && emp.type !== typeFilter) return false;
    if (statusFilter !== 'TODOS' && emp.periodicityStatus !== statusFilter) return false;

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = emp.name.toLowerCase().includes(q);
      const matchMat = emp.matricula?.toLowerCase().includes(q);
      const matchUnit = emp.unit.toLowerCase().includes(q);
      if (!matchName && !matchMat && !matchUnit) return false;
    }

    return true;
  });

  const getStatusBadge = (status: Employee['periodicityStatus'], empStatus?: Employee['status']) => {
    if (empStatus === 'FÉRIAS') {
      return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">🏖️ Em Férias (Pausado)</span>;
    }
    if (empStatus === 'AFASTADO') {
      return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300">🏥 Afastado (Pausado)</span>;
    }

    switch (status) {
      case 'EM_DIA':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">🟢 Em Dia</span>;
      case 'ALERTA':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">🟡 Vencimento Próximo</span>;
      case 'ATRASADO':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">🔴 Atrasado / Vencido</span>;
      case 'NOVATO_REQUER_AVALIACAO':
        return <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">🔵 Novato: 1ª Avaliação ≤15 dias</span>;
    }
  };

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Calculate due date based on rule
    let nextDue = hireDate;
    if (empType === 'Novato') {
      const d = new Date(hireDate);
      d.setDate(d.getDate() + 15); // <=15 days from hire date
      nextDue = d.toISOString().split('T')[0];
    } else {
      if (gabaritoType === 'GSA') {
        const d = new Date();
        d.setDate(d.getDate() + 7);
        nextDue = d.toISOString().split('T')[0];
      } else {
        const d = new Date();
        d.setDate(d.getDate() + 60);
        nextDue = d.toISOString().split('T')[0];
      }
    }

    const newEmp: Employee = {
      id: `EMP_${Date.now()}`,
      name,
      role,
      unit,
      matricula,
      hireDate,
      type: empType,
      gabaritoType,
      nextEvaluationDueDate: nextDue,
      periodicityStatus: empType === 'Novato' ? 'NOVATO_REQUER_AVALIACAO' : 'EM_DIA',
      assignedVehicle
    };

    onAddEmployee(newEmp);
    setIsAddingEmployee(false);
    setName('');
    setMatricula('');
    setAssignedVehicle('');
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            Controle de Periodicidade de Avaliações ({filtered.length})
          </h2>
          <p className="text-xs text-slate-500">
            Acompanhamento de vencimentos: Novatos (3 meses seguidos, 1ª em 15 dias), Veteranos (a cada 60 dias) e Armazém (semanal).
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onResetControlToRealData && (
            <button
              onClick={() => setIsResetModalOpen(true)}
              className="px-3 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0 flex items-center gap-1.5"
              title="Zera avaliações de teste e deixa todos os colaboradores como NOK / Pendentes para início de lançamentos reais"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Zerar Controle (Dados Reais)</span>
            </button>
          )}

          <button
            onClick={() => setIsAddingEmployee(true)}
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0 flex items-center gap-1.5"
          >
            <UserPlus className="w-4 h-4 text-white" />
            <span>+ Cadastrar Colaborador</span>
          </button>
        </div>
      </div>

      {/* Rules Highlight Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-blue-900">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <Truck className="w-4 h-4 text-blue-600" /> GSD / GSP — Novatos (Admissão)
          </div>
          <p className="text-[11px] text-blue-800">
            Acompanhamento por <strong>3 meses consecutivos</strong>. A 1ª avaliação deve ser feita em <strong>até 15 dias da contratação</strong>.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-emerald-900">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <CheckCircle className="w-4 h-4 text-emerald-600" /> GSD / GSP — Veteranos (Regular)
          </div>
          <p className="text-[11px] text-emerald-800">
            Avaliações periódicas realizadas impreterivelmente <strong>a cada 60 dias</strong>.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-amber-900">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <Warehouse className="w-4 h-4 text-amber-600" /> GSA — Segurança Armazém
          </div>
          <p className="text-[11px] text-amber-800">
            Auditoria interna no depósito e instalações realizada <strong>SEMANALMENTE</strong> (4 avaliações/mês).
          </p>
        </div>
      </div>

      {/* Add Employee Modal */}
      {isAddingEmployee && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Cadastrar Colaborador para Acompanhamento</h3>
              <button onClick={() => setIsAddingEmployee(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Nome do colaborador..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border p-2 rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cargo *</label>
                  <select value={role} onChange={(e) => setRole(e.target.value as EmployeeRole)} className="w-full bg-slate-50 border p-2 rounded-lg">
                    <option value="Motorista">Motorista de Entrega</option>
                    <option value="Ajudante">Ajudante de Entrega</option>
                    <option value="Carreteiro">Carreteiro (Puxada)</option>
                    <option value="Operador Armazém">Operador de Armazém</option>
                    <option value="Líder Armazém">Líder de Armazém</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Unidade *</label>
                  <input
                    type="text"
                    value="Pau Brasil Guarabira"
                    disabled
                    className="w-full bg-slate-100 border p-2 rounded-lg font-bold text-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Data de Admissão *</label>
                  <input
                    type="date"
                    value={hireDate}
                    onChange={(e) => setHireDate(e.target.value)}
                    className="w-full bg-slate-50 border p-2 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Perfil de Experiência *</label>
                  <select value={empType} onChange={(e) => setEmpType(e.target.value as 'Novato' | 'Veterano')} className="w-full bg-slate-50 border p-2 rounded-lg">
                    <option value="Novato">Novato (Trilha 3 Meses seguidos)</option>
                    <option value="Veterano">Veterano (Ciclo 60 dias)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Gabarito Principal</label>
                  <select value={gabaritoType} onChange={(e) => setGabaritoType(e.target.value as GabaritoType)} className="w-full bg-slate-50 border p-2 rounded-lg">
                    <option value="GSD">GSD (Distribuição)</option>
                    <option value="GSA">GSA (Armazém)</option>
                    <option value="GSP">GSP (Puxada)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Matrícula / Placa</label>
                  <input
                    type="text"
                    placeholder="Matrícula..."
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    className="w-full bg-slate-50 border p-2 rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setIsAddingEmployee(false)} className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 font-semibold">Cancelar</button>
                <button type="submit" className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-bold">Salvar Colaborador</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar por nome do colaborador, matrícula, unidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Status</option>
            <option value="EM_DIA">🟢 Em Dia</option>
            <option value="ALERTA">🟡 Próximo ao Vencimento</option>
            <option value="ATRASADO">🔴 Atrasado / Vencido</option>
            <option value="NOVATO_REQUER_AVALIACAO">🔵 Novato (&lt;=15 dias)</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Perfis</option>
            <option value="Novato">Novatos (3 Meses)</option>
            <option value="Veterano">Veteranos (60 dias)</option>
          </select>
        </div>

      </div>

      {/* Roster Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {filtered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-3.5">Status Periodicidade</th>
                  <th className="p-3.5">Colaborador</th>
                  <th className="p-3.5">Cargo & Perfil</th>
                  <th className="p-3.5">Unidade</th>
                  <th className="p-3.5">Última Avaliação</th>
                  <th className="p-3.5">Próximo Vencimento</th>
                  <th className="p-3.5 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filtered.map(emp => (
                  <tr key={emp.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-3.5">{getStatusBadge(emp.periodicityStatus, emp.status)}</td>
                    <td className="p-3.5">
                      <span className="font-bold text-slate-900 block">{emp.name}</span>
                      <span className="text-[10px] text-slate-500">
                        {emp.matricula ? `Matrícula: ${emp.matricula}` : 'Sem matrícula'}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className="font-semibold text-slate-800 block">{emp.role}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${emp.type === 'Novato' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`}>
                        {emp.type}
                      </span>
                    </td>
                    <td className="p-3.5 font-medium text-slate-800">{emp.unit}</td>
                    <td className="p-3.5">
                      {emp.lastEvaluationDate ? (
                        <span className="font-semibold text-slate-800">
                          {formatDateBR(emp.lastEvaluationDate)}
                        </span>
                      ) : (
                        <span className="text-rose-600 font-bold">Nenhuma realizada</span>
                      )}
                    </td>
                    <td className="p-3.5">
                      {emp.status === 'FÉRIAS' ? (
                        <span className="text-amber-700 font-bold">Pausado (Férias)</span>
                      ) : emp.status === 'AFASTADO' ? (
                        <span className="text-purple-700 font-bold">Pausado (Afastado)</span>
                      ) : (
                        <span className={`font-bold ${emp.periodicityStatus === 'ATRASADO' ? 'text-rose-600' : 'text-slate-900'}`}>
                          {formatDateBR(emp.nextEvaluationDueDate)}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onOpenNewEvaluationForEmployee(emp)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition shadow-sm inline-flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Lançar Relatório QG</span>
                        </button>
                        <button
                          onClick={() => setEmployeeToDelete(emp)}
                          title="Excluir Colaborador"
                          className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-500 space-y-2">
            <Clock className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">Nenhum colaborador encontrado.</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {employeeToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2.5 bg-rose-100 rounded-full">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Excluir Colaborador</h3>
                <p className="text-xs text-slate-500">Esta ação não poderá ser desfeita.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Nome:</strong> {employeeToDelete.name}</p>
              {employeeToDelete.matricula && <p><strong>Matrícula:</strong> {employeeToDelete.matricula}</p>}
              <p><strong>Cargo:</strong> {employeeToDelete.role}</p>
              <p><strong>Unidade:</strong> {employeeToDelete.unit}</p>
            </div>

            <p className="text-xs text-slate-600">
              Tem certeza que deseja remover este colaborador do controle de acompanhamento?
            </p>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEmployeeToDelete(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  onDeleteEmployee(employeeToDelete.id);
                  setEmployeeToDelete(null);
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-sm"
              >
                Sim, Excluir Colaborador
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Control Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2.5 bg-rose-100 rounded-full">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Zerar Lançamentos para Início de Dados Reais</h3>
                <p className="text-xs text-slate-500">Ajuste do controle de periodicidade para alimentação oficial.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
              <p className="font-semibold text-slate-900">Esta ação irá:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Apagar todas as avaliações registradas.</li>
                <li>Apagar todos os planos de ação acumulados.</li>
                <li><strong>Manter todos os colaboradores cadastrados</strong> ({employees.length} pessoas) no banco de dados.</li>
                <li>Ajustar o status de todos os colaboradores para <strong>NOK / Pendente de Nova Avaliação</strong>.</li>
              </ul>
            </div>

            <p className="text-xs text-slate-600">
              Deseja confirmar o zeramento para começar a atualizar com os gabaritos e dados reais agora?
            </p>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsResetModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onResetControlToRealData) {
                    onResetControlToRealData();
                  }
                  setIsResetModalOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-sm"
              >
                Sim, Zerar e Iniciar Dados Reais
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
