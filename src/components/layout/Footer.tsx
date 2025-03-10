
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 mt-auto border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-taaruf-blue to-taaruf-green flex items-center justify-center">
            <Heart className="h-3 w-3 text-white" />
          </div>
          <span className="text-sm font-medium">Taaruf Ar Rahman</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link to="/gallery" className="text-xs text-foreground/70 hover:text-taaruf-blue transition-colors">
            Galeri CV
          </Link>
          <Link to="/about" className="text-xs text-foreground/70 hover:text-taaruf-blue transition-colors">
            Tentang Kami
          </Link>
          <Link to="/faq" className="text-xs text-foreground/70 hover:text-taaruf-blue transition-colors">
            FAQ
          </Link>
          <Link to="/privacy" className="text-xs text-foreground/70 hover:text-taaruf-blue transition-colors">
            Privasi
          </Link>
          <Link to="/terms" className="text-xs text-foreground/70 hover:text-taaruf-blue transition-colors">
            Ketentuan
          </Link>
        </div>
        
        <div className="text-xs text-foreground/60">
          &copy; {currentYear} Taaruf Ar Rahman. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
