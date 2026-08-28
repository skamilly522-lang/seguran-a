const fs = require('fs');
const path = require('path');

const gsaRawText = `DJEANDERSON SOARES,03/01/2026,GUARABIRA,Sim,Ótimo,Ótimo,Ótimo,N/A,Ótimo,Ótimo,Ótimo,N/A,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Ótimo,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
DJEANDERSON SOARES,10/01/2026,GUARABIRA,Sim,Ótimo,Ótimo,Ótimo,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
MARIA KAMILLY DOS SANTOS,17/01/2026,GUARABIRA,Sim,Ótimo,Ótimo,Ótimo,N/A,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
DJEANDERSON SOARES,24/01/2026,GUARABIRA,Sim,Ótimo,Ótimo,Ótimo,N/A,Ótimo,Ótimo,Ótimo,N/A,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
DJEANDERSON SOARES,06/02/2026,GUARABIRA,Sim,Ótimo,Ótimo,Bom,Bom,Ótimo,Bom,Bom,N/A,Ruim,N/A,N/A,Ótimo,Ruim,Bom,Ótimo,N/A,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Bom,Bom,Bom,Bom,Sim,Ótimo,Ruim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
MARIA KAMILLY DOS SANTOS,13/02/2026,GUARABIRA,Sim,Ótimo,Ótimo,Bom,Bom,Ótimo,Bom,Bom,N/A,Ruim,N/A,N/A,Ótimo,Ruim,Bom,Ótimo,N/A,Ótimo,Ótimo,Sim,Ótimo,Ótimo,Bom,Bom,Bom,Bom,Sim,Ótimo,Ruim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo
MARIA KAMILLY DOS SANTOS,19/02/2026,Guarabira,Não,Sim,Ótimo,Bom,N/A,Ruim,Ótimo,Ótimo,N/A,Bom,N/A,Bom,Ruim,N/A,Ótimo,Ótimo,N/A,Ótimo,N/A,Bom,Ótimo,Bom,Ótimo,Bom,Bom,Bom,Bom,Ótimo,N/A,Ótimo,Bom,N/A,Ótimo,Ótimo,Bom,Ótimo,Ótimo
MARIA KAMILLY DOS SANTOS,27/02/2026,GUARABIRA,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,06/03/2026,GUARABIRA,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,13/03/2026,Guarabira,Sim,Sim,Sim,Ótimo,N/A,Bom,Bom,Sim,N/A,Bom,N/A,Bom,Ótimo,N/A,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Bom,Ótimo,Sim,Bom,Sim,Sim,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,20/03/2026,Guarabira,Sim,Sim,Sim,Bom,N/A,Bom,Ótimo,Sim,N/A,Bom,N/A,N/A,Bom,Bom,,Sim,Ótimo,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ruim,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,27/03/2026,GUARABIRA,Sim,Sim,Sim,Bom,N/A,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,03/04/2026,Guarabira,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Não,Ótimo,Ótimo,Ótimo,Bom,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,10/04/2026,Guarabira,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,N/A,Ótimo,N/A,Ruim,Ótimo,Ruim,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Bom,Ótimo,Sim,Ótimo,Não,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,17/04/2026,GUARABIRA,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,Ótimo,Bom,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Bom,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,24/04/2026,GUARABIRA,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,N/A,Bom,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Bom,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,08/05/2026,Guarabira,Sim,Sim,Sim,Bom,N/A,Ruim,Bom,Sim,N/A,Bom,N/A,N/A,Bom,N/A,Sim,Sim,N/A,Sim,Sim,Não,Bom,Ótimo,Ótimo,Ruim,Ótimo,Ótimo,Sim,Ótimo,Não,Sim,Ruim,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,15/05/2026,Guarabira,Sim,Sim,Sim,Ótimo,N/A,Bom,Ótimo,Sim,N/A,Bom,N/A,Ótimo,Ótimo,N/A,Sim,Sim,N/A,Sim,Sim,Sim,Bom,Bom,Ótimo,Ruim,Ótimo,Ótimo,Sim,Ótimo,Não,Não,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,22/05/2026,GUARABIRA,Sim,Sim,Sim,Bom,N/A,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Bom,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,29/05/2026,GUARABIRA,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,N/A,Bom,N/A,Ótimo,Bom,Ótimo,Sim,Sim,Ótimo,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,01/06/2026,Guarabira,Sim,Sim,Não,Ótimo,N/A,Bom,Ótimo,Sim,N/A,Bom,N/A,N/A,Ótimo,Bom,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ruim,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Bom,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,09/06/2026,Guarabira,Sim,Sim,Sim,Ótimo,N/A,Ótimo,Ótimo,Sim,N/A,Bom,N/A,Bom,Ótimo,N/A,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,Ótimo,Sim,Ótimo,Sim,Não,Ruim,Sim,N/A,Sim,Sim,Ótimo,Sim
DJEANDERSON SOARES,16/06/2026,GUARABIRA,Sim,Sim,Sim,Bom,N/A,Ótimo,Ótimo,Sim,N/A,Ótimo,N/A,Ótimo,Ótimo,Ótimo,Não,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim
MARIA KAMILLY DOS SANTOS,26/06/2026,GUARABIRA,Não,Sim,Sim,Ruim,N/A,Ótimo,Bom,Sim,N/A,Ruim,N/A,Ótimo,Ótimo,Ótimo,Sim,Sim,N/A,Sim,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim,Ótimo,Sim,Sim,Ótimo,Sim`;

const questionTexts = [
  'Piso - O piso está limpo e seco?',
  'Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?',
  'Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.',
  'Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?',
  'Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?',
  'Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?',
  'Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?',
  'Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?',
  'Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?',
  'Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?',
  'Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?',
  'Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?',
  'Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?',
  'Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?',
  'Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?',
  'Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?',
  'Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?',
  'Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?',
  'Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?',
  'Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?',
  'Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?',
  'Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?',
  'Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?',
  'Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?',
  '5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?',
  'Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?',
  'Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?',
  'Está empurrando a paleteira ao invés de puxar?',
  'Utiliza as travas do picking e a segregação homem/máquina?',
  'Está utilizando luvas adequadas na operação de empilhadeira e movimentação?',
  'Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?',
  'Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?',
  'Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?',
  'Faz uso correto do cinto de segurança durante a operação de equipamentos?',
  'Chave de ignição é retirada e entregue ao operador durante carga/descarga?',
  'Desce da cabine ou baia utilizando sempre os três pontos de apoio?',
  'Colaboradores do armazém lembram o tema e data do último treinamento de segurança?'
];

const questionCategories = [
  'Piso & Vias', 'Piso & Vias', 'Empilhamento', 'Combate a Incêndio', 'Estruturas',
  'Estruturas', 'Instalações Elétricas', 'Produtos Químicos', 'Emergência', 'Sinalização',
  'Trabalho em Altura', 'Operação de Pátio', 'Equipamentos Manuais', 'Visibilidade', 'Iluminação',
  'Maquinário', 'Manutenção', 'Ferramentas', 'Abastecimento', 'Pessoas & Comportamento',
  'EPIs', 'Ergonomia', 'Emergência', 'Segregação Homem-Máquina', '5S',
  'Meio Ambiente', 'Ergonomia', 'Movimentação', 'Segregação Homem-Máquina', 'EPIs',
  'Operação Segura', 'GLP', 'Inspeção de Veículos', 'Cinto de Segurança', 'Procedimentos de Pátio',
  'Três Pontos de Apoio', 'Treinamento'
];

function normalizeDate(raw) {
  if (!raw) return '2026-01-01';
  let clean = raw.trim().replace(/\//g, '-');
  const parts = clean.split('-');
  if (parts.length === 3) {
    if (parts[0].length === 2 && parts[2].length === 4) {
      return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }
  }
  return clean;
}

function classifyAnswer(val) {
  if (!val) return { status: 'N_A', isCompliant: true };
  const v = val.trim().toUpperCase();
  if (v === 'RUIM' || v === 'NÃO' || v === 'NAO' || v === 'NOK' || v === 'NÃO CONFORME') {
    return { status: 'NOK', isCompliant: false };
  }
  if (v === 'N/A' || v === 'NA' || v === '' || v.startsWith('NÃO POSSUI') || v.startsWith('NÃO HÁ')) {
    return { status: 'N_A', isCompliant: true };
  }
  return { status: 'OK', isCompliant: true };
}

function parseCsvLine(line) {
  return line.split(',').map(s => s.trim());
}

const lines = gsaRawText.trim().split('\n').filter(l => l.trim().length > 0);

const evaluations = [];
const actionPlans = [];

lines.forEach((line, idx) => {
  const parts = parseCsvLine(line);
  const evaluator = parts[0];
  const rawDate = parts[1];
  const dateStr = normalizeDate(rawDate);
  const unit = 'Pau Brasil Guarabira';
  
  // 37 question answers from parts[3] to parts[39]
  let totalOk = 0;
  let totalNok = 0;
  let totalNa = 0;

  const responses = [];
  const nokItems = [];

  for (let qIdx = 0; qIdx < 37; qIdx++) {
    const rawVal = parts[3 + qIdx];
    const { status, isCompliant } = classifyAnswer(rawVal);
    const qId = `GSA_${qIdx + 1}`;
    const qCode = `GSA-${String(qIdx + 1).padStart(2, '0')}`;
    const qText = questionTexts[qIdx];
    const qCat = questionCategories[qIdx];

    if (status === 'OK') totalOk++;
    else if (status === 'NOK') {
      totalNok++;
      nokItems.push({ qId, qCode, qText, qCat, rawVal });
    } else totalNa++;

    responses.push({
      questionId: qId,
      questionText: qText,
      category: qCat,
      status,
      isCompliant,
      observation: status === 'NOK' ? `Apontamento em auditoria semanal: ${rawVal}` : undefined
    });
  }

  const totalItems = totalOk + totalNok;
  const score = totalItems > 0 ? parseFloat(((totalOk / totalItems) * 100).toFixed(2)) : 100;

  const evalId = `EV_GSA_REAL_${String(idx + 1).padStart(3, '0')}`;

  evaluations.push({
    id: evalId,
    gabaritoType: 'GSA',
    unit,
    date: dateStr,
    evaluator,
    employeeName: 'Equipe de Armazém',
    employeeRole: 'Operador Armazém',
    employeeType: 'Veterano',
    semana: `Semana ${idx + 1} (${dateStr})`,
    totalItems: 37,
    totalOk,
    totalNok,
    totalNa,
    score,
    actionPlansCreatedCount: nokItems.length,
    generalNotes: totalNok > 0 
      ? `Auditoria Semanal GSA no Armazém de Guarabira. ${totalNok} ponto(s) de não conformidade detectado(s).`
      : `Auditoria Semanal GSA no Armazém de Guarabira. Instalações e processos 100% conformes.`,
    responses
  });

  nokItems.forEach((nok) => {
    actionPlans.push({
      id: `PA_GSA_${String(actionPlans.length + 1).padStart(3, '0')}`,
      evaluationId: evalId,
      gabaritoType: 'GSA',
      unit,
      itemText: nok.qText,
      problemDescription: `Inconformidade em "${nok.qText}" identificada na auditoria semanal de ${dateStr} por ${evaluator}.`,
      actionRequired: `Adequação e correção imediata referente a ${nok.qCat} no Armazém.`,
      responsible: `${evaluator} (Segurança do Trabalho)`,
      deadline: dateStr,
      status: 'Pendente',
      createdAt: dateStr
    });
  });
});

console.log(`GSA Evaluations parsed: ${evaluations.length}, Action Plans: ${actionPlans.length}`);

// Write realGsaData.ts
const fileContent = `import { EvaluationRecord, ActionPlan } from '../types';\n\nexport const REAL_GSA_EVALUATIONS: EvaluationRecord[] = ${JSON.stringify(evaluations, null, 2)};\n\nexport const REAL_GSA_ACTION_PLANS: ActionPlan[] = ${JSON.stringify(actionPlans, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/realGsaData.ts'), fileContent, 'utf8');
console.log('Successfully written src/data/realGsaData.ts');
