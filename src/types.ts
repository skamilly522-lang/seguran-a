export type GabaritoType = 'GSD' | 'GSA' | 'GSP';

export type ResponseStatus = 'OK' | 'NOK' | 'N_A' | 'OPTIMO' | 'BOM' | 'SIM' | 'NAO';

export type ActionPlanStatus = 'Pendente' | 'Em Andamento' | 'Concluido' | 'Atrasado';

export type EmployeeRole = 'Motorista' | 'Ajudante' | 'Carreteiro' | 'Operador Armazém' | 'Líder Armazém';

export type EvaluationCategory = 'Novato' | 'Veterano' | 'Armazém Semanal';

export interface QuestionDefinition {
  id: string;
  code: string;
  category: string;
  question: string;
  description?: string;
  defaultOptions: ResponseStatus[];
}

export interface ChecklistResponseItem {
  questionId: string;
  questionText: string;
  category: string;
  status: ResponseStatus; // OK, NOK, N_A, etc.
  isCompliant: boolean; // Computed or specified
  observation?: string;
}

export interface ActionPlan {
  id: string;
  evaluationId: string;
  gabaritoType: GabaritoType;
  unit: string;
  itemText: string;
  problemDescription: string;
  actionRequired: string;
  responsible: string;
  deadline: string; // YYYY-MM-DD
  status: ActionPlanStatus;
  createdAt: string;
  completedAt?: string;
  notes?: string;
  questionId?: string;
}

export interface EvaluationRecord {
  id: string;
  gabaritoType: GabaritoType;
  unit: string; // e.g. "Pau Brasil Guarabira"
  date: string; // YYYY-MM-DD
  evaluator: string; // Avaliador / Criador
  semana?: string; // e.g. "1º semana Mt" (GSA)
  vehiclePlate?: string; // Placa (GSD/GSP)
  matricula?: string; // Matrícula (GSP)
  employeeName?: string; // Colaborador / Motorista / Ajudante
  employeeRole?: EmployeeRole;
  employeeType?: 'Novato' | 'Veterano';
  responses: ChecklistResponseItem[];
  score: number; // Percentage 0 - 100
  totalItems: number;
  totalOk: number;
  totalNok: number;
  totalNa: number;
  actionPlansCreatedCount: number;
  quickGestaoRef?: string; // Protocol or report number from Quick Gestão
  generalNotes?: string;
}

export type EmployeeStatus = 'ATIVO' | 'FÉRIAS' | 'AFASTADO';

export interface Employee {
  id: string;
  name: string;
  role: EmployeeRole;
  unit: string;
  matricula?: string;
  hireDate: string; // YYYY-MM-DD
  type: 'Novato' | 'Veterano';
  gabaritoType: GabaritoType; // GSD, GSP or GSA
  lastEvaluationDate?: string;
  evaluationsCountInPeriod?: number; // e.g., 1st, 2nd, 3rd month for Novatos
  nextEvaluationDueDate: string;
  periodicityStatus: 'EM_DIA' | 'ALERTA' | 'ATRASADO' | 'NOVATO_REQUER_AVALIACAO';
  assignedVehicle?: string;
  status?: EmployeeStatus;
}

export interface UnitSummary {
  unitName: string;
  totalEvaluations: number;
  complianceRate: number; // 0-100
  gsdCompliance: number;
  gsaCompliance: number;
  gspCompliance: number;
  farolStatus: 'VERDE' | 'AMARELO' | 'VERMELHO';
  openActionPlans: number;
}
