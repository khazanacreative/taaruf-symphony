
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/components/layout/AppLayout';
import { Plus, Mail, MessageSquare, Send, Users, Bell } from 'lucide-react';

const AdminCommunications = () => {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Komunikasi</h1>
          <p className="text-foreground/70">Kelola pesan, notifikasi, dan pengumuman</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" /> Pesan Baru
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="messages">Pesan</TabsTrigger>
          <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          <TabsTrigger value="announcements">Pengumuman</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pesan Masuk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ahmad Faiz</h4>
                          <p className="text-sm text-foreground/70">Diterima: {new Date().toLocaleDateString()}</p>
                          <p className="text-sm mt-1">Saya memiliki pertanyaan tentang proses ta'aruf yang sedang berjalan...</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" /> Balas
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kelola Notifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-2">Kirim Notifikasi Baru</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Penerima</label>
                      <Input placeholder="Semua pengguna atau pilih spesifik" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Judul Notifikasi</label>
                      <Input placeholder="Masukkan judul notifikasi" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Pesan</label>
                      <Textarea placeholder="Tulis pesan notifikasi di sini" rows={3} />
                    </div>
                    <Button className="flex">
                      <Send className="h-4 w-4 mr-2" /> Kirim Notifikasi
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-base font-medium">Riwayat Notifikasi</h3>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bell className="h-5 w-5 text-taaruf-blue" />
                        </div>
                        <div>
                          <h4 className="font-medium">Update Fitur Baru</h4>
                          <p className="text-sm text-foreground/70">Dikirim: {new Date().toLocaleDateString()}</p>
                          <p className="text-sm text-foreground/70">Penerima: Semua Pengguna</p>
                          <p className="text-sm mt-1">Kami telah menambahkan fitur baru untuk mempermudah pencarian pasangan...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="announcements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kelola Pengumuman</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-2">Tambah Pengumuman Baru</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Judul Pengumuman</label>
                      <Input placeholder="Masukkan judul pengumuman" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Konten</label>
                      <Textarea placeholder="Tulis konten pengumuman di sini" rows={5} />
                    </div>
                    <div className="flex gap-2">
                      <Input type="date" className="w-auto" />
                      <span className="flex items-center">hingga</span>
                      <Input type="date" className="w-auto" />
                    </div>
                    <Button className="flex">
                      <Send className="h-4 w-4 mr-2" /> Publikasikan Pengumuman
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-base font-medium">Pengumuman Aktif</h3>
                {[1, 2].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-medium">Webinar: Membangun Keluarga Sakinah</h4>
                        <p className="text-sm text-foreground/70">Periode: 20 Agustus - 30 Agustus 2023</p>
                        <p className="text-sm mt-1">Bergabunglah dalam webinar spesial bersama Ustadz Abdul Somad...</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:bg-red-50">Hapus</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default AdminCommunications;
