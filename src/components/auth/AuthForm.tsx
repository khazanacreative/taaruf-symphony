import { useState, useCallback } from 'react';
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
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreeTerms: false
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (type === 'register') {
      if (formData.password !== formData.confirmPassword) {
        toast({ title: 'Error', description: 'Password tidak cocok', variant: 'destructive' });
        setIsLoading(false);
        return;
      }
      if (!formData.agreeTerms) {
        toast({ title: 'Error', description: 'Anda harus menyetujui syarat & ketentuan', variant: 'destructive' });
        setIsLoading(false);
        return;
      }
    }

    setTimeout(() => {
      const isAdmin = formData.email === 'admin@example.com' && formData.password === 'admin';
      let isUser = formData.email === 'user@example.com' && formData.password === 'password';

      if (type === 'login' && !isAdmin && !isUser) {
        isUser = true;
      }

      if (type === 'login' && (isAdmin || isUser)) {
        localStorage.setItem('taaruf_auth', JSON.stringify({
          token: 'dummy-token-' + Math.random(),
          role: isAdmin ? 'admin' : 'user',
          email: formData.email
        }));

        toast({ title: 'Login Berhasil', description: `Selamat datang${isAdmin ? ' Admin' : ''}` });
        navigate(isAdmin ? '/admin/dashboard' : '/dashboard');
      } else if (type === 'register') {
        localStorage.setItem('taaruf_auth', JSON.stringify({
          token: 'dummy-token-' + Math.random(),
          role: 'user',
          email: formData.email
        }));

        toast({ title: 'Pendaftaran Berhasil', description: 'Akun Anda telah dibuat' });
        navigate('/dashboard');
      } else {
        toast({ title: 'Login Gagal', description: 'Email atau password salah', variant: 'destructive' });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'register' && (
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <input id="name" name="name" type="text" required className="w-full px-3 py-2 border rounded-md" value={formData.name} onChange={handleInputChange} />
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <input id="email" name="email" type="email" required className="w-full px-3 py-2 border rounded-md" value={formData.email} onChange={handleInputChange} />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Kata Sandi</Label>
        <input id="password" name="password" type="password" required className="w-full px-3 py-2 border rounded-md" value={formData.password} onChange={handleInputChange} />
      </div>
      
      {type === 'register' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
            <input id="confirmPassword" name="confirmPassword" type="password" required className="w-full px-3 py-2 border rounded-md" value={formData.confirmPassword} onChange={handleInputChange} />
          </div>
        </>
      )}
      
      <Button type="submit" className="w-full bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90" disabled={isLoading}>
        {isLoading ? 'Loading...' : type === 'login' ? 'Masuk' : 'Daftar'}
      </Button>
    </form>
  );
};

export default AuthForm;
