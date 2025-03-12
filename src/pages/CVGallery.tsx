
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Users, 
  Heart, 
  User, 
  GraduationCap, 
  Briefcase, 
  MapPin,
  Book,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import TaarufProcessComponent from '@/components/taaruf/TaarufProcess';

// SVG components for gender-specific icons
const MaleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className="w-full h-full"
    fill="currentColor"
  >
    <path d="M255.998,30C131.667,30,30,131.667,30,256c0,123.333,101.667,226,225.998,226C380.333,482,482,380.333,482,256C482,131.667,380.333,30,255.998,30z M287.358,404.363c0,2.881-2.319,5.2-5.2,5.2h-52.318c-2.882,0-5.2-2.319-5.2-5.2v-52.318c0-2.881,2.318-5.2,5.2-5.2h52.318c2.881,0,5.2,2.319,5.2,5.2V404.363z M320.029,206.223c-1.182,1.468-2.442,2.796-3.774,3.979c-1.336,1.178-2.735,2.17-4.193,2.906c-1.465,0.771-2.914,1.462-4.359,2.089c-1.439,0.627-2.785,1.252-4.054,1.878c-1.267,0.588-2.398,1.336-3.389,2.22c-0.979,0.903-1.754,1.931-2.304,3.09c-0.549,1.173-0.818,2.609-0.818,4.348v13.83c0,2.881-2.318,5.2-5.2,5.2h-71.837c-2.881,0-5.2-2.319-5.2-5.2v-13.376c0-10.471,1.798-19.284,5.417-26.444c3.622-7.151,8.059-13.2,13.3-18.147c5.25-4.897,10.708-9.187,16.396-12.835c5.685-3.657,10.998-7.284,15.968-10.957c4.95-3.663,8.969-7.639,12.049-11.954c3.096-4.309,4.631-9.494,4.631-15.572c0-6.367-2.358-11.507-7.078-15.438c-4.707-3.937-10.996-5.896-18.851-5.896c-5.227,0-9.587,0.626-13.088,1.878c-3.5,1.275-6.368,2.88-8.59,4.827c-2.22,1.959-4.012,4.132-5.353,6.521c-1.353,2.43-2.604,4.88-3.774,7.382c-0.518,1.121-1.4,2.027-2.508,2.585c-1.121,0.565-2.351,0.753-3.582,0.545l-37.979-6.538c-1.211-0.209-2.28-0.864-3.016-1.812c-0.74-0.941-1.041-2.138-0.844-3.317c1.607-9.345,4.622-17.574,9.011-24.688c4.399-7.085,10.057-13.1,16.995-18.01c6.925-4.909,15.141-8.615,24.629-11.101c9.505-2.486,20.15-3.72,31.937-3.72c12.578,0,23.947,1.665,34.129,4.978c10.16,3.318,18.85,7.896,26.059,13.756c7.223,5.845,12.793,12.793,16.756,20.825c3.956,8.032,5.954,16.763,5.954,26.186C327.398,188.894,324.975,197.936,320.029,206.223z"/>
  </svg>
);

const FemaleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className="w-full h-full"
    fill="currentColor"
  >
    <path d="M256.9,25.9c-121,0-219.3,98.3-219.3,219.3c0,68.7,31.7,130.1,81.3,170.2l-0.1,0.1c6.8,5.5,20.1,3.7,37,2.9c0,0.2-0.1,0.5-0.1,0.7c0,7.1,5.8,12.9,12.9,12.9c0.2,0,0.5,0,0.7-0.1c0,0,10.1,2.3,14.8,2.5v49.6c0,7.1,5.8,12.9,12.9,12.9h119.6c7.1,0,12.9-5.8,12.9-12.9v-49.6c4.8-0.3,14.8-2.5,14.8-2.5c0.2,0,0.5,0.1,0.7,0.1c7.1,0,12.9-5.8,12.9-12.9c0-0.2,0-0.5-0.1-0.7c16.9,0.8,30.2,2.6,37-2.9l-0.1-0.1c49.6-40.1,81.3-101.5,81.3-170.2C476.2,124.2,377.9,25.9,256.9,25.9z M347.8,239.5c-5.5,5.6-10.5,8.5-17.2,8.5s-23.2-10.4-35.1-10.4c-11.9,0-37,14.2-37,14.2s-25.1-14.2-37-14.2c-11.9,0-28.4,10.4-35.1,10.4c-6.7,0-11.7-2.9-17.2-8.5c-5.5-5.6-7.9-11.4-6.9-26.9c0.9-15.5,11.8-115.8,13.7-120.8c1.9-5,5.9-9.3,12.9-12.9c7-3.6,52.9-6.8,69.6-6.8c16.8,0,62.6,3.2,69.6,6.8c7,3.6,11,7.8,12.9,12.9c1.9,5,12.8,105.3,13.7,120.8C355.7,228.1,353.3,233.9,347.8,239.5z"/>
  </svg>
);

// Mock data for gallery profiles with taaruf status
const maleProfiles = [
  {
    id: 1,
    name: 'Ahmad',
    age: 28,
    location: 'Jakarta',
    education: 'S1 Teknik Informatika',
    occupation: 'Software Engineer',
    interests: ['Membaca', 'Olahraga', 'Dakwah'],
    about: 'Alhamdulillah, saya seorang profesional IT yang aktif di kegiatan dakwah kampus.',
    taarufStatus: 'Permintaan Baru',
    statusColor: 'bg-blue-100 text-blue-800',
    stage: 1,
    isBookmarked: false
  },
  {
    id: 2,
    name: 'Umar',
    age: 30,
    location: 'Surabaya',
    education: 'S2 Ekonomi Syariah',
    occupation: 'Dosen',
    interests: ['Menulis', 'Mengajar', 'Traveling'],
    about: 'Bismillah, saya dosen yang sedang menempuh S3.',
    taarufStatus: 'Proses Tahap 2',
    statusColor: 'bg-yellow-100 text-yellow-800',
    stage: 2,
    isBookmarked: true
  },
  {
    id: 3,
    name: 'Ibrahim',
    age: 26,
    location: 'Bandung',
    education: 'S1 Arsitektur',
    occupation: 'Arsitek',
    interests: ['Desain', 'Fotografi', 'Kaligrafi'],
    about: 'Seorang arsitek yang mendalami kaligrafi islami.',
    taarufStatus: 'Pertemuan Keluarga',
    statusColor: 'bg-green-100 text-green-800',
    stage: 3,
    isBookmarked: false
  }
];

const femaleProfiles = [
  {
    id: 1,
    name: 'Fatimah',
    age: 25,
    location: 'Bandung',
    education: 'S1 Pendidikan',
    occupation: 'Guru',
    interests: ['Mengajar', 'Memasak', 'Membaca'],
    about: 'Alhamdulillah, saya guru yang senang berbagi ilmu.',
    taarufStatus: 'Proses Tahap 1',
    statusColor: 'bg-blue-100 text-blue-800',
    stage: 1,
    isBookmarked: true
  },
  {
    id: 2,
    name: 'Khadijah',
    age: 27,
    location: 'Jakarta',
    education: 'S1 Ekonomi',
    occupation: 'Wiraswasta',
    interests: ['Bisnis', 'Sosial', 'Memasak'],
    about: 'Bismillah, saya seorang wiraswasta yang menjalankan bisnis fashion syar\'i.',
    taarufStatus: 'Menunggu Persetujuan',
    statusColor: 'bg-purple-100 text-purple-800',
    stage: 2,
    isBookmarked: false
  },
  {
    id: 3,
    name: 'Aisyah',
    age: 24,
    location: 'Surabaya',
    education: 'S1 Psikologi',
    occupation: 'Psikolog',
    interests: ['Konseling', 'Membaca', 'Traveling'],
    about: 'Psikolog yang berfokus pada kesehatan mental remaja.',
    taarufStatus: 'Selesai Ta\'aruf',
    statusColor: 'bg-green-100 text-green-800',
    stage: 4,
    isBookmarked: false
  }
];

const CVGallery = () => {
  const [activeTab, setActiveTab] = useState('proses');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMaleProfiles = maleProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.taarufStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredFemaleProfiles = femaleProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.taarufStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const renderProfile = (profile: any, gender: 'male' | 'female') => (
    <Card key={profile.id} className="overflow-hidden hover-scale">
      <CardContent className="p-0">
        <div className="aspect-[3/2] bg-gradient-to-br from-taaruf-blue/10 to-taaruf-green/10 flex items-center justify-center">
          <div className="w-28 h-28 flex flex-col items-center justify-center">
            <div className="w-24 h-24 text-taaruf-blue/50">
              {gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
            </div>
            <span className="mt-1 text-xs text-muted-foreground">
              {gender === 'male' ? 'Ikhwan' : 'Akhwat'}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{profile.name}, {profile.age}</h3>
              <div className="flex items-center text-sm text-foreground/70">
                <MapPin className="h-3 w-3 mr-1" />
                {profile.location}
              </div>
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded-full ${profile.statusColor}`}>
                  {profile.taarufStatus}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2 mt-3">
            <div className="flex items-start">
              <GraduationCap className="h-4 w-4 mr-2 mt-0.5 text-foreground/70" />
              <p className="text-sm">{profile.education}</p>
            </div>
            <div className="flex items-start">
              <Briefcase className="h-4 w-4 mr-2 mt-0.5 text-foreground/70" />
              <p className="text-sm">{profile.occupation}</p>
            </div>
            <div className="flex items-start">
              <Book className="h-4 w-4 mr-2 mt-0.5 text-foreground/70" />
              <div>
                <p className="text-xs text-foreground/70 mb-1">Minat:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="text-xs py-0 px-2">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 border-t bg-muted/10">
        <Button 
          size="sm" 
          className="ml-auto"
          asChild
        >
          <Link to={`/profile/${profile.id}`}>
            <Eye className="h-4 w-4 mr-2" />
            Lihat Detail Proses
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Galeri CV Ta'aruf</h1>
          <p className="text-sm text-foreground/70 mt-2">
            Lihat dan pantau proses ta'aruf yang sedang berlangsung
          </p>
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
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <TaarufProcessComponent />
          </div>
          
          <div className="md:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="proses">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Proses Ta'aruf ({filteredMaleProfiles.length + filteredFemaleProfiles.length})
                </TabsTrigger>
                <TabsTrigger value="selesai">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Ta'aruf Selesai
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="proses">
                {filteredMaleProfiles.length === 0 && filteredFemaleProfiles.length === 0 ? (
                  <div className="text-center py-10 glass-card rounded-xl">
                    <Users className="mx-auto h-10 w-10 text-foreground/30 mb-3" />
                    <p className="text-foreground/70">Tidak ada proses ta'aruf yang sedang berlangsung</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredMaleProfiles.map(profile => renderProfile(profile, 'male'))}
                    {filteredFemaleProfiles.map(profile => renderProfile(profile, 'female'))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="selesai">
                <div className="text-center py-10 glass-card rounded-xl">
                  <CheckCircle className="mx-auto h-10 w-10 text-foreground/30 mb-3" />
                  <p className="text-foreground/70">Tidak ada proses ta'aruf yang telah selesai</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CVGallery;
