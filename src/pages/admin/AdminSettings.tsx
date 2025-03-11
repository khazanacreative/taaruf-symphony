
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import AppLayout from '@/components/layout/AppLayout';
import { Save, Upload, RefreshCw, Shield } from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pengaturan Sistem</h1>
          <p className="text-foreground/70">Kelola pengaturan aplikasi Ta'aruf</p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="general">Umum</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="appearance">Tampilan</TabsTrigger>
          <TabsTrigger value="advanced">Lanjutan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengaturan Umum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-4">Informasi Aplikasi</h3>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="app-name">Nama Aplikasi</Label>
                      <Input id="app-name" defaultValue="Taaruf Ar Rahman" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="app-description">Deskripsi Aplikasi</Label>
                      <Textarea id="app-description" rows={3} defaultValue="Platform ta'aruf online yang menghubungkan Muslim dan Muslimah untuk proses pernikahan sesuai syariat Islam." />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-email">Email Kontak</Label>
                      <Input id="contact-email" type="email" defaultValue="admin@taarufarrahman.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="app-logo">Logo Aplikasi</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-500">Logo</span>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center">
                          <Upload className="h-4 w-4 mr-1" /> Unggah Logo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Fitur Sistem</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="registration-switch">Pendaftaran Pengguna</Label>
                        <p className="text-sm text-foreground/70">Aktifkan atau nonaktifkan pendaftaran pengguna baru</p>
                      </div>
                      <Switch id="registration-switch" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance-switch">Mode Pemeliharaan</Label>
                        <p className="text-sm text-foreground/70">Aktifkan untuk menonaktifkan akses ke aplikasi sementara</p>
                      </div>
                      <Switch id="maintenance-switch" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="audit-switch">Audit Log</Label>
                        <p className="text-sm text-foreground/70">Catat semua aktivitas pengguna untuk keamanan</p>
                      </div>
                      <Switch id="audit-switch" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Button className="bg-taaruf-blue hover:bg-taaruf-blue/90 w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" /> Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengaturan Keamanan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-4">Autentikasi</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="2fa-switch">Autentikasi 2 Faktor (2FA)</Label>
                        <p className="text-sm text-foreground/70">Wajibkan 2FA untuk semua admin</p>
                      </div>
                      <Switch id="2fa-switch" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="session-switch">Batas Waktu Sesi</Label>
                        <p className="text-sm text-foreground/70">Otomatis logout setelah tidak aktif</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input id="session-timeout" className="w-20" defaultValue="30" />
                        <span className="text-sm">menit</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="password-policy">Kebijakan Password</Label>
                        <p className="text-sm text-foreground/70">Atur persyaratan minimum password</p>
                      </div>
                      <Button variant="outline" size="sm">Konfigurasi</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Perlindungan Data</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="encryption-switch">Enkripsi Data</Label>
                        <p className="text-sm text-foreground/70">Enkripsi data sensitif pengguna</p>
                      </div>
                      <Switch id="encryption-switch" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="backup-schedule">Jadwal Backup</Label>
                        <p className="text-sm text-foreground/70">Frekuensi backup otomatis</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="border rounded-md py-1 px-2 text-sm">
                          <option>Harian</option>
                          <option>Mingguan</option>
                          <option>Bulanan</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" /> Lakukan Backup Sekarang
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Keamanan Lanjutan</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="firewall-switch">Firewall Aplikasi</Label>
                        <p className="text-sm text-foreground/70">Aktifkan perlindungan dari serangan siber</p>
                      </div>
                      <Switch id="firewall-switch" defaultChecked />
                    </div>
                    
                    <Button className="flex items-center w-full sm:w-auto">
                      <Shield className="h-4 w-4 mr-2" /> Pindai Kerentanan
                    </Button>
                  </div>
                </div>
                
                <Button className="bg-taaruf-blue hover:bg-taaruf-blue/90 w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" /> Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengaturan Tampilan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-4">Tema Aplikasi</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer bg-blue-50 border-blue-200">
                      <div className="w-full h-28 bg-blue-100 rounded-md mb-2 overflow-hidden">
                        <div className="w-full h-6 bg-blue-500"></div>
                        <div className="flex h-[calc(100%-24px)]">
                          <div className="w-1/4 bg-blue-200"></div>
                          <div className="w-3/4 p-2">
                            <div className="w-3/4 h-2 bg-blue-300 rounded mb-1"></div>
                            <div className="w-1/2 h-2 bg-blue-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium">Tema Default</p>
                      <div className="inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        Aktif
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer">
                      <div className="w-full h-28 bg-gray-100 rounded-md mb-2 overflow-hidden">
                        <div className="w-full h-6 bg-gray-800"></div>
                        <div className="flex h-[calc(100%-24px)]">
                          <div className="w-1/4 bg-gray-700"></div>
                          <div className="w-3/4 p-2 bg-gray-200">
                            <div className="w-3/4 h-2 bg-gray-400 rounded mb-1"></div>
                            <div className="w-1/2 h-2 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium">Mode Gelap</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center cursor-pointer">
                      <div className="w-full h-28 bg-green-50 rounded-md mb-2 overflow-hidden">
                        <div className="w-full h-6 bg-green-600"></div>
                        <div className="flex h-[calc(100%-24px)]">
                          <div className="w-1/4 bg-green-100"></div>
                          <div className="w-3/4 p-2">
                            <div className="w-3/4 h-2 bg-green-200 rounded mb-1"></div>
                            <div className="w-1/2 h-2 bg-green-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium">Tema Hijau</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Halaman Beranda</h3>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="welcome-text">Teks Sambutan</Label>
                      <Textarea id="welcome-text" rows={2} defaultValue="Selamat datang di Taaruf Ar Rahman, platform ta'aruf online sesuai syariat Islam." />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="featured-content">Konten Unggulan</Label>
                      <div className="flex items-center gap-2">
                        <select className="border rounded-md py-2 px-3 w-full">
                          <option>Kisah Sukses Terbaru</option>
                          <option>Artikel Populer</option>
                          <option>Webinar Mendatang</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Kustomisasi Tampilan</h3>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label>Warna Utama</Label>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md bg-taaruf-blue"></div>
                        <Input type="text" defaultValue="#3B82F6" className="w-32" />
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label>Warna Sekunder</Label>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md bg-taaruf-green"></div>
                        <Input type="text" defaultValue="#10B981" className="w-32" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="custom-font">Jenis Font</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="border rounded-md py-1 px-2 text-sm">
                          <option>Inter</option>
                          <option>Roboto</option>
                          <option>Poppins</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-taaruf-blue hover:bg-taaruf-blue/90 w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" /> Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengaturan Lanjutan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-4">Integrasi</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>API Pembayaran</Label>
                        <p className="text-sm text-foreground/70">Mengintegrasikan gateway pembayaran</p>
                      </div>
                      <Button variant="outline" size="sm">Konfigurasi</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notifikasi Email</Label>
                        <p className="text-sm text-foreground/70">Pengaturan server email</p>
                      </div>
                      <Button variant="outline" size="sm">Konfigurasi</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Integrasi WhatsApp</Label>
                        <p className="text-sm text-foreground/70">Kirim pemberitahuan melalui WhatsApp</p>
                      </div>
                      <Button variant="outline" size="sm">Konfigurasi</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Performa Sistem</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="cache-switch">Cache Sistem</Label>
                        <p className="text-sm text-foreground/70">Aktifkan caching untuk performa lebih baik</p>
                      </div>
                      <Switch id="cache-switch" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="image-compression">Kompresi Gambar</Label>
                        <p className="text-sm text-foreground/70">Kompres gambar yang diunggah</p>
                      </div>
                      <Switch id="image-compression" defaultChecked />
                    </div>
                    
                    <Button variant="outline" className="flex items-center">
                      Bersihkan Cache
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium mb-4">Sistem Log</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-mono">
                      [INFO] 2023-09-12 08:30:15 - System started<br />
                      [INFO] 2023-09-12 08:31:05 - 5 users logged in<br />
                      [WARN] 2023-09-12 09:15:22 - High memory usage detected<br />
                      [INFO] 2023-09-12 10:45:30 - Backup completed successfully
                    </p>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Lihat Semua Log
                    </Button>
                  </div>
                </div>
                
                <Button className="bg-taaruf-blue hover:bg-taaruf-blue/90 w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" /> Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default AdminSettings;
