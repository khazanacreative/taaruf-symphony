
import { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LayoutDashboard, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { isAuthenticated, isAdmin, userRole } = useAdminAuth();
  const navigate = useNavigate();
  
  // Get user name from localStorage if authenticated
  const userName = useMemo(() => {
    if (!isAuthenticated) return null;
    
    try {
      const authData = localStorage.getItem('taaruf_auth');
      if (authData) {
        const { user } = JSON.parse(authData);
        return user?.name || (isAdmin ? 'Admin' : 'User');
      }
    } catch (error) {
      console.error('Error parsing auth data:', error);
    }
    
    return isAdmin ? 'Admin' : 'User';
  }, [isAuthenticated, isAdmin]);
  
  const handleDashboardClick = useCallback((e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  const dashboardLink = isAdmin ? "/admin/dashboard" : "/dashboard";
  
  const headerClass = useMemo(() => cn(
    "sticky top-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b h-[72px]",
    className
  ), [className]);
  
  return (
    <header className={headerClass}>
      <Link to="/" className="text-lg font-bold text-gradient">
        Taaruf Ar Rahman
      </Link>
      
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <>
            <Button asChild variant="ghost" size="sm" onClick={handleDashboardClick}>
              <Link to={dashboardLink}>
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  {userName}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{isAdmin ? 'Admin' : 'Akun Saya'}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profil Saya</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings">Pengaturan</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/logout" className="text-red-500 flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Keluar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button asChild size="sm" className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white">
            <Link to="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Masuk
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
