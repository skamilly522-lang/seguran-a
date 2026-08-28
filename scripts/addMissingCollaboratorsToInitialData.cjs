const fs = require('fs');
const path = require('path');

const initialDataPath = path.join(__dirname, '../src/data/initialData.ts');
let text = fs.readFileSync(initialDataPath, 'utf8');

const missingCollaborators = [
  { matricula: 'G1170', name: 'ALAN JUNIOR MATIAS DA SILVA', role: 'Ajudante' },
  { matricula: 'G1171', name: 'DIOGENES PEREIRA DA SILVA', role: 'Motorista' },
  { matricula: 'G1172', name: 'JESSIEL DE SOUSA PRUDÊNCIO', role: 'Ajudante' },
  { matricula: 'G1173', name: 'GERLANDO MOREIRA DE AZEVEDO JUNIOR', role: 'Ajudante' },
  { matricula: 'G1174', name: 'JOSE BRAZ DE LIMA NETO', role: 'Ajudante' },
  { matricula: 'G1175', name: 'ADELSON SANTOS DE ARAUJO', role: 'Motorista' },
  { matricula: 'G1176', name: 'ALISSON ROMAO DA TRINDADE', role: 'Ajudante' },
  { matricula: 'G1177', name: 'ALBERTO LUCAS ARAUJO DA SILVA', role: 'Ajudante' },
  { matricula: 'G1178', name: 'ABRAAO EVANGELISTA DOS SANTOS', role: 'Ajudante' }
];

const newEmpEntries = missingCollaborators.map(c => `  {
    id: 'EMP_${c.matricula}',
    matricula: '${c.matricula}',
    name: '${c.name}',
    role: '${c.role}',
    unit: 'Pau Brasil Guarabira',
    hireDate: '2025-01-01',
    type: 'Veterano',
    gabaritoType: 'GSD'
  }`).join(',\n');

// Find end of RAW_EMPLOYEES array
const rawEmpMarker = '  {\n    id: \'EMP_G1050\',';
if (text.includes(rawEmpMarker)) {
  text = text.replace(rawEmpMarker, `${newEmpEntries},\n${rawEmpMarker}`);
  fs.writeFileSync(initialDataPath, text, 'utf8');
  console.log('Successfully appended missing collaborators to RAW_EMPLOYEES in initialData.ts');
} else {
  console.error('Could not find insertion marker in initialData.ts');
}
