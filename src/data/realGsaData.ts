import { EvaluationRecord, ActionPlan } from '../types';

export const REAL_GSA_EVALUATIONS: EvaluationRecord[] = [
  {
    "id": "EV_GSA_REAL_001",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-01-09",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 1 (2026-01-09)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 0,
    "totalNa": 7,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_002",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-01-16",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 2 (2026-01-16)",
    "totalItems": 37,
    "totalOk": 31,
    "totalNok": 0,
    "totalNa": 6,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_003",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-01-23",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 3 (2026-01-23)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 0,
    "totalNa": 7,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_004",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-01-30",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 4 (2026-01-30)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 1,
    "totalNa": 6,
    "score": 97,
    "actionPlansCreatedCount": 1,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: empilhador Paulo esqueceu de remover a chave da ignição da empilhadeira e conferente estava trafegando fora do plano de trafego",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "empilhador Paulo esqueceu de remover a chave da ignição da empilhadeira e conferente estava trafegando fora do plano de trafego"
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_005",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-02-06",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 5 (2026-02-06)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 3,
    "totalNa": 4,
    "score": 91,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: área precisando de repintura",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Área demarcada para circulação de pedestres precisando de repintura e adequação de placas."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Espelho convexo danificado ou visibilidade comprometida."
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_006",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-02-13",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 6 (2026-02-13)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 3,
    "totalNa": 4,
    "score": 91,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: empilhador Marivaldo esqueceu de tirar a chave da ignição da empilhadeira. Coaching aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Espelho convexo danificado ou visibilidade comprometida."
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "empilhador Marivaldo esqueceu de tirar a chave da ignição da empilhadeira. Coaching aplicado"
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_007",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-02-20",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 7 (2026-02-20)",
    "totalItems": 37,
    "totalOk": 26,
    "totalNok": 3,
    "totalNa": 8,
    "score": 90,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: visibilidade da etiqueta ruim necessitando de troca",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Visibilidade da etiqueta de identificação/liberação ruim, necessitando de troca."
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Paleteira apresentando avaria ou manuseio inadequado."
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_008",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-02-27",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 8 (2026-02-27)",
    "totalItems": 37,
    "totalOk": 34,
    "totalNok": 0,
    "totalNa": 3,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_009",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-03-06",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 9 (2026-03-06)",
    "totalItems": 37,
    "totalOk": 33,
    "totalNok": 0,
    "totalNa": 4,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_010",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-03-13",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 10 (2026-03-13)",
    "totalItems": 37,
    "totalOk": 32,
    "totalNok": 0,
    "totalNa": 5,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_011",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-03-20",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 11 (2026-03-20)",
    "totalItems": 37,
    "totalOk": 31,
    "totalNok": 1,
    "totalNa": 5,
    "score": 97,
    "actionPlansCreatedCount": 1,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: colaborador não estava respeitando o limite de distancia da empilhadeira coaching aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador não estava respeitando o limite de distancia da empilhadeira coaching aplicado"
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_012",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-03-27",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 12 (2026-03-27)",
    "totalItems": 37,
    "totalOk": 33,
    "totalNok": 0,
    "totalNa": 4,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_013",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-04-03",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 13 (2026-04-03)",
    "totalItems": 37,
    "totalOk": 32,
    "totalNok": 1,
    "totalNa": 4,
    "score": 97,
    "actionPlansCreatedCount": 1,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: colaborador Ozenildo esqueceu de remover colar . Coaching aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador Ozenildo esqueceu de remover colar . Coaching aplicado"
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_014",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-04-10",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 14 (2026-04-10)",
    "totalItems": 37,
    "totalOk": 32,
    "totalNok": 2,
    "totalNa": 3,
    "score": 94,
    "actionPlansCreatedCount": 2,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Trava-rodas não posicionado ou fora do padrão operacional seguro."
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Espelho convexo danificado ou visibilidade comprometida."
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_015",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-04-17",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 15 (2026-04-17)",
    "totalItems": 37,
    "totalOk": 34,
    "totalNok": 0,
    "totalNa": 3,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_016",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-04-24",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 16 (2026-04-24)",
    "totalItems": 37,
    "totalOk": 33,
    "totalNok": 0,
    "totalNa": 4,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_017",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-05-08",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 17 (2026-05-08)",
    "totalItems": 37,
    "totalOk": 27,
    "totalNok": 4,
    "totalNa": 6,
    "score": 87,
    "actionPlansCreatedCount": 4,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: colaborador esqueceu de remover a alinça . Coaching aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Inconformidade detectada no item GSA-06 durante auditoria semanal."
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador esqueceu de remover a alinça . Coaching aplicado"
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira."
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Operador não desligou a empilhadeira ou manteve garfos elevados na aproximação de pedestres."
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_018",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-05-15",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 18 (2026-05-15)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 2,
    "totalNa": 5,
    "score": 94,
    "actionPlansCreatedCount": 2,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: colaborador Dejean estava sem as luvas anticorte no momentodo manuseio",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira."
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador Dejean estava sem as luvas anticorte no momentodo manuseio"
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_019",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-05-22",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 19 (2026-05-22)",
    "totalItems": 37,
    "totalOk": 33,
    "totalNok": 0,
    "totalNa": 4,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_020",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-05-29",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 20 (2026-05-29)",
    "totalItems": 37,
    "totalOk": 34,
    "totalNok": 0,
    "totalNa": 3,
    "score": 100,
    "actionPlansCreatedCount": 0,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Todas as instalações e práticas operacionais em 100% de conformidade.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_021",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-06-05",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 21 (2026-06-05)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 2,
    "totalNa": 5,
    "score": 94,
    "actionPlansCreatedCount": 2,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: pilha inclinada com risco de tombamento. Gestor alertadado e pallet corrigido",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "NOK",
        "isCompliant": false,
        "observation": "pilha inclinada com risco de tombamento. Gestor alertadado e pallet corrigido"
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira."
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_022",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-06-12",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 22 (2026-06-12)",
    "totalItems": 37,
    "totalOk": 29,
    "totalNok": 2,
    "totalNa": 6,
    "score": 94,
    "actionPlansCreatedCount": 2,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: colaborador estava utilizando apenas uma luva",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador estava utilizando apenas uma luva"
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Operador não desligou a empilhadeira ou manteve garfos elevados na aproximação de pedestres."
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_023",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-06-19",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 23 (2026-06-19)",
    "totalItems": 37,
    "totalOk": 32,
    "totalNok": 1,
    "totalNa": 4,
    "score": 97,
    "actionPlansCreatedCount": 1,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: Armazém estava com as luzes apagadas. A pessoa autorizada ligou as luzes",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Armazém estava com as luzes apagadas. A pessoa autorizada ligou as luzes"
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_024",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-06-26",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 24 (2026-06-26)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 3,
    "totalNa": 4,
    "score": 91,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_025",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-07-03",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 25 (2026-07-03)",
    "totalItems": 37,
    "totalOk": 31,
    "totalNok": 2,
    "totalNa": 4,
    "score": 94,
    "actionPlansCreatedCount": 2,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_026",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-07-10",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 26 (2026-07-10)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 3,
    "totalNa": 4,
    "score": 91,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_027",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-07-17",
    "evaluator": "DJEANDERSON SOARES",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 27 (2026-07-17)",
    "totalItems": 37,
    "totalOk": 29,
    "totalNok": 4,
    "totalNa": 4,
    "score": 88,
    "actionPlansCreatedCount": 4,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por DJEANDERSON SOARES. Observações: conferente não estava respeitando a distancia minima da empilhadeira. Coaching aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "NOK",
        "isCompliant": false,
        "observation": "conferente não estava respeitando a distancia minima da empilhadeira. Coaching aplicado"
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_028",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-07-24",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 28 (2026-07-24)",
    "totalItems": 37,
    "totalOk": 29,
    "totalNok": 4,
    "totalNa": 4,
    "score": 88,
    "actionPlansCreatedCount": 4,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS. Observações: colaborador Dejean estava usando apenas uma mão ao pegar a alça da garrafeira. Coaching foi aplicado",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "NOK",
        "isCompliant": false,
        "observation": "colaborador Dejean estava usando apenas uma mão ao pegar a alça da garrafeira. Coaching foi aplicado"
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  },
  {
    "id": "EV_GSA_REAL_029",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "date": "2026-07-31",
    "evaluator": "MARIA KAMILLY DOS SANTOS",
    "employeeName": "Equipe de Armazém",
    "employeeRole": "Operador Armazém",
    "employeeType": "Veterano",
    "semana": "Semana 29 (2026-07-31)",
    "totalItems": 37,
    "totalOk": 30,
    "totalNok": 3,
    "totalNa": 4,
    "score": 91,
    "actionPlansCreatedCount": 3,
    "generalNotes": "Auditoria Semanal GSA no Armazém de Guarabira realizada por MARIA KAMILLY DOS SANTOS.",
    "responses": [
      {
        "questionId": "GSA_1",
        "questionText": "GSA-01 - Piso - O piso está limpo e seco?",
        "category": "Piso & Vias",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Piso com sujidade ou umidade necessitando de limpeza e secagem."
      },
      {
        "questionId": "GSA_2",
        "questionText": "GSA-02 - Piso - O piso está uniforme sem presença de ondulações que ofereçam riscos de acidentes?",
        "category": "Piso & Vias",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_3",
        "questionText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
        "category": "Empilhamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_4",
        "questionText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
        "category": "Combate a Incêndio",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente."
      },
      {
        "questionId": "GSA_5",
        "questionText": "GSA-05 - Plataformas e escadas - Todas as plataformas, escadas e guarda-corpos estão em boas condições e identificadas?",
        "category": "Estruturas",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_6",
        "questionText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
        "category": "Estruturas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_7",
        "questionText": "GSA-07 - Painéis elétricos - Há sinalização adequada, portas fechadas e ausência de gambiarras elétricas?",
        "category": "Instalações Elétricas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_8",
        "questionText": "GSA-08 - Armazenagem de produtos químicos - Armazenados adequadamente com bacia de contenção e incompatibilidade respeitada?",
        "category": "Produtos Químicos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_9",
        "questionText": "GSA-09 - Chuveiros de emergência e lava-olhos em perfeito funcionamento e com fluxo adequado?",
        "category": "Emergência",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_10",
        "questionText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
        "category": "Sinalização",
        "status": "NOK",
        "isCompliant": false,
        "observation": "Sinalização e faixas de pedestres desgastadas necessitando de revitalização."
      },
      {
        "questionId": "GSA_11",
        "questionText": "GSA-11 - Sistema de trava-quedas - Linha de vida, monovias, troles e trava-quedas em perfeitas condições de uso?",
        "category": "Trabalho em Altura",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_12",
        "questionText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
        "category": "Operação de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_13",
        "questionText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
        "category": "Equipamentos Manuais",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_14",
        "questionText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
        "category": "Visibilidade",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_15",
        "questionText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
        "category": "Iluminação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_16",
        "questionText": "GSA-16 - Empilhadeiras - Todas em boas condições (Alarme ré, faróis, giroflex, buzina, freios, cinto com dispositivo, extintor)?",
        "category": "Maquinário",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_17",
        "questionText": "GSA-17 - Oficina de empilhadeiras - Limpa, organizada e isenta de vazamentos de óleo no piso?",
        "category": "Manutenção",
        "status": "N_A",
        "isCompliant": true
      },
      {
        "questionId": "GSA_18",
        "questionText": "GSA-18 - Ferramentas e estiletes de segurança em boas condições de uso e armazenados corretamente?",
        "category": "Ferramentas",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_19",
        "questionText": "GSA-19 - Área de abastecimento - Realizada por colaborador treinado com gradil de GLP fechado com cadeado?",
        "category": "Abastecimento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_20",
        "questionText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
        "category": "Pessoas & Comportamento",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_21",
        "questionText": "GSA-21 - Pessoas - Utilização de EPIs obrigatórios (capacete com jugular, bota, óculos, colete refletivo) por próprios e terceiros?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_22",
        "questionText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_23",
        "questionText": "GSA-23 - Pessoas - Funcionários conhecem a rota de fuga e o ponto de apoio/encontro em emergências?",
        "category": "Emergência",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_24",
        "questionText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_25",
        "questionText": "GSA-25 - 5S - Apenas objetos necessários na área, com organização e limpeza rigorosas?",
        "category": "5S",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_26",
        "questionText": "GSA-26 - Coleta seletiva - Materiais separados corretamente nas lixeiras identificadas?",
        "category": "Meio Ambiente",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_27",
        "questionText": "GSA-27 - Aproxima o corpo da carga abaixando-se com joelhos dobrados e coluna ereta?",
        "category": "Ergonomia",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_28",
        "questionText": "GSA-28 - Está empurrando a paleteira ao invés de puxar?",
        "category": "Movimentação",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_29",
        "questionText": "GSA-29 - Utiliza as travas do picking e a segregação homem/máquina?",
        "category": "Segregação Homem-Máquina",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_30",
        "questionText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
        "category": "EPIs",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_31",
        "questionText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
        "category": "Operação Segura",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_32",
        "questionText": "GSA-32 - Realiza a troca do cilindro de GLP obrigatoriamente em duas pessoas?",
        "category": "GLP",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_33",
        "questionText": "GSA-33 - Faz o giro 360° em carretas e caminhões antes do carregamento/descarregamento?",
        "category": "Inspeção de Veículos",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_34",
        "questionText": "GSA-34 - Faz uso correto do cinto de segurança durante a operação de equipamentos?",
        "category": "Cinto de Segurança",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_35",
        "questionText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
        "category": "Procedimentos de Pátio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_36",
        "questionText": "GSA-36 - Desce da cabine ou baia utilizando sempre os três pontos de apoio?",
        "category": "Três Pontos de Apoio",
        "status": "OK",
        "isCompliant": true
      },
      {
        "questionId": "GSA_37",
        "questionText": "GSA-37 - Colaboradores do armazém lembram o tema e data do último treinamento de segurança?",
        "category": "Treinamento",
        "status": "OK",
        "isCompliant": true
      }
    ]
  }
];

export const REAL_GSA_ACTION_PLANS: ActionPlan[] = [
  {
    "id": "PA_GSA_001",
    "evaluationId": "EV_GSA_REAL_004",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
    "problemDescription": "Inconformidade em \"Chave de ignição é retirada e entregue ao operador durante carga/descarga?\" identificada na auditoria semanal de 2026-01-30 por DJEANDERSON SOARES. empilhador Paulo esqueceu de remover a chave da ignição da empilhadeira e conferente estava trafegando fora do plano de trafego",
    "actionRequired": "Orientar operadores sobre a retirada obrigatória da chave de ignição da empilhadeira e aplicar DDS.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-01-30",
    "status": "Pendente",
    "createdAt": "2026-01-30"
  },
  {
    "id": "PA_GSA_002",
    "evaluationId": "EV_GSA_REAL_005",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-02-06 por DJEANDERSON SOARES. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-02-06",
    "status": "Pendente",
    "createdAt": "2026-02-06"
  },
  {
    "id": "PA_GSA_003",
    "evaluationId": "EV_GSA_REAL_005",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-02-06 por DJEANDERSON SOARES. Área demarcada para circulação de pedestres precisando de repintura e adequação de placas.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-02-06",
    "status": "Pendente",
    "createdAt": "2026-02-06"
  },
  {
    "id": "PA_GSA_004",
    "evaluationId": "EV_GSA_REAL_005",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
    "problemDescription": "Inconformidade em \"Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?\" identificada na auditoria semanal de 2026-02-06 por DJEANDERSON SOARES. Espelho convexo danificado ou visibilidade comprometida.",
    "actionRequired": "Adequação e correção imediata referente a Visibilidade no Armazém.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-02-06",
    "status": "Pendente",
    "createdAt": "2026-02-06"
  },
  {
    "id": "PA_GSA_005",
    "evaluationId": "EV_GSA_REAL_006",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-02-13 por MARIA KAMILLY DOS SANTOS. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-13",
    "status": "Pendente",
    "createdAt": "2026-02-13"
  },
  {
    "id": "PA_GSA_006",
    "evaluationId": "EV_GSA_REAL_006",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
    "problemDescription": "Inconformidade em \"Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?\" identificada na auditoria semanal de 2026-02-13 por MARIA KAMILLY DOS SANTOS. Espelho convexo danificado ou visibilidade comprometida.",
    "actionRequired": "Adequação e correção imediata referente a Visibilidade no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-13",
    "status": "Pendente",
    "createdAt": "2026-02-13"
  },
  {
    "id": "PA_GSA_007",
    "evaluationId": "EV_GSA_REAL_006",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-35 - Chave de ignição é retirada e entregue ao operador durante carga/descarga?",
    "problemDescription": "Inconformidade em \"Chave de ignição é retirada e entregue ao operador durante carga/descarga?\" identificada na auditoria semanal de 2026-02-13 por MARIA KAMILLY DOS SANTOS. empilhador Marivaldo esqueceu de tirar a chave da ignição da empilhadeira. Coaching aplicado",
    "actionRequired": "Orientar operadores sobre a retirada obrigatória da chave de ignição da empilhadeira e aplicar DDS.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-13",
    "status": "Pendente",
    "createdAt": "2026-02-13"
  },
  {
    "id": "PA_GSA_008",
    "evaluationId": "EV_GSA_REAL_007",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-02-20 por MARIA KAMILLY DOS SANTOS. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-20",
    "status": "Pendente",
    "createdAt": "2026-02-20"
  },
  {
    "id": "PA_GSA_009",
    "evaluationId": "EV_GSA_REAL_007",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
    "problemDescription": "Inconformidade em \"Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?\" identificada na auditoria semanal de 2026-02-20 por MARIA KAMILLY DOS SANTOS. Visibilidade da etiqueta de identificação/liberação ruim, necessitando de troca.",
    "actionRequired": "Adequação e correção imediata referente a Estruturas no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-20",
    "status": "Pendente",
    "createdAt": "2026-02-20"
  },
  {
    "id": "PA_GSA_010",
    "evaluationId": "EV_GSA_REAL_007",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-13 - Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?",
    "problemDescription": "Inconformidade em \"Paleteiras - Estão sendo utilizadas corretamente e em bom estado de uso?\" identificada na auditoria semanal de 2026-02-20 por MARIA KAMILLY DOS SANTOS. Paleteira apresentando avaria ou manuseio inadequado.",
    "actionRequired": "Adequação e correção imediata referente a Equipamentos Manuais no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-02-20",
    "status": "Pendente",
    "createdAt": "2026-02-20"
  },
  {
    "id": "PA_GSA_011",
    "evaluationId": "EV_GSA_REAL_011",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
    "problemDescription": "Inconformidade em \"Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?\" identificada na auditoria semanal de 2026-03-20 por DJEANDERSON SOARES. colaborador não estava respeitando o limite de distancia da empilhadeira coaching aplicado",
    "actionRequired": "Realizar coaching de segurança sobre segregação homem/máquina e distância mínima de 5m.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-03-20",
    "status": "Pendente",
    "createdAt": "2026-03-20"
  },
  {
    "id": "PA_GSA_012",
    "evaluationId": "EV_GSA_REAL_013",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
    "problemDescription": "Inconformidade em \"Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?\" identificada na auditoria semanal de 2026-04-03 por DJEANDERSON SOARES. colaborador Ozenildo esqueceu de remover colar . Coaching aplicado",
    "actionRequired": "Reforçar proibição do uso de adornos (anéis, alianças, correntes) na área operacional.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-04-03",
    "status": "Pendente",
    "createdAt": "2026-04-03"
  },
  {
    "id": "PA_GSA_013",
    "evaluationId": "EV_GSA_REAL_014",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-12 - Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?",
    "problemDescription": "Inconformidade em \"Trava-roda - Utilizado adequadamente no carregamento, retorno de rota e puxada?\" identificada na auditoria semanal de 2026-04-10 por MARIA KAMILLY DOS SANTOS. Trava-rodas não posicionado ou fora do padrão operacional seguro.",
    "actionRequired": "Adequação e correção imediata referente a Operação de Pátio no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-04-10",
    "status": "Pendente",
    "createdAt": "2026-04-10"
  },
  {
    "id": "PA_GSA_014",
    "evaluationId": "EV_GSA_REAL_014",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-14 - Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?",
    "problemDescription": "Inconformidade em \"Espelhos convexos - Em boas condições e na quantidade necessária para os cruzamentos do armazém?\" identificada na auditoria semanal de 2026-04-10 por MARIA KAMILLY DOS SANTOS. Espelho convexo danificado ou visibilidade comprometida.",
    "actionRequired": "Adequação e correção imediata referente a Visibilidade no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-04-10",
    "status": "Pendente",
    "createdAt": "2026-04-10"
  },
  {
    "id": "PA_GSA_015",
    "evaluationId": "EV_GSA_REAL_017",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-06 - Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?",
    "problemDescription": "Inconformidade em \"Equipamentos de elevação (racks, prateleiras, paleteiras) são inspecionados e possuem etiquetas de liberação/segregação?\" identificada na auditoria semanal de 2026-05-08 por DJEANDERSON SOARES. Inconformidade detectada no item GSA-06 durante auditoria semanal.",
    "actionRequired": "Adequação e correção imediata referente a Estruturas no Armazém.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-05-08",
    "status": "Pendente",
    "createdAt": "2026-05-08"
  },
  {
    "id": "PA_GSA_016",
    "evaluationId": "EV_GSA_REAL_017",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-20 - Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?",
    "problemDescription": "Inconformidade em \"Pessoas - Funcionários retiram adornos (relógios, anéis) ao acessar a área operacional?\" identificada na auditoria semanal de 2026-05-08 por DJEANDERSON SOARES. colaborador esqueceu de remover a alinça . Coaching aplicado",
    "actionRequired": "Reforçar proibição do uso de adornos (anéis, alianças, correntes) na área operacional.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-05-08",
    "status": "Pendente",
    "createdAt": "2026-05-08"
  },
  {
    "id": "PA_GSA_017",
    "evaluationId": "EV_GSA_REAL_017",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
    "problemDescription": "Inconformidade em \"Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?\" identificada na auditoria semanal de 2026-05-08 por DJEANDERSON SOARES. Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira.",
    "actionRequired": "Realizar coaching de segurança sobre segregação homem/máquina e distância mínima de 5m.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-05-08",
    "status": "Pendente",
    "createdAt": "2026-05-08"
  },
  {
    "id": "PA_GSA_018",
    "evaluationId": "EV_GSA_REAL_017",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
    "problemDescription": "Inconformidade em \"Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?\" identificada na auditoria semanal de 2026-05-08 por DJEANDERSON SOARES. Operador não desligou a empilhadeira ou manteve garfos elevados na aproximação de pedestres.",
    "actionRequired": "Adequação e correção imediata referente a Operação Segura no Armazém.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-05-08",
    "status": "Pendente",
    "createdAt": "2026-05-08"
  },
  {
    "id": "PA_GSA_019",
    "evaluationId": "EV_GSA_REAL_018",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
    "problemDescription": "Inconformidade em \"Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?\" identificada na auditoria semanal de 2026-05-15 por MARIA KAMILLY DOS SANTOS. Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira.",
    "actionRequired": "Realizar coaching de segurança sobre segregação homem/máquina e distância mínima de 5m.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-05-15",
    "status": "Pendente",
    "createdAt": "2026-05-15"
  },
  {
    "id": "PA_GSA_020",
    "evaluationId": "EV_GSA_REAL_018",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
    "problemDescription": "Inconformidade em \"Está utilizando luvas adequadas na operação de empilhadeira e movimentação?\" identificada na auditoria semanal de 2026-05-15 por MARIA KAMILLY DOS SANTOS. colaborador Dejean estava sem as luvas anticorte no momentodo manuseio",
    "actionRequired": "Disponibilizar e fiscalizar o uso obrigatório das luvas de proteção adequadas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-05-15",
    "status": "Pendente",
    "createdAt": "2026-05-15"
  },
  {
    "id": "PA_GSA_021",
    "evaluationId": "EV_GSA_REAL_021",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-03 - Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.",
    "problemDescription": "Inconformidade em \"Empilhamento de produto - Segue o padrão do manual de segurança em armazéns? Verificar se existem ruas com lotes inclinados.\" identificada na auditoria semanal de 2026-06-05 por DJEANDERSON SOARES. pilha inclinada com risco de tombamento. Gestor alertadado e pallet corrigido",
    "actionRequired": "Realizar alinhamento com empilhadores e corrigir inclinação dos pallets.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-06-05",
    "status": "Pendente",
    "createdAt": "2026-06-05"
  },
  {
    "id": "PA_GSA_022",
    "evaluationId": "EV_GSA_REAL_021",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
    "problemDescription": "Inconformidade em \"Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?\" identificada na auditoria semanal de 2026-06-05 por DJEANDERSON SOARES. Pedestre/conferente dentro do raio de segurança de 5 metros da empilhadeira.",
    "actionRequired": "Realizar coaching de segurança sobre segregação homem/máquina e distância mínima de 5m.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-06-05",
    "status": "Pendente",
    "createdAt": "2026-06-05"
  },
  {
    "id": "PA_GSA_023",
    "evaluationId": "EV_GSA_REAL_022",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-30 - Está utilizando luvas adequadas na operação de empilhadeira e movimentação?",
    "problemDescription": "Inconformidade em \"Está utilizando luvas adequadas na operação de empilhadeira e movimentação?\" identificada na auditoria semanal de 2026-06-12 por MARIA KAMILLY DOS SANTOS. colaborador estava utilizando apenas uma luva",
    "actionRequired": "Disponibilizar e fiscalizar o uso obrigatório das luvas de proteção adequadas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-12",
    "status": "Pendente",
    "createdAt": "2026-06-12"
  },
  {
    "id": "PA_GSA_024",
    "evaluationId": "EV_GSA_REAL_022",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-31 - Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?",
    "problemDescription": "Inconformidade em \"Desliga a empilhadeira e abaixa os garfos até o solo quando alguém se aproxima?\" identificada na auditoria semanal de 2026-06-12 por MARIA KAMILLY DOS SANTOS. Operador não desligou a empilhadeira ou manteve garfos elevados na aproximação de pedestres.",
    "actionRequired": "Adequação e correção imediata referente a Operação Segura no Armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-12",
    "status": "Pendente",
    "createdAt": "2026-06-12"
  },
  {
    "id": "PA_GSA_025",
    "evaluationId": "EV_GSA_REAL_023",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-15 - Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?",
    "problemDescription": "Inconformidade em \"Iluminação das áreas (Logística, Amarração, Repack, Oficina de Empilhadeiras e Pit Stop) adequada?\" identificada na auditoria semanal de 2026-06-19 por MARIA KAMILLY DOS SANTOS. Armazém estava com as luzes apagadas. A pessoa autorizada ligou as luzes",
    "actionRequired": "Manter iluminação operacional ligada e substituir lâmpadas queimadas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-19",
    "status": "Pendente",
    "createdAt": "2026-06-19"
  },
  {
    "id": "PA_GSA_026",
    "evaluationId": "EV_GSA_REAL_024",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-06-26 por MARIA KAMILLY DOS SANTOS. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-26",
    "status": "Pendente",
    "createdAt": "2026-06-26"
  },
  {
    "id": "PA_GSA_027",
    "evaluationId": "EV_GSA_REAL_024",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-06-26 por MARIA KAMILLY DOS SANTOS. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-26",
    "status": "Pendente",
    "createdAt": "2026-06-26"
  },
  {
    "id": "PA_GSA_028",
    "evaluationId": "EV_GSA_REAL_024",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-06-26 por MARIA KAMILLY DOS SANTOS. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-06-26",
    "status": "Pendente",
    "createdAt": "2026-06-26"
  },
  {
    "id": "PA_GSA_029",
    "evaluationId": "EV_GSA_REAL_025",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-07-03 por DJEANDERSON SOARES. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-03",
    "status": "Pendente",
    "createdAt": "2026-07-03"
  },
  {
    "id": "PA_GSA_030",
    "evaluationId": "EV_GSA_REAL_025",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-07-03 por DJEANDERSON SOARES. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-03",
    "status": "Pendente",
    "createdAt": "2026-07-03"
  },
  {
    "id": "PA_GSA_031",
    "evaluationId": "EV_GSA_REAL_026",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-07-10 por MARIA KAMILLY DOS SANTOS. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-10",
    "status": "Pendente",
    "createdAt": "2026-07-10"
  },
  {
    "id": "PA_GSA_032",
    "evaluationId": "EV_GSA_REAL_026",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-07-10 por MARIA KAMILLY DOS SANTOS. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-10",
    "status": "Pendente",
    "createdAt": "2026-07-10"
  },
  {
    "id": "PA_GSA_033",
    "evaluationId": "EV_GSA_REAL_026",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-07-10 por MARIA KAMILLY DOS SANTOS. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-10",
    "status": "Pendente",
    "createdAt": "2026-07-10"
  },
  {
    "id": "PA_GSA_034",
    "evaluationId": "EV_GSA_REAL_027",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-07-17 por DJEANDERSON SOARES. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-17",
    "status": "Pendente",
    "createdAt": "2026-07-17"
  },
  {
    "id": "PA_GSA_035",
    "evaluationId": "EV_GSA_REAL_027",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-07-17 por DJEANDERSON SOARES. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-17",
    "status": "Pendente",
    "createdAt": "2026-07-17"
  },
  {
    "id": "PA_GSA_036",
    "evaluationId": "EV_GSA_REAL_027",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-07-17 por DJEANDERSON SOARES. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-17",
    "status": "Pendente",
    "createdAt": "2026-07-17"
  },
  {
    "id": "PA_GSA_037",
    "evaluationId": "EV_GSA_REAL_027",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-24 - Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?",
    "problemDescription": "Inconformidade em \"Pessoas - Mantêm distância de pelo menos 5 metros de empilhadeiras em operação?\" identificada na auditoria semanal de 2026-07-17 por DJEANDERSON SOARES. conferente não estava respeitando a distancia minima da empilhadeira. Coaching aplicado",
    "actionRequired": "Realizar coaching de segurança sobre segregação homem/máquina e distância mínima de 5m.",
    "responsible": "DJEANDERSON SOARES (Segurança do Trabalho)",
    "deadline": "2026-07-17",
    "status": "Pendente",
    "createdAt": "2026-07-17"
  },
  {
    "id": "PA_GSA_038",
    "evaluationId": "EV_GSA_REAL_028",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-07-24 por MARIA KAMILLY DOS SANTOS. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-24",
    "status": "Pendente",
    "createdAt": "2026-07-24"
  },
  {
    "id": "PA_GSA_039",
    "evaluationId": "EV_GSA_REAL_028",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-07-24 por MARIA KAMILLY DOS SANTOS. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-24",
    "status": "Pendente",
    "createdAt": "2026-07-24"
  },
  {
    "id": "PA_GSA_040",
    "evaluationId": "EV_GSA_REAL_028",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-07-24 por MARIA KAMILLY DOS SANTOS. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-24",
    "status": "Pendente",
    "createdAt": "2026-07-24"
  },
  {
    "id": "PA_GSA_041",
    "evaluationId": "EV_GSA_REAL_028",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-22 - Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?",
    "problemDescription": "Inconformidade em \"Pessoas - Seguem os procedimentos de segurança e ergonomia na movimentação manual de cargas?\" identificada na auditoria semanal de 2026-07-24 por MARIA KAMILLY DOS SANTOS. colaborador Dejean estava usando apenas uma mão ao pegar a alça da garrafeira. Coaching foi aplicado",
    "actionRequired": "Treinar colaboradores quanto à ergonomia correta e pegada bimanual em caixas/garrafeiras.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-24",
    "status": "Pendente",
    "createdAt": "2026-07-24"
  },
  {
    "id": "PA_GSA_042",
    "evaluationId": "EV_GSA_REAL_029",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-01 - Piso - O piso está limpo e seco?",
    "problemDescription": "Inconformidade em \"Piso - O piso está limpo e seco?\" identificada na auditoria semanal de 2026-07-31 por MARIA KAMILLY DOS SANTOS. Piso com sujidade ou umidade necessitando de limpeza e secagem.",
    "actionRequired": "Acionar equipe de 5S/limpeza para higienização e secagem do piso do armazém.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-31",
    "status": "Pendente",
    "createdAt": "2026-07-31"
  },
  {
    "id": "PA_GSA_043",
    "evaluationId": "EV_GSA_REAL_029",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-04 - Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?",
    "problemDescription": "Inconformidade em \"Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos, inspecionados e em boas condições?\" identificada na auditoria semanal de 2026-07-31 por MARIA KAMILLY DOS SANTOS. Equipamentos de combate a incêndio (extintor/hidrante) com obstrução ou inspeção pendente.",
    "actionRequired": "Desobstruir imediatamente os equipamentos de combate a incêndio e atualizar inspeção mensal.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-31",
    "status": "Pendente",
    "createdAt": "2026-07-31"
  },
  {
    "id": "PA_GSA_044",
    "evaluationId": "EV_GSA_REAL_029",
    "gabaritoType": "GSA",
    "unit": "Pau Brasil Guarabira",
    "itemText": "GSA-10 - Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?",
    "problemDescription": "Inconformidade em \"Sinalização - Área demarcada para pedestres e placas de sinalização visíveis e adequadas?\" identificada na auditoria semanal de 2026-07-31 por MARIA KAMILLY DOS SANTOS. Sinalização e faixas de pedestres desgastadas necessitando de revitalização.",
    "actionRequired": "Solicitar manutenção predial para repintura das faixas de pedestres e reposição de placas.",
    "responsible": "MARIA KAMILLY DOS SANTOS (Segurança do Trabalho)",
    "deadline": "2026-07-31",
    "status": "Pendente",
    "createdAt": "2026-07-31"
  }
];
