
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/components/layout/AppLayout';
import { DollarSign, CreditCard, FileText, BarChart, ArrowUpRight, ArrowDownRight, Filter, Download } from 'lucide-react';

const AdminFinance = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Keuangan</h1>
          <p className="text-foreground/70">Kelola pembayaran, donasi, dan laporan keuangan</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Ekspor
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-taaruf-blue/10 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-taaruf-blue" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-taaruf-green" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Total Pendapatan</p>
              <h3 className="text-2xl font-bold">Rp 12.580.000</h3>
              <p className="text-sm text-taaruf-green mt-1">+12% dari bulan lalu</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-taaruf-green/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-taaruf-green" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-taaruf-green" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Transaksi Bulan Ini</p>
              <h3 className="text-2xl font-bold">142</h3>
              <p className="text-sm text-taaruf-green mt-1">+8% dari bulan lalu</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <ArrowDownRight className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Pengeluaran</p>
              <h3 className="text-2xl font-bold">Rp 4.250.000</h3>
              <p className="text-sm text-red-500 mt-1">-5% dari bulan lalu</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="overview">Ikhtisar</TabsTrigger>
          <TabsTrigger value="transactions">Transaksi</TabsTrigger>
          <TabsTrigger value="donations">Donasi</TabsTrigger>
          <TabsTrigger value="reports">Laporan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Grafik Pendapatan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <BarChart className="h-12 w-12 text-gray-300" />
                <p className="ml-2 text-gray-500">Grafik Pendapatan Bulanan</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Paket Terpopuler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Paket Premium", amount: "Rp 250.000", percent: 45 },
                    { name: "Paket Standard", amount: "Rp 150.000", percent: 30 },
                    { name: "Paket Basic", amount: "Rp 75.000", percent: 25 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm font-medium">{item.amount}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-taaruf-blue rounded-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                      <p className="text-xs text-foreground/70 mt-1">{item.percent}% dari total pendapatan</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Metode Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { method: "Transfer Bank", count: 86, amount: "Rp 7.450.000" },
                    { method: "E-Wallet", count: 42, amount: "Rp 3.280.000" },
                    { method: "Virtual Account", count: 14, amount: "Rp 1.850.000" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b">
                      <div>
                        <p className="font-medium">{item.method}</p>
                        <p className="text-sm text-foreground/70">{item.count} transaksi</p>
                      </div>
                      <p className="font-medium">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0">
              <CardTitle className="text-lg">Daftar Transaksi</CardTitle>
              <div className="flex space-x-2">
                <Input placeholder="Cari transaksi..." className="max-w-xs" />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex flex-col sm:flex-row justify-between sm:items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">TRX-{item}00{item}-2023</p>
                      <p className="text-sm text-foreground/70">Ahmad Fauzi - Paket Premium</p>
                      <p className="text-sm text-foreground/70">20 September 2023, 14:30</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                      <p className="font-medium">Rp 250.000</p>
                      <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Sukses
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="donations" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center space-y-2 sm:space-y-0">
              <CardTitle className="text-lg">Donasi Masuk</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" /> Unduh Laporan
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex flex-col sm:flex-row justify-between sm:items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Donasi #{item}55{item}</p>
                      <p className="text-sm text-foreground/70">Hamba Allah</p>
                      <p className="text-sm text-foreground/70">15 September 2023</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                      <p className="font-medium">Rp {item},000,000</p>
                      <p className="text-sm text-foreground/70">Program Taaruf untuk Dhuafa</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Laporan Keuangan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Laporan Bulanan - September 2023", date: "01/10/2023" },
                  { name: "Laporan Bulanan - Agustus 2023", date: "01/09/2023" },
                  { name: "Laporan Bulanan - Juli 2023", date: "01/08/2023" },
                  { name: "Laporan Kuartal Q3 2023", date: "01/10/2023" }
                ].map((report, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-foreground/70">Dibuat pada: {report.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" /> Unduh
                    </Button>
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

export default AdminFinance;
