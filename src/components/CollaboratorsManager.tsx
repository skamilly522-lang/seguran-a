import React, { useState, useMemo } from 'react';
import { Employee, EmployeeRole, GabaritoType, EmployeeStatus } from '../types';
import { formatDateBR } from '../utils/storage';
import { 
  Users, UserPlus, Search, Edit3, Trash2, ShieldCheck, 
  Palmtree, Stethoscope, CheckCircle2, UserCheck, AlertCircle, 
  Calendar, Truck, Filter, Plus, X, ShieldAlert, Award
} from 'lucide-react';

interface CollaboratorsManagerProps {
  employees: Employee[];
  onAddEmployee: (emp: Employee) => void;
  onUpdateEmployee: (emp: Employee) => void;
  onDeleteEmployee: (id: string) => void;
  selectedUnit: string;
  unitsList: string[];
}

export const CollaboratorsManager: React.FC<CollaboratorsManagerProps> = ({
  employees,
  onAddEmployee,
  onUpdateEmployee,
  onDeleteEmployee,
  selectedUnit,
  unitsList
}) => {
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('TODOS');
  const [roleFilter, setRoleFilter] = useState<string>('TODOS');
  const [typeFilter, setTypeFilter] = useState<string>('TODOS');

  // Modal States
  const [isAddingModalOpen, setIsAddingModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState<{
    name: string;
    role: EmployeeRole;
    unit: string;
    matricula: string;
    hireDate: string;
    type: 'Novato' | 'Veterano';
    gabaritoType: GabaritoType;
    assignedVehicle: string;
    status: EmployeeStatus;
  }>({
    name: '',
    role: 'Motorista',
    unit: selectedUnit === 'TODAS' ? (unitsList[0] || 'Pau Brasil Guarabira') : selectedUnit,
    matricula: '',
    hireDate: new Date().toISOString().split('T')[0],
    type: 'Novato',
    gabaritoType: 'GSD',
    assignedVehicle: '',
    status: 'ATIVO'
  });

  // Calculate Summary Counts
  const totalCount = employees.length;
  const activeCount = employees.filter(e => (e.status || 'ATIVO') === 'ATIVO').length;
  const vacationCount = employees.filter(e => e.status === 'FÉRIAS').length;
  const leaveCount = employees.filter(e => e.status === 'AFASTADO').length;

  // Filtered List
  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      if (selectedUnit !== 'TODAS' && emp.unit !== selectedUnit) return false;

      const empStatus = emp.status || 'ATIVO';
      if (statusFilter !== 'TODOS' && empStatus !== statusFilter) return false;
      if (roleFilter !== 'TODOS' && emp.role !== roleFilter) return false;
      if (typeFilter !== 'TODOS' && emp.type !== typeFilter) return false;

      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchName = emp.name.toLowerCase().includes(q);
        const matchMat = (emp.matricula || '').toLowerCase().includes(q);
        const matchRole = emp.role.toLowerCase().includes(q);
        if (!matchName && !matchMat && !matchRole) return false;
      }

      return true;
    });
  }, [employees, selectedUnit, statusFilter, roleFilter, typeFilter, searchTerm]);

  // Open Edit Modal
  const handleOpenEdit = (emp: Employee) => {
    setEditingEmployee(emp);
    setFormData({
      name: emp.name,
      role: emp.role,
      unit: emp.unit,
      matricula: emp.matricula || '',
      hireDate: emp.hireDate,
      type: emp.type,
      gabaritoType: emp.gabaritoType,
      assignedVehicle: emp.assignedVehicle || '',
      status: emp.status || 'ATIVO'
    });
  };

  // Open Add Modal
  const handleOpenAdd = () => {
    setEditingEmployee(null);
    setFormData({
      name: '',
      role: 'Motorista',
      unit: selectedUnit === 'TODAS' ? (unitsList[0] || 'Pau Brasil Guarabira') : selectedUnit,
      matricula: '',
      hireDate: new Date().toISOString().split('T')[0],
      type: 'Novato',
      gabaritoType: 'GSD',
      assignedVehicle: '',
      status: 'ATIVO'
    });
    setIsAddingModalOpen(true);
  };

  // Quick Change Status inline
  const handleQuickStatusChange = (emp: Employee, newStatus: EmployeeStatus) => {
    const updated: Employee = {
      ...emp,
      status: newStatus
    };
    onUpdateEmployee(updated);
  };

  // Submit Form (Create or Edit)
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Por favor, informe o nome do colaborador.');
      return;
    }

    if (editingEmployee) {
      // Update existing
      const updated: Employee = {
        ...editingEmployee,
        name: formData.name.trim(),
        role: formData.role,
        unit: formData.unit,
        matricula: formData.matricula.trim() || undefined,
        hireDate: formData.hireDate,
        type: formData.type,
        gabaritoType: formData.gabaritoType,
        assignedVehicle: formData.assignedVehicle.trim() || undefined,
        status: formData.status
      };
      onUpdateEmployee(updated);
      setEditingEmployee(null);
    } else {
      // Create new
      let nextDue = formData.hireDate;
      if (formData.type === 'Novato') {
        const d = new Date(formData.hireDate);
        d.setDate(d.getDate() + 15);
        nextDue = d.toISOString().split('T')[0];
      } else {
        const d = new Date();
        d.setDate(d.getDate() + (formData.gabaritoType === 'GSA' ? 7 : 60));
        nextDue = d.toISOString().split('T')[0];
      }

      const newEmp: Employee = {
        id: `EMP_${Date.now()}`,
        name: formData.name.trim(),
        role: formData.role,
        unit: formData.unit,
        matricula: formData.matricula.trim() || undefined,
        hireDate: formData.hireDate,
        type: formData.type,
        gabaritoType: formData.gabaritoType,
        nextEvaluationDueDate: nextDue,
        periodicityStatus: formData.type === 'Novato' ? 'NOVATO_REQUER_AVALIACAO' : 'EM_DIA',
        assignedVehicle: formData.assignedVehicle.trim() || undefined,
        status: formData.status
      };

      onAddEmployee(newEmp);
      setIsAddingModalOpen(false);
    }
  };

  const getStatusBadge = (status?: EmployeeStatus) => {
    const current = status || 'ATIVO';
    switch (current) {
      case 'ATIVO':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> ATIVO
          </span>
        );
      case 'FÉRIAS':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
            <Palmtree className="w-3.5 h-3.5 text-amber-600" /> FÉRIAS
          </span>
        );
      case 'AFASTADO':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300 flex items-center gap-1">
            <Stethoscope className="w-3.5 h-3.5 text-purple-600" /> AFASTADO
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title & Add Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-500" />
            Gestão & Cadastro de Colaboradores ({totalCount})
          </h2>
          <p className="text-xs text-slate-500">
            Edite dados e altere status de atividade (Ativo, Férias ou Afastado) sem apagar o histórico de auditorias.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <UserPlus className="w-4 h-4 text-white" />
          <span>+ Cadastrar Colaborador</span>
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div 
          onClick={() => setStatusFilter('TODOS')}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            statusFilter === 'TODOS'
              ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-400'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold uppercase tracking-wider ${statusFilter === 'TODOS' ? 'text-slate-300' : 'text-slate-600'}`}>Total Cadastrados</span>
            <Users className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-2xl font-extrabold mt-2">{totalCount}</div>
          <p className={`text-[11px] mt-0.5 ${statusFilter === 'TODOS' ? 'text-slate-400' : 'text-slate-500'}`}>Quadro total de pessoas</p>
        </div>

        <div 
          onClick={() => setStatusFilter('ATIVO')}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            statusFilter === 'ATIVO'
              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
              : 'bg-white border-slate-200 hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Ativos em Operação</span>
            <UserCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-2">{activeCount}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">Participam do ciclo de avaliações</p>
        </div>

        <div 
          onClick={() => setStatusFilter('FÉRIAS')}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            statusFilter === 'FÉRIAS'
              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300'
              : 'bg-white border-slate-200 hover:border-amber-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Em Férias</span>
            <Palmtree className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-amber-700 mt-2">{vacationCount}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">Prazos de periodicidade pausados</p>
        </div>

        <div 
          onClick={() => setStatusFilter('AFASTADO')}
          className={`p-4 rounded-xl border transition cursor-pointer shadow-sm ${
            statusFilter === 'AFASTADO'
              ? 'bg-purple-50 border-purple-400 ring-2 ring-purple-300'
              : 'bg-white border-slate-200 hover:border-purple-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Afastados</span>
            <Stethoscope className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-extrabold text-purple-700 mt-2">{leaveCount}</div>
          <p className="text-[11px] text-slate-500 mt-0.5">Mantidos no histórico operacional</p>
        </div>
      </div>

      {/* Info Notice Box */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 text-blue-900 text-xs flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-blue-950">Autonomia na Gestão do Quadro de Pessoal:</p>
          <p className="text-blue-800 mt-0.5">
            Ao alterar o status de um colaborador para <strong>FÉRIAS</strong> ou <strong>AFASTADO</strong>, ele continuará registrado no sistema com todas as suas avaliações anteriores preservadas. O sistema deixará de cobrar pendências de periodicidade enquanto o colaborador estiver ausente.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar por nome, matrícula, cargo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-bold text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Status</option>
            <option value="ATIVO">🟢 Ativo</option>
            <option value="FÉRIAS">🏖️ Férias</option>
            <option value="AFASTADO">🏥 Afastado</option>
          </select>

          {/* Role Filter */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-semibold text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Cargos</option>
            <option value="Motorista">Motorista</option>
            <option value="Ajudante">Ajudante</option>
            <option value="Carreteiro">Carreteiro</option>
            <option value="Operador Armazém">Operador Armazém</option>
            <option value="Líder Armazém">Líder Armazém</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 font-semibold text-slate-700 focus:outline-none"
          >
            <option value="TODOS">Todos os Perfis</option>
            <option value="Novato">Novato</option>
            <option value="Veterano">Veterano</option>
          </select>
        </div>
      </div>

      {/* Collaborators Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {filteredEmployees.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5">Colaborador / Matrícula</th>
                  <th className="p-3.5">Cargo & Perfil</th>
                  <th className="p-3.5">Gabarito Principal</th>
                  <th className="p-3.5">Admissão</th>
                  <th className="p-3.5">Veículo / Placa</th>
                  <th className="p-3.5 text-center">Alterar Status Rápido</th>
                  <th className="p-3.5 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filteredEmployees.map(emp => {
                  const empStatus = emp.status || 'ATIVO';

                  return (
                    <tr 
                      key={emp.id} 
                      className={`hover:bg-slate-50/80 transition ${
                        empStatus === 'FÉRIAS' ? 'bg-amber-50/20' : empStatus === 'AFASTADO' ? 'bg-purple-50/20' : ''
                      }`}
                    >
                      <td className="p-3.5">{getStatusBadge(empStatus)}</td>
                      <td className="p-3.5">
                        <span className="font-bold text-slate-900 block text-xs">{emp.name}</span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {emp.matricula ? `Matrícula: ${emp.matricula}` : 'Sem matrícula'}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className="font-semibold text-slate-800 block">{emp.role}</span>
                        <span className={`inline-block text-[10px] font-bold px-1.5 py-0.2 rounded mt-0.5 ${
                          emp.type === 'Novato' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {emp.type}
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {emp.gabaritoType}
                        </span>
                      </td>
                      <td className="p-3.5 font-medium text-slate-700">
                        {formatDateBR(emp.hireDate)}
                      </td>
                      <td className="p-3.5 font-medium text-slate-600">
                        {emp.assignedVehicle || 'N/A'}
                      </td>

                      {/* Quick Status selector */}
                      <td className="p-3.5 text-center">
                        <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-[11px] font-bold">
                          <button
                            onClick={() => handleQuickStatusChange(emp, 'ATIVO')}
                            title="Marcar como Ativo"
                            className={`px-2 py-0.5 rounded transition ${
                              empStatus === 'ATIVO' 
                                ? 'bg-emerald-600 text-white shadow-xs' 
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Ativo
                          </button>
                          <button
                            onClick={() => handleQuickStatusChange(emp, 'FÉRIAS')}
                            title="Marcar como Em Férias"
                            className={`px-2 py-0.5 rounded transition ${
                              empStatus === 'FÉRIAS'
                                ? 'bg-amber-500 text-white shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Férias
                          </button>
                          <button
                            onClick={() => handleQuickStatusChange(emp, 'AFASTADO')}
                            title="Marcar como Afastado"
                            className={`px-2 py-0.5 rounded transition ${
                              empStatus === 'AFASTADO'
                                ? 'bg-purple-600 text-white shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            Afastado
                          </button>
                        </div>
                      </td>

                      {/* Action buttons */}
                      <td className="p-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(emp)}
                            title="Editar Cadastro do Colaborador"
                            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs transition flex items-center gap-1"
                          >
                            <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                            <span>Editar</span>
                          </button>

                          <button
                            onClick={() => setEmployeeToDelete(emp)}
                            title="Excluir Definitivamente"
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
            <Users className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold text-slate-800">Nenhum colaborador encontrado com os filtros selecionados.</p>
          </div>
        )}
      </div>

      {/* ==================== MODAL: ADD / EDIT COLLABORATOR ==================== */}
      {(isAddingModalOpen || editingEmployee) && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden p-6 space-y-4 my-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  {editingEmployee ? <Edit3 className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {editingEmployee ? `Editar Colaborador: ${editingEmployee.name}` : 'Cadastrar Novo Colaborador'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ajuste dados cadastrais, cargo e status sem excluir o histórico
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setIsAddingModalOpen(false); setEditingEmployee(null); }} 
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Nome do colaborador..."
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Cargo *</label>
                  <select 
                    value={formData.role} 
                    onChange={(e) => {
                      const newRole = e.target.value as EmployeeRole;
                      let newGabarito: GabaritoType = formData.gabaritoType;
                      if (newRole === 'Carreteiro') {
                        newGabarito = 'GSP';
                      } else if (newRole === 'Motorista' || newRole === 'Ajudante') {
                        newGabarito = 'GSD';
                      } else if (newRole === 'Operador Armazém' || newRole === 'Líder Armazém') {
                        newGabarito = 'GSA';
                      }
                      setFormData(prev => ({ ...prev, role: newRole, gabaritoType: newGabarito }));
                    }} 
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-medium"
                  >
                    <option value="Motorista">Motorista de Entrega</option>
                    <option value="Ajudante">Ajudante de Entrega</option>
                    <option value="Carreteiro">Carreteiro (Puxada)</option>
                    <option value="Operador Armazém">Operador de Armazém</option>
                    <option value="Líder Armazém">Líder de Armazém</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Status Operacional *</label>
                  <select 
                    value={formData.status} 
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as EmployeeStatus }))} 
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-bold text-slate-900"
                  >
                    <option value="ATIVO">🟢 ATIVO (Operando)</option>
                    <option value="FÉRIAS">🏖️ FÉRIAS (Ausência Programada)</option>
                    <option value="AFASTADO">🏥 AFASTADO (Licença/Saúde)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Data de Admissão *</label>
                  <input
                    type="date"
                    value={formData.hireDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, hireDate: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Perfil de Experiência *</label>
                  <select 
                    value={formData.type} 
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'Novato' | 'Veterano' }))} 
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-medium"
                  >
                    <option value="Novato">Novato (Acompanhamento 3 Meses)</option>
                    <option value="Veterano">Veterano (Ciclo Periódico 60 dias)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Gabarito Principal</label>
                  <select 
                    value={formData.gabaritoType} 
                    onChange={(e) => setFormData(prev => ({ ...prev, gabaritoType: e.target.value as GabaritoType }))} 
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs font-medium"
                  >
                    <option value="GSD">GSD (Distribuição Urbano)</option>
                    <option value="GSA">GSA (Armazém / Depósito)</option>
                    <option value="GSP">GSP (Puxada / Transferência)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Matrícula</label>
                  <input
                    type="text"
                    placeholder="Ex: 10452"
                    value={formData.matricula}
                    onChange={(e) => setFormData(prev => ({ ...prev, matricula: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Veículo / Placa Atribuída</label>
                <input
                  type="text"
                  placeholder="Ex: KFD-8940 / Mercedes Atego..."
                  value={formData.assignedVehicle}
                  onChange={(e) => setFormData(prev => ({ ...prev, assignedVehicle: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-300 p-2 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button 
                  type="button" 
                  onClick={() => { setIsAddingModalOpen(false); setEditingEmployee(null); }} 
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  {editingEmployee ? 'Salvar Alterações' : 'Cadastrar Colaborador'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {employeeToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-2.5 bg-rose-100 rounded-full">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Excluir Registro de Colaborador</h3>
                <p className="text-xs text-slate-500">Atenção: Para manter o histórico, prefira alterar o status para Afastado.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Nome:</strong> {employeeToDelete.name}</p>
              <p><strong>Cargo:</strong> {employeeToDelete.role}</p>
              <p><strong>Status Atual:</strong> {employeeToDelete.status || 'ATIVO'}</p>
            </div>

            <p className="text-xs text-slate-600">
              Tem certeza que deseja apagar permanentemente este colaborador?
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
                Sim, Excluir Definitivamente
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
