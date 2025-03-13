
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/auth/AuthForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const Register = () => {
  const { isAuthenticated, userRole, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      if (userRole === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [isAuthenticated, isLoading, userRole, navigate]);

  // Show loading state
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  // Only show the register form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container max-w-md mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Daftar Akun Baru</h1>
              <p className="text-sm text-foreground/70 mt-2">
                Mulai perjalanan ta'aruf Anda dengan nilai-nilai Islami
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <AuthForm type="register" />           
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return null;
};

export default Register;
