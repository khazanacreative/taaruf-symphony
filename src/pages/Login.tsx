
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/auth/AuthForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCircle, UserCog } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const Login = () => {
  const { isAuthenticated, userRole, isLoading, refresh } = useAdminAuth();
  const navigate = useNavigate();
  
  // Check authentication status once when component mounts
  useEffect(() => {
    // Immediately refresh auth state to get latest status
    refresh();
    
    // Redirect if already authenticated
    if (isAuthenticated && !isLoading) {
      if (userRole === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [isAuthenticated, isLoading, userRole, navigate, refresh]);

  // Show loading state
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // Only show the login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 container max-w-md mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Masuk ke Akun Anda</h1>
              <p className="text-sm text-foreground/70 mt-2">
                Lanjutkan perjalanan ta'aruf Anda
              </p>
            </div>
            
            <div className="p-6 rounded-xl border">
              <AuthForm type="login" />           
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Akun Demo</CardTitle>
                <CardDescription>
                  Untuk demo, gunakan salah satu akun berikut:
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <UserCircle className="h-5 w-5 text-taaruf-blue" />
                  <div>
                    <p className="font-medium">1. Peserta ta'aruf</p>
                    <p className="text-sm text-muted-foreground">Email: user@example.com / Password: password</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <UserCog className="h-5 w-5 text-taaruf-green" />
                  <div>
                    <p className="font-medium">2. Admin</p>
                    <p className="text-sm text-muted-foreground">Email: admin@example.com / Password: admin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  // If authenticated, redirect to the appropriate dashboard
  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === 'admin') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/dashboard', { replace: true });
      }
    }
  }, [isAuthenticated, userRole, navigate]);
  
  // Return null while waiting for redirect
  return null;
};

export default Login;
