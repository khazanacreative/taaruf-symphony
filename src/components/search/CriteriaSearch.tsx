
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Filter, 
  GraduationCap, 
  MapPin,
  Heart,
  BookOpen,
  Users
} from 'lucide-react';

interface CriteriaSearchProps {
  onSearch: (criteria: any) => void;
}

const CriteriaSearch = ({ onSearch }: CriteriaSearchProps) => {
  const [criteria, setCriteria] = useState({
    gender: 'female', // default to opposite gender
    ageRange: [20, 35],
    location: 'all',
    education: 'all',
    maritalStatus: 'all',
    religiousKnowledge: 'all'
  });
  
  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle perubahan age range
  const handleAgeChange = (index: number, value: string) => {
    const newAgeRange = [...criteria.ageRange];
    newAgeRange[index] = parseInt(value);
    setCriteria(prev => ({
      ...prev,
      ageRange: newAgeRange
    }));
  };
  
  // Handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };
  
  // Determine gender based on user's gender (for demonstration purposes)
  const userGender = localStorage.getItem('taaruf_auth') 
    ? JSON.parse(localStorage.getItem('taaruf_auth') || '{}').gender 
    : 'male';
  
  // Set opposite gender as default
  useState(() => {
    setCriteria(prev => ({
      ...prev,
      gender: userGender === 'male' ? 'female' : 'male'
    }));
  });
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-taaruf-blue" />
            <h3 className="font-medium">Preferensi Umum</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Kelamin</label>
            <select 
              name="gender"
              className="w-full p-2 border border-border rounded-md"
              value={criteria.gender}
              onChange={handleChange}
            >
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Rentang Usia</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                className="w-full p-2 border border-border rounded-md"
                value={criteria.ageRange[0]}
                onChange={(e) => handleAgeChange(0, e.target.value)}
                min="18" 
                max="80"
              />
              <span>hingga</span>
              <input 
                type="number" 
                className="w-full p-2 border border-border rounded-md"
                value={criteria.ageRange[1]}
                onChange={(e) => handleAgeChange(1, e.target.value)}
                min="18" 
                max="80"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status Pernikahan</label>
            <select 
              name="maritalStatus"
              className="w-full p-2 border border-border rounded-md"
              value={criteria.maritalStatus}
              onChange={handleChange}
            >
              <option value="all">Semua</option>
              <option value="single">Belum Menikah</option>
              <option value="divorced">Pernah Menikah</option>
              <option value="widowed">Janda/Duda</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-taaruf-blue" />
            <h3 className="font-medium">Lokasi & Pendidikan</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Lokasi</label>
            <select 
              name="location"
              className="w-full p-2 border border-border rounded-md"
              value={criteria.location}
              onChange={handleChange}
            >
              <option value="all">Semua Lokasi</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Medan">Medan</option>
              <option value="Makassar">Makassar</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Pendidikan Minimal</label>
            <select 
              name="education"
              className="w-full p-2 border border-border rounded-md"
              value={criteria.education}
              onChange={handleChange}
            >
              <option value="all">Semua Tingkat</option>
              <option value="sma">SMA/Sederajat</option>
              <option value="d3">Diploma</option>
              <option value="s1">Sarjana (S1)</option>
              <option value="s2">Magister (S2)</option>
              <option value="s3">Doktor (S3)</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-taaruf-blue" />
            <h3 className="font-medium">Aspek Keagamaan</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Pemahaman Agama</label>
            <select 
              name="religiousKnowledge"
              className="w-full p-2 border border-border rounded-md"
              value={criteria.religiousKnowledge}
              onChange={handleChange}
            >
              <option value="all">Semua Tingkat</option>
              <option value="basic">Dasar</option>
              <option value="intermediate">Menengah</option>
              <option value="advanced">Lanjut</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="pt-4 flex justify-end">
        <Button type="submit" className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
          <Filter className="h-4 w-4 mr-2" />
          Cari Pasangan
        </Button>
      </div>
    </form>
  );
};

export default CriteriaSearch;
