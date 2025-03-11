
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Heart,
  Calendar,
  FileText,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  BarChart,
  PieChart,
  Activity
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for admin dashboard
  const stats = {
    totalUsers: 1250,
    newUsers: 47,
    newUsersChange: 12,
    activeTaaruf: 68,
    completedTaaruf: 34,
    taarufSuccess: 85,
    pendingApprovals: 23,
    revenue: 15750000,
    revenueChange: -5
  };
  
  // Mock data for recent activities
  const recentActivities = [
    {
      id: 1,
      user: 'Ahmad',
      action: 'registered',
      time: '2 jam yang lalu'
    },
    {
      id: 2,
      user: 'Fatimah',
      action: 'completed profile',
      time: '3 jam yang lalu'
    },
    {
      id: 3,
      user: 'Umar',
      action: 'sent taaruf request',
      time: '5 jam yang lalu'
    },
    {
      id: 4,
      user: 'Khadijah',
      action: 'completed taaruf',
      time: '1 hari yang lalu'
    },
    {
      id: 5,
      user: 'Ali',
      action: 'requested approval',
      time: '1 hari yang lalu'
    }
  ];
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Dashboard Admin</h1>
            <p className="text-muted-foreground">Selamat datang, Admin</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Laporan
            </Button>
            <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
              <BarChart className="h-4 w-4 mr-2" />
              Analitik
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Pengguna</p>
                  <p className="text-2xl font-bold">{stats.totalUsers}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-5 w-5 text-taaruf-blue" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <Badge 
                  variant="outline" 
                  className="bg-taaruf-green/10 text-taaruf-green border-0"
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {stats.newUsersChange}%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">vs bulan lalu</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Proses Ta'aruf Aktif</p>
                  <p className="text-2xl font-bold">{stats.activeTaaruf}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="h-5 w-5 text-taaruf-green" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <div className="bg-gray-100 w-full h-2 rounded-full">
                  <div 
                    className="bg-taaruf-green h-2 rounded-full" 
                    style={{ width: `${stats.taarufSuccess}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium ml-2">{stats.taarufSuccess}%</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Persetujuan Tertunda</p>
                  <p className="text-2xl font-bold">{stats.pendingApprovals}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <Button variant="outline" className="text-xs h-8 w-full">
                  Lihat Persetujuan
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Pendapatan</p>
                  <p className="text-2xl font-bold">{formatCurrency(stats.revenue)}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <Badge 
                  variant="outline" 
                  className="bg-red-100 text-red-600 border-0"
                >
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  {Math.abs(stats.revenueChange)}%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">vs bulan lalu</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="overview">Ikhtisar</TabsTrigger>
            <TabsTrigger value="statistics">Statistik</TabsTrigger>
            <TabsTrigger value="activities">Aktivitas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pengguna Aktif</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <BarChart3 className="h-24 w-24 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Statistik Ta'aruf</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <PieChart className="h-24 w-24 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aktivitas Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{activity.user}</p>
                          <p className="text-xs text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setActiveTab('activities')}
                  >
                    Lihat Semua Aktivitas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="statistics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tren Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <Activity className="h-32 w-32 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pengguna Baru</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ta'aruf Sukses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pendapatan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Semua Aktivitas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{activity.user}</p>
                          <p className="text-xs text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AdminDashboard;
