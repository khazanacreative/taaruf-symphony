
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  User, 
  Calendar, 
  ThumbsUp, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';

const Approvals = () => {
  const [activeTab, setActiveTab] = useState('pending');
  
  // Mock data for approvals
  const pendingApprovals = [
    {
      id: 1,
      name: "Ahmad & Fatimah",
      stage: "Proses Ta'aruf",
      requestDate: "15 Mei 2023",
      type: "Persetujuan Orang Tua"
    },
    {
      id: 2,
      name: "Umar & Khadijah",
      stage: "Pra Khitbah",
      requestDate: "20 Mei 2023",
      type: "Penunjukan Murobbi"
    }
  ];
  
  const completedApprovals = [
    {
      id: 3,
      name: "Ali & Aisyah",
      stage: "Khitbah",
      approvalDate: "10 Mei 2023",
      type: "Persetujuan Keluarga",
      status: "Disetujui"
    },
    {
      id: 4,
      name: "Hasan & Zahra",
      stage: "Pra Nikah",
      approvalDate: "5 Mei 2023",
      type: "Penunjukan Murobbi",
      status: "Disetujui"
    }
  ];
  
  // Mock data for murobbis
  const murobbis = [
    {
      id: 1,
      name: "Ustadz Abdullah",
      specialty: "Konseling Pranikah",
      experience: "10 tahun",
      availability: "Tersedia"
    },
    {
      id: 2,
      name: "Ustadzah Khadijah",
      specialty: "Bimbingan Keluarga",
      experience: "8 tahun",
      availability: "Tersedia"
    },
    {
      id: 3,
      name: "Ustadz Ibrahim",
      specialty: "Fiqh Munakahat",
      experience: "15 tahun",
      availability: "Tidak Tersedia"
    }
  ];
  
  return (
    <AppLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Persetujuan & Murobbi</h1>
          <p className="text-muted-foreground">Kelola persetujuan dan penunjukan murobbi untuk proses ta'aruf</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="pending">Menunggu Persetujuan</TabsTrigger>
            <TabsTrigger value="completed">Riwayat Persetujuan</TabsTrigger>
            <TabsTrigger value="murobbi">Daftar Murobbi</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="space-y-4">
            {pendingApprovals.length > 0 ? (
              pendingApprovals.map(approval => (
                <Card key={approval.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <CheckCircle className="h-6 w-6 text-taaruf-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium">{approval.name}</h3>
                          <p className="text-sm text-muted-foreground">{approval.stage}</p>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="mr-2">{approval.type}</Badge>
                            <span className="text-xs text-muted-foreground">Diajukan {approval.requestDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end md:self-center">
                        <Button variant="outline" size="sm">Detail</Button>
                        <Button 
                          className="bg-taaruf-green hover:bg-taaruf-green/90 text-white" 
                          size="sm"
                        >
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Setujui
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p>Tidak ada persetujuan yang menunggu.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            {completedApprovals.length > 0 ? (
              completedApprovals.map(approval => (
                <Card key={approval.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-3 rounded-full">
                          <CheckCircle className="h-6 w-6 text-taaruf-green" />
                        </div>
                        <div>
                          <h3 className="font-medium">{approval.name}</h3>
                          <p className="text-sm text-muted-foreground">{approval.stage}</p>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="mr-2">{approval.type}</Badge>
                            <span className="text-xs text-muted-foreground">Disetujui {approval.approvalDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end md:self-center">
                        <Button variant="outline" size="sm">Detail</Button>
                        <Button 
                          variant="secondary" 
                          size="sm"
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Pesan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p>Belum ada riwayat persetujuan.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="murobbi" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {murobbis.map(murobbi => (
                <Card key={murobbi.id}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <User className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{murobbi.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{murobbi.specialty}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Pengalaman:</span>
                        <span className="text-sm font-medium">{murobbi.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Status:</span>
                        <Badge variant={murobbi.availability === "Tersedia" ? "outline" : "secondary"}>
                          {murobbi.availability}
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white hover:opacity-90">
                      Pilih Murobbi
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Approvals;
