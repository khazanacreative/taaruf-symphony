
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/auth/AuthForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UserCircle, UserCog } from 'lucide-react';

const Login = () => {
  // Check if user is already logged in
  const authData = localStorage.getItem('taaruf_auth');
  const isAuthenticated = authData ? JSON.parse(authData).isAuthenticated : false;

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    // Get user role from local storage
    const { role } = JSON.parse(authData);
    // Redirect admin to admin dashboard
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    }
    // Redirect regular users to user dashboard
    return <Navigate to="/dashboard" replace />;
  }

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
};

export default Login;
