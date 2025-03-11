
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { BookOpen, Search, Heart, User, Calendar, ChevronRight, Clock } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const Articles = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Persiapan Mental Sebelum Ta'aruf",
      category: "Pra Ta'aruf",
      author: "Ustadz Ahmad Faiz",
      date: "10 Mei 2023",
      readTime: "5 menit",
      excerpt: "Ta'aruf merupakan proses yang mensyariatkan adanya perantara dari pihak ketiga yang dipercaya, sehingga tidak terjadi khalwat (pertemuan antara laki-laki dan perempuan tanpa mahram)...",
      likes: 120,
      imageUrl: "https://source.unsplash.com/random/1"
    },
    {
      id: 2,
      title: "Memahami Konsep Kafa'ah dalam Pernikahan",
      category: "Fiqh Pernikahan",
      author: "Ustadzah Fatimah",
      date: "15 Mei 2023",
      readTime: "7 menit",
      excerpt: "Kafa'ah atau kesepadanan dalam pernikahan menjadi pertimbangan penting dalam memilih pasangan. Islam mengajarkan untuk memperhatikan kesepadanan dari segi agama, akhlak, pendidikan...",
      likes: 98,
      imageUrl: "https://source.unsplash.com/random/2"
    },
    {
      id: 3,
      title: "Panduan Mengenal Karakter Calon Pasangan",
      category: "Proses Ta'aruf",
      author: "Ustadz Muhammad",
      date: "20 Mei 2023",
      readTime: "6 menit",
      excerpt: "Salah satu tujuan ta'aruf adalah untuk mengenal karakter calon pasangan sebelum memutuskan untuk menikah. Beberapa hal yang perlu digali antara lain pandangan tentang agama, keluarga...",
      likes: 145,
      imageUrl: "https://source.unsplash.com/random/3"
    },
    {
      id: 4,
      title: "Peran Murobbi dalam Proses Ta'aruf",
      category: "Proses Ta'aruf",
      author: "Ustadz Ibrahim",
      date: "25 Mei 2023",
      readTime: "4 menit",
      excerpt: "Murobbi atau mediator memiliki peran sangat penting dalam proses ta'aruf. Murobbi bertanggung jawab untuk memastikan proses berjalan sesuai syariat, menjembatani komunikasi...",
      likes: 87,
      imageUrl: "https://source.unsplash.com/random/4"
    }
  ];
  
  // Filter articles based on search query and active tab
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && article.category.toLowerCase().includes(activeTab.toLowerCase());
  });
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Artikel & Edukasi</h1>
          <p className="text-muted-foreground">Pelajari tentang proses ta'aruf dan pernikahan dalam Islam</p>
        </div>
        
        <div className="relative">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-10" 
            placeholder="Cari artikel..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex flex-wrap">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="Pra Ta'aruf">Pra Ta'aruf</TabsTrigger>
            <TabsTrigger value="Proses Ta'aruf">Proses Ta'aruf</TabsTrigger>
            <TabsTrigger value="Fiqh Pernikahan">Fiqh Pernikahan</TabsTrigger>
            <TabsTrigger value="Pasca Nikah">Pasca Nikah</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(article => (
                <Card key={article.id} className="overflow-hidden flex flex-col">
                  <div 
                    className="h-40 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${article.imageUrl})` }}
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs text-taaruf-blue uppercase font-medium">
                          {article.category}
                        </span>
                        <CardTitle className="text-lg mt-1">{article.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Heart className="h-3 w-3 mr-1" />
                      {article.likes}
                    </div>
                  </CardFooter>
                  <div className="px-6 pb-6">
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      Baca Selengkapnya
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Tidak ada artikel ditemukan</h3>
                <p className="text-muted-foreground mt-1">
                  Coba ubah kata kunci pencarian atau pilih kategori lain
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Articles;
