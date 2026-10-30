import React from 'react';
import { UserSession } from '../types';

interface NavbarProps {
  user: UserSession;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Overview' },
    { id: 'services', label: 'Services & Mesh' },
    { id: 'telemetry', label: 'Real-Time Metrics' },
    { id: 'deployments', label: 'Deployments' },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-white font-black text-xl">P</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black tracking-wide text-white">PULSESTACK</h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                PROD v2.4
              </span>
            </div>
            <p className="text-xs text-slate-400">Enterprise Cloud & System Operations</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/60'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* User Badge */}
        <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
          <div className="text-right">
            <div className="text-xs font-bold text-slate-200">{user.username}</div>
            <div className="text-[11px] text-cyan-400 font-mono">{user.role}</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-slate-300">
            ZA
          </div>
        </div>
      </div>
    </header>
  );
};
