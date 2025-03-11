
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin, User, Plus, ChevronRight } from 'lucide-react';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AppLayout from '@/components/layout/AppLayout';

const Meetings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock data for meetings
  const upcomingMeetings = [
    {
      id: 1,
      title: "Pertemuan Ta'aruf dengan Keluarga",
      date: "20 Mei 2023",
      time: "10:00 - 12:00",
      location: "Masjid Al-Ikhlas, Jakarta Selatan",
      participants: ["Ahmad", "Fatimah", "Keluarga Ahmad", "Murobbi"],
      status: "confirmed"
    },
    {
      id: 2,
      title: "Diskusi Pra-Khitbah",
      date: "25 Mei 2023",
      time: "14:00 - 16:00",
      location: "Kafe Islami, Bandung",
      participants: ["Umar", "Khadijah", "Murobbi"],
      status: "pending"
    }
  ];
  
  const pastMeetings = [
    {
      id: 3,
      title: "Perkenalan Awal",
      date: "10 Mei 2023",
      time: "09:00 - 10:00",
      location: "Zoom Meeting",
      participants: ["Ali", "Aisyah", "Murobbi"],
      status: "completed"
    },
    {
      id: 4,
      title: "Diskusi Visi Misi Pernikahan",
      date: "12 Mei 2023",
      time: "16:00 - 18:00",
      location: "Taman Kota, Jakarta Pusat",
      participants: ["Hasan", "Zahra", "Keluarga Zahra", "Murobbi"],
      status: "completed"
    }
  ];
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold">Jadwal Pertemuan</h1>
            <p className="text-muted-foreground">Kelola jadwal pertemuan ta'aruf Anda</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <Button className="bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
              <Plus className="mr-2 h-4 w-4" />
              Buat Jadwal
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 w-full md:w-auto">
            <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
            <TabsTrigger value="past">Riwayat</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingMeetings.map(meeting => (
              <Card key={meeting.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{meeting.title}</h3>
                        <Badge 
                          className={
                            meeting.status === "confirmed" 
                              ? "bg-taaruf-green/20 text-taaruf-green border-taaruf-green/30 mt-1" 
                              : "bg-yellow-100 text-yellow-800 border-yellow-200 mt-1"
                          }
                        >
                          {meeting.status === "confirmed" ? "Terkonfirmasi" : "Menunggu Konfirmasi"}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Detail
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.location}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.participants.length} Peserta</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-2">
                      {meeting.status === "pending" && (
                        <Button 
                          className="bg-taaruf-green hover:bg-taaruf-green/90 text-white" 
                          size="sm"
                        >
                          Konfirmasi
                        </Button>
                      )}
                      <Button variant="outline" size="sm">Ubah Jadwal</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="past" className="space-y-4">
            {pastMeetings.map(meeting => (
              <Card key={meeting.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{meeting.title}</h3>
                        <Badge variant="outline" className="mt-1">Selesai</Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Detail
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.location}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm">{meeting.participants.length} Peserta</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Meetings;
