const fs = require('fs');
const path = require('path');

const initialDataText = fs.readFileSync(path.join(__dirname, '../src/data/initialData.ts'), 'utf8');

// Find missing names
const realGsdText = fs.readFileSync(path.join(__dirname, '../src/data/realGsdData.ts'), 'utf8');

const evalNameRegex = /"employeeName":\s*"([^"]+)"/g;
const evalNames = new Set();
let match;
while ((match = evalNameRegex.exec(realGsdText)) !== null) {
  evalNames.add(match[1].trim().toUpperCase());
}

const rawNameRegex = /name:\s*'([^']+)'/g;
const rawNames = new Set();
while ((match = rawNameRegex.exec(initialDataText)) !== null) {
  rawNames.add(match[1].trim().toUpperCase());
}

const missing = [];
evalNames.forEach(n => {
  if (!rawNames.has(n)) missing.push(n);
});

console.log('Total evaluated employee names in CSV:', evalNames.size);
console.log('Total registered employees in RAW_EMPLOYEES:', rawNames.size);
console.log('Evaluated names missing from RAW_EMPLOYEES:', missing);
