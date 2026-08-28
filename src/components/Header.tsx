import React from 'react';
import { ShieldCheck, Plus, LayoutDashboard, ClipboardList, AlertTriangle, Calendar, FileText, Download, Clipboard, Users, LogIn, LogOut, Cloud, CloudOff } from 'lucide-react';
import { User } from 'firebase/auth';

interface HeaderProps {
  activeTab: 'dashboard' | 'evaluations' | 'action-plans' | 'periodicity' | 'collaborators' | 'questions';
  setActiveTab: (tab: 'dashboard' | 'evaluations' | 'action-plans' | 'periodicity' | 'collaborators' | 'questions') => void;
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
  unitsList: string[];
  onOpenNewEvaluation: () => void;
  onOpenQuickGestaoPaste?: () => void;
  onOpenExportModal: () => void;
  pendingActionPlansCount: number;
  overduePeriodicityCount: number;
  currentUser?: User | null;
  isCloudConnected?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedUnit,
  setSelectedUnit,
  unitsList,
  onOpenNewEvaluation,
  onOpenQuickGestaoPaste,
  onOpenExportModal,
  pendingActionPlansCount,
  overduePeriodicityCount,
  currentUser,
  isCloudConnected = true,
  onLogin,
  onLogout
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight uppercase text-orange-500">
                  SAFETYHUB GUARABIRA
                </h1>
                <span className="text-sm font-semibold text-slate-100">
                  • Gabaritos de Segurança
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-slate-800 text-orange-400 border border-orange-500/30">
                  GSD • GSA • GSP
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <span>Gestão Integrada de Prazos & Planos (Pós Quick Gestão)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span className="text-orange-400 font-semibold">Unidade Guarabira</span>
              </p>
            </div>
          </div>

          {/* Action Tools, Cloud Sync & Auth */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Cloud Status Badge */}
            <div 
              title={isCloudConnected ? "Conectado ao Firebase Firestore" : "Modo Local / Reconectando"}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                isCloudConnected 
                  ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-300" 
                  : "bg-amber-950/60 border-amber-500/30 text-amber-300"
              }`}
            >
              {isCloudConnected ? <Cloud className="w-3.5 h-3.5 text-emerald-400" /> : <CloudOff className="w-3.5 h-3.5 text-amber-400" />}
              <span className="hidden sm:inline">{isCloudConnected ? "Firestore Conectado" : "Offline / Cache"}</span>
            </div>

            {/* Fixed Unit Badge */}
            <div className="flex items-center bg-slate-800 rounded-lg border border-orange-500/30 px-3 py-1.5 text-xs text-slate-200">
              <span className="text-slate-400 mr-1.5 font-medium">Unidade:</span>
              <span className="font-bold text-orange-400">Pau Brasil Guarabira</span>
            </div>

            {/* Export / Reset Modal Button */}
            <button
              id="btn-header-export-import"
              onClick={onOpenExportModal}
              title="Exportar / Importar / Resetar dados"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Colar Checklist Quick Gestão Button */}
            {onOpenQuickGestaoPaste && (
              <button
                id="btn-header-quick-gestao"
                onClick={onOpenQuickGestaoPaste}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm border border-orange-400/30 cursor-pointer"
                title="Colar texto do relatório do Quick Gestão para atualização automática dos faróis"
              >
                <Clipboard className="w-4 h-4" />
                <span>Colar Checklist Quick</span>
              </button>
            )}

            {/* Launch New Evaluation / Manual Button */}
            <button
              id="btn-header-new-evaluation"
              onClick={onOpenNewEvaluation}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              <Plus className="w-4 h-4 text-orange-400" />
              <span>Lançamento Manual</span>
            </button>

            {/* Firebase Auth Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1">
                {currentUser.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt={currentUser.displayName || "Usuário"} 
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full border border-orange-500/50" 
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold">
                    {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
                  </div>
                )}
                <span className="text-xs text-slate-300 max-w-[100px] truncate hidden md:inline">
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </span>
                <button
                  id="btn-header-logout"
                  onClick={onLogout}
                  title="Sair da conta"
                  className="p-1 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                id="btn-header-login"
                onClick={onLogin}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-3 border-t border-slate-800 pt-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-orange-500" />
            <span>Dashboard Unificado</span>
          </button>

          <button
            onClick={() => setActiveTab('evaluations')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'evaluations'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Histórico de Avaliações</span>
          </button>

          <button
            onClick={() => setActiveTab('action-plans')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'action-plans'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Planos de Ação</span>
            {pendingActionPlansCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                {pendingActionPlansCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('periodicity')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'periodicity'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Controle de Periodicidade</span>
            {overduePeriodicityCount > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {overduePeriodicityCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('collaborators')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'collaborators'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Users className="w-4 h-4 text-orange-400" />
            <span>Colaboradores</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-t-lg transition border-b-2 whitespace-nowrap ${
              activeTab === 'questions'
                ? 'border-orange-500 text-orange-400 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Catálogo de Perguntas</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
