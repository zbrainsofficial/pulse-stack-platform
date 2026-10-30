export interface ServiceHealth {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  latencyMs: number;
  uptimePercentage: number;
  region: string;
  requestsPerMinute: number;
}

export interface MetricDataPoint {
  timestamp: string;
  cpu: number;
  memory: number;
  networkIO: number;
}

export interface DeploymentLog {
  id: string;
  service: string;
  version: string;
  author: string;
  status: 'success' | 'failed' | 'in_progress';
  timeAgo: string;
}

export interface UserSession {
  username: string;
  role: 'Architect' | 'SecOps' | 'DevOps' | 'Admin';
  organization: string;
  contact: string;
}
