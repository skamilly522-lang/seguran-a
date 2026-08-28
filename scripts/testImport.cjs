const fs = require('fs');
const path = require('path');

const { REAL_GSD_EVALUATIONS, REAL_GSD_ACTION_PLANS } = require('../src/data/realGsdData.ts');

console.log('Evaluations count:', REAL_GSD_EVALUATIONS ? REAL_GSD_EVALUATIONS.length : 'undefined');
