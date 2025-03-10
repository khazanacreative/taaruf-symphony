
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Filter, 
  Search as SearchIcon, 
  MapPin, 
  GraduationCap, 
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import AgeRangeSlider from '@/components/ui/age-range-slider';

// Dummy locations
const locations = [
  { value: "all", label: "Semua Lokasi" },
  { value: "jakarta", label: "Jakarta" },
  { value: "bandung", label: "Bandung" },
  { value: "surabaya", label: "Surabaya" },
  { value: "yogyakarta", label: "Yogyakarta" },
  { value: "makassar", label: "Makassar" },
  { value: "medan", label: "Medan" },
];

// Education levels
const educationLevels = [
  { value: "all", label: "Semua Tingkat" },
  { value: "sma", label: "SMA/Sederajat" },
  { value: "d3", label: "Diploma (D3)" },
  { value: "s1", label: "Sarjana (S1)" },
  { value: "s2", label: "Magister (S2)" },
  { value: "s3", label: "Doktor (S3)" },
];

// Dummy data for potential matches
const potentialMatches = [
  {
    id: 1,
    name: 'Ahmad',
    age: 28,
    location: 'Jakarta',
    education: 'S1 Teknik Informatika',
    occupation: 'Software Engineer',
    about: 'Saya seorang Muslim yang berkomitmen untuk menikah dengan niat baik dan menjalankan sunnah Rasulullah SAW.',
    gender: 'male'
  },
  {
    id: 2,
    name: 'Fatimah',
    age: 25,
    location: 'Bandung',
    education: 'S1 Pendidikan',
    occupation: 'Guru',
    about: 'Alhamdulillah, saya siap menikah untuk menyempurnakan separuh agama saya. Saya mencari pasangan yang baik agamanya.',
    gender: 'female'
  },
  {
    id: 3,
    name: 'Umar',
    age: 30,
    location: 'Surabaya',
    education: 'S2 Ekonomi Syariah',
    occupation: 'Dosen',
    about: 'Saya senang berbagi ilmu dan mencari pasangan yang bisa menjadi sahabat dalam menuntut ilmu dan beribadah.',
    gender: 'male'
  },
  {
    id: 4,
    name: 'Khadijah',
    age: 27,
    location: 'Yogyakarta',
    education: 'S1 Farmasi',
    occupation: 'Apoteker',
    about: 'Mencari seseorang yang bertakwa kepada Allah dan serius dalam membangun rumah tangga yang sakinah, mawaddah wa rahmah.',
    gender: 'female'
  },
];

const Search = () => {
  const [matches, setMatches] = useState(potentialMatches);
  const [ageRange, setAgeRange] = useState<[number, number]>([25, 35]);
  const [location, setLocation] = useState('all');
  const [education, setEducation] = useState('all');
  const [gender, setGender] = useState('all');
  
  // Handle search based on criteria
  const handleSearch = () => {
    // Filter based on selected criteria
    let filtered = potentialMatches;
    
    // Filter by age range
    filtered = filtered.filter(
      match => match.age >= ageRange[0] && match.age <= ageRange[1]
    );
    
    // Filter by location
    if (location !== 'all') {
      filtered = filtered.filter(
        match => match.location.toLowerCase() === location.toLowerCase()
      );
    }
    
    // Filter by gender
    if (gender !== 'all') {
      filtered = filtered.filter(match => match.gender === gender);
    }
    
    // Filter by education (simplified - in a real app, would need more complex logic)
    if (education !== 'all') {
      filtered = filtered.filter(
        match => match.education.toLowerCase().includes(education.toLowerCase())
      );
    }
    
    setMatches(filtered);
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Cari Calon Pasangan</h1>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Jenis Kelamin</h3>
                <div className="flex gap-2">
                  <Button
                    variant={gender === 'male' ? 'default' : 'outline'}
                    className={gender === 'male' ? 'bg-taaruf-blue text-white' : ''}
                    onClick={() => setGender('male')}
                  >
                    Ikhwan
                  </Button>
                  <Button
                    variant={gender === 'female' ? 'default' : 'outline'}
                    className={gender === 'female' ? 'bg-taaruf-green text-white' : ''}
                    onClick={() => setGender('female')}
                  >
                    Akhwat
                  </Button>
                  <Button
                    variant={gender === 'all' ? 'default' : 'outline'}
                    onClick={() => setGender('all')}
                  >
                    Semua
                  </Button>
                </div>
              </div>
              
              <div>
                <AgeRangeSlider 
                  value={ageRange}
                  onValueChange={(value) => setAgeRange(value)}
                  min={18}
                  max={70}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Lokasi</h3>
                <select
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Pendidikan</h3>
                <select
                  className="w-full p-2 border border-border rounded-md bg-background"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  {educationLevels.map((edu) => (
                    <option key={edu.value} value={edu.value}>
                      {edu.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-sm font-medium">Kata Kunci</h3>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari berdasarkan kata kunci..."
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md"
                  />
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6 bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90"
              onClick={handleSearch}
            >
              <Filter className="h-4 w-4 mr-2" />
              Terapkan Filter
            </Button>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <Heart className="mx-auto h-10 w-10 text-foreground/30 mb-3" />
              <p className="text-foreground/70">Tidak ada kecocokan ditemukan dengan kriteria Anda</p>
            </div>
          ) : (
            matches.map((match) => (
              <Card key={match.id} className="overflow-hidden hover-scale">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-taaruf-blue/10 to-taaruf-green/10 flex items-center justify-center">
                    <div className={`w-32 h-32 flex flex-col items-center justify-center ${
                      match.gender === 'male' ? 'bg-taaruf-blue/10' : 'bg-taaruf-green/10'
                    } rounded-full`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`w-16 h-16 ${
                        match.gender === 'male' ? 'text-taaruf-blue/50' : 'text-taaruf-green/50'
                      }`}>
                        {match.gender === 'male' ? (
                          <>
                            <path d="M12 2a9 9 0 0 0-9 9c0 3.882 2.383 7.2 5.85 8.682.596.245 1.096-.29.908-.873-.494-1.537-.157-2.345.386-2.675-2.08-.796-3.144-3.179-3.144-5.495 0-3.139 2.246-5.475 5-5.475s5 2.336 5 5.475c0 2.316-1.064 4.699-3.144 5.495.543.33.88 1.138.385 2.675-.187.584.313 1.118.909.873C18.617 18.2 21 14.882 21 11a9 9 0 0 0-9-9z"/>
                            <circle cx="12" cy="10" r="3" />
                            <path d="M6.5 9.5 L6.5 12.5 L4 12.5" />
                          </>
                        ) : (
                          <>
                            <path d="M12 2a9 9 0 0 0-9 9c0 3.882 2.383 7.2 5.85 8.682.596.245 1.096-.29.908-.873-.494-1.537-.157-2.345.386-2.675-2.08-.796-3.144-3.179-3.144-5.495 0-3.139 2.246-5.475 5-5.475s5 2.336 5 5.475c0 2.316-1.064 4.699-3.144 5.495.543.33.88 1.138.385 2.675-.187.584.313 1.118.909.873C18.617 18.2 21 14.882 21 11a9 9 0 0 0-9-9z"/>
                            <circle cx="12" cy="10" r="3" />
                            <path d="M7.5 14.5 L12 19 L16.5 14.5" />
                          </>
                        )}
                      </svg>
                      <span className="mt-1 text-xs text-taaruf-blue/70">
                        {match.gender === 'male' ? 'Ikhwan' : 'Akhwat'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">{match.name}, {match.age}</h3>
                        <div className="flex items-center text-sm text-foreground/70">
                          <MapPin className="h-3 w-3 mr-1" />
                          {match.location}
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="h-8 bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Taaruf
                      </Button>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-start">
                        <GraduationCap className="h-4 w-4 mr-2 mt-0.5 text-foreground/70" />
                        <p className="text-sm">{match.education}</p>
                      </div>
                      <div className="flex items-start">
                        <Briefcase className="h-4 w-4 mr-2 mt-0.5 text-foreground/70" />
                        <p className="text-sm">{match.occupation}</p>
                      </div>
                      <p className="text-sm mt-2">{match.about}</p>
                    </div>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto mt-2"
                      asChild
                    >
                      <Link to={`/profile/${match.id}`}>
                        Lihat profil lengkap
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Search;
