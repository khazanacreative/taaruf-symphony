
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  MessageSquare, 
  Calendar, 
  Heart, 
  ChevronRight, 
  Check,
  User,
  Clock
} from 'lucide-react';

const TaarufProcessComponent = () => {
  // Steps in taaruf process
  const steps = [
    {
      id: 1,
      title: 'Komunikasi Awal',
      description: 'Perkenalan dan pertukaran visi misi pernikahan',
      icon: MessageSquare,
    },
    {
      id: 2,
      title: 'Diskusi Mendalam',
      description: 'Membahas nilai, harapan dan detail kehidupan',
      icon: User,
    },
    {
      id: 3,
      title: 'Pelibatan Keluarga',
      description: 'Diskusi dengan keluarga atau wali',
      icon: Calendar,
    },
    {
      id: 4,
      title: 'Pertemuan Nadzor',
      description: 'Pertemuan langsung dengan wali',
      icon: Heart,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Alur Proses Ta'aruf</h3>
          
          <div className="relative mb-8 px-4">
            <div className="absolute top-0 left-6 h-full w-0.5 bg-muted"></div>
            
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-start mb-8 last:mb-0">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-taaruf-blue/20 to-taaruf-green/20 border border-taaruf-blue/30">
                  <step.icon className="h-5 w-5 text-taaruf-blue" />
                </div>
                
                <div className="ml-4">
                  <h4 className="text-md font-medium">
                    {step.title}
                  </h4>
                  <p className="text-sm text-foreground/70 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-sm text-foreground/70">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Durasi rata-rata: 2-3 bulan</span>
            </div>
            
            <Button variant="link" size="sm" className="p-0 h-auto">
              Pelajari lebih lanjut
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaarufProcessComponent;
