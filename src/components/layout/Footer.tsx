
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-taaruf-blue" />
              <span className="font-bold text-lg">Taaruf Ar Rahman</span>
            </div>
            <p className="text-sm text-foreground/70">
              Platform pernikahan Islami yang membantu Anda menemukan pasangan hidup sesuai syariat Islam.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-taaruf-blue">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-foreground/70 hover:text-taaruf-blue">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-taaruf-blue">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-taaruf-blue">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Tautan Penting</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-taaruf-blue">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-taaruf-blue">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-taaruf-blue">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/70">
                Email: info@taarufarrahman.com
              </li>
              <li className="text-foreground/70">
                Telepon: +62 812 3456 7890
              </li>
              <li className="text-foreground/70">
                Alamat: Jl. Contoh No. 123, Jakarta
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Taaruf Ar Rahman. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
