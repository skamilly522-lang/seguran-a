const fs = require('fs');
const path = require('path');

const initialDataPath = path.join(__dirname, '../src/data/initialData.ts');
let initialDataText = fs.readFileSync(initialDataPath, 'utf8');

// 1. Add import for REAL_GSD_EVALUATIONS and REAL_GSD_ACTION_PLANS at top if not present
if (!initialDataText.includes("import { REAL_GSD_EVALUATIONS, REAL_GSD_ACTION_PLANS } from './realGsdData';")) {
  initialDataText = `import { REAL_GSD_EVALUATIONS, REAL_GSD_ACTION_PLANS } from './realGsdData';\n` + initialDataText;
}

// 2. Update INITIAL_UNITS
const oldUnitsRegex = /export const INITIAL_UNITS: UnitSummary\[\] = \[\s*\{[^}]+\}\s*\];/;
const newUnitsCode = `export const INITIAL_UNITS: UnitSummary[] = [
  { unitName: 'Pau Brasil Guarabira', totalEvaluations: 153, complianceRate: 98.8, gsdCompliance: 98.8, gsaCompliance: 100, gspCompliance: 100, farolStatus: 'VERDE', openActionPlans: 44 },
];`;

initialDataText = initialDataText.replace(oldUnitsRegex, newUnitsCode);

// 3. Helper to calculate addDays in JS string
function addDaysStr(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

function computePeriodicityLocal(emp, todayStr = '2026-07-09') {
  const e = { ...emp };
  if (!e.lastEvaluationDate) {
    e.nextEvaluationDueDate = e.hireDate;
    e.periodicityStatus = e.type === 'Novato' ? 'NOVATO_REQUER_AVALIACAO' : 'ATRASADO';
    return e;
  }

  if (e.type === 'Novato') {
    if ((e.evaluationsCountInPeriod || 0) < 3) {
      const monthDue = addDaysStr(e.lastEvaluationDate, 30);
      e.nextEvaluationDueDate = monthDue;
      const daysRem = (new Date(monthDue).getTime() - new Date(todayStr).getTime()) / (1000 * 60 * 60 * 24);
      e.periodicityStatus = daysRem < 0 ? 'ATRASADO' : (daysRem <= 5 ? 'ALERTA' : 'EM_DIA');
    } else {
      e.type = 'Veterano';
      const due60 = addDaysStr(e.lastEvaluationDate, 60);
      e.nextEvaluationDueDate = due60;
      const daysRem = (new Date(due60).getTime() - new Date(todayStr).getTime()) / (1000 * 60 * 60 * 24);
      e.periodicityStatus = daysRem < 0 ? 'ATRASADO' : (daysRem <= 10 ? 'ALERTA' : 'EM_DIA');
    }
  } else {
    const due60 = addDaysStr(e.lastEvaluationDate, 60);
    e.nextEvaluationDueDate = due60;
    const daysRem = (new Date(due60).getTime() - new Date(todayStr).getTime()) / (1000 * 60 * 60 * 24);
    e.periodicityStatus = daysRem < 0 ? 'ATRASADO' : (daysRem <= 10 ? 'ALERTA' : 'EM_DIA');
  }
  return e;
}

// 4. Update exports for INITIAL_EMPLOYEES, INITIAL_EVALUATIONS, INITIAL_ACTION_PLANS
const endBlockRegex = /export const INITIAL_EMPLOYEES: Employee\[\] = [\s\S]*$/;

const newEndBlock = `export const INITIAL_EVALUATIONS: EvaluationRecord[] = REAL_GSD_EVALUATIONS;

export const INITIAL_ACTION_PLANS: ActionPlan[] = REAL_GSD_ACTION_PLANS;

export const INITIAL_EMPLOYEES: Employee[] = RAW_EMPLOYEES.map(emp => {
  const nameNorm = emp.name.trim().toUpperCase();
  const empEvals = INITIAL_EVALUATIONS.filter(e => e.employeeName.trim().toUpperCase() === nameNorm);
  if (empEvals.length === 0) {
    return {
      ...emp,
      lastEvaluationDate: undefined,
      evaluationsCountInPeriod: 0,
      nextEvaluationDueDate: emp.hireDate,
      periodicityStatus: emp.type === 'Novato' ? 'NOVATO_REQUER_AVALIACAO' : 'ATRASADO'
    };
  }
  const sorted = [...empEvals].sort((a, b) => b.date.localeCompare(a.date));
  const latestDate = sorted[0].date;
  const count = empEvals.length;

  const lastEval = sorted[0];
  const eType = lastEval.employeeType || emp.type || 'Veterano';

  const baseEmp = {
    ...emp,
    type: eType,
    lastEvaluationDate: latestDate,
    evaluationsCountInPeriod: count
  };

  const due60 = new Date(latestDate);
  due60.setDate(due60.getDate() + 60);
  const dueStr = due60.toISOString().split('T')[0];

  const today = new Date('2026-07-09');
  const daysRem = (due60.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  const status = daysRem < 0 ? 'ATRASADO' : (daysRem <= 10 ? 'ALERTA' : 'EM_DIA');

  return {
    ...baseEmp,
    nextEvaluationDueDate: dueStr,
    periodicityStatus: status
  };
});
`;

initialDataText = initialDataText.replace(endBlockRegex, newEndBlock);

fs.writeFileSync(initialDataPath, initialDataText, 'utf8');
console.log('Successfully updated src/data/initialData.ts');

// Also update STORAGE_KEY in storage.ts to force refresh localStorage with real data
const storagePath = path.join(__dirname, '../src/utils/storage.ts');
let storageText = fs.readFileSync(storagePath, 'utf8');

storageText = storageText.replace("STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V1';", "STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V2';");
storageText = storageText.replace("STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V2';", "STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V3';");

// Update default todayStr in storage.ts computeEmployeePeriodicity to '2026-07-09'
storageText = storageText.replace("todayStr: string = '2026-03-01'", "todayStr: string = '2026-07-09'");

fs.writeFileSync(storagePath, storageText, 'utf8');
console.log('Successfully updated src/utils/storage.ts to V3');
