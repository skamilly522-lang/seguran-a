const fs = require('fs');
const path = require('path');

const initialDataPath = path.join(__dirname, '../src/data/initialData.ts');
let text = fs.readFileSync(initialDataPath, 'utf8');

// 1. Ensure imports
if (!text.includes("import { REAL_GSA_EVALUATIONS, REAL_GSA_ACTION_PLANS } from './realGsaData';")) {
  text = `import { REAL_GSA_EVALUATIONS, REAL_GSA_ACTION_PLANS } from './realGsaData';\n` + text;
}

// 2. Add Equipe de Armazém to RAW_EMPLOYEES if not present
if (!text.includes("name: 'EQUIPE DE ARMAZÉM'")) {
  const armazemEntry = `  {\n    id: 'EMP_G_ARMAZEM',\n    matricula: 'ARM001',\n    name: 'EQUIPE DE ARMAZÉM',\n    role: 'Operador Armazém',\n    unit: 'Pau Brasil Guarabira',\n    hireDate: '2024-01-01',\n    type: 'Veterano',\n    gabaritoType: 'GSA',\n    nextEvaluationDueDate: '2026-07-01',\n    periodicityStatus: 'EM_DIA'\n  },\n`;
  const insertMarker = 'const RAW_EMPLOYEES: Employee[] = [\n';
  text = text.replace(insertMarker, insertMarker + armazemEntry);
}

// 3. Update INITIAL_EVALUATIONS and INITIAL_ACTION_PLANS
const evalsExportRegex = /export const INITIAL_EVALUATIONS: EvaluationRecord\[\] = [\s\S]*?;/;
const plansExportRegex = /export const INITIAL_ACTION_PLANS: ActionPlan\[\] = [\s\S]*?;/;

text = text.replace(evalsExportRegex, 'export const INITIAL_EVALUATIONS: EvaluationRecord[] = [...REAL_GSD_EVALUATIONS, ...REAL_GSA_EVALUATIONS];');
text = text.replace(plansExportRegex, 'export const INITIAL_ACTION_PLANS: ActionPlan[] = [...REAL_GSD_ACTION_PLANS, ...REAL_GSA_ACTION_PLANS];');

// Read files as text and extract JSON arrays
function parseTsArray(filePath, varName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`export const ${varName}: [^=]+= ([\\s\\S]*?);\\s*$`, 'm');
  const match = content.match(regex);
  if (match) {
    return JSON.parse(match[1]);
  }
  return [];
}

const gsdEvals = parseTsArray(path.join(__dirname, '../src/data/realGsdData.ts'), 'REAL_GSD_EVALUATIONS');
const gsaEvals = parseTsArray(path.join(__dirname, '../src/data/realGsaData.ts'), 'REAL_GSA_EVALUATIONS');
const gsdPlans = parseTsArray(path.join(__dirname, '../src/data/realGsdData.ts'), 'REAL_GSD_ACTION_PLANS');
const gsaPlans = parseTsArray(path.join(__dirname, '../src/data/realGsaData.ts'), 'REAL_GSA_ACTION_PLANS');

const allEvals = [...gsdEvals, ...gsaEvals];

const calcAvgScore = (list) => {
  if (list.length === 0) return 100;
  const sum = list.reduce((acc, e) => acc + (e.score || 0), 0);
  return parseFloat((sum / list.length).toFixed(1));
};

const gsdCompliance = calcAvgScore(gsdEvals);
const gsaCompliance = calcAvgScore(gsaEvals);
const overallCompliance = calcAvgScore(allEvals);

const totalOpenActionPlans = gsdPlans.length + gsaPlans.length;

console.log(`Dynamic Unit Calculation for Pau Brasil Guarabira:`);
console.log(`Total Evals: ${allEvals.length} (GSD: ${gsdEvals.length}, GSA: ${gsaEvals.length})`);
console.log(`GSD Compliance: ${gsdCompliance}%`);
console.log(`GSA Compliance: ${gsaCompliance}%`);
console.log(`Overall Compliance: ${overallCompliance}%`);
console.log(`Open Action Plans: ${totalOpenActionPlans}`);

const unitsCode = `export const INITIAL_UNITS: UnitSummary[] = [
  { unitName: 'Pau Brasil Guarabira', totalEvaluations: ${allEvals.length}, complianceRate: ${overallCompliance}, gsdCompliance: ${gsdCompliance}, gsaCompliance: ${gsaCompliance}, gspCompliance: 100, farolStatus: 'VERDE', openActionPlans: ${totalOpenActionPlans} },
];`;

const oldUnitsRegex = /export const INITIAL_UNITS: UnitSummary\[\] = \[\s*\{[\s\S]*?\}\s*\];/;
text = text.replace(oldUnitsRegex, unitsCode);

fs.writeFileSync(initialDataPath, text, 'utf8');
console.log('Successfully updated initialData.ts with combined GSD + GSA evaluations!');

// Update storage.ts V5
const storagePath = path.join(__dirname, '../src/utils/storage.ts');
let storageText = fs.readFileSync(storagePath, 'utf8');

storageText = storageText.replace(/STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V\d+';/, "STORAGE_KEY = 'GABARITOS_SEGURANCA_UNIFICADO_DATA_V5';");

fs.writeFileSync(storagePath, storageText, 'utf8');
console.log('Successfully updated storage.ts to STORAGE_KEY V5!');
