
import { Info, Heart, Users, Shield, Award } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Tentang Taaruf Ar Rahman</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Platform ta'aruf online yang membantu Muslim dan Muslimah menemukan pasangan hidup 
            sesuai dengan syariat Islam, aman, dan terpercaya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-taaruf-blue/10 p-3">
                  <Heart className="h-6 w-6 text-taaruf-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Visi Kami</h3>
                  <p className="text-foreground/70 text-sm">
                    Menjadi platform ta'aruf terdepan yang memfasilitasi pernikahan 
                    sesuai syariat Islam dan membentuk keluarga sakinah, mawaddah, warahmah.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-taaruf-green/10 p-3">
                  <Users className="h-6 w-6 text-taaruf-green" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Misi Kami</h3>
                  <p className="text-foreground/70 text-sm">
                    Memfasilitasi proses ta'aruf yang aman, nyaman, dan sesuai syariat dengan 
                    teknologi modern yang mendukung nilai-nilai keislaman.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-br from-taaruf-blue/5 to-taaruf-green/5 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Nilai-Nilai Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-taaruf-blue/10 p-4 mb-4">
                <Shield className="h-6 w-6 text-taaruf-blue" />
              </div>
              <h3 className="font-medium mb-2">Keamanan</h3>
              <p className="text-sm text-foreground/70">
                Kami menjaga kerahasiaan data dan menjamin keamanan proses ta'aruf.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-taaruf-green/10 p-4 mb-4">
                <Info className="h-6 w-6 text-taaruf-green" />
              </div>
              <h3 className="font-medium mb-2">Transparansi</h3>
              <p className="text-sm text-foreground/70">
                Kami menyediakan informasi yang jelas dan lengkap untuk proses ta'aruf.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="rounded-full bg-taaruf-blue/10 p-4 mb-4">
                <Award className="h-6 w-6 text-taaruf-blue" />
              </div>
              <h3 className="font-medium mb-2">Profesionalitas</h3>
              <p className="text-sm text-foreground/70">
                Kami memberikan layanan yang profesional dan berkualitas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Tim Kami</h2>
          <p className="text-center text-foreground/70 mb-6">
            Kami adalah tim yang berdedikasi untuk memfasilitasi proses ta'aruf yang sesuai syariat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-taaruf-blue/20 to-taaruf-green/20 mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-taaruf-blue/50" />
              </div>
              <h3 className="font-medium">Ahmad Fauzi</h3>
              <p className="text-sm text-foreground/70">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-taaruf-blue/20 to-taaruf-green/20 mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-taaruf-blue/50" />
              </div>
              <h3 className="font-medium">Fatima Zahra</h3>
              <p className="text-sm text-foreground/70">Head of Operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-taaruf-blue/20 to-taaruf-green/20 mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-taaruf-blue/50" />
              </div>
              <h3 className="font-medium">Umar Hadi</h3>
              <p className="text-sm text-foreground/70">Chief Technology Officer</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;
