
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/components/layout/AppLayout';
import { Plus, Calendar, Clock, MapPin, Users, Edit, Trash2 } from 'lucide-react';

const AdminEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Acara</h1>
          <p className="text-foreground/70">Kelola seminar, workshop, dan acara pertemuan</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
            <Plus className="mr-2 h-4 w-4" /> Buat Acara Baru
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="upcoming">Mendatang</TabsTrigger>
          <TabsTrigger value="past">Selesai</TabsTrigger>
          <TabsTrigger value="drafts">Draft</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Acara Mendatang</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <h4 className="font-medium text-lg">Kajian Pranikah: Membangun Rumah Tangga Islami</h4>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-taaruf-blue" />
                            <span className="text-sm">25 Oktober 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-taaruf-blue" />
                            <span className="text-sm">19:00 - 21:00 WIB</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-taaruf-blue" />
                            <span className="text-sm">Online (Zoom)</span>
                          </div>
                        </div>
                        <div className="flex items-center mt-2">
                          <Users className="h-4 w-4 mr-2 text-taaruf-blue" />
                          <span className="text-sm">42 Pendaftar</span>
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
        
        <TabsContent value="past" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Acara Selesai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <h4 className="font-medium text-lg">Seminar: Bijak dalam Memilih Pasangan</h4>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">10 Agustus 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">78 Peserta</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">Selesai</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Users className="h-4 w-4 mr-1" /> Lihat Peserta
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="drafts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Draft Acara</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <h4 className="font-medium text-lg">Workshop: Komunikasi Efektif dalam Pernikahan</h4>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">Belum dijadwalkan</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-medium">Draft</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button size="sm" className="bg-taaruf-blue text-white hover:bg-taaruf-blue/90">
                          Publikasikan
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

export default AdminEvents;
