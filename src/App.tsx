import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ServiceGrid } from './components/ServiceGrid';
import { DeploymentList } from './components/DeploymentList';
import { Footer } from './components/Footer';
import { ServiceHealth, DeploymentLog, UserSession } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const [user] = useState<UserSession>({
    username: 'Zaigham Ali Ashraf',
    role: 'Architect',
    organization: 'Z-Brains Systems',
    contact: '0321-6314020',
  });

  const [services, setServices] = useState<ServiceHealth[]>([
    {
      id: 'svc-auth-edge',
      name: 'Auth & Identity Mesh',
      status: 'operational',
      latencyMs: 14,
      uptimePercentage: 99.99,
      region: 'us-east-1',
      requestsPerMinute: 48200,
    },
    {
      id: 'svc-kernel-telemetry',
      name: 'C++20 Win32 Ingest Engine',
      status: 'operational',
      latencyMs: 3,
      uptimePercentage: 100,
      region: 'ap-south-1',
      requestsPerMinute: 114500,
    },
    {
      id: 'svc-llm-router',
      name: 'Nexus AI Prompt Gateway',
      status: 'operational',
      latencyMs: 32,
      uptimePercentage: 99.95,
      region: 'eu-central-1',
      requestsPerMinute: 22800,
    },
    {
      id: 'svc-mobile-sync',
      name: 'ShieldGuard Mobile WebSocket',
      status: 'operational',
      latencyMs: 21,
      uptimePercentage: 99.98,
      region: 'us-west-2',
      requestsPerMinute: 31000,
    },
  ]);

  const [deployments] = useState<DeploymentLog[]>([
    {
      id: 'dep-901',
      service: 'Nexus AI Studio API',
      version: 'v1.4.2 (a8f3c)',
      author: 'Zaigham Ali Ashraf',
      status: 'success',
      timeAgo: '12m ago',
    },
    {
      id: 'dep-900',
      service: 'WinPulse HUD Kernel',
      version: 'v2.0.1 (71e0b)',
      author: 'Zaigham Ali Ashraf',
      status: 'success',
      timeAgo: '48m ago',
    },
    {
      id: 'dep-899',
      service: 'CypherNet Port Scanner',
      version: 'v1.0.0 (c419d)',
      author: 'Zaigham Ali Ashraf',
      status: 'success',
      timeAgo: '2h ago',
    },
  ]);

  const handleRefresh = () => {
    setServices((prev) =>
      prev.map((s) => ({
        ...s,
        latencyMs: Math.max(2, Math.floor(s.latencyMs + (Math.random() * 6 - 3))),
        requestsPerMinute: Math.floor(s.requestsPerMinute + (Math.random() * 400 - 200)),
      }))
    );
  };

  useEffect(() => {
    const interval = setInterval(handleRefresh, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Hero KPI Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Cluster Health</span>
            <div className="text-3xl font-black text-emerald-400 mt-2">100%</div>
            <p className="text-xs text-slate-500 mt-1">All 4 distributed zones healthy</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Global Throughput</span>
            <div className="text-3xl font-black text-cyan-400 mt-2">216.5k</div>
            <p className="text-xs text-slate-500 mt-1">Requests processed per minute</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Average Latency</span>
            <div className="text-3xl font-black text-white mt-2">17.5ms</div>
            <p className="text-xs text-slate-500 mt-1">Edge to origin roundtrip</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Active Stack</span>
            <div className="text-3xl font-black text-violet-400 mt-2">React 19 + TS</div>
            <p className="text-xs text-slate-500 mt-1">Modern Strict Component Model</p>
          </div>
        </section>

        {/* Dynamic Content based on tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <ServiceGrid services={services} onRefresh={handleRefresh} />
            <DeploymentList deployments={deployments} />
          </div>
        )}

        {activeTab === 'services' && (
          <ServiceGrid services={services} onRefresh={handleRefresh} />
        )}

        {activeTab === 'deployments' && (
          <DeploymentList deployments={deployments} />
        )}

        {activeTab === 'telemetry' && (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
            <div className="inline-block p-4 rounded-2xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-2xl font-bold">
              ⚡ LIVE WEBSOCKET STREAM
            </div>
            <h3 className="text-xl font-bold text-white">Full-Stack Real-Time Ingest Active</h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Telemetry events from Windows kernel hooks, React 19 clients, and Mobile nodes are streaming with zero packet loss into the unified observability mesh.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
