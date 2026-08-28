const fs = require('fs');
const path = require('path');

const { REAL_GSD_EVALUATIONS, REAL_GSD_ACTION_PLANS } = require('../src/data/realGsdData.ts');

// We will read initialData.ts, update INITIAL_EVALUATIONS and INITIAL_ACTION_PLANS, and update RAW_EMPLOYEES.

console.log('Generating complete initialData.ts');
