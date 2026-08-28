const fs = require('fs');
const path = require('path');

const initialDataText = fs.readFileSync(path.join(__dirname, '../src/data/initialData.ts'), 'utf8');

const rawNameRegex = /name:\s*'([^']+)'/g;
const rawNames = [];
let match;
while ((match = rawNameRegex.exec(initialDataText)) !== null) {
  rawNames.push(match[1].trim());
}

console.log('RAW_EMPLOYEES names:', rawNames.sort());
