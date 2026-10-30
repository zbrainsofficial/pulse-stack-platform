import React from 'react';
import { DeploymentLog } from '../types';

interface DeploymentListProps {
  deployments: DeploymentLog[];
}

export const DeploymentList: React.FC<DeploymentListProps> = ({ deployments }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Recent Production Deployments</h2>
          <p className="text-sm text-slate-400">CI/CD pipeline triggers and infrastructure rollouts.</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-xs text-slate-500 font-bold uppercase tracking-wider">
              <th className="pb-3 px-4">Service</th>
              <th className="pb-3 px-4">Commit / Release</th>
              <th className="pb-3 px-4">Architect</th>
              <th className="pb-3 px-4">Timestamp</th>
              <th className="pb-3 px-4 text-right">Pipeline Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {deployments.map((dep) => (
              <tr key={dep.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-200">{dep.service}</td>
                <td className="py-3 px-4 font-mono text-cyan-400 text-xs">{dep.version}</td>
                <td className="py-3 px-4 text-slate-400">{dep.author}</td>
                <td className="py-3 px-4 text-slate-500 text-xs">{dep.timeAgo}</td>
                <td className="py-3 px-4 text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      dep.status === 'success'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                        : dep.status === 'in_progress'
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50'
                        : 'bg-rose-950 text-rose-400 border border-rose-800/50'
                    }`}
                  >
                    {dep.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
