
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  User, 
  MoreHorizontal, 
  CheckCircle, 
  XCircle, 
  Shield,
  AlertCircle,
  Eye
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppLayout from '@/components/layout/AppLayout';

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock user data
  const users = [
    {
      id: 1,
      name: 'Ahmad Fauzi',
      email: 'ahmad.fauzi@example.com',
      gender: 'male',
      status: 'active',
      role: 'user',
      joinDate: '15 Jan 2023',
      lastActive: '2 jam yang lalu',
      profileComplete: 85,
      verificationStatus: 'verified'
    },
    {
      id: 2,
      name: 'Fatimah Zahra',
      email: 'fatimah.zahra@example.com',
      gender: 'female',
      status: 'active',
      role: 'user',
      joinDate: '20 Feb 2023',
      lastActive: '1 hari yang lalu',
      profileComplete: 70,
      verificationStatus: 'verified'
    },
    {
      id: 3,
      name: 'Umar Abdullah',
      email: 'umar.abdullah@example.com',
      gender: 'male',
      status: 'inactive',
      role: 'user',
      joinDate: '5 Mar 2023',
      lastActive: '1 minggu yang lalu',
      profileComplete: 40,
      verificationStatus: 'pending'
    },
    {
      id: 4,
      name: 'Khadijah Rahman',
      email: 'khadijah@example.com',
      gender: 'female',
      status: 'active',
      role: 'moderator',
      joinDate: '10 Apr 2023',
      lastActive: '3 jam yang lalu',
      profileComplete: 100,
      verificationStatus: 'verified'
    },
    {
      id: 5,
      name: 'Ali Hassan',
      email: 'ali.hassan@example.com',
      gender: 'male',
      status: 'suspended',
      role: 'user',
      joinDate: '12 May 2023',
      lastActive: '3 hari yang lalu',
      profileComplete: 65,
      verificationStatus: 'rejected'
    }
  ];
  
  // Filter users based on active tab and search query
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'active') return matchesSearch && user.status === 'active';
    if (activeTab === 'inactive') return matchesSearch && user.status === 'inactive';
    if (activeTab === 'suspended') return matchesSearch && user.status === 'suspended';
    if (activeTab === 'pending') return matchesSearch && user.verificationStatus === 'pending';
    
    return matchesSearch;
  });
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Manajemen Pengguna</h1>
            <p className="text-muted-foreground">Kelola semua pengguna di platform</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
              <User className="h-4 w-4 mr-2" />
              Tambah Pengguna
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10" 
              placeholder="Cari pengguna..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="active">Aktif</SelectItem>
              <SelectItem value="inactive">Tidak Aktif</SelectItem>
              <SelectItem value="suspended">Ditangguhkan</SelectItem>
              <SelectItem value="pending">Menunggu Verifikasi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="active">Aktif</TabsTrigger>
            <TabsTrigger value="inactive">Tidak Aktif</TabsTrigger>
            <TabsTrigger value="suspended">Ditangguhkan</TabsTrigger>
            <TabsTrigger value="pending">Menunggu Verifikasi</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Nama</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4 hidden md:table-cell">Tanggal Bergabung</th>
                        <th className="text-left p-4 hidden md:table-cell">Terakhir Aktif</th>
                        <th className="text-left p-4 hidden md:table-cell">Kelengkapan Profil</th>
                        <th className="text-right p-4">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                          <tr key={user.id} className="border-b hover:bg-muted/50">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                                  <User className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge 
                                variant="outline" 
                                className={
                                  user.status === 'active' 
                                    ? 'bg-green-100 text-green-800 border-0' 
                                    : user.status === 'inactive'
                                    ? 'bg-yellow-100 text-yellow-800 border-0'
                                    : 'bg-red-100 text-red-800 border-0'
                                }
                              >
                                {user.status === 'active' 
                                  ? 'Aktif' 
                                  : user.status === 'inactive'
                                  ? 'Tidak Aktif'
                                  : 'Ditangguhkan'}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">
                                {user.role === 'user' 
                                  ? 'Pengguna' 
                                  : user.role === 'moderator'
                                  ? 'Moderator'
                                  : 'Admin'}
                              </p>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <p className="text-sm">{user.joinDate}</p>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <p className="text-sm">{user.lastActive}</p>
                            </td>
                            <td className="p-4 hidden md:table-cell">
                              <div className="flex items-center">
                                <div className="w-24 h-2 bg-gray-100 rounded-full mr-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      user.profileComplete >= 70 
                                        ? 'bg-taaruf-green' 
                                        : user.profileComplete >= 40
                                        ? 'bg-yellow-500'
                                        : 'bg-red-500'
                                    }`}
                                    style={{ width: `${user.profileComplete}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs font-medium">{user.profileComplete}%</span>
                              </div>
                            </td>
                            <td className="p-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                  <DropdownMenuItem className="flex items-center">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Lihat Profil
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center">
                                    <Shield className="h-4 w-4 mr-2" />
                                    Ubah Peran
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  {user.status === 'active' ? (
                                    <DropdownMenuItem className="flex items-center text-amber-600">
                                      <AlertCircle className="h-4 w-4 mr-2" />
                                      Nonaktifkan
                                    </DropdownMenuItem>
                                  ) : (
                                    <DropdownMenuItem className="flex items-center text-green-600">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Aktifkan
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem className="flex items-center text-red-600">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Tangguhkan
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="p-4 text-center">
                            <p className="text-muted-foreground py-4">Tidak ada pengguna ditemukan</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Menampilkan {filteredUsers.length} dari {users.length} pengguna
          </div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>
              Sebelumnya
            </Button>
            <Button variant="outline" size="sm" className="bg-muted/50">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AdminUsers;
