const fs = require('fs');
const path = require('path');

const gsdQuestions = `export const GSD_QUESTIONS: QuestionDefinition[] = [
  { id: 'GSD_1', code: 'GSD-01', category: 'Instalações & Estrutura', question: 'Escadas (piso, corrimão, antiderrapante, espaçamento dos degraus...)', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_2', code: 'GSD-02', category: 'EPIs & Uniforme', question: 'Estado de Conservação (Luvas, botina, óculos, cinta lombar, uniforme)', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_3', code: 'GSD-03', category: 'Ambiente de Trabalho', question: 'Piso (oleoso, escorregadio, desnivelado, esburacado...)', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_4', code: 'GSD-04', category: 'Ambiente de Trabalho', question: 'Iluminação / fiações expostas', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_5', code: 'GSD-05', category: 'Armazenamento', question: 'Condições de Empilhamento', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_6', code: 'GSD-06', category: 'Higiene & Organização', question: 'Condições Higiênicas do Depósito', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_7', code: 'GSD-07', category: 'Operacional', question: 'Quantidade de caixas para baldeio', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_8', code: 'GSD-08', category: 'Geral', question: 'Outros aspectos observados na entrega', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_9', code: 'GSD-09', category: 'Trânsito & Veículo', question: 'A equipe está utilizando cinto de segurança durante o deslocamento?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_10', code: 'GSD-10', category: 'Estacionamento & Manobra', question: 'O caminhão foi estacionado em local adequado (permitido por lei), e junto ao meio fio?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_11', code: 'GSD-11', category: 'Estacionamento & Manobra', question: 'Os ajudantes auxiliaram o motorista na manobra de estacionamento?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_12', code: 'GSD-12', category: 'Descarga & EPIs', question: 'A equipe está utilizando todos os EPI´s no procedimento de descarga?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_13', code: 'GSD-13', category: 'Segurança na Via', question: 'A equipe utiliza o cone de segurança quando está descarregando material na via?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_14', code: 'GSD-14', category: 'Ergonomia & Descarga', question: 'Um dos ajudantes sobe no estribo ou plataforma retrátil e entrega os produtos ao outro ajudante no chão?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_15', code: 'GSD-15', category: 'Acesso à Cabine/Baia', question: 'O funcionário utiliza a haste de apoio para subir/descer e não pula da baia ou da cabine?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_16', code: 'GSD-16', category: 'Organização no PDV', question: 'Produtos acomodados no chão durante a montagem da pilha sem obstruir a passagem de pedestres?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_17', code: 'GSD-17', category: 'Ergonomia', question: 'Ajudante aproxima o corpo da carga, dobrando os joelhos e mantendo a coluna ereta no agachamento?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_18', code: 'GSD-18', category: 'Ergonomia & Transporte', question: 'O ajudante respeitou a altura máxima de empilhamento (4 Caixas ou 2 barris) no carrinho?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_19', code: 'GSD-19', category: 'Deslocamento no PDV', question: 'No deslocamento entre o caminhão e o PDV o ajudante teve cuidado ao atravessar vias e obstáculos?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_20', code: 'GSD-20', category: 'Escadas no PDV', question: 'No PDV, se há escadas até o depósito, os ajudantes carregam apenas 01 caixa por vez?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_21', code: 'GSD-21', category: 'Equipamentos de Apoio', question: 'Funcionários utilizaram o carrinho para entregas e guardaram preso à corrente após uso em boas condições?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_22', code: 'GSD-22', category: 'Segurança do Veículo', question: 'A equipe verificou o fechamento das baias antes de sair do PDV?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_23', code: 'GSD-23', category: 'Procedimento Financeiro', question: 'O recolhimento do dinheiro foi realizado de forma compartilhada (máximo R$500,00 por vez)?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_24', code: 'GSD-24', category: 'Inspeção Veicular', question: 'O motorista fez o giro 360° antes de sair com o veículo?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_25', code: 'GSD-25', category: 'Condições do Veículo', question: 'Condições gerais do veículo (Pneus, Buzina, Pisca, Cinto de Segurança...)', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSD_26', code: 'GSD-26', category: 'Análise de Risco de Rota', question: 'Avaliação das condições da rota (Área de risco, buracos, difícil acesso...)', defaultOptions: ['OK', 'NOK', 'N_A'] },
];`;

const gsaQuestions = `export const GSA_QUESTIONS: QuestionDefinition[] = [
  { id: 'GSA_1', code: 'GSA-01', category: 'Piso & Vias', question: 'Piso - O piso está limpo e seco?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_2', code: 'GSA-02', category: 'Piso & Vias', question: 'Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_3', code: 'GSA-03', category: 'Empilhamento', question: 'Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_4', code: 'GSA-04', category: 'Combate a Incêndio', question: 'Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_5', code: 'GSA-05', category: 'Estruturas', question: 'Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_6', code: 'GSA-06', category: 'Estruturas', question: 'Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_7', code: 'GSA-07', category: 'Instalações Elétricas', question: 'Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_8', code: 'GSA-08', category: 'Produtos Químicos', question: 'Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_9', code: 'GSA-09', category: 'Emergência', question: 'Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_10', code: 'GSA-10', category: 'Sinalização', question: 'Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_11', code: 'GSA-11', category: 'Trabalho em Altura', question: 'Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_12', code: 'GSA-12', category: 'Operação de Pátio', question: 'Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_13', code: 'GSA-13', category: 'Equipamentos Manuais', question: 'Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_14', code: 'GSA-14', category: 'Visibilidade', question: 'Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_15', code: 'GSA-15', category: 'Iluminação', question: 'Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_16', code: 'GSA-16', category: 'Maquinário', question: 'Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_17', code: 'GSA-17', category: 'Manutenção', question: 'Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_18', code: 'GSA-18', category: 'Ferramentas', question: 'Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_19', code: 'GSA-19', category: 'Abastecimento', question: 'Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_20', code: 'GSA-20', category: 'Pessoas & Comportamento', question: 'Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_21', code: 'GSA-21', category: 'EPIs', question: 'Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_22', code: 'GSA-22', category: 'Ergonomia', question: 'Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_23', code: 'GSA-23', category: 'Emergência', question: 'Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_24', code: 'GSA-24', category: 'Segregação Homem-Máquina', question: 'Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_25', code: 'GSA-25', category: '5S', question: '5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_26', code: 'GSA-26', category: 'Meio Ambiente', question: 'Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_27', code: 'GSA-27', category: 'Ergonomia', question: 'Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_28', code: 'GSA-28', category: 'Movimentação', question: 'Está empurrando a paleteira ao invés de puxar?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_29', code: 'GSA-29', category: 'Segregação Homem-Máquina', question: 'Utiliza as travas do picking e a segregação homem/máquina?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_30', code: 'GSA-30', category: 'EPIs', question: 'Está utilizando luvas adequadas na operação de empilhadeira e movimentação?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_31', code: 'GSA-31', category: 'Operação Segura', question: 'Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_32', code: 'GSA-32', category: 'GLP', question: 'Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_33', code: 'GSA-33', category: 'Inspeção de Veículos', question: 'Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_34', code: 'GSA-34', category: 'Cinto de Segurança', question: 'Faz uso correto do cinto de segurança durante a operação de equipamentos?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_35', code: 'GSA-35', category: 'Procedimentos de Pátio', question: 'Chave de ignição é retirada e entregue ao operador durante carga/descarga?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_36', code: 'GSA-36', category: 'Três Pontos de Apoio', question: 'Desce da cabine ou baia utilizando sempre os três pontos de apoio?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSA_37', code: 'GSA-37', category: 'Treinamento', question: 'Colaboradores do armazém lembram o tema e data do último treinamento de segurança?', defaultOptions: ['OK', 'NOK', 'N_A'] },
];`;

const gspQuestions = `export const GSP_QUESTIONS: QuestionDefinition[] = [
  { id: 'GSP_1', code: 'GSP-01', category: 'Inspeção de Partida', question: 'O motorista fez o giro 360º antes de sair para a rota?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_2', code: 'GSP-02', category: 'Amarração & Lona', question: 'Verificou presilhas da lona e amarração com cintas de segurança do sider?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_3', code: 'GSP-03', category: 'Documentação', question: 'Motorista está portando todos os documentos obrigatórios? (CNH, CRLV, ANTT)', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_4', code: 'GSP-04', category: 'Sider & Lona', question: 'Verificou o fechamento correto e seguro da lona antes de sair da Unidade?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_5', code: 'GSP-05', category: '5S & Cabine', question: '5S - Cabine da carreta está limpa, organizada e sem objetos soltos?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_6', code: 'GSP-06', category: 'Viagem & Rota', question: 'O plano de viagem do motorista foi preenchido corretamente sem rasuras?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_7', code: 'GSP-07', category: 'Carreta & Mecânica', question: 'Existe alguma ASA da carreta apresentando problema ou avaria?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_8', code: 'GSP-08', category: 'Elétrica & Sensores', question: 'Sensor do cinto de segurança e parte elétrica do cavalo/carreta perfeitamente funcionais?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_9', code: 'GSP-09', category: 'Pneus & Rodagem', question: 'Os pneus estão em perfeitas condições de uso (pressão, banda de rodagem, sem bolhas)?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_10', code: 'GSP-10', category: 'Freios', question: 'O sistema de freio pneumático/hidráulico está em perfeito estado?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_11', code: 'GSP-11', category: 'Cinto de Segurança', question: 'Motorista está utilizando o cinto de segurança durante todo o deslocamento?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_12', code: 'GSP-12', category: 'EPIs de Armazém', question: 'Conhece e porta os EPIs obrigatórios para o armazém (óculos, botina, luvas, capacete, colete refletivo)?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_13', code: 'GSP-13', category: 'Direção Defensiva', question: 'Sinaliza antecipadamente com pisca todas as mudanças de faixa e manobras?', defaultOptions: ['OK', 'NOK', 'N_A'] },
  { id: 'GSP_14', code: 'GSP-14', category: 'Telemetria & Velocidade', question: 'Respeita rigorosamente os limites de velocidade estabelecidos pela telemetria do veículo?', defaultOptions: ['OK', 'NOK', 'N_A'] },
];`;

const rawEmployeesList = [
  { id: 'EMP_9013', matricula: '9013', name: 'ALUISIO ALVES DE ALMEIDA JUNIOR', role: 'Carreteiro', unit: 'Pau Brasil Guarabira', hireDate: '2014-11-01', type: 'Veterano', gabaritoType: 'GSP' },
  { id: 'EMP_G1054', matricula: 'G1054', name: 'CARLOS ALBERTO ROQUE DE OLIVEIRA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-05', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1082', matricula: 'G1082', name: 'CESARIO FERREIRA DE VASCONCELOS', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-24', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1084', matricula: 'G1084', name: 'DANIEL FIRMINO DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-11-07', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1019', matricula: 'G1019', name: 'DANILLO PEREIRA DOS SANTOS SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1123', matricula: 'G1123', name: 'DJONAS RODRIGUES DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-10-09', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1034', matricula: 'G1034', name: 'EDENILSON DE SOUSA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1164', matricula: 'G1164', name: 'EDGLEYDSON MENDES DA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2026-07-20', type: 'Novato', gabaritoType: 'GSD' },
  { id: 'EMP_G1111', matricula: 'G1111', name: 'EDILSON DE ANDRADE LIMA JUNIOR', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2025-05-27', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1130', matricula: 'G1130', name: 'EDSON RODRIGUES FILGUEIRA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-12-11', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1167', matricula: 'G1167', name: 'ERALDO FERREIRA DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2026-08-06', type: 'Novato', gabaritoType: 'GSD' },
  { id: 'EMP_G1020', matricula: 'G1020', name: 'EWERTON RODRIGUES DA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1058', matricula: 'G1058', name: 'FELIPE GOMES DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-05', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1037', matricula: 'G1037', name: 'GEOVANE ARAUJO DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1059', matricula: 'G1059', name: 'GILMAR DOS SANTOS FERNANDES', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-05', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1060', matricula: 'G1060', name: 'HILDO STEFANI AQUINO MELO', role: 'Carreteiro', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-05', type: 'Veterano', gabaritoType: 'GSP' },
  { id: 'EMP_G1038', matricula: 'G1038', name: 'IDALMO FELIPE DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1158', matricula: 'G1158', name: 'IRIMARQUE JOSE BATISTA DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2026-06-16', type: 'Novato', gabaritoType: 'GSD' },
  { id: 'EMP_G1089', matricula: 'G1089', name: 'ISAIAS DE OLIVEIRA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-11-28', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1144', matricula: 'G1144', name: 'ITALO BRUNO SILVA DE MEDEIROS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2026-03-27', type: 'Novato', gabaritoType: 'GSD' },
  { id: 'EMP_G1156', matricula: 'G1156', name: 'JANDEILSON BEZERRA LINS DA CRUZ', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2026-06-16', type: 'Novato', gabaritoType: 'GSD' },
  { id: 'EMP_G1122', matricula: 'G1122', name: 'JEFFERSON JONES PAULINO COSTA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2025-10-09', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1070', matricula: 'G1070', name: 'JEFFERSON SOARES PONTES DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-08', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1071', matricula: 'G1071', name: 'JOAB DA SILVA MONTE', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-08', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1072', matricula: 'G1072', name: 'JOALISON IZAIAS DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-08', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1073', matricula: 'G1073', name: 'JOALISON JACINTO DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-08', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1024', matricula: 'G1024', name: 'JORGE DO CARMO DAMIANO', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1025', matricula: 'G1025', name: 'JOSE CARLOS DE LIMA ARAUJO', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1041', matricula: 'G1041', name: 'JOSE DE MESQUITA FABRICIO', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1026', matricula: 'G1026', name: 'JOSE EDUARDO DA SILVA CAVALCANTI', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1027', matricula: 'G1027', name: 'JOSE HONORIO DA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1042', matricula: 'G1042', name: 'JOSE MATUZALEM PONTES DE OLIVEIRA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1043', matricula: 'G1043', name: 'JOSENILSON INACIO DE ANDRADE', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1091', matricula: 'G1091', name: 'JOSICLAUDIO DE OLIVEIRA RODRIGUES', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-12-05', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1028', matricula: 'G1028', name: 'KERCY JONES BERNARDINO DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1029', matricula: 'G1029', name: 'LEONARDO MAURICIO DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1045', matricula: 'G1045', name: 'LUCAS GOMES TORQUATO', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1046', matricula: 'G1046', name: 'MANOEL ALVES DUTRA NETO', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1047', matricula: 'G1047', name: 'MANOEL MESSIAS VITORINO DA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1030', matricula: 'G1030', name: 'MARCIO DA SILVA QUEIROZ', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1128', matricula: 'G1128', name: 'RENAN DOS SANTOS LIMA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-11-20', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1031', matricula: 'G1031', name: 'ROMARIO RODRIGUES DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1049', matricula: 'G1049', name: 'RONALDO SILVA DE LIMA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1032', matricula: 'G1032', name: 'THIAGO JOSE SANTINO DOS SANTOS', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1077', matricula: 'G1077', name: 'VALDKLEBER DE SOUZA ALEXANDRE', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-18', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1033', matricula: 'G1033', name: 'VALTEIR BATISTA DE OLIVEIRA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-03', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1118', matricula: 'G1118', name: 'VITOR MACENA GOMES', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-08-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1170', matricula: 'G1170', name: 'ALAN JUNIOR MATIAS DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1171', matricula: 'G1171', name: 'DIOGENES PEREIRA DA SILVA', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1172', matricula: 'G1172', name: 'JESSIEL DE SOUSA PRUDÊNCIO', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1173', matricula: 'G1173', name: 'GERLANDO MOREIRA DE AZEVEDO JUNIOR', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1174', matricula: 'G1174', name: 'JOSE BRAZ DE LIMA NETO', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1175', matricula: 'G1175', name: 'ADELSON SANTOS DE ARAUJO', role: 'Motorista', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1176', matricula: 'G1176', name: 'ALISSON ROMAO DA TRINDADE', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1177', matricula: 'G1177', name: 'ALBERTO LUCAS ARAUJO DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1178', matricula: 'G1178', name: 'ABRAAO EVANGELISTA DOS SANTOS', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2025-01-01', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G1050', matricula: 'G1050', name: 'WALLISON PONTES DA SILVA', role: 'Ajudante', unit: 'Pau Brasil Guarabira', hireDate: '2024-10-04', type: 'Veterano', gabaritoType: 'GSD' },
  { id: 'EMP_G_ARMAZEM', matricula: 'ARM001', name: 'EQUIPE DE ARMAZÉM', role: 'Operador Armazém', unit: 'Pau Brasil Guarabira', hireDate: '2024-01-01', type: 'Veterano', gabaritoType: 'GSA' }
];

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

const fullFile = `import { REAL_GSD_EVALUATIONS, REAL_GSD_ACTION_PLANS } from './realGsdData';
import { REAL_GSA_EVALUATIONS, REAL_GSA_ACTION_PLANS } from './realGsaData';
import { QuestionDefinition, EvaluationRecord, ActionPlan, Employee, UnitSummary } from '../types';

${gsdQuestions}

${gsaQuestions}

${gspQuestions}

export const INITIAL_UNITS: UnitSummary[] = [
  { unitName: 'Pau Brasil Guarabira', totalEvaluations: ${allEvals.length}, complianceRate: ${overallCompliance}, gsdCompliance: ${gsdCompliance}, gsaCompliance: ${gsaCompliance}, gspCompliance: 100, farolStatus: 'VERDE', openActionPlans: ${totalOpenActionPlans} },
];

export const INITIAL_EVALUATIONS: EvaluationRecord[] = [...REAL_GSD_EVALUATIONS, ...REAL_GSA_EVALUATIONS];

export const INITIAL_ACTION_PLANS: ActionPlan[] = [...REAL_GSD_ACTION_PLANS, ...REAL_GSA_ACTION_PLANS];

const RAW_EMPLOYEES: Omit<Employee, 'nextEvaluationDueDate' | 'periodicityStatus'>[] = ${JSON.stringify(rawEmployeesList, null, 2)};

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

fs.writeFileSync(path.join(__dirname, '../src/data/initialData.ts'), fullFile, 'utf8');
console.log('Cleanly regenerated src/data/initialData.ts with proper Omit type!');
