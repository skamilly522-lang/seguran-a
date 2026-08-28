const fs = require('fs');
const path = require('path');

const realGsdDataText = fs.readFileSync(path.join(__dirname, '../src/data/realGsdData.ts'), 'utf8');
const initialDataText = fs.readFileSync(path.join(__dirname, '../src/data/initialData.ts'), 'utf8');

// Extract names from realGsdData.ts
const nameRegex = /"employeeName":\s*"([^"]+)"/g;
const evalNames = new Set();
let match;
while ((match = nameRegex.exec(realGsdDataText)) !== null) {
  evalNames.add(match[1].trim().toUpperCase());
}

// Extract names from RAW_EMPLOYEES
const rawNameRegex = /name:\s*'([^']+)'/g;
const rawNames = new Set();
while ((match = rawNameRegex.exec(initialDataText)) !== null) {
  rawNames.add(match[1].trim().toUpperCase());
}

console.log(`Unique employee names in CSV evaluations: ${evalNames.size}`);
console.log(`Unique employee names in RAW_EMPLOYEES: ${rawNames.size}`);

const missingInRaw = [];
evalNames.forEach(name => {
  if (!rawNames.has(name)) {
    missingInRaw.push(name);
  }
});

console.log('Missing in RAW_EMPLOYEES:', missingInRaw);
