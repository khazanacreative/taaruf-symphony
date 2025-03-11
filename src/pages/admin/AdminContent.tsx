
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/components/layout/AppLayout';
import { Plus, Edit, Trash2, FileText, Image, BookOpen } from 'lucide-react';

const AdminContent = () => {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Konten</h1>
          <p className="text-foreground/70">Kelola artikel, kisah sukses, dan konten edukasi</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" /> Tambah Konten Baru
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="articles">Artikel</TabsTrigger>
          <TabsTrigger value="success-stories">Kisah Sukses</TabsTrigger>
          <TabsTrigger value="education">Materi Edukasi</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Daftar Artikel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3">
                        <div className="bg-gray-100 w-20 h-20 rounded-md flex items-center justify-center">
                          <FileText className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Persiapan Mental Menuju Pernikahan</h4>
                          <p className="text-sm text-foreground/70">Diterbitkan: 15 Juli 2023</p>
                          <p className="text-sm text-foreground/70">Kategori: Pranikah</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="success-stories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kisah Sukses Ta'aruf</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3">
                        <div className="bg-gray-100 w-20 h-20 rounded-md flex items-center justify-center">
                          <Image className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Perjalanan Ta'aruf Ahmad & Fatimah</h4>
                          <p className="text-sm text-foreground/70">Diterbitkan: 20 Agustus 2023</p>
                          <p className="text-sm text-foreground/70">Status: Approved</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Materi Edukasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex gap-3">
                        <div className="bg-gray-100 w-20 h-20 rounded-md flex items-center justify-center">
                          <BookOpen className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Adab-adab dalam Pernikahan Islami</h4>
                          <p className="text-sm text-foreground/70">Tipe: Video & PDF</p>
                          <p className="text-sm text-foreground/70">Durasi: 45 menit</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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

export default AdminContent;
