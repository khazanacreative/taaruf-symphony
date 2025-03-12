
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // State untuk form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreeTerms: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validasi sederhana
    if (type === 'register') {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Kata sandi dan konfirmasi kata sandi tidak cocok.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      if (!formData.agreeTerms) {
        toast({
          title: "Error",
          description: "Anda harus menyetujui syarat dan ketentuan untuk mendaftar.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
    }
    
    // Simulasi request ke server
    setTimeout(() => {
      // Check if logging in with demo admin account
      const isAdmin = formData.email === 'admin@example.com' && formData.password === 'admin';
      
      // Check if logging in with demo user account
      let isUser = formData.email === 'user@example.com' && formData.password === 'password';
      
      if (type === 'login' && !isAdmin && !isUser && formData.email && formData.password) {
        // For demo purposes - any email/password works for regular user
        isUser = true;
      }
      
      if (type === 'login' && (isAdmin || isUser)) {
        // Set auth data in localStorage with appropriate role
        localStorage.setItem('taaruf_auth', JSON.stringify({
          isAuthenticated: true,
          user: {
            name: isAdmin ? 'Admin' : 'User',
            email: formData.email,
            gender: formData.gender
          },
          role: isAdmin ? 'admin' : 'user',
          token: 'dummy-token-' + Math.random()
        }));
        
        toast({
          title: "Login berhasil",
          description: `Selamat datang kembali di Taaruf Ar Rahman${isAdmin ? ' sebagai Admin' : ''}.`
        });
        
        // Redirect based on role
        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/dashboard');
        }
      } else if (type === 'register') {
        // Handle registration
        localStorage.setItem('taaruf_auth', JSON.stringify({
          isAuthenticated: true,
          user: {
            name: formData.name,
            email: formData.email,
            gender: formData.gender
          },
          role: 'user',
          token: 'dummy-token-' + Math.random()
        }));
        
        toast({
          title: "Pendaftaran berhasil",
          description: "Akun Anda telah dibuat. Silakan lengkapi profil Anda."
        });
        
        navigate('/dashboard');
      } else {
        // Login failed
        toast({
          title: "Login gagal",
          description: "Email atau kata sandi tidak valid.",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'register' && (
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-input rounded-md"
            placeholder="Masukkan nama lengkap Anda"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-input rounded-md"
          placeholder="Masukkan alamat email Anda"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Kata Sandi</Label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full px-3 py-2 border border-input rounded-md"
          placeholder="Masukkan kata sandi Anda"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      
      {type === 'register' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border border-input rounded-md"
              placeholder="Konfirmasi kata sandi Anda"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gender">Jenis Kelamin</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                  required
                />
                <span>Ikhwan (Laki-laki)</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                  required
                />
                <span>Akhwat (Perempuan)</span>
              </label>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              className="mt-1"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="agreeTerms" className="text-sm text-foreground/70">
              Saya menyetujui <a href="/terms" className="text-taaruf-blue">Syarat dan Ketentuan</a> serta <a href="/privacy" className="text-taaruf-blue">Kebijakan Privasi</a> Taaruf Ar Rahman
            </Label>
          </div>
        </>
      )}
      
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : type === 'login' ? 'Masuk' : 'Daftar'}
      </Button>
      
      {type === 'login' ? (
        <p className="text-sm text-center text-foreground/70">
          Belum punya akun?{' '}
          <Link to="/register" className="text-taaruf-blue hover:underline">
            Daftar sekarang
          </Link>
        </p>
      ) : (
        <p className="text-sm text-center text-foreground/70">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-taaruf-blue hover:underline">
            Masuk
          </Link>
        </p>
      )}
      
      {type === 'login' && (
        <div className="border-t pt-4 mt-4">
          <p className="text-xs text-center text-muted-foreground mb-3">
            Demo Login:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              className="text-xs"
              onClick={() => {
                setFormData({
                  ...formData,
                  email: 'user@example.com',
                  password: 'password'
                });
              }}
            >
              User Demo
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              className="text-xs"
              onClick={() => {
                setFormData({
                  ...formData,
                  email: 'admin@example.com', 
                  password: 'admin'
                });
              }}
            >
              Admin Demo
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
