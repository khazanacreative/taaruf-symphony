
export interface LogEntry {
  id: number;
  timestamp: string;
  level: string;
  user: string;
  action: string;
  ip: string;
}

// Mock data for system logs
export const mockLogs: LogEntry[] = [
  {
    id: 1,
    timestamp: '2023-08-15 08:24:11',
    level: 'info',
    user: 'admin',
    action: 'User login successful',
    ip: '192.168.1.1'
  },
  {
    id: 2,
    timestamp: '2023-08-15 07:15:23',
    level: 'warning',
    user: 'system',
    action: 'High CPU usage detected',
    ip: 'internal'
  },
  {
    id: 3,
    timestamp: '2023-08-14 23:11:45',
    level: 'error',
    user: 'system',
    action: 'Database connection failed',
    ip: 'internal'
  },
  {
    id: 4,
    timestamp: '2023-08-14 22:05:33',
    level: 'info',
    user: 'ahmad',
    action: 'Profile updated',
    ip: '192.168.1.5'
  },
  {
    id: 5,
    timestamp: '2023-08-14 21:55:27',
    level: 'info',
    user: 'fatimah',
    action: 'New taaruf request sent',
    ip: '192.168.1.10'
  },
  {
    id: 6,
    timestamp: '2023-08-14 18:30:12',
    level: 'warning',
    user: 'system',
    action: 'Low disk space warning',
    ip: 'internal'
  },
  {
    id: 7,
    timestamp: '2023-08-14 15:45:09',
    level: 'info',
    user: 'admin',
    action: 'User account deactivated',
    ip: '192.168.1.1'
  }
];
