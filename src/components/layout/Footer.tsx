
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-taaruf-blue" />
              <span className="font-bold text-lg text-gradient">Taaruf Ar Rahman</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Platform ta'aruf islami yang membantu Muslim menemukan pasangan hidup melalui cara yang halal dan terhormat.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Pintasan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/70 hover:text-taaruf-blue">Beranda</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-foreground/70 hover:text-taaruf-blue">Galeri Peserta</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-taaruf-blue">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-foreground/70 hover:text-taaruf-blue">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-foreground/70 hover:text-taaruf-blue">Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-foreground/70 hover:text-taaruf-blue">Kebijakan Privasi</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/70 hover:text-taaruf-blue">Hubungi Kami</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-taaruf-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-taaruf-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-taaruf-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-taaruf-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-foreground/70">
          <p>&copy; {currentYear} Taaruf Ar Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
