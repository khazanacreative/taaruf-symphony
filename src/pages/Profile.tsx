import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Shield, Calendar } from 'lucide-react';
import CVForm from '@/components/profile/CVForm';
import AppLayout from '@/components/layout/AppLayout';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { isAuthenticated, userRole, isLoading } = useAdminAuth();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    gender: '',
    registrationDate: '',
    role: ''
  });
  
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      const { user, role } = JSON.parse(authData);
      setUserData({
        name: user?.name || 'User',
        email: user?.email || 'user@example.com',
        gender: user?.gender || '',
        registrationDate: new Date().toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        role: role || 'user'
      });
    }
  }, []);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Profil Saya</h1>
          <p className="text-sm text-foreground/70 mt-2">
            {userRole === 'admin' 
              ? 'Kelola pengaturan akun admin' 
              : 'Lengkapi profil dan CV ta\'aruf Anda'}
          </p>
        </div>
        
        {userRole === 'admin' ? (
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle>Informasi Admin</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-2">
                    <AvatarImage src="" alt={userData.name} />
                    <AvatarFallback className="bg-taaruf-blue text-white text-xl">
                      {userData.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="bg-taaruf-blue">Administrator</Badge>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <User className="h-4 w-4 mr-2" />
                        Nama Lengkap
                      </div>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </div>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Shield className="h-4 w-4 mr-2" />
                        Peran
                      </div>
                      <p className="font-medium">Administrator</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Terdaftar Pada
                      </div>
                      <p className="font-medium">{userData.registrationDate}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <h3 className="text-sm font-medium">Pengaturan Akun</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/admin/settings">Pengaturan Lanjutan</Link>
                      </Button>
                      <Button variant="outline" size="sm">Ubah Kata Sandi</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="cv" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cv">Biodata / CV</TabsTrigger>
              <TabsTrigger value="pengaturan">Pengaturan Akun</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cv" className="mt-6">
              <div className="glass-card p-6 rounded-xl">
                <CVForm />
              </div>
            </TabsContent>
            
            <TabsContent value="pengaturan" className="mt-6">
              <div className="glass-card p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-medium">Pengaturan Akun</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-border rounded-md"
                      value={userData.email} 
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Kata Sandi</label>
                    <Button variant="outline" size="sm">Ubah Kata Sandi</Button>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Notifikasi</label>
                    <div className="flex items-center">
                      <input type="checkbox" id="notifications" className="mr-2" />
                      <label htmlFor="notifications">Aktifkan notifikasi email</label>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">Simpan Perubahan</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </AppLayout>
  );
};

export default Profile;
