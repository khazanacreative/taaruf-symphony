
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
      // Set auth data in localStorage (in a real app, this would come from the server)
      localStorage.setItem('taaruf_auth', JSON.stringify({
        isAuthenticated: true,
        user: {
          name: type === 'register' ? formData.name : 'User',
          email: formData.email,
          gender: formData.gender
        },
        token: 'dummy-token-' + Math.random()
      }));
      
      toast({
        title: type === 'login' ? "Login berhasil" : "Pendaftaran berhasil",
        description: type === 'login' 
          ? "Selamat datang kembali di Taaruf Ar Rahman." 
          : "Akun Anda telah dibuat. Silakan lengkapi profil Anda.",
      });
      
      // Redirect ke dashboard
      navigate('/dashboard');
      
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
          <a href="/register" className="text-taaruf-blue hover:underline">
            Daftar sekarang
          </a>
        </p>
      ) : (
        <p className="text-sm text-center text-foreground/70">
          Sudah punya akun?{' '}
          <a href="/login" className="text-taaruf-blue hover:underline">
            Masuk
          </a>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
