
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if user is logged in
  const authData = localStorage.getItem('taaruf_auth');
  const isAuthenticated = authData ? JSON.parse(authData).isAuthenticated : false;
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];
  
  const authMenuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profil', path: '/profile' },
    { name: 'Pesan', path: '/messages' },
    { name: 'Pengaturan', path: '/settings' },
    { name: 'Keluar', path: '/logout' }
  ];
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-taaruf-blue" />
          <span className="font-bold text-xl text-gradient">Taaruf Ar Rahman</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-foreground/70 hover:text-taaruf-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <Button asChild variant="ghost">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link to="/login">Masuk</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
                <Link to="/register">Daftar</Link>
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72">
            <div className="mt-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center py-2 text-foreground hover:text-taaruf-blue"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t my-4"></div>
              
              {isAuthenticated ? (
                <>
                  {authMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center py-2 text-foreground hover:text-taaruf-blue"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/login" onClick={closeMenu}>Masuk</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
                    <Link to="/register" onClick={closeMenu}>Daftar</Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
