
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/components/layout/AppLayout';
import { BarChart, PieChart, LineChart, Download, Filter, Calendar, RefreshCw, FileText } from 'lucide-react';

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [dateRange, setDateRange] = useState('month');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Laporan & Analitik</h1>
          <p className="text-foreground/70">Statistik dan laporan penggunaan aplikasi</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <select 
            className="border rounded-md py-2 px-3 text-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">7 Hari Terakhir</option>
            <option value="month">30 Hari Terakhir</option>
            <option value="quarter">3 Bulan Terakhir</option>
            <option value="year">1 Tahun Terakhir</option>
          </select>
          <Button variant="outline" className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" /> Kustom
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="h-4 w-4 mr-1" /> Ekspor
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Total Pengguna</h3>
              <RefreshCw className="h-4 w-4 text-foreground/70" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">1,248</h3>
              <p className="text-sm text-taaruf-green mt-1">+15% dari periode sebelumnya</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Proses Ta'aruf Aktif</h3>
              <RefreshCw className="h-4 w-4 text-foreground/70" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">78</h3>
              <p className="text-sm text-taaruf-green mt-1">+8% dari periode sebelumnya</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Ta'aruf Sukses</h3>
              <RefreshCw className="h-4 w-4 text-foreground/70" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">36</h3>
              <p className="text-sm text-taaruf-green mt-1">+12% dari periode sebelumnya</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="user">Pengguna</TabsTrigger>
          <TabsTrigger value="activity">Aktivitas</TabsTrigger>
          <TabsTrigger value="taaruf">Ta'aruf</TabsTrigger>
          <TabsTrigger value="content">Konten</TabsTrigger>
        </TabsList>
        
        <TabsContent value="user" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pertumbuhan Pengguna</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <LineChart className="h-12 w-12 text-gray-300" />
                <p className="ml-2 text-gray-500">Grafik Pertumbuhan Pengguna</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demografi Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <PieChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Demografi</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-taaruf-blue mr-2"></div>
                      <span className="text-sm">Laki-laki</span>
                    </div>
                    <span className="text-sm font-medium">58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-taaruf-green mr-2"></div>
                      <span className="text-sm">Perempuan</span>
                    </div>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Usia Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <BarChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Usia</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">18-25 tahun</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">26-35 tahun</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">36-45 tahun</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">46+ tahun</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Aktivitas Harian</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <LineChart className="h-12 w-12 text-gray-300" />
                <p className="ml-2 text-gray-500">Grafik Aktivitas Harian</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fitur Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Pencarian Profil", percent: 75 },
                    { name: "Pengajuan Ta'aruf", percent: 58 },
                    { name: "Baca Artikel", percent: 42 },
                    { name: "Jadwal Pertemuan", percent: 35 },
                    { name: "Edit Profil", percent: 30 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-medium">{item.percent}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-taaruf-blue"
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Waktu Penggunaan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <BarChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Waktu Penggunaan</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pagi (06:00-12:00)</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Siang (12:00-18:00)</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Malam (18:00-00:00)</span>
                    <span className="text-sm font-medium">48%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Dini Hari (00:00-06:00)</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="taaruf" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Statistik Ta'aruf</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <LineChart className="h-12 w-12 text-gray-300" />
                <p className="ml-2 text-gray-500">Grafik Statistik Ta'aruf</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status Ta'aruf</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <PieChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Status Ta'aruf</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Menunggu</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-taaruf-blue mr-2"></div>
                      <span className="text-sm">Proses</span>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-taaruf-green mr-2"></div>
                      <span className="text-sm">Berhasil (Menikah)</span>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Dibatalkan</span>
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Durasi Ta'aruf</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <BarChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Durasi Ta'aruf</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{"< 1 bulan"}</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">1-3 bulan</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">3-6 bulan</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{"> 6 bulan"}</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analitik Konten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <BarChart className="h-12 w-12 text-gray-300" />
                <p className="ml-2 text-gray-500">Grafik Analitik Konten</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artikel Populer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="bg-gray-100 w-12 h-12 rounded-md flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Persiapan Mental Menuju Pernikahan</h4>
                        <div className="flex items-center text-xs text-foreground/70 mt-1">
                          <span>Dilihat: 1,{item}56 kali</span>
                          <span className="mx-2">•</span>
                          <span>Dibagikan: {item*12} kali</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kategori Konten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-60 bg-gray-50 rounded-lg">
                  <PieChart className="h-12 w-12 text-gray-300" />
                  <p className="ml-2 text-gray-500">Grafik Kategori Konten</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Edukasi Pranikah</span>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Kisah Sukses</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span className="text-sm">Tips Ta'aruf</span>
                    </div>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm">Lainnya</span>
                    </div>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default AdminReports;
