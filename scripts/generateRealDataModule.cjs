const fs = require('fs');
const path = require('path');

const csvRaw = `Nome da Unidade de Negócio,Data da Avaliação,Avaliador,Placa do Veículo,Motorista/Ajudante,Nome,"Escadas (piso, corrimão, antiderrapante, espaçamento dos degraus...)","Estado de Conservação (Luvas, botina, óculos, cinta lombar, uniforme)","Piso (oleoso, escorregadio, desnivelado, esburacado...)",Iluminação / fiações expostas,Condições de Empilhamento,Condições Higiênicas do Depósito,Quantidade de caixas para baldeio,Outros (especificar),A equipe está utilizando cinto de segurança durante o deslocamento?,"O caminhão foi estacionado em local adequado (permitido por lei), e junto ao meio fio?",Os ajudantes auxiliaram o motorista na manobra de estacionamento?,A equipe está utilizando todos os EPI´s no procedimento de descarga? NOK (sinalizar qual),A equipe utiliza o cone de segurança quando esta descarregando material na via?,"Um dos ajudantes sobe no estribo ou plataforma retrátil, quando houver, e entrega os produtos ao outro ajudante no chão?",O funcionário utiliza a haste de apoio para subir e descer da baia e/ou cabine do caminhão? O funcionário desce sem pular da baia ou da cabine do caminhão?,Os produtos foram acomodados no chão durante a montagem da pilha e não esta obstruindo a passagem de pedestre?,"O Ajudante aproxima o corpo da carga, abaixando-se dobrando os joelhos, mantendo a coluna ereta no movimento de agachamento?",O ajudante respeitou a altura máxima de empilhamento (4 Caixas ou 2 barris) no carrinho?,No deslocamento entre o caminhão e o PDV o ajudante teve cuidado ao atravessar vias e/ou obstáculos no percurso?,"No PDV se há escadas até o depósito, os ajudantes carregam apenas 01 caixa ?","Os funcionários utilizaram o carrinho para entregas e após guardaram o mesmo no local correto, prendendo-o à corrente? O carrinho estava em boas condições?",A equipe verificou o fechamentos das baias antes de sair do PDV?,"O recolhimento do dinheiro foi realizado de forma compartilhada (recebimento máximo de R$500,00 por vez)?",O motorista fez o giro 360° antes de sair com o veículo,"(Pneus, Buzina, Pisca, Cinto de Segurança...)","(Área de risco, rota de risco, buracos, difícil acesso...)"
Pau Brasil Guarabira,25-02-2026,Rafael,RLR8G79,Ajudante,EDSON RODRIGUES FILGUEIRA,Sim,Sim,Bom,Bom,Bom,Bom,Ótimo,Não,OK,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,N/A,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,RLR8G79,Ajudante,DJONAS RODRIGUES DOS SANTOS,,,,,,,,,,,,,,,,,,,,,,,,,,
Pau Brasil Guarabira,25-02-2026,Rafael,RLR8G79,Motorista,JOSE CARLOS DE LIMA ARAUJO,Sim,Sim,Bom,Bom,Bom,Bom,Ótimo,Não,OK,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,N/A,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B20,Ajudante,VITOR MACENA GOMES,Sim,Sim,Ótimo,Bom,Bom,Bom,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B20,Ajudante,ALAN JUNIOR MATIAS DA SILVA,Sim,Sim,Ótimo,Bom,Bom,Bom,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B20,Motorista,DIOGENES PEREIRA DA SILVA,Sim,Sim,Ótimo,Bom,Bom,Bom,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B50,Ajudante,ALAN JUNIOR MATIAS DA SILVA,Sim,Sim,Bom,Bom,Bom,Bom,Bom,Não possui rampa,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B50,Ajudante,JESSIEL DE SOUSA PRUDÊNCIO,Sim,Sim,Bom,Bom,Bom,Bom,Bom,Não possui rampa,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,25-02-2026,Rafael,TOZ8B50,Motorista,JEFFERSON JONES PAULINO COSTA,Sim,Sim,Bom,Bom,Bom,Bom,Bom,Não possui rampa,OK,OK,OK,OK,ok,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0552,Ajudante,GEOVANE ARAUJO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0552,Ajudante,GERLANDO MOREIRA DE AZEVEDO JUNIOR,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0552,Motorista,JOSENILSON INACIO DE ANDRADE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0532,Ajudante,ISAIAS DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0532,Ajudante,JOSE BRAZ DE LIMA NETO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-03-2026,Elisson,Oxo0532,Motorista,JOSE HONORIO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,Não possui rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,06-01-2026,Elisson,SLB4A26,Ajudante,CARLOS ALBERTO ROQUE DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Bom,N/a,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-01-2026,Elisson,SLB4A26,Ajudante,IDALMO FELIPE DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Bom,N/a,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-01-2026,Elisson,SLB4A26,Motorista,ADELSON SANTOS DE ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Bom,N/a,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-01-2026,Elisson,SLB3J76,Ajudante,VALTEIR BATISTA DE OLIVEIRA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-01-2026,Elisson,SLB3J76,Ajudante,DANIEL FIRMINO DA SILVA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-01-2026,Elisson,SLB3J76,Motorista,EDILSON DE ANDRADE LIMA JUNIOR,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,12-01-2026,Elisson,QSK7D92,Ajudante,ROMARIO RODRIGUES DA SILVA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,12-01-2026,Elisson,QSK7D92,Ajudante,RONALDO SILVA DE LIMA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,12-01-2026,Elisson,QSK7D92,Motorista,GILMAR DOS SANTOS FERNANDES,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,N/A,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,14-01-2026,ELISSON,OXO0532,Ajudante,ISAIAS DE OLIVEIRA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-01-2026,ELISSON,OXO0532,Ajudante,JOALISON JACINTO DOS SANTOS,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-01-2026,ELISSON,OXO0532,Motorista,VALDKLEBER DE SOUZA ALEXANDRE,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-01-2026,RAFAEL,NPR2601,Ajudante,KERCY JONES BERNARDINO DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,14-01-2026,RAFAEL,NPR2601,Ajudante,WALLISON PONTES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,14-01-2026,RAFAEL,NPR2601,Motorista,JOSENILSON INACIO DE ANDRADE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,15-01-2026,ELISSON,SLB3J76,Ajudante,JOSE DE MESQUITA FABRICIO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,15-01-2026,ELISSON,SLB3J76,Ajudante,JOAB DA SILVA MONTE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,15-01-2026,ELISSON,SLB3J76,Motorista,JOSE HONORIO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,16-01-2026,ELISSON,oxo0542,Ajudante,JEFFERSON SOARES PONTES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,16-01-2026,ELISSON,oxo0542,Motorista,DANILLO PEREIRA DOS SANTOS SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,19-01-2026,ELISSON,SLB3J76,Motorista,MANOEL ALVES DUTRA NETO,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13/01/2026,ELISSON,TOZ8B50,Ajudante,ALISSON ROMAO DA TRINDADE,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13/01/2026,ELISSON,NPR2601,Motorista,EDENILSON DE SOUSA SILVA,Sim,Sim,N/A,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-03-2026,ELISSON,SLB3J76,Ajudante,DANIEL FIRMINO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-03-2026,ELISSON,RLW0C17,Ajudante,JOALISON JACINTO DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-03-2026,ELISSON,SLB3J76,Ajudante,IDALMO FELIPE DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-03-2026,ELISSON,SLB3J76,Motorista,ADELSON SANTOS DE ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-03-2026,ELISSON,RLW0C17,Ajudante,VALTEIR BATISTA DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-03-2026,ELISSON,RLW0C17,Ajudante,CARLOS ALBERTO ROQUE DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-03-2026,ELISSON,RLW0C17,Motorista,EDILSON DE ANDRADE LIMA JUNIOR,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,SLB4A26,Ajudante,RONALDO SILVA DE LIMA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,SLB4A26,Ajudante,ROMARIO RODRIGUES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,SLB4A26,Motorista,GILMAR DOS SANTOS FERNANDES,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,TOZ8B20,Ajudante,ALISSON ROMAO DA TRINDADE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,TOZ8B20,Ajudante,JOAB DA SILVA MONTE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,10-03-2026,ELISSON,TOZ8B20,Motorista,DANILLO PEREIRA DOS SANTOS SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13-03-2026,ELISSON,NPR2601,Ajudante,JOSE DE MESQUITA FABRICIO,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13-03-2026,ELISSON,NPR2601,Ajudante,JEFFERSON SOARES PONTES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13-03-2026,ELISSON,NPR2601,Motorista,EDENILSON DE SOUSA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,11-03-2026,ELISSON,SLB3J76,Ajudante,WALLISON PONTES DA SILVA,Não,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,11-03-2026,ELISSON,SLB3J76,Ajudante,KERCY JONES BERNARDINO DOS SANTOS,Não,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,11-03-2026,ELISSON,SLB3J76,Motorista,JOSE MATUZALEM PONTES DE OLIVEIRA,Não,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-03-2026,ELISSON,qsk7d92,Ajudante,VITOR MACENA GOMES,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-03-2026,ELISSON,qsk7d92,Motorista,VALDKLEBER DE SOUZA ALEXANDRE,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,24-03-2026,ELISSON,SLB3J76,Ajudante,ITALO BRUNO SILVA DE MEDEIROS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,24-03-2026,ELISSON,SLB3J76,Motorista,JOSICLAUDIO DE OLIVEIRA RODRIGUES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,18-03-2026,ELISSON,TOZ8B20,Motorista,MANOEL ALVES DUTRA NETO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,06-04-2026,ELISSON,TOU7F39,Ajudante,ALAN JUNIOR MATIAS DA SILVA,Não,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NÃO HÁ ESCADAS,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-04-2026,ELISSON,TOU7F39,Motorista,JEFFERSON JONES PAULINO COSTA,Não,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NÃO HÁ ESCADAS,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-04-2026,ELISSON,OXO5532,Ajudante,EDSON RODRIGUES FILGUEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-04-2026,ELISSON,OXO5532,Motorista,JOSE CARLOS DE LIMA ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B50,Ajudante,GEOVANE ARAUJO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B50,Ajudante,ISAIAS DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B50,Motorista,DANILLO PEREIRA DOS SANTOS SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B20,Ajudante,IDALMO FELIPE DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B20,Ajudante,DANIEL FIRMINO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,04-05-2026,ELISSON,TOZ8B20,Motorista,JOSICLAUDIO DE OLIVEIRA RODRIGUES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-05-2026,ELISSON,RLR8G79,Ajudante,ITALO BRUNO SILVA DE MEDEIROS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-05-2026,ELISSON,RLR8G79,Ajudante,JOALISON JACINTO DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-05-2026,ELISSON,RLR8G79,Motorista,ADELSON SANTOS DE ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,NPR2601,Ajudante,ROMARIO RODRIGUES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,NPR2601,Ajudante,RONALDO SILVA DE LIMA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,NPR2601,Motorista,GILMAR DOS SANTOS FERNANDES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,SLB3J76,Ajudante,CARLOS ALBERTO ROQUE DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,SLB3J76,Ajudante,VALTEIR BATISTA DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08/05/2026,ELISSON,SLB3J76,Motorista,JOSE HONORIO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-05-2026,ELISSON,NPR2601,Ajudante,ALISSON ROMAO DA TRINDADE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-05-2026,ELISSON,NPR2601,Ajudante,JOAB DA SILVA MONTE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-05-2026,ELISSON,NPR2601,Motorista,EDILSON DE ANDRADE LIMA JUNIOR,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,14-05-2026,ELISSON,NPR2601,Motorista,JOSE MATUZALEM PONTES DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-05-2026,rafael,RLR8G79,Motorista,JOSENILSON INACIO DE ANDRADE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK
Pau Brasil Guarabira,13-05-2026,RAFAEL,SLB4A26,Ajudante,JEFFERSON SOARES PONTES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13-05-2026,RAFAEL,SLB4A26,Ajudante,WALLISON PONTES DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,13-05-2026,RAFAEL,SLB4A26,Motorista,VALDKLEBER DE SOUZA ALEXANDRE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-05-2026,RAFAEL,TOZ8B50,Ajudante,KERCY JONES BERNARDINO DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-05-2026,RAFAEL,TOZ8B50,Ajudante,JOSE DE MESQUITA FABRICIO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-05-2026,RAFAEL,TOZ8B50,Motorista,EDENILSON DE SOUSA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-05-2026,ELISSON,TOZ8B20,Ajudante,VITOR MACENA GOMES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-05-2026,ELISSON,TOZ8B20,Motorista,MANOEL ALVES DUTRA NETO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20-05-2026,ELISSON,TOU7F39,Ajudante,ALBERTO LUCAS ARAUJO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20-05-2026,ELISSON,TOU7F39,Ajudante,LEONARDO MAURICIO DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20-05-2026,ELISSON,TOU7F39,Motorista,DIOGENES PEREIRA DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20/04/2026,ELISSON,SLB4A26,Motorista,JOSICLAUDIO DE OLIVEIRA RODRIGUES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20/04/2026,ELISSON,SLB4A26,Ajudante,ITALO BRUNO SILVA DE MEDEIROS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,20/04/2026,rafael,NPR2601,Motorista,JOSE MATUZALEM PONTES DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,02-06-2026,ELISSON,TOZ8B50,Ajudante,ALBERTO LUCAS ARAUJO DA SILVA,Sim,Não,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,02-06-2026,ELISSON,TOZ8B50,Ajudante,LEONARDO MAURICIO DA SILVA,Sim,Não,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,02-06-2026,ELISSON,TOZ8B50,Motorista,EWERTON RODRIGUES DA SILVA,Sim,Não,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,08-06-2026,RAFAEL,RLR8G79,Ajudante,ABRAAO EVANGELISTA DOS SANTOS,Sim,Sim,Bom,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,08-06-2026,RAFAEL,RLR8G79,Ajudante,EDSON RODRIGUES FILGUEIRA,Sim,Sim,Bom,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,08-06-2026,RAFAEL,RLR8G79,Motorista,DANILLO PEREIRA DOS SANTOS SILVA,Sim,Sim,Bom,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,09-06-2026,ELISSON,TOZ8B20,Ajudante,ALAN JUNIOR MATIAS DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,09-06-2026,ELISSON,TOZ8B20,Motorista,JOSE CARLOS DE LIMA ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,10-06-2026,ELISSON,TOZ8B50,Motorista,JEFFERSON JONES PAULINO COSTA,Não,Sim,Ótimo,,Ótimo,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,17-06-2026,RAFAEL,NPR2601,Ajudante,RENAN DOS SANTOS LIMA,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,17-06-2026,RAFAEL,NPR2601,Ajudante,JORGE DO CARMO DAMIANO,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,17-06-2026,RAFAEL,NPR2601,Motorista,EDILSON DE ANDRADE LIMA JUNIOR,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,18-06-2026,ELISSON,oxo0542,Ajudante,IRIMARQUE JOSE BATISTA DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,18-06-2026,ELISSON,oxo0542,Ajudante,JOALISON IZAIAS DA SILVA,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,18-06-2026,ELISSON,oxo0542,Motorista,GILMAR DOS SANTOS FERNANDES,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,19-06-2026,RAFAEL,TOZ8B20,Ajudante,JANDEILSON BEZERRA LINS DA CRUZ,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,19-06-2026,RAFAEL,TOZ8B20,Motorista,ADELSON SANTOS DE ARAUJO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,24-06-2026,ELISSON,QSK7D92,Motorista,THIAGO JOSE SANTINO DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Bom,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A56,Ajudante,ROMARIO RODRIGUES DA SILVA,Não,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A56,Ajudante,RONALDO SILVA DE LIMA,Não,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A56,Motorista,EDILSON DE ANDRADE LIMA JUNIOR,Não,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A26,Ajudante,DANIEL FIRMINO DA SILVA,Sim,Sim,Bom,Bom,Bom,Ótimo,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,NOK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A26,Ajudante,IRIMARQUE JOSE BATISTA DOS SANTOS,Sim,Sim,Bom,Bom,Bom,Ótimo,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,NOK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03-07-2026,ELISSON,SLB4A26,Motorista,DANILLO PEREIRA DOS SANTOS SILVA,Sim,Sim,Bom,Bom,Bom,Ótimo,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,NOK,OK,NOK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QFG1259,Ajudante,WALLISON PONTES DA SILVA,Sim,Sim,Bom,Ótimo,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QFG1259,Ajudante,LEONARDO MAURICIO DA SILVA,Sim,Sim,Bom,Ótimo,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QFG1259,Motorista,JOSICLAUDIO DE OLIVEIRA RODRIGUES,Sim,Sim,Bom,Ótimo,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QSK7D92,Ajudante,JOALISON IZAIAS DA SILVA,Sim,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QSK7D92,Ajudante,JEFFERSON SOARES PONTES DA SILVA,Sim,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,01-07-2026,ELISSON,QSK7D92,Motorista,ADELSON SANTOS DE ARAUJO,Sim,Sim,Bom,Bom,Bom,Bom,Ótimo,Não Possui Rampa,OK,OK,OK,OK,NOK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03/07/2026,ELISSON,SLB4A26,Ajudante,EDSON RODRIGUES FILGUEIRA,Sim,Sim,Bom,Bom,Ótimo,Bom,Bom,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03/07/2026,ELISSON,SLB4A26,Ajudante,JORGE DO CARMO DAMIANO,Sim,Sim,Bom,Bom,Ótimo,Bom,Bom,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,03/07/2026,ELISSON,SLB4A26,Motorista,VALDKLEBER DE SOUZA ALEXANDRE,Sim,Sim,Bom,Bom,Ótimo,Bom,Bom,Não Possui Rampa,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,OK
Pau Brasil Guarabira,07-07-2026,ELISSON,TOZ8B50,Ajudante,IDALMO FELIPE DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-07-2026,ELISSON,TOZ8B50,Ajudante,JANDEILSON BEZERRA LINS DA CRUZ,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-07-2026,ELISSON,TOZ8B50,Motorista,EDENILSON DE SOUSA SILVA,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-07-2026,ELISSON,Oxo0532,Ajudante,KERCY JONES BERNARDINO DOS SANTOS,Não,Sim,Bom,Ótimo,Ótimo,Bom,Bom,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-07-2026,ELISSON,Oxo0532,Ajudante,ALBERTO LUCAS ARAUJO DA SILVA,Não,Sim,Bom,Ótimo,Ótimo,Bom,Bom,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,07-07-2026,ELISSON,Oxo0532,Motorista,JOSE MATUZALEM PONTES DE OLIVEIRA,Não,Sim,Bom,Ótimo,Ótimo,Bom,Bom,na,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-07-2026,ELISSON,TOZ8B20,Ajudante,CARLOS ALBERTO ROQUE DE OLIVEIRA,Sim,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-07-2026,ELISSON,TOZ8B20,Ajudante,JOALISON JACINTO DOS SANTOS,Sim,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-07-2026,ELISSON,TOZ8B20,Motorista,GILMAR DOS SANTOS FERNANDES,Sim,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-07-2026,ELISSON,SLB3J76,Ajudante,JOAB DA SILVA MONTE,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-07-2026,ELISSON,SLB3J76,Ajudante,ABRAAO AVANGELISTA DOS SANTOS,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,09-07-2026,ELISSON,SLB3J76,Motorista,MANOEL ALVES DUTRA NETO,Sim,Sim,Ótimo,Ótimo,Ótimo,Ótimo,Ótimo,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,02-07-2026,ELISSON,oxo053,Ajudante,ISAIAS DE OLIVEIRA,Não,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,02-07-2026,ELISSON,oxo053,Ajudante,GEOVANE ARAUJO DA SILVA,Não,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,02-07-2026,ELISSON,oxo053,Motorista,THIAGO JOSE SANTINO DOS SANTOS,Não,Sim,Bom,Bom,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-07-2026,RAFAEL RODRIGUES,RLR8G79,Ajudante,VALTEIR BATISTA DE OLIVEIRA,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-07-2026,RAFAEL RODRIGUES,RLR8G79,Ajudante,VITOR MACENA GOMES,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,06-07-2026,RAFAEL RODRIGUES,RLR8G79,Motorista,JOSE HONORIO DA SILVA,Sim,Sim,Ótimo,Ótimo,Bom,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-07-2026,ELISSON,QSK7D92,Ajudante,ITALO BRUNO SILVA DE MEDEIROS,Não,Sim,N/A,Ótimo,Ótimo,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A
Pau Brasil Guarabira,08-07-2026,ELISSON,QSK7D92,Ajudante,RENAN DOS SANTOS LIMA,Não,Sim,N/A,Ótimo,Ótimo,Bom,Bom,NA,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,OK,N/A,OK,OK,N/A`;

function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

const lines = csvRaw.trim().split('\n');
const rows = lines.slice(1).map(parseCsvLine).filter(r => r.length >= 6 && r[5]);

const gsdQuestionIds = [
  'GSD_1', 'GSD_2', 'GSD_3', 'GSD_4', 'GSD_5', 'GSD_6', 'GSD_7', 'GSD_8',
  'GSD_9', 'GSD_10', 'GSD_11', 'GSD_12', 'GSD_13', 'GSD_14', 'GSD_15', 'GSD_16',
  'GSD_17', 'GSD_18', 'GSD_19', 'GSD_20', 'GSD_21', 'GSD_22', 'GSD_23', 'GSD_24',
  'GSD_25', 'GSD_26'
];

const questionTexts = [
  'Escadas (piso, corrimão, antiderrapante, espaçamento dos degraus...)',
  'Estado de Conservação (Luvas, botina, óculos, cinta lombar, uniforme)',
  'Piso (oleoso, escorregadio, desnivelado, esburacado...)',
  'Iluminação / fiações expostas',
  'Condições de Empilhamento',
  'Condições Higiênicas do Depósito',
  'Quantidade de caixas para baldeio',
  'Outros aspectos observados na entrega',
  'A equipe está utilizando cinto de segurança durante o deslocamento?',
  'O caminhão foi estacionado em local adequado (permitido por lei), e junto ao meio fio?',
  'Os ajudantes auxiliaram o motorista na manobra de estacionamento?',
  'A equipe está utilizando todos os EPI´s no procedimento de descarga?',
  'A equipe utiliza o cone de segurança quando está descarregando material na via?',
  'Um dos ajudantes sobe no estribo ou plataforma retrátil e entrega os produtos ao outro ajudante no chão?',
  'O funcionário utiliza a haste de apoio para subir/descer e não pula da baia ou da cabine?',
  'Produtos acomodados no chão durante a montagem da pilha sem obstruir a passagem de pedestres?',
  'Ajudante aproxima o corpo da carga, dobrando os joelhos e mantendo a coluna ereta no agachamento?',
  'O ajudante respeitou a altura máxima de empilhamento (4 Caixas ou 2 barris) no carrinho?',
  'No deslocamento entre o caminhão e o PDV o ajudante teve cuidado ao atravessar vias e obstáculos?',
  'No PDV, se há escadas até o depósito, os ajudantes carregam apenas 01 caixa por vez?',
  'Funcionários utilizaram o carrinho para entregas e guardaram preso à corrente após uso em boas condições?',
  'A equipe verificou o fechamento das baias antes de sair do PDV?',
  'O recolhimento do dinheiro foi realizado de forma compartilhada (máximo R$500,00 por vez)?',
  'O motorista fez o giro 360° antes de sair com o veículo?',
  'Condições gerais do veículo (Pneus, Buzina, Pisca, Cinto de Segurança...)',
  'Avaliação das condições da rota (Área de risco, buracos, difícil acesso...)'
];

const questionCategories = [
  'Instalações & Estrutura', 'EPIs & Uniforme', 'Ambiente de Trabalho', 'Ambiente de Trabalho',
  'Armazenamento', 'Higiene & Organização', 'Operacional', 'Geral',
  'Trânsito & Veículo', 'Estacionamento & Manobra', 'Estacionamento & Manobra', 'Descarga & EPIs',
  'Segurança na Via', 'Ergonomia & Descarga', 'Acesso à Cabine/Baia', 'Organização no PDV',
  'Ergonomia', 'Ergonomia & Transporte', 'Deslocamento no PDV', 'Escadas no PDV',
  'Equipamentos de Apoio', 'Segurança do Veículo', 'Procedimento Financeiro', 'Inspeção Veicular',
  'Condições do Veículo', 'Análise de Risco de Rota'
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
  if (v === 'NOK' || v === 'NÃO' || v === 'NAO' || v === 'NÃO CONFORME') {
    return { status: 'NOK', isCompliant: false };
  }
  if (v === 'N/A' || v === 'NA' || v.startsWith('NÃO POSSUI') || v.startsWith('NÃO HÁ')) {
    return { status: 'N_A', isCompliant: true };
  }
  return { status: 'OK', isCompliant: true };
}

const evaluations = [];
const actionPlans = [];
const employeeEvalStats = {}; // name -> { count, lastDate }

rows.forEach((row, idx) => {
  const unit = 'Pau Brasil Guarabira';
  const rawDate = row[1];
  const dateStr = normalizeDate(rawDate);
  const evaluator = row[2] || 'Elisson';
  const plate = (row[3] || '').toUpperCase();
  const role = row[4] || 'Ajudante';
  const name = row[5].trim();

  if (!employeeEvalStats[name]) {
    employeeEvalStats[name] = { count: 0, lastDate: dateStr, role };
  }
  employeeEvalStats[name].count += 1;
  if (dateStr > employeeEvalStats[name].lastDate) {
    employeeEvalStats[name].lastDate = dateStr;
  }

  let totalOk = 0;
  let totalNok = 0;
  let totalNa = 0;

  const responses = [];
  const nokItems = [];

  for (let qIdx = 0; qIdx < 26; qIdx++) {
    const rawVal = row[6 + qIdx];
    const { status, isCompliant } = classifyAnswer(rawVal);
    const qId = gsdQuestionIds[qIdx];
    const qText = questionTexts[qIdx];
    const qCat = questionCategories[qIdx];

    if (status === 'OK') totalOk++;
    else if (status === 'NOK') {
      totalNok++;
      nokItems.push({ qId, qText, qCat, rawVal });
    } else totalNa++;

    responses.push({
      questionId: qId,
      questionText: qText,
      category: qCat,
      status,
      isCompliant,
      observation: status === 'NOK' ? `Inconformidade registrada em campo: ${rawVal || 'NÃO CONFORME'}` : undefined
    });
  }

  const totalItems = totalOk + totalNok;
  const score = totalItems > 0 ? parseFloat(((totalOk / totalItems) * 100).toFixed(2)) : 100;

  const evalId = `EV_GSD_REAL_${String(idx + 1).padStart(3, '0')}`;

  evaluations.push({
    id: evalId,
    gabaritoType: 'GSD',
    unit,
    date: dateStr,
    evaluator,
    vehiclePlate: plate,
    employeeName: name,
    employeeRole: role,
    employeeType: 'Veterano',
    totalItems: 26,
    totalOk,
    totalNok,
    totalNa,
    score,
    actionPlansCreatedCount: nokItems.length,
    generalNotes: totalNok > 0 
      ? `Avaliação GSD em rota (${plate}). ${totalNok} item(ns) não conforme(s).`
      : `Avaliação GSD em rota (${plate}). Operação 100% conforme.`,
    responses
  });

  nokItems.forEach((nok) => {
    actionPlans.push({
      id: `PA_REAL_${String(actionPlans.length + 1).padStart(3, '0')}`,
      evaluationId: evalId,
      gabaritoType: 'GSD',
      unit,
      itemText: nok.qText,
      problemDescription: `Inconformidade em "${nok.qText}" no acompanhamento de ${name} (${role}) na rota ${plate}.`,
      actionRequired: `Realizar alinhamento operacional e DDS de segurança referente a ${nok.qCat}.`,
      responsible: `${evaluator} (Segurança do Trabalho)`,
      deadline: dateStr,
      status: 'Pendente',
      createdAt: dateStr
    });
  });
});

console.log('Evaluated Employees Statistics:', Object.keys(employeeEvalStats).length);

// Build code string for src/data/realGsdData.ts
let tsContent = `import { EvaluationRecord, ActionPlan } from '../types';\n\n`;
tsContent += `export const REAL_GSD_EVALUATIONS: EvaluationRecord[] = ${JSON.stringify(evaluations, null, 2)};\n\n`;
tsContent += `export const REAL_GSD_ACTION_PLANS: ActionPlan[] = ${JSON.stringify(actionPlans, null, 2)};\n\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/realGsdData.ts'), tsContent);
console.log('Successfully wrote src/data/realGsdData.ts');
