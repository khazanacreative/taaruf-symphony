
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Eye, 
  EyeOff, 
  Loader2, 
  Save,
  Trash2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AppLayout from '@/components/layout/AppLayout';

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('account');
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // Mock form data
  const [formData, setFormData] = useState({
    fullName: 'Ahmad Fauzi',
    username: 'ahmadfauzi',
    email: 'ahmad.fauzi@example.com',
    phone: '+62812345678',
    bio: 'Assalamu\'alaikum, saya Ahmad dari Jakarta. Alhamdulillah, saya bekerja sebagai engineer dan aktif di kajian-kajian Islam.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    appNotifications: true,
    taarufUpdates: true,
    articleUpdates: false,
    language: 'id',
    theme: 'light',
    privacyProfile: 'registered',
    privacyPhotos: 'matches',
    twoFactorAuth: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveProfile = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profil Disimpan",
        description: "Perubahan pada profil Anda telah berhasil disimpan.",
      });
    }, 1000);
  };
  
  const handleChangePassword = () => {
    // Basic validation
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Semua field harus diisi.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Kata sandi baru dan konfirmasi kata sandi tidak cocok.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
      toast({
        title: "Kata Sandi Diubah",
        description: "Kata sandi Anda telah berhasil diubah.",
      });
    }, 1000);
  };
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Pengaturan</h1>
          <p className="text-muted-foreground">Kelola akun dan preferensi Anda</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
            <TabsTrigger value="account" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Akun
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Keamanan
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifikasi
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Privasi
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Profil</CardTitle>
                <CardDescription>
                  Kelola informasi profil publik Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nama Lengkap</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Nama Pengguna</Label>
                    <Input 
                      id="username" 
                      name="username" 
                      value={formData.username} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    name="bio" 
                    rows={4} 
                    value={formData.bio} 
                    onChange={handleInputChange} 
                    placeholder="Ceritakan sedikit tentang diri Anda..." 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Preferensi</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Bahasa</Label>
                      <Select 
                        value={formData.language} 
                        onValueChange={(value) => handleSelectChange('language', value)}
                      >
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Pilih bahasa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="id">Indonesia</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="theme">Tema</Label>
                      <Select 
                        value={formData.theme} 
                        onValueChange={(value) => handleSelectChange('theme', value)}
                      >
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Pilih tema" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Terang</SelectItem>
                          <SelectItem value="dark">Gelap</SelectItem>
                          <SelectItem value="system">Ikuti Sistem</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button 
                    variant="destructive" 
                    className="gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Hapus Akun
                  </Button>
                  <Button 
                    className="bg-taaruf-blue hover:bg-taaruf-blue/90 text-white gap-1"
                    onClick={handleSaveProfile}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    Simpan Perubahan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Keamanan Akun</CardTitle>
                <CardDescription>
                  Kelola keamanan akun dan autentikasi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Ubah Kata Sandi</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Kata Sandi Saat Ini</Label>
                      <div className="relative">
                        <Input 
                          id="currentPassword" 
                          name="currentPassword" 
                          type={showCurrentPassword ? "text" : "password"} 
                          value={formData.currentPassword} 
                          onChange={handleInputChange} 
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Kata Sandi Baru</Label>
                      <div className="relative">
                        <Input 
                          id="newPassword" 
                          name="newPassword" 
                          type={showNewPassword ? "text" : "password"} 
                          value={formData.newPassword} 
                          onChange={handleInputChange} 
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        value={formData.confirmPassword} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <Button 
                      className="w-full bg-taaruf-blue hover:bg-taaruf-blue/90 text-white"
                      onClick={handleChangePassword}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Ubah Kata Sandi
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Verifikasi Dua Faktor</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autentikasi Dua Faktor</p>
                      <p className="text-sm text-muted-foreground">
                        Tambahkan lapisan keamanan ekstra dengan verifikasi dua faktor
                      </p>
                    </div>
                    <Switch 
                      checked={formData.twoFactorAuth} 
                      onCheckedChange={(checked) => handleSwitchChange('twoFactorAuth', checked)} 
                    />
                  </div>
                  
                  {formData.twoFactorAuth && (
                    <Button variant="outline" className="w-full">
                      Konfigurasi 2FA
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Preferensi Notifikasi</CardTitle>
                <CardDescription>
                  Atur bagaimana Anda ingin menerima notifikasi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Saluran Notifikasi</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        Terima notifikasi melalui email
                      </p>
                    </div>
                    <Switch 
                      checked={formData.emailNotifications} 
                      onCheckedChange={(checked) => handleSwitchChange('emailNotifications', checked)} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notifikasi Aplikasi</p>
                      <p className="text-sm text-muted-foreground">
                        Terima notifikasi di dalam aplikasi
                      </p>
                    </div>
                    <Switch 
                      checked={formData.appNotifications} 
                      onCheckedChange={(checked) => handleSwitchChange('appNotifications', checked)} 
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Jenis Notifikasi</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Update Ta'aruf</p>
                      <p className="text-sm text-muted-foreground">
                        Notifikasi tentang permintaan dan proses ta'aruf
                      </p>
                    </div>
                    <Switch 
                      checked={formData.taarufUpdates} 
                      onCheckedChange={(checked) => handleSwitchChange('taarufUpdates', checked)} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Artikel & Edukasi</p>
                      <p className="text-sm text-muted-foreground">
                        Notifikasi tentang artikel dan konten edukasi baru
                      </p>
                    </div>
                    <Switch 
                      checked={formData.articleUpdates} 
                      onCheckedChange={(checked) => handleSwitchChange('articleUpdates', checked)} 
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-taaruf-blue hover:bg-taaruf-blue/90 text-white"
                    onClick={() => {
                      toast({
                        title: "Notifikasi Disimpan",
                        description: "Preferensi notifikasi Anda telah berhasil disimpan.",
                      });
                    }}
                  >
                    Simpan Preferensi Notifikasi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Privasi</CardTitle>
                <CardDescription>
                  Kontrol siapa yang dapat melihat informasi Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Visibilitas Profil</h3>
                  <div className="space-y-2">
                    <Label htmlFor="privacyProfile">Siapa yang dapat melihat profil Anda?</Label>
                    <Select 
                      value={formData.privacyProfile} 
                      onValueChange={(value) => handleSelectChange('privacyProfile', value)}
                    >
                      <SelectTrigger id="privacyProfile">
                        <SelectValue placeholder="Pilih pengaturan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Semua Orang</SelectItem>
                        <SelectItem value="registered">Pengguna Terdaftar</SelectItem>
                        <SelectItem value="matches">Hanya Permintaan Ta'aruf</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="privacyPhotos">Siapa yang dapat melihat foto Anda?</Label>
                    <Select 
                      value={formData.privacyPhotos} 
                      onValueChange={(value) => handleSelectChange('privacyPhotos', value)}
                    >
                      <SelectTrigger id="privacyPhotos">
                        <SelectValue placeholder="Pilih pengaturan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registered">Pengguna Terdaftar</SelectItem>
                        <SelectItem value="matches">Hanya Permintaan Ta'aruf</SelectItem>
                        <SelectItem value="approved">Hanya Setelah Disetujui</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data & Privasi</h3>
                  <Button variant="outline" className="w-full">
                    Unduh Data Saya
                  </Button>
                  <Button variant="outline" className="w-full">
                    Kelola Cookies
                  </Button>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-taaruf-blue hover:bg-taaruf-blue/90 text-white"
                    onClick={() => {
                      toast({
                        title: "Privasi Disimpan",
                        description: "Pengaturan privasi Anda telah berhasil diperbarui.",
                      });
                    }}
                  >
                    Simpan Pengaturan Privasi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Settings;
