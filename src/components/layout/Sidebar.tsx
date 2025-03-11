
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard, 
  User, 
  Search, 
  Heart, 
  MessageSquare, 
  CheckCircle, 
  Calendar,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  FileText,
  BarChart,
  Mail,
  Award,
  DollarSign,
  AlertCircle,
  Clock
} from 'lucide-react';

type MenuItemType = {
  title: string;
  icon: React.ElementType;
  path: string;
};

type MenuSectionType = {
  title: string;
  items: MenuItemType[];
};

// Define menu items for participant/user role
const participantMenu: MenuSectionType[] = [
  {
    title: "Utama",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { title: "Profil Saya", icon: User, path: "/profile" },
      { title: "Pencarian Pasangan", icon: Search, path: "/search" },
    ]
  },
  {
    title: "Ta'aruf",
    items: [
      { title: "Permintaan Ta'aruf", icon: Heart, path: "/taaruf-requests" },
      { title: "Proses Ta'aruf", icon: MessageSquare, path: "/taaruf-process" },
      { title: "Persetujuan & Murobbi", icon: CheckCircle, path: "/approvals" },
      { title: "Jadwal Pertemuan", icon: Calendar, path: "/meetings" },
    ]
  },
  {
    title: "Konten",
    items: [
      { title: "Artikel & Edukasi", icon: FileText, path: "/articles" },
      { title: "Kisah Sukses", icon: Award, path: "/success-stories" },
    ]
  },
  {
    title: "Lainnya",
    items: [
      { title: "Pengaturan", icon: Settings, path: "/settings" },
    ]
  }
];

// Define menu items for admin role
const adminMenu: MenuSectionType[] = [
  {
    title: "Utama",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
      { title: "Pengguna", icon: Users, path: "/admin/users" },
      { title: "Proses Ta'aruf", icon: Heart, path: "/admin/taaruf" },
    ]
  },
  {
    title: "Pengelolaan",
    items: [
      { title: "Konten", icon: FileText, path: "/admin/content" },
      { title: "Komunikasi", icon: Mail, path: "/admin/communications" },
      { title: "Acara", icon: Calendar, path: "/admin/events" },
      { title: "Keuangan", icon: DollarSign, path: "/admin/finance" },
    ]
  },
  {
    title: "Lainnya",
    items: [
      { title: "Pengaturan Admin", icon: Settings, path: "/admin/settings" },
      { title: "Laporan", icon: BarChart, path: "/admin/reports" },
      { title: "Log Aktivitas", icon: Clock, path: "/admin/logs" },
    ]
  }
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userRole, setUserRole] = useState<'participant' | 'admin'>('participant');
  const location = useLocation();
  
  // Get user role from local storage
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      const { role } = JSON.parse(authData);
      if (role === 'admin') {
        setUserRole('admin');
      } else {
        setUserRole('participant');
      }
    }
  }, []);
  
  // Determine which menu to show based on user role
  const menuSections = userRole === 'admin' ? adminMenu : participantMenu;
  
  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <aside 
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[260px]",
        className
      )}
    >
      <div className="py-4 px-3 flex justify-between items-center h-[72px]">
        {!isCollapsed && (
          <div className="font-semibold text-lg text-taaruf-blue">Taaruf AR</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto" 
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      <Separator />
      
      <div className="flex-1 overflow-y-auto py-2">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="px-3 py-2">
            {!isCollapsed && (
              <h3 className="text-xs uppercase text-muted-foreground mb-2 mt-2">{section.title}</h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={itemIndex}>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        isActive 
                          ? "bg-gradient-to-r from-taaruf-blue/20 to-taaruf-green/20 text-foreground font-medium" 
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <Icon className={cn("w-5 h-5", isActive ? "text-taaruf-blue" : "")} />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t mt-auto">
        <Button 
          variant="outline" 
          className={cn(
            "w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50", 
            isCollapsed ? "px-2" : ""
          )}
          asChild
        >
          <Link to="/logout">
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-2">Keluar</span>}
          </Link>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
