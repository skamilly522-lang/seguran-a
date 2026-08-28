import React, { useState, useMemo } from 'react';
import { X, Clipboard, CheckCircle, AlertTriangle, FileText, Sparkles, RefreshCw, ShieldCheck, UserCheck, Calendar } from 'lucide-react';
import { GabaritoType, EvaluationRecord, ActionPlan, Employee, ChecklistResponseItem } from '../types';
import { GSD_QUESTIONS, GSA_QUESTIONS, GSP_QUESTIONS } from '../data/initialData';

interface QuickGestaoPasteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvaluation: (evalRecord: EvaluationRecord, actionPlans: ActionPlan[]) => void;
  employees: Employee[];
}

// Sample text templates to demonstrate parsing
const EXAMPLES = {
  GSD: `GSD - Gabarito de Segurança em Distribuição - GUARABIRA
id: QG-2026-9041
Criador: Rafael Santos
Data: 06/08/2026
Hora: 08:30
Comentários: Inspeção de rota de entrega na região de Guarabira

GSD - Gabarito de Segurança em Distribuição - GUARABIRA
Escadas (piso, corrimão, antiderrapante, espaçamento dos degraus...): CONFORME
Estado de Conservação (Luvas, botina, óculos, cinta lumbar, uniforme): CONFORME
Piso (oleoso, escorregadio, desnivelado, esburacado...): CONFORME
Iluminação / fiações expostas: CONFORME
Condições de Empilhamento: CONFORME
Condições Higiênicas do Depósito: CONFORME
Quantidade de caixas para baldeio: 0
Outros (especificar): local possui rampa.
A equipe está utilizando cinto de segurança durante o deslocamento?: CONFORME
O caminhão foi estacionado em local adequado (permitido por lei), e junto ao meio fio?: CONFORME
Os ajudantes auxiliaram o motorista na manobra de estacionamento?: CONFORME
A equipe está utilizando todos os EPI´s no procedimento de descarga? NOK (Ajudante 1 descarregando sem luva)
A equipe utiliza o cone de segurança quando esta descarregando material na via?: CONFORME
Um dos ajudantes sobe no estribo ou plataforma retrátil, quando houver, e entrega os produtos aooutro ajudante no chão?: CONFORME
O funcionário utiliza a haste de apoio para subir e descer da baia e/ou cabine do caminhão? Ofuncionário desce sem pular da baia ou da cabine do caminhão?: CONFORME
Os produtos foram acomodados no chão durante a montagem da pilha e não esta obstruindo apassagem de pedestre?: CONFORME
O Ajudante aproxima o corpo da carga, abaixando-se dobrando os joelhos, mantendo a colunaaereta no movimento de agachamento?: CONFORME
O ajudante respeitou a altura máxima de empilhamento (4 Caixas ou 2 barris) no carrinho?: CONFORME
No deslocamento entre o caminhão e o PDV o ajudante teve cuidado ao atravessar vias e/ouobstáculos no percurso?: CONFORME
No PDV se há escadas até o depósito, os ajudantes carregam apenas 01 caixa ?: CONFORME
Os funcionários utilizaram o carrinho para entregas e após guardaram o mesmo no local correto,prendendo-o à corrente? O carrinho estava em boas condições?: CONFORME
A equipe verificou o fechamentos das baias antes de sair do PDV?: CONFORME
O recolhimento do dinheiro foi realizado de forma compartilhada (recebimento máximo deR$500,00 por vez)?: CONFORME
O motorista fez o giro 360° antes de sair com o veículo: CONFORME
(Pneus, Buzina, Pisca, Cinto de Segurança...): tudo OK
(Área de risco, rota de risco, buracos, difícil acesso...): grande fluxo de veículos, passagem de travessia de rua.

DADOS
Data: 06/08/2026
DIA DA SEMANA: Quinta-feira
Avaliador: Rafael Santos
Placa: QGB-9021
PDV's Visitados: 12
AJUDANTE 1: CICERO ROMAO DA SILVA
AJUDANTE 2: JOSE ALMIR DO NASCIMENTO
MOTORISTA: FRANCISCO ANTONIO DE SOUZA`,

  GSA: `QUICK GESTÃO AUDITORIA ARMAZÉM
Relatório Nº: QG-GSA-5521
Data: 05/08/2026
Avaliador: Alisson Oliveira
Responsável Depósito: JOSE CARLOS PEREIRA
Unidade: Pau Brasil Guarabira

GSA-01 Piso - O piso está limpo e seco?: OK
GSA-03 Empilhamento de produto - Segue o padrão do manual?: OK
GSA-04 Equipamentos de combate a Incêndio - Extintores e hidrantes desobstruídos?: NOK - Caixa de pallet obstruindo hidrante da rua B
GSA-07 Painéis elétricos - Sinalização adequada e portas fechadas?: OK
GSA-21 Pessoas - Utilização de EPIs obrigatórios (capacete, bota, óculos)?: OK
GSA-25 5S - Apenas objetos necessários na área com limpeza?: NOK - Sobras de papelão acumuladas perto da rampa 2`,

  GSP: `RELATÓRIO DE INSPEÇÃO PUXADA - QUICK GESTÃO
ID: QG-GSP-3310
Data: 06/08/2026
Avaliador: Djeanderson
Motorista: MARCOS VINICIUS SOUSA
Veículo / Placa: QGB-9021

GSP-01 Cartão de abastecimento e documentos do veículo em dia: CONFORME
GSP-03 Pneus, estepe e porcas das rodas em perfeito estado: CONFORME
GSP-05 Sensor do cinto de segurança e parte elétrica da carreta: NÃO CONFORME - Lâmpada de freio traseira esquerda queimada
GSP-08 Amarração da carga e catracas tensionadas: CONFORME
GSP-11 Giro 360° realizado pelo motorista antes do engate: CONFORME`
};

export const QuickGestaoPasteModal: React.FC<QuickGestaoPasteModalProps> = ({
  isOpen,
  onClose,
  onAddEvaluation,
  employees
}) => {
  const [rawText, setRawText] = useState<string>('');
  const [selectedGabarito, setSelectedGabarito] = useState<GabaritoType>('GSD');
  const [evaluator, setEvaluator] = useState<string>('Rafael Santos');
  const [employeeName, setEmployeeName] = useState<string>('');
  const [evalDate, setEvalDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [vehiclePlate, setVehiclePlate] = useState<string>('QGB-9021');
  const [quickGestaoRef, setQuickGestaoRef] = useState<string>('');

  // GSD Delivery Team fields (1 Motorista + 2 Ajudantes)
  const [motoristaName, setMotoristaName] = useState<string>('');
  const [ajudante1Name, setAjudante1Name] = useState<string>('');
  const [ajudante2Name, setAjudante2Name] = useState<string>('');
  const [pdvCount, setPdvCount] = useState<string>('');

  // Question list according to Gabarito
  const activeQuestions = useMemo(() => {
    if (selectedGabarito === 'GSA') return GSA_QUESTIONS;
    if (selectedGabarito === 'GSP') return GSP_QUESTIONS;
    return GSD_QUESTIONS;
  }, [selectedGabarito]);

  // Parse text live
  const parsedData = useMemo(() => {
    if (!rawText.trim()) {
      return {
        detectedGabarito: selectedGabarito,
        detectedEvaluator: evaluator,
        detectedEmployee: employeeName,
        detectedMotorista: motoristaName,
        detectedAjudante1: ajudante1Name,
        detectedAjudante2: ajudante2Name,
        detectedPdv: pdvCount,
        detectedPlate: vehiclePlate,
        detectedDate: evalDate,
        detectedRef: quickGestaoRef,
        itemResponses: activeQuestions.map(q => ({
          questionId: q.id,
          questionText: q.question,
          category: q.category,
          status: 'OK' as const,
          isCompliant: true,
          observation: ''
        })),
        nokItems: [] as { questionId: string; code: string; question: string; observation: string }[]
      };
    }

    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);

    let detectedGabarito: GabaritoType = selectedGabarito;
    let detectedEvaluator = evaluator;
    let detectedEmployee = employeeName;
    let detectedMotorista = motoristaName;
    let detectedAjudante1 = ajudante1Name;
    let detectedAjudante2 = ajudante2Name;
    let detectedPdv = pdvCount;
    let detectedPlate = vehiclePlate;
    let detectedDate = evalDate;
    let detectedRef = quickGestaoRef;

    // 1. Detect Gabarito Type
    const fullUpper = rawText.toUpperCase();
    if (fullUpper.includes('GSP-') || fullUpper.includes('PUXADA') || fullUpper.includes('TRANSFERÊNCIA')) {
      detectedGabarito = 'GSP';
    } else if (fullUpper.includes('GSA-') || fullUpper.includes('ARMAZÉM') || fullUpper.includes('ARMAZEM')) {
      detectedGabarito = 'GSA';
    } else if (fullUpper.includes('GSD-') || fullUpper.includes('DISTRIBUIÇÃO') || fullUpper.includes('DISTRIBUICAO')) {
      detectedGabarito = 'GSD';
    }

    // Determine relevant question set strictly based on selectedGabarito to prevent tab mismatch
    const activeGabarito = selectedGabarito;
    const questionsSet = activeGabarito === 'GSA' ? GSA_QUESTIONS : activeGabarito === 'GSP' ? GSP_QUESTIONS : GSD_QUESTIONS;

    // 2. Header Line Parsing & DADOS section
    lines.forEach(line => {
      const lineUpper = line.toUpperCase();

      // Evaluator
      if (lineUpper.includes('AVALIADOR:') || lineUpper.includes('INSPETOR:') || lineUpper.includes('CRIADOR:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedEvaluator = parts[1].trim();
      }

      // Motorista (GSD or GSP)
      if (lineUpper.startsWith('MOTORISTA:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedMotorista = parts[1].trim();
      }

      // Ajudante 1 (GSD)
      if (lineUpper.startsWith('AJUDANTE 1:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedAjudante1 = parts[1].trim();
      }

      // Ajudante 2 (GSD)
      if (lineUpper.startsWith('AJUDANTE 2:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedAjudante2 = parts[1].trim();
      }

      // General Employee / Colaborador
      if (lineUpper.includes('COLABORADOR:') || lineUpper.includes('RESPONSÁVEL:') || lineUpper.includes('AVALIADO:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedEmployee = parts[1].trim();
      }

      // Placa / Veículo
      if (lineUpper.includes('PLACA:') || lineUpper.includes('VEÍCULO') || lineUpper.includes('VEICULO')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedPlate = parts[1].trim();
      }

      // PDVs Visitados
      if (lineUpper.includes('PDV') || lineUpper.includes('VISITADOS')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) detectedPdv = parts[1].trim();
      }

      // Date
      if (lineUpper.includes('DATA:')) {
        const parts = line.split(':');
        if (parts[1]?.trim()) {
          const dateStr = parts[1].trim();
          if (dateStr.includes('/')) {
            const [d, m, y] = dateStr.split('/');
            if (d && m && y) detectedDate = `${y.trim()}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
          } else if (dateStr.includes('-')) {
            detectedDate = dateStr;
          }
        }
      }

      // Quick Gestao Ref / ID
      if (lineUpper.includes('RELATÓRIO') || lineUpper.includes('RELATORIO') || lineUpper.includes('#QG') || lineUpper.startsWith('ID:')) {
        const match = line.match(/(QG-[A-Z0-9-]+|#?[0-9]{4,})/i);
        if (match) detectedRef = match[0].replace('#', 'QG-');
      }
    });

    // 3. Question Items Parsing
    const itemResponses: ChecklistResponseItem[] = questionsSet.map(q => {
      const codeUpper = q.code.toUpperCase(); // e.g. GSD-01
      const qNumStr = q.code.split('-')[1]; // e.g. 01

      // Search line matching code or key sentence
      let foundLine = lines.find(l => {
        const lUpper = l.toUpperCase();
        return lUpper.includes(codeUpper) || lUpper.includes(`GSD_${qNumStr}`) || lUpper.includes(`GSA_${qNumStr}`) || lUpper.includes(`GSP_${qNumStr}`);
      });

      // Fallback: match by phrase prefix (e.g. "Escadas", "Estado de Conservação", "Piso", "A equipe está utilizando", "O motorista fez o giro 360°")
      if (!foundLine) {
        const qClean = q.question.toLowerCase();
        foundLine = lines.find(l => {
          const lLower = l.toLowerCase();
          // Check if line starts with key words of question
          const words = qClean.split(' ').filter(w => w.length > 3);
          if (words.length > 0) {
            const firstTwo = words.slice(0, 3).join(' ');
            return lLower.includes(firstTwo);
          }
          return false;
        });
      }

      let status: 'OK' | 'NOK' | 'N_A' = 'OK';
      let observation = '';

      if (foundLine) {
        const fUpper = foundLine.toUpperCase();

        // 1. Check N/A first (or N/A at the end of line)
        if (
          fUpper.includes('N/A') ||
          fUpper.includes('N/A ') ||
          fUpper.includes('NÃO APLICÁVEL') ||
          fUpper.includes('NAO APLICAVEL') ||
          fUpper.endsWith('N/A')
        ) {
          status = 'N_A';
        }
        // 2. Check NOK / Non-conforming / Não
        else if (
          fUpper.includes('NOK') ||
          fUpper.includes('NÃO CONFORME') ||
          fUpper.includes('NAO CONFORME') ||
          fUpper.includes('REPROVADO') ||
          fUpper.includes('PÉSSIMO') ||
          fUpper.includes('RUIM') ||
          fUpper.endsWith('\tNÃO') ||
          fUpper.endsWith('\tNAO') ||
          fUpper.endsWith(': NÃO') ||
          fUpper.endsWith(': NAO') ||
          fUpper.endsWith(' NÃO') ||
          fUpper.endsWith(' NAO')
        ) {
          status = 'NOK';
        }
        // 3. Check OK / Conforme / Sim / Bom / Ótimo
        else if (
          fUpper.includes('CONFORME') ||
          fUpper.includes('ATENDE') ||
          fUpper.includes('TUDO OK') ||
          fUpper.includes('ÓTIMO') ||
          fUpper.includes('OPTIMO') ||
          fUpper.includes('BOM') ||
          fUpper.includes('SIM') ||
          fUpper.endsWith('\tOK') ||
          fUpper.endsWith(': OK') ||
          fUpper.endsWith(' OK')
        ) {
          status = 'OK';
        }

        // Extract observation if present in parentheses or after colon/dash
        if (foundLine.includes('(') && foundLine.includes(')')) {
          const matchParen = foundLine.match(/\(([^)]+)\)/);
          if (matchParen && matchParen[1]) {
            const content = matchParen[1].trim();
            if (!content.toUpperCase().includes('CONFORME') && !content.toUpperCase().includes('OK')) {
              observation = content;
            }
          }
        }

        if (!observation) {
          if (foundLine.includes('-')) {
            const obsPart = foundLine.split('-').slice(1).join('-').trim();
            if (obsPart && !obsPart.toUpperCase().startsWith('CONFORME') && !obsPart.toUpperCase().startsWith('OK')) {
              observation = obsPart.replace(/^NÃO CONFORME/i, '').replace(/^NOK/i, '').replace(/^OBS:/i, '').trim();
            }
          } else if (foundLine.includes(':')) {
            const obsPart = foundLine.split(':').slice(1).join(':').trim();
            if (obsPart && !obsPart.toUpperCase().startsWith('CONFORME')) {
              observation = obsPart.replace(/^NÃO CONFORME/i, '').replace(/^NOK/i, '').trim();
            }
          }
        }
      }

      return {
        questionId: q.id,
        questionText: `${q.code} - ${q.question}`,
        category: q.category,
        status,
        isCompliant: status === 'OK' || status === 'N_A',
        observation
      };
    });

    const nokItems = itemResponses
      .filter(r => r.status === 'NOK')
      .map(r => {
        const qDef = questionsSet.find(q => q.id === r.questionId);
        return {
          questionId: r.questionId,
          code: qDef?.code || '',
          question: qDef?.question || '',
          observation: r.observation || 'Não conformidade detectada no relatório Quick Gestão'
        };
      });

    return {
      detectedGabarito,
      detectedEvaluator,
      detectedEmployee,
      detectedMotorista,
      detectedAjudante1,
      detectedAjudante2,
      detectedPdv,
      detectedPlate,
      detectedDate,
      detectedRef,
      itemResponses,
      nokItems
    };
  }, [rawText, activeQuestions, selectedGabarito, evaluator, employeeName, motoristaName, ajudante1Name, ajudante2Name, pdvCount, vehiclePlate, evalDate, quickGestaoRef]);

  // Compute live score
  const scoreStats = useMemo(() => {
    const total = parsedData.itemResponses.length;
    const ok = parsedData.itemResponses.filter(i => i.status === 'OK').length;
    const nok = parsedData.itemResponses.filter(i => i.status === 'NOK').length;
    const na = parsedData.itemResponses.filter(i => i.status === 'N_A').length;

    const applicable = total - na;
    const score = applicable > 0 ? Math.round((ok / applicable) * 1000) / 10 : 100;

    let farol: 'VERDE' | 'AMARELO' | 'VERMELHO' = 'VERDE';
    if (score < 70) farol = 'VERMELHO';
    else if (score < 90) farol = 'AMARELO';

    return { total, ok, nok, na, applicable, score, farol };
  }, [parsedData.itemResponses]);

  // State for editable action plan fields generated from NOK items
  const [actionPlanData, setActionPlanData] = useState<Record<string, { action: string; deadline: string; responsible: string }>>({});

  // Update actionPlanData defaults when nokItems change
  React.useEffect(() => {
    const defaultDeadline = new Date(Date.now() + 7 * 84600000).toISOString().split('T')[0]; // +7 days
    const newPlanState: Record<string, { action: string; deadline: string; responsible: string }> = {};

    parsedData.nokItems.forEach(item => {
      newPlanState[item.questionId] = {
        action: actionPlanData[item.questionId]?.action || `Adequar item (${item.code}) conforme padrão de segurança da unidade.`,
        deadline: actionPlanData[item.questionId]?.deadline || defaultDeadline,
        responsible: actionPlanData[item.questionId]?.responsible || (parsedData.detectedEmployee || 'Supervisor Operacional')
      };
    });

    setActionPlanData(newPlanState);
  }, [parsedData.nokItems]);

  if (!isOpen) return null;

  // Load Example Template
  const handleLoadExample = (type: GabaritoType) => {
    setSelectedGabarito(type);
    setRawText(EXAMPLES[type]);
    if (type === 'GSD') {
      setMotoristaName('FRANCISCO ANTONIO DE SOUZA');
      setAjudante1Name('CICERO ROMAO DA SILVA');
      setAjudante2Name('JOSE ALMIR DO NASCIMENTO');
      setEmployeeName('FRANCISCO ANTONIO DE SOUZA');
      setPdvCount('12');
      setVehiclePlate('QGB-9021');
    } else if (type === 'GSA') {
      setEmployeeName('');
      setMotoristaName('');
      setAjudante1Name('');
      setAjudante2Name('');
    } else if (type === 'GSP') {
      setEmployeeName('MARCOS VINICIUS SOUSA');
      setMotoristaName('MARCOS VINICIUS SOUSA');
      setAjudante1Name('');
      setAjudante2Name('');
    }
  };

  // Submit Lançamento
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const evalId = `EV_${selectedGabarito}_QG_${Date.now().toString().slice(-6)}`;

    // Build composite employee name for GSD team or standard employee name
    let finalEmployee: string | undefined = undefined;
    const mName = motoristaName || parsedData.detectedMotorista;
    const a1Name = ajudante1Name || parsedData.detectedAjudante1;
    const a2Name = ajudante2Name || parsedData.detectedAjudante2;

    if (selectedGabarito === 'GSD') {
      if (mName || a1Name || a2Name) {
        const parts: string[] = [];
        if (mName) parts.push(`Motorista: ${mName}`);
        if (a1Name) parts.push(`Ajudante 1: ${a1Name}`);
        if (a2Name) parts.push(`Ajudante 2: ${a2Name}`);
        finalEmployee = parts.join(' | ');
      } else {
        finalEmployee = employeeName || parsedData.detectedEmployee || 'Equipe Guarabira';
      }
    } else if (selectedGabarito === 'GSP') {
      finalEmployee = employeeName || parsedData.detectedEmployee || 'Carreteiro Guarabira';
    } else {
      // GSA Armazém: Não requer cadastrar colaborador, apenas avaliador
      finalEmployee = undefined;
    }

    // Generate Action Plans
    const generatedActionPlans: ActionPlan[] = parsedData.nokItems.map((nokItem, idx) => {
      const customData = actionPlanData[nokItem.questionId] || {
        action: `Adequar item (${nokItem.code}) conforme padrão de segurança.`,
        deadline: new Date(Date.now() + 7 * 84600000).toISOString().split('T')[0],
        responsible: 'Supervisor Operacional'
      };

      return {
        id: `PA_${Date.now().toString().slice(-6)}_${idx + 1}`,
        evaluationId: evalId,
        gabaritoType: selectedGabarito,
        unit: 'Pau Brasil Guarabira',
        itemText: `${nokItem.code} - ${nokItem.question}`,
        problemDescription: nokItem.observation,
        actionRequired: customData.action,
        responsible: customData.responsible || mName || finalEmployee || evaluator || 'Supervisor Operacional',
        deadline: customData.deadline,
        status: 'Pendente',
        createdAt: evalDate || new Date().toISOString().split('T')[0],
        questionId: nokItem.questionId
      };
    });

    const finalPlate = selectedGabarito !== 'GSA' ? (vehiclePlate || parsedData.detectedPlate || 'QGB-9021') : undefined;
    const finalPdvs = pdvCount || parsedData.detectedPdv || '';

    const notesText = selectedGabarito === 'GSD' 
      ? `GSD de Rota - Equipe: ${finalEmployee}. Placa: ${finalPlate}.${finalPdvs ? ` PDVs Visitados: ${finalPdvs}.` : ''} Checklist importado do Quick Gestão.`
      : selectedGabarito === 'GSA'
      ? `GSA de Armazém - Inspeção presencial do Armazém Guarabira. Avaliador: ${evaluator || 'Avaliador Quick Gestão'}. Checklist importado do Quick Gestão.`
      : `GSP de Puxada - Carreteiro: ${finalEmployee}. Placa: ${finalPlate}. Checklist importado do Quick Gestão.`;

    const finalEvalRecord: EvaluationRecord = {
      id: evalId,
      gabaritoType: selectedGabarito,
      unit: 'Pau Brasil Guarabira',
      evaluator: evaluator || parsedData.detectedEvaluator || 'Avaliador Quick Gestão',
      employeeName: finalEmployee,
      employeeRole: selectedGabarito === 'GSA' ? 'Operador Armazém' : selectedGabarito === 'GSP' ? 'Carreteiro' : 'Motorista',
      employeeType: 'Veterano',
      semana: selectedGabarito === 'GSA' ? 'Acompanhamento Semanal' : undefined,
      vehiclePlate: finalPlate,
      date: evalDate || parsedData.detectedDate,
      responses: parsedData.itemResponses,
      score: scoreStats.score,
      totalItems: scoreStats.total,
      totalOk: scoreStats.ok,
      totalNok: scoreStats.nok,
      totalNa: scoreStats.na,
      actionPlansCreatedCount: generatedActionPlans.length,
      quickGestaoRef: quickGestaoRef || parsedData.detectedRef || 'QG-AUTO-GUARA',
      generalNotes: notesText
    };

    onAddEvaluation(finalEvalRecord, generatedActionPlans);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400">
              <Clipboard className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold tracking-tight uppercase">
                  Colar Checklist Quick Gestão
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  Importação Automática
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Cole o relatório baixado ou copiado do Quick Gestão para atualizar os faróis de Guarabira
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Preset Buttons & Selector */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-500" />
                Selecione ou Teste um Exemplo Próprio:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleLoadExample('GSD')}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition"
                >
                  Exemplo GSD (Distribuição)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadExample('GSA')}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition"
                >
                  Exemplo GSA (Armazém)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadExample('GSP')}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition"
                >
                  Exemplo GSP (Puxada)
                </button>
              </div>
            </div>

            {/* Gabarito Selector Manual */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {(['GSD', 'GSA', 'GSP'] as GabaritoType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedGabarito(type)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 border ${
                    selectedGabarito === type
                      ? 'bg-orange-500 text-white border-orange-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>Gabarito {type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Large Text Area */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex justify-between items-center">
              <span>Cole o Texto do Relatório Quick Gestão Abaixo:</span>
              {rawText && (
                <button
                  type="button"
                  onClick={() => setRawText('')}
                  className="text-[11px] font-semibold text-rose-600 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Limpar Texto
                </button>
              )}
            </label>
            <textarea
              rows={8}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder={`Cole aqui o relatório copiado do Quick Gestão...\n\nExemplo:\nGSD-01 Escadas: CONFORME\nGSD-12 EPIs na Descarga: NÃO CONFORME - Ajudante sem luvas\nGSD-24 Giro 360°: CONFORME...`}
              className="w-full bg-slate-900 text-slate-100 border border-slate-700 rounded-xl p-3.5 text-xs font-mono focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder-slate-500 leading-relaxed"
            />
          </div>

          {/* GSD Delivery Trio Section (Motorista + Ajudantes) */}
          {selectedGabarito === 'GSD' ? (
            <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200/80 space-y-3">
              <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  Equipe de Entrega GSD (Guarabira): 1 Motorista + 2 Ajudantes
                </span>
                <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-300">
                  3 Colaboradores por GSD
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-blue-900 mb-1">🚚 Motorista</label>
                  <input
                    type="text"
                    value={motoristaName}
                    onChange={(e) => setMotoristaName(e.target.value)}
                    placeholder={parsedData.detectedMotorista || 'Ex: FRANCISCO ANTONIO DE SOUZA'}
                    className="w-full bg-white border border-blue-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-blue-900 mb-1">📦 Ajudante 1</label>
                  <input
                    type="text"
                    value={ajudante1Name}
                    onChange={(e) => setAjudante1Name(e.target.value)}
                    placeholder={parsedData.detectedAjudante1 || 'Ex: CICERO ROMAO DA SILVA'}
                    className="w-full bg-white border border-blue-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-blue-900 mb-1">📦 Ajudante 2</label>
                  <input
                    type="text"
                    value={ajudante2Name}
                    onChange={(e) => setAjudante2Name(e.target.value)}
                    placeholder={parsedData.detectedAjudante2 || 'Ex: JOSE ALMIR DO NASCIMENTO'}
                    className="w-full bg-white border border-blue-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1 border-t border-blue-200/50">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Avaliador / Inspetor</label>
                  <input
                    type="text"
                    value={evaluator}
                    onChange={(e) => setEvaluator(e.target.value)}
                    placeholder={parsedData.detectedEvaluator || 'Ex: Rafael Santos'}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Placa do Veículo</label>
                  <input
                    type="text"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                    placeholder={parsedData.detectedPlate || 'Ex: QGB-9021'}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">PDVs Visitados</label>
                  <input
                    type="text"
                    value={pdvCount}
                    onChange={(e) => setPdvCount(e.target.value)}
                    placeholder={parsedData.detectedPdv || 'Ex: 12'}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Data da Inspeção</label>
                  <input
                    type="date"
                    value={evalDate}
                    onChange={(e) => setEvalDate(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Standard Header Metadata for GSA / GSP */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Avaliador / Inspetor *</label>
                <input
                  type="text"
                  value={evaluator}
                  onChange={(e) => setEvaluator(e.target.value)}
                  placeholder={parsedData.detectedEvaluator || 'Ex: Rafael Santos'}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                />
              </div>

              {selectedGabarito !== 'GSA' ? (
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Colaborador Avaliado</label>
                  <input
                    type="text"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    placeholder={parsedData.detectedEmployee || 'Ex: MARCOS VINICIUS'}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                  />
                </div>
              ) : (
                <div className="flex flex-col justify-center bg-amber-50 border border-amber-200 p-2 rounded-lg">
                  <span className="text-[10px] font-bold text-amber-900 uppercase">GSA - Armazém Guarabira</span>
                  <span className="text-[10px] text-amber-700 font-medium">Não requer cadastrar colaborador, apenas o avaliador.</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Data da Inspeção</label>
                <input
                  type="date"
                  value={evalDate}
                  onChange={(e) => setEvalDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Nº Relatório Quick Gestão</label>
                <input
                  type="text"
                  value={quickGestaoRef}
                  onChange={(e) => setQuickGestaoRef(e.target.value)}
                  placeholder={parsedData.detectedRef || 'QG-2026-XXXX'}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800"
                />
              </div>
            </div>
          )}

          {/* Live Farol Indicator & Item Summary */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  Resultado do Lançamento
                </h3>
                <p className="text-[11px] text-slate-500">
                  Índice de conformidade calculado para o Gabarito {selectedGabarito}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-slate-900">
                    {scoreStats.score}%
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Aproveitamento</span>
                </div>

                <div className={`px-3 py-1.5 rounded-lg font-extrabold text-xs tracking-wider uppercase border flex items-center gap-1.5 ${
                  scoreStats.farol === 'VERDE'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : scoreStats.farol === 'AMARELO'
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-rose-100 text-rose-800 border-rose-300'
                }`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    scoreStats.farol === 'VERDE' ? 'bg-emerald-500' : scoreStats.farol === 'AMARELO' ? 'bg-amber-500' : 'bg-rose-500'
                  }`}></span>
                  <span>Farol {scoreStats.farol}</span>
                </div>
              </div>
            </div>

            {/* Quick Counters */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg">
                <span className="block font-extrabold text-emerald-700 text-base">{scoreStats.ok}</span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase">Conformes (100%)</span>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-2 rounded-lg">
                <span className="block font-extrabold text-rose-700 text-base">{scoreStats.nok}</span>
                <span className="text-[10px] font-bold text-rose-600 uppercase">Não Conformes (0%)</span>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                <span className="block font-extrabold text-slate-700 text-base">{scoreStats.na}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">N/A (Desconsiderado)</span>
              </div>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
              <span className="font-semibold text-slate-700">
                📊 Cálculo: <strong className="text-slate-900">{scoreStats.ok}</strong> conformes de <strong className="text-slate-900">{scoreStats.applicable}</strong> aplicáveis = <strong className="text-emerald-700 font-extrabold">{scoreStats.score}%</strong>
              </span>
              <span className="text-[10px] text-slate-500 italic bg-white px-2 py-0.5 rounded border border-slate-200">
                {scoreStats.na} item(ns) N/A desconsiderado(s)
              </span>
            </div>
          </div>

          {/* Auto Generated Action Plans for NOK items */}
          {parsedData.nokItems.length > 0 && (
            <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{parsedData.nokItems.length} Plano(s) de Ação Gerado(s) Automaticamente:</span>
              </div>

              <div className="space-y-3">
                {parsedData.nokItems.map((nokItem) => {
                  const currentPlan = actionPlanData[nokItem.questionId] || {
                    action: '',
                    deadline: '',
                    responsible: ''
                  };

                  return (
                    <div key={nokItem.questionId} className="bg-white rounded-lg p-3 border border-amber-200 space-y-2 text-xs">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-bold text-slate-900">{nokItem.code} - {nokItem.question}</span>
                        <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold text-[10px] uppercase">
                          NOK
                        </span>
                      </div>

                      <p className="text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 italic text-[11px]">
                        <strong>Problema/Obs:</strong> {nokItem.observation}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <div className="sm:col-span-2">
                          <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Ação Corretiva Exigida</label>
                          <input
                            type="text"
                            value={currentPlan.action}
                            onChange={(e) => setActionPlanData(prev => ({
                              ...prev,
                              [nokItem.questionId]: { ...currentPlan, action: e.target.value }
                            }))}
                            className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Prazo Limite</label>
                          <input
                            type="date"
                            value={currentPlan.deadline}
                            onChange={(e) => setActionPlanData(prev => ({
                              ...prev,
                              [nokItem.questionId]: { ...currentPlan, deadline: e.target.value }
                            }))}
                            className="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </form>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 transition"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider bg-orange-500 hover:bg-orange-600 transition shadow-md flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Confirmar Lançamento e Atualizar Faróis ({parsedData.nokItems.length} Planos)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
