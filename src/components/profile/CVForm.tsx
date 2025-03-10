
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Struktur data untuk CV
interface CV {
  fullName: string;
  gender: string;
  birthPlace: string;
  birthDate: string;
  height: string;
  weight: string;
  address: string;
  phone: string;
  email: string;
  education: string;
  occupation: string;
  about: string;
  vision: string;
  hobbies: string;
  maritalStatus: string;
}

const CVForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Ambil data user dari localStorage untuk prefill form
  const authData = localStorage.getItem('taaruf_auth');
  const userData = authData ? JSON.parse(authData) : {};
  
  const [formData, setFormData] = useState<CV>({
    fullName: userData.name || '',
    gender: userData.gender || 'male',
    birthPlace: '',
    birthDate: '',
    height: '',
    weight: '',
    address: '',
    phone: '',
    email: userData.email || '',
    education: '',
    occupation: '',
    about: '',
    vision: '',
    hobbies: '',
    maritalStatus: 'single',
  });
  
  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi pengiriman data ke server
    setTimeout(() => {
      setIsLoading(false);
      
      // Simpan data CV di localStorage untuk demo
      localStorage.setItem('taaruf_cv', JSON.stringify(formData));
      
      toast({
        title: "CV berhasil disimpan",
        description: "Data CV Ta'aruf Anda telah berhasil disimpan.",
      });
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Data Pribadi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap*</label>
            <input 
              type="text" 
              name="fullName"
              className="w-full p-2 border border-border rounded-md"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Jenis Kelamin*</label>
            <select 
              name="gender"
              className="w-full p-2 border border-border rounded-md"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Tempat Lahir*</label>
            <input 
              type="text" 
              name="birthPlace"
              className="w-full p-2 border border-border rounded-md"
              value={formData.birthPlace}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Lahir*</label>
            <input 
              type="date" 
              name="birthDate"
              className="w-full p-2 border border-border rounded-md"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Tinggi Badan (cm)*</label>
            <input 
              type="number" 
              name="height"
              className="w-full p-2 border border-border rounded-md"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Berat Badan (kg)*</label>
            <input 
              type="number" 
              name="weight"
              className="w-full p-2 border border-border rounded-md"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status Pernikahan*</label>
            <select 
              name="maritalStatus"
              className="w-full p-2 border border-border rounded-md"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
            >
              <option value="single">Belum Menikah</option>
              <option value="divorced">Pernah Menikah</option>
              <option value="widowed">Janda/Duda</option>
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Kontak</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Alamat*</label>
            <input 
              type="text" 
              name="address"
              className="w-full p-2 border border-border rounded-md"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Nomor Telepon*</label>
            <input 
              type="tel" 
              name="phone"
              className="w-full p-2 border border-border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email*</label>
            <input 
              type="email" 
              name="email"
              className="w-full p-2 border border-border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Pendidikan & Karir</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Pendidikan Terakhir*</label>
            <input 
              type="text" 
              name="education"
              className="w-full p-2 border border-border rounded-md"
              value={formData.education}
              onChange={handleChange}
              required
              placeholder="Contoh: S1 Teknik Informatika"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Pekerjaan*</label>
            <input 
              type="text" 
              name="occupation"
              className="w-full p-2 border border-border rounded-md"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Informasi Tambahan</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tentang Diri*</label>
            <textarea 
              name="about"
              className="w-full p-2 border border-border rounded-md h-24"
              value={formData.about}
              onChange={handleChange}
              required
              placeholder="Ceritakan tentang diri Anda, termasuk kepribadian, nilai-nilai yang dipegang, dan hal-hal penting lainnya"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Visi Pernikahan*</label>
            <textarea 
              name="vision"
              className="w-full p-2 border border-border rounded-md h-24"
              value={formData.vision}
              onChange={handleChange}
              required
              placeholder="Apa visi dan misi Anda dalam pernikahan? Bagaimana pandangan Anda tentang kehidupan berkeluarga?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Hobi & Minat*</label>
            <input 
              type="text" 
              name="hobbies"
              className="w-full p-2 border border-border rounded-md"
              value={formData.hobbies}
              onChange={handleChange}
              required
              placeholder="Contoh: Membaca, Olahraga, Memasak, Traveling"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90"
          disabled={isLoading}
        >
          {isLoading ? 'Menyimpan...' : 'Simpan CV Ta\'aruf'}
        </Button>
        
        <p className="text-xs text-center text-foreground/60 mt-2">
          Pastikan data yang Anda masukkan sudah benar dan sesuai
        </p>
      </div>
    </form>
  );
};

export default CVForm;
