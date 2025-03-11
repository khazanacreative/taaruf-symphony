
import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Download, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

// Sample log data
const logData = [
  { 
    id: '1001', 
    timestamp: '2023-06-10 08:15:22', 
    user: 'ahmad@example.com', 
    action: 'Login', 
    status: 'success', 
    details: 'Successful login from IP 192.168.1.1' 
  },
  { 
    id: '1002', 
    timestamp: '2023-06-10 09:30:45', 
    user: 'fatimah@example.com', 
    action: 'Profile Update', 
    status: 'success', 
    details: 'Updated profile information' 
  },
  { 
    id: '1003', 
    timestamp: '2023-06-10 10:12:33', 
    user: 'umar@example.com', 
    action: 'Ta\'aruf Request', 
    status: 'success', 
    details: 'Sent ta\'aruf request to aisyah@example.com' 
  },
  { 
    id: '1004', 
    timestamp: '2023-06-10 11:45:01', 
    user: 'system', 
    action: 'Backup', 
    status: 'success', 
    details: 'Automated system backup completed' 
  },
  { 
    id: '1005', 
    timestamp: '2023-06-10 13:22:19', 
    user: 'hasan@example.com', 
    action: 'Login', 
    status: 'error', 
    details: 'Failed login attempt from IP 203.0.113.4 (5th attempt)' 
  },
  { 
    id: '1006', 
    timestamp: '2023-06-10 14:05:37', 
    user: 'admin@taarufarrahman.com', 
    action: 'User Suspend', 
    status: 'warning', 
    details: 'Temporarily suspended user khalid@example.com for violation of terms' 
  },
  { 
    id: '1007', 
    timestamp: '2023-06-10 15:30:42', 
    user: 'zainab@example.com', 
    action: 'Document Upload', 
    status: 'info', 
    details: 'Uploaded verification documents' 
  },
  { 
    id: '1008', 
    timestamp: '2023-06-10 16:45:09', 
    user: 'ali@example.com', 
    action: 'Payment', 
    status: 'success', 
    details: 'Completed premium subscription payment' 
  },
  { 
    id: '1009', 
    timestamp: '2023-06-10 17:12:25', 
    user: 'system', 
    action: 'Maintenance', 
    status: 'info', 
    details: 'Started scheduled system maintenance' 
  },
  { 
    id: '1010', 
    timestamp: '2023-06-10 18:30:15', 
    user: 'admin@taarufarrahman.com', 
    action: 'Configuration', 
    status: 'warning', 
    details: 'Changed system email template configuration' 
  },
];

const AdminLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [logType, setLogType] = useState('all');
  const [timeFrame, setTimeFrame] = useState('today');

  // Filter logs based on search term and filters
  const filteredLogs = logData.filter(log => {
    return (
      (log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
       log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
       log.details.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (logType === 'all' || log.status === logType) 
    );
  });

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-500"><CheckCircle className="w-3 h-3 mr-1" /> Success</Badge>;
      case 'error':
        return <Badge className="bg-red-500"><XCircle className="w-3 h-3 mr-1" /> Error</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500"><AlertTriangle className="w-3 h-3 mr-1" /> Warning</Badge>;
      case 'info':
        return <Badge className="bg-blue-500"><Info className="w-3 h-3 mr-1" /> Info</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">System Logs</h1>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Logs</CardTitle>
              <CardDescription>All system logs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{logData.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Success</CardTitle>
              <CardDescription>Successful operations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">
                {logData.filter(log => log.status === 'success').length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Errors</CardTitle>
              <CardDescription>Failed operations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600">
                {logData.filter(log => log.status === 'error').length}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Warnings</CardTitle>
              <CardDescription>Potential issues</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-yellow-600">
                {logData.filter(log => log.status === 'warning').length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>System Activity Logs</CardTitle>
            <CardDescription>
              View and filter all system activities and events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search logs..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={logType} onValueChange={setLogType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Log Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="info">Information</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Time Frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="w-[180px]">Timestamp</TableHead>
                    <TableHead className="w-[180px]">User</TableHead>
                    <TableHead className="w-[150px]">Action</TableHead>
                    <TableHead className="w-[120px]">Status</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLogs.length > 0 ? (
                    filteredLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-mono text-xs">{log.id}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell>
                          <StatusBadge status={log.status} />
                        </TableCell>
                        <TableCell className="max-w-md truncate">{log.details}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No logs found matching the current filters.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AdminLogs;
