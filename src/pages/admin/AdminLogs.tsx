
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Clock, 
  Search, 
  Download, 
  Filter, 
  AlertTriangle,
  InfoIcon,
  CheckCircle,
  XCircle
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const AdminLogs = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      const { isAuthenticated, role } = JSON.parse(authData);
      setIsAuthenticated(isAuthenticated);
      setUserRole(role);
    }
  }, []);
  
  // Redirect to login if not authenticated or if not admin
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (userRole !== 'admin') {
    return <Navigate to="/dashboard" />;
  }
  
  // Mock data for system logs
  const logs = [
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
  
  // Function to render log level icon
  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Log Aktivitas Sistem</h1>
            <p className="text-muted-foreground">
              Pantau aktivitas dan peristiwa sistem
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Ekspor Log
            </Button>
          </div>
        </div>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Log Aktivitas Terbaru</CardTitle>
              <div className="w-full max-w-sm flex items-center relative">
                <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
                <Input 
                  placeholder="Cari log..." 
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50 border-b">
                      <th className="py-3 px-4 text-left font-medium">Waktu</th>
                      <th className="py-3 px-4 text-left font-medium">Level</th>
                      <th className="py-3 px-4 text-left font-medium">Pengguna</th>
                      <th className="py-3 px-4 text-left font-medium">Aktivitas</th>
                      <th className="py-3 px-4 text-left font-medium">IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map((log) => (
                      <tr key={log.id} className="border-b last:border-b-0 hover:bg-muted/30">
                        <td className="py-3 px-4 flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                          {log.timestamp}
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center">
                            {getLevelIcon(log.level)}
                            <span className="ml-2 capitalize">{log.level}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4">{log.user}</td>
                        <td className="py-3 px-4">{log.action}</td>
                        <td className="py-3 px-4">{log.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Menampilkan 1-7 dari 120 log
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled>
                  Sebelumnya
                </Button>
                <Button variant="outline" size="sm">
                  Selanjutnya
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AdminLogs;
