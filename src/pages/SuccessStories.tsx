
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Heart, Calendar, ChevronRight, Quote } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const SuccessStories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      couple: "Ahmad & Fatimah",
      taarufDuration: "3 bulan",
      marriageDate: "10 Januari 2023",
      location: "Jakarta",
      story: "Alhamdulillah, kami bertemu melalui platform Taaruf Ar Rahman. Proses ta'aruf kami berjalan selama 3 bulan dengan bimbingan murobbi yang sangat membantu. Kami bersyukur Allah mempertemukan kami dan memudahkan jalan menuju pernikahan yang sakinah.",
      advice: "Jangan terburu-buru dalam mengambil keputusan. Istikharah sangat penting dalam proses ta'aruf.",
      imageUrl: "https://source.unsplash.com/random/wedding/1"
    },
    {
      id: 2,
      couple: "Umar & Khadijah",
      taarufDuration: "4 bulan",
      marriageDate: "15 Februari 2023",
      location: "Bandung",
      story: "Kami awalnya ragu untuk mengikuti proses ta'aruf, namun setelah berdiskusi dengan keluarga dan ustadz, kami memutuskan untuk mencoba. Melalui platform ini, kami saling bertukar CV dan melanjutkan ke tahap pertemuan dengan keluarga. Alhamdulillah proses berjalan lancar.",
      advice: "Komunikasikan ekspektasi Anda sejak awal, dan jangan lupa melibatkan keluarga dalam proses ta'aruf.",
      imageUrl: "https://source.unsplash.com/random/wedding/2"
    },
    {
      id: 3,
      couple: "Ali & Aisyah",
      taarufDuration: "2 bulan",
      marriageDate: "20 Maret 2023",
      location: "Surabaya",
      story: "Kami bertemu melalui rekomendasi teman yang juga menggunakan Taaruf Ar Rahman. Sejak pertukaran CV, kami merasakan kecocokan dalam visi dan misi pernikahan. Proses ta'aruf kami relatif singkat karena keluarga kedua belah pihak sangat mendukung.",
      advice: "Jangan hanya fokus pada penampilan fisik, tetapi utamakan akhlak dan pemahaman agama.",
      imageUrl: "https://source.unsplash.com/random/wedding/3"
    }
  ];
  
  // Filter success stories based on search query
  const filteredStories = successStories.filter(story => {
    return story.couple.toLowerCase().includes(searchQuery.toLowerCase()) || 
           story.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
           story.location.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Kisah Sukses</h1>
          <p className="text-muted-foreground">Cerita pasangan yang berhasil menemukan jodohnya melalui Taaruf Ar Rahman</p>
        </div>
        
        <div className="relative">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10" 
            placeholder="Cari kisah sukses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(story => (
            <Card key={story.id} className="overflow-hidden flex flex-col">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${story.imageUrl})` }}
              />
              <CardContent className="pt-6 flex-1">
                <h2 className="text-xl font-bold mb-2">{story.couple}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {story.marriageDate}
                  </div>
                  <div>{story.location}</div>
                </div>
                <div className="flex items-center mb-3">
                  <Quote className="h-4 w-4 text-taaruf-blue mr-2" />
                  <p className="text-sm font-medium text-taaruf-blue">Kisah Kami</p>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                  {story.story}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between pt-0 pb-6">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Heart className="h-3 w-3 mr-1 text-red-500" />
                  Ta'aruf selama {story.taarufDuration}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  Baca Selengkapnya
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredStories.length === 0 && (
          <div className="text-center py-8">
            <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">Tidak ada kisah sukses ditemukan</h3>
            <p className="text-muted-foreground mt-1">
              Coba ubah kata kunci pencarian Anda
            </p>
          </div>
        )}
        
        <div className="text-center py-4">
          <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
            Bagikan Kisah Sukses Anda
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default SuccessStories;
