
import { 
  Clock, 
  AlertTriangle,
  InfoIcon,
  XCircle
} from 'lucide-react';

export interface LogEntry {
  id: number;
  timestamp: string;
  level: string;
  user: string;
  action: string;
  ip: string;
}

interface LogTableProps {
  logs: LogEntry[];
}

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

const LogTable = ({ logs }: LogTableProps) => {
  return (
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
  );
};

export default LogTable;
