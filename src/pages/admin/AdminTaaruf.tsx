
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/layout/AppLayout';
import { Check, X, Eye, Clock, ArrowRight } from 'lucide-react';

const AdminTaaruf = () => {
  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Ta'aruf</h1>
          <p className="text-foreground/70">Kelola permintaan dan proses ta'aruf</p>
        </div>
      </div>

      <Tabs defaultValue="requests" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-auto">
          <TabsTrigger value="requests">Permintaan</TabsTrigger>
          <TabsTrigger value="ongoing">Proses Aktif</TabsTrigger>
          <TabsTrigger value="completed">Selesai</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Permintaan Ta'aruf Menunggu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-wrap justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-medium">Abdullah {item} → Aisyah {item}</h4>
                        <p className="text-sm text-foreground/70">Diajukan pada: 10 Agustus 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex gap-1">
                          <Eye size={16} /> Detail
                        </Button>
                        <Button size="sm" variant="outline" className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700">
                          <Check size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700">
                          <X size={16} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm">
                      "Saya mencari istri yang sholehah, bisa menjadi pendamping dalam dakwah dan mendidik anak sesuai ajaran Islam..."
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ongoing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Proses Ta'aruf Aktif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-wrap justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-medium">Muhammad {item} & Fatimah {item}</h4>
                        <p className="text-sm text-foreground/70">Tahap: Tukar CV → Pertemuan dengan Murobbi</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex gap-1">
                          <Eye size={16} /> Detail
                        </Button>
                        <Button size="sm" className="bg-taaruf-blue text-white hover:bg-taaruf-blue/90">
                          <ArrowRight size={16} /> Tahap Selanjutnya
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-taaruf-blue h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm ml-2">45%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Proses Ta'aruf Selesai</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4">
                    <div className="flex flex-wrap justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-medium">Ahmad {item} & Khadijah {item}</h4>
                        <p className="text-sm text-foreground/70">Status: {item % 2 === 0 ? 'Menikah' : 'Tidak Lanjut'}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex gap-1">
                          <Eye size={16} /> Detail
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm">
                      Durasi proses: 3 bulan, selesai pada 5 Juni 2023
                    </p>
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

export default AdminTaaruf;
