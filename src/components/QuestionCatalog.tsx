import React, { useState } from 'react';
import { GSD_QUESTIONS, GSA_QUESTIONS, GSP_QUESTIONS } from '../data/initialData';
import { GabaritoType } from '../types';
import { FileText, Printer, Search, Truck, Warehouse, Navigation, CheckCircle2 } from 'lucide-react';

export const QuestionCatalog: React.FC = () => {
  const [selectedType, setSelectedType] = useState<GabaritoType>('GSD');
  const [searchTerm, setSearchTerm] = useState('');

  const questionsList = 
    selectedType === 'GSD' ? GSD_QUESTIONS :
    selectedType === 'GSA' ? GSA_QUESTIONS : GSP_QUESTIONS;

  const filtered = questionsList.filter(q => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return q.question.toLowerCase().includes(term) || q.code.toLowerCase().includes(term) || q.category.toLowerCase().includes(term);
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            Catálogo Oficial de Perguntas & Padrões
          </h2>
          <p className="text-xs text-slate-500">
            Perguntas padronizadas e critérios de resposta dos Gabaritos GSD, GSA e GSP.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <Printer className="w-4 h-4 text-orange-400" />
          <span>Imprimir Modelo em Branco</span>
        </button>
      </div>

      {/* Tabs Selection & Search */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedType('GSD')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedType === 'GSD'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Truck className="w-4 h-4" /> GSD Distribuição (26 itens)
            </button>

            <button
              onClick={() => setSelectedType('GSA')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedType === 'GSA'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Warehouse className="w-4 h-4" /> GSA Armazém (37 itens)
            </button>

            <button
              onClick={() => setSelectedType('GSP')}
              className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedType === 'GSP'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Navigation className="w-4 h-4" /> GSP Puxada (14 itens)
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filtrar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                <th className="p-3.5">Código</th>
                <th className="p-3.5">Categoria</th>
                <th className="p-3.5">Item / Pergunta Padrão</th>
                <th className="p-3.5 text-right">Opções Aceitas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
              {filtered.map(q => (
                <tr key={q.id} className="hover:bg-slate-50 transition">
                  <td className="p-3.5 font-bold text-slate-900 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono">
                      {q.code}
                    </span>
                  </td>
                  <td className="p-3.5 font-semibold text-slate-600">{q.category}</td>
                  <td className="p-3.5 font-medium text-slate-900 leading-snug">{q.question}</td>
                  <td className="p-3.5 text-right font-bold text-emerald-700">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px]">
                      OK • NOK • N/A
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
