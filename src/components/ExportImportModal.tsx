import React from 'react';
import { AppStateData } from '../utils/storage';
import { Download, Upload, RotateCcw, X, Check, FileSpreadsheet } from 'lucide-react';

interface ExportImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AppStateData;
  onImportData: (data: AppStateData) => void;
  onResetData: () => void;
  onResetToRealData?: () => void;
}

export const ExportImportModal: React.FC<ExportImportModalProps> = ({
  isOpen,
  onClose,
  data,
  onImportData,
  onResetData,
  onResetToRealData
}) => {
  const [showConfirmReset, setShowConfirmReset] = React.useState(false);

  if (!isOpen) return null;

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Gabaritos_Seguranca_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleExportEvaluationsCSV = () => {
    if (data.evaluations.length === 0) {
      alert('Nenhuma avaliação para exportar.');
      return;
    }

    let csvContent = 'data:text/csv;charset=utf-8,ID,Gabarito,Unidade,Data,Avaliador,Colaborador,Score,Total_OK,Total_NOK\n';
    data.evaluations.forEach(ev => {
      csvContent += `"${ev.id}","${ev.gabaritoType}","${ev.unit}","${ev.date}","${ev.evaluator}","${ev.employeeName || ''}","${ev.score}","${ev.totalOk}","${ev.totalNok}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Gabaritos_Avaliacoes_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.evaluations && parsed.actionPlans) {
          onImportData(parsed);
          alert('Dados importados com sucesso!');
          onClose();
        } else {
          alert('Arquivo JSON inválido.');
        }
      } catch (err) {
        alert('Erro ao processar o arquivo JSON.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-lg overflow-hidden p-6 space-y-6">
        
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Download className="w-5 h-5 text-emerald-600" />
            Central de Dados (Exportar / Importar / Resetar)
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          
          {/* Export Options */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider">1. Exportar Dados do Dashboard</h4>
            <p className="text-slate-500">Baixe o backup completo ou a planilha CSV de avaliações.</p>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleExportJSON}
                className="flex-1 py-2 px-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Backup JSON</span>
              </button>

              <button
                onClick={handleExportEvaluationsCSV}
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-600 transition flex items-center justify-center gap-1.5"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Planilha CSV</span>
              </button>
            </div>
          </div>

          {/* Import JSON */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider">2. Importar Backup JSON</h4>
            <p className="text-slate-500">Restaure o estado do sistema a partir de um arquivo JSON salvo.</p>

            <input
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="w-full text-slate-600 font-semibold cursor-pointer pt-1"
            />
          </div>

          {/* Reset */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-3">
            <h4 className="font-bold text-rose-900 uppercase tracking-wider text-xs">3. Zerar / Reiniciar Lançamentos</h4>
            <p className="text-xs text-rose-700">Escolha como deseja resetar a base de dados:</p>

            {onResetToRealData && (
              <button
                onClick={() => {
                  if (confirm('Zerar todas as avaliações de teste e deixar todos os colaboradores cadastrados como NOK / Pendentes para começar com dados reais?')) {
                    onResetToRealData();
                    onClose();
                  }
                }}
                className="w-full py-2 px-3 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Zerar Avaliações (Deixar Todos Colaboradores NOK)</span>
              </button>
            )}

            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-2 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restaurar Amostra de Teste Padrão</span>
              </button>
            ) : (
              <div className="p-3 bg-white rounded-lg border border-rose-300 space-y-2">
                <p className="text-xs font-bold text-rose-800">Tem certeza que deseja restaurar os dados padrões?</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="flex-1 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      onResetData();
                      setShowConfirmReset(false);
                      onClose();
                    }}
                    className="flex-1 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-sm"
                  >
                    Sim, Restaurar
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
