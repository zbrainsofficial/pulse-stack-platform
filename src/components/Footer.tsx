import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/80 py-8 px-6 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-slate-400">PULSESTACK PLATFORM</span> • Continuous High-Performance Systems
        </div>

        {/* Subtle Branding */}
        <div className="text-center md:text-right text-slate-400 font-medium">
          Architected & Engineered by <strong className="text-slate-200">Zaigham Ali Ashraf</strong> (0321-6314020) • Z-Brains Systems
        </div>
      </div>
    </footer>
  );
};
