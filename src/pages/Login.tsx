
import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
  
  // Only check authentication status once when component mounts
  useEffect(() => {
    // Redirect if already authenticated
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

  // Don't use Navigate component which can cause infinite loops
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
  
  // Return null to avoid any rendering if we're just waiting for redirect
  return null;
};

export default Login;
