
import { Link } from 'react-router-dom';
import { User, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b h-[72px]",
      className
    )}>
      <Link to="/" className="text-lg font-bold text-gradient">
        Taaruf Ar Rahman
      </Link>
      
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/dashboard">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Dashboard
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link to="/profile">
            <User className="h-4 w-4 mr-2" />
            Profil
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
