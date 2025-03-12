
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Users, 
  User, 
  Heart, 
  FileEdit,
  CheckCircle, 
  XCircle,
  Clock,
  Eye,
  Filter,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';

const AdminCVGallery = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for admin CV gallery
  const pendingProfiles = [
    {
      id: 1,
      name: 'Ahmad Farhan',
      age: 28,
      gender: 'Ikhwan',
      location: 'Jakarta',
      registerDate: '12 Juni 2023',
      verificationStatus: 'Menunggu Verifikasi',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 2,
      name: 'Zainab Putri',
      age: 26,
      gender: 'Akhwat',
      location: 'Bandung',
      registerDate: '15 Juni 2023',
      verificationStatus: 'Menunggu Verifikasi',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 3,
      name: 'Muhammad Rizal',
      age: 30,
      gender: 'Ikhwan',
      location: 'Surabaya',
      registerDate: '10 Juni 2023',
      verificationStatus: 'Menunggu Revisi',
      statusColor: 'bg-red-100 text-red-800'
    }
  ];
  
  const verifiedProfiles = [
    {
      id: 4,
      name: 'Fatimah Azzahra',
      age: 25,
      gender: 'Akhwat',
      location: 'Yogyakarta',
      registerDate: '5 Mei 2023',
      verificationStatus: 'Terverifikasi',
      taarufStatus: 'Dalam Proses Ta\'aruf',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 5,
      name: 'Umar Hadi',
      age: 32,
      gender: 'Ikhwan',
      location: 'Semarang',
      registerDate: '2 Mei 2023',
      verificationStatus: 'Terverifikasi',
      taarufStatus: 'Belum Ada Ta\'aruf',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];
  
  const filteredPendingProfiles = pendingProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.verificationStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredVerifiedProfiles = verifiedProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.verificationStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const renderPendingProfile = (profile: any) => (
    <Card key={profile.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{profile.name}, {profile.age}</h3>
            <div className="flex items-center text-sm text-foreground/70 mt-1">
              <User className="h-3 w-3 mr-1" />
              <span>{profile.gender}</span>
              <span className="mx-2">•</span>
              <span>{profile.location}</span>
            </div>
          </div>
          <Badge className={profile.statusColor}>{profile.verificationStatus}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="text-sm grid grid-cols-1 gap-1">
          <div className="flex justify-between">
            <span className="text-foreground/70">Tanggal Daftar:</span>
            <span>{profile.registerDate}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/profile/${profile.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            Lihat CV
          </Link>
        </Button>
        
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          <CheckCircle className="h-4 w-4 mr-2" />
          Verifikasi
        </Button>
        
        <Button variant="destructive" size="sm">
          <XCircle className="h-4 w-4 mr-2" />
          Tolak
        </Button>
      </CardFooter>
    </Card>
  );
  
  const renderVerifiedProfile = (profile: any) => (
    <Card key={profile.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{profile.name}, {profile.age}</h3>
            <div className="flex items-center text-sm text-foreground/70 mt-1">
              <User className="h-3 w-3 mr-1" />
              <span>{profile.gender}</span>
              <span className="mx-2">•</span>
              <span>{profile.location}</span>
            </div>
          </div>
          <Badge className={profile.statusColor}>{profile.verificationStatus}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="text-sm grid grid-cols-1 gap-1">
          <div className="flex justify-between">
            <span className="text-foreground/70">Tanggal Daftar:</span>
            <span>{profile.registerDate}</span>
          </div>
          {profile.taarufStatus && (
            <div className="flex justify-between">
              <span className="text-foreground/70">Status Ta'aruf:</span>
              <span>{profile.taarufStatus}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/profile/${profile.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            Lihat CV
          </Link>
        </Button>
        
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          <FileEdit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        
        <Button variant="outline" size="sm">
          <Heart className="h-4 w-4 mr-2" />
          Proses Ta'aruf
        </Button>
      </CardFooter>
    </Card>
  );
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Galeri CV Ta'aruf</h1>
            <p className="text-sm text-foreground/70 mt-1">
              Kelola dan verifikasi CV peserta ta'aruf
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari berdasarkan nama, lokasi, status..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending">
              <Clock className="h-4 w-4 mr-2" />
              Menunggu Verifikasi ({filteredPendingProfiles.length})
            </TabsTrigger>
            <TabsTrigger value="verified">
              <CheckCircle className="h-4 w-4 mr-2" />
              Terverifikasi ({filteredVerifiedProfiles.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            {filteredPendingProfiles.length === 0 ? (
              <div className="text-center py-10 glass-card rounded-xl">
                <Users className="mx-auto h-10 w-10 text-foreground/30 mb-3" />
                <p className="text-foreground/70">Tidak ada CV yang menunggu verifikasi</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPendingProfiles.map(profile => renderPendingProfile(profile))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="verified">
            {filteredVerifiedProfiles.length === 0 ? (
              <div className="text-center py-10 glass-card rounded-xl">
                <CheckCircle className="mx-auto h-10 w-10 text-foreground/30 mb-3" />
                <p className="text-foreground/70">Tidak ada CV yang terverifikasi</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVerifiedProfiles.map(profile => renderVerifiedProfile(profile))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AdminCVGallery;
