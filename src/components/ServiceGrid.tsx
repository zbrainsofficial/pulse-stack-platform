import React from 'react';
import { ServiceHealth } from '../types';

interface ServiceGridProps {
  services: ServiceHealth[];
  onRefresh: () => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onRefresh }) => {
  const getStatusBadge = (status: ServiceHealth['status']) => {
    switch (status) {
      case 'operational':
        return <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/50">OPERATIONAL</span>;
      case 'degraded':
        return <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-amber-950 text-amber-400 border border-amber-800/50">DEGRADED</span>;
      case 'outage':
        return <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-rose-950 text-rose-400 border border-rose-800/50">OUTAGE</span>;
      default:
        return <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-slate-800 text-slate-300">MAINTENANCE</span>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Active Microservices Cluster</h2>
          <p className="text-sm text-slate-400">Monitoring latency SLA, health probes, and live ingress.</p>
        </div>
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-2"
        >
          <span>↻</span> Refresh Telemetry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold">{svc.region}</span>
              {getStatusBadge(svc.status)}
            </div>

            <h3 className="font-bold text-base text-slate-100 mb-1">{svc.name}</h3>
            <p className="text-xs text-slate-500 font-mono mb-4">ID: {svc.id}</p>

            <div className="space-y-2 border-t border-slate-800/80 pt-3 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Latency</span>
                <span className="font-mono font-bold text-slate-200">{svc.latencyMs}ms</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Uptime</span>
                <span className="font-mono font-bold text-emerald-400">{svc.uptimePercentage}%</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Throughput</span>
                <span className="font-mono font-bold text-cyan-400">{svc.requestsPerMinute.toLocaleString()} req/m</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
