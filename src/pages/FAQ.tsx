
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/components/layout/AppLayout";

const faqItems = [
  {
    question: "Apa itu Ta'aruf?",
    answer: "Ta'aruf adalah proses perkenalan antara laki-laki dan perempuan dengan tujuan untuk menikah, sesuai dengan syariat Islam. Proses ini biasanya difasilitasi oleh pihak ketiga atau mediator, seperti ustadz, keluarga, atau teman."
  },
  {
    question: "Bagaimana proses Ta'aruf di Taaruf Ar Rahman?",
    answer: "Proses Ta'aruf di Taaruf Ar Rahman dimulai dengan pendaftaran dan pembuatan CV (biodata). Kemudian, pengguna dapat mencari calon pasangan berdasarkan kriteria yang diinginkan. Setelah menemukan yang cocok, pengguna dapat mengirim permintaan Ta'aruf. Jika diterima, kedua belah pihak dapat berkomunikasi melalui platform kami dengan didampingi oleh mediator virtual."
  },
  {
    question: "Apakah data saya aman?",
    answer: "Ya, kami menjamin keamanan data pengguna. Informasi sensitif hanya akan dibagikan kepada calon pasangan yang telah disetujui oleh pengguna. Kami juga memiliki kebijakan privasi yang ketat untuk melindungi data pengguna."
  },
  {
    question: "Berapa biaya untuk menggunakan platform Taaruf Ar Rahman?",
    answer: "Taaruf Ar Rahman menawarkan layanan dasar secara gratis, termasuk pendaftaran, pembuatan CV, dan pencarian calon pasangan. Namun, kami juga menawarkan layanan premium dengan fitur tambahan seperti prioritas dalam pencarian dan akses ke mediator professional."
  },
  {
    question: "Apakah saya bisa membatalkan proses Ta'aruf?",
    answer: "Tentu saja. Jika dalam proses Ta'aruf, Anda merasa tidak cocok dengan calon pasangan, Anda dapat membatalkan proses tersebut kapan saja. Kami memahami bahwa kecocokan adalah hal yang penting dalam membangun rumah tangga."
  },
  {
    question: "Bagaimana jika saya belum memiliki wali?",
    answer: "Wali adalah komponen penting dalam proses Ta'aruf. Jika Anda kesulitan mencari wali, kami dapat membantu menghubungkan Anda dengan ustadz atau mediator yang bisa menjadi wali. Silakan hubungi tim dukungan kami untuk informasi lebih lanjut."
  },
  {
    question: "Berapa lama proses Ta'aruf biasanya berlangsung?",
    answer: "Durasi proses Ta'aruf bervariasi tergantung pada individu yang terlibat. Namun, biasanya proses ini berlangsung antara 3-6 bulan, mulai dari perkenalan awal hingga keputusan untuk menikah."
  },
  {
    question: "Bagaimana jika saya ingin mengganti informasi di CV saya?",
    answer: "Anda dapat memperbarui CV Anda kapan saja melalui halaman profil. Pastikan informasi yang Anda berikan akurat dan terkini untuk meningkatkan peluang Anda menemukan pasangan yang cocok."
  }
];

const FAQ = () => {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-foreground/70">
            Temukan jawaban untuk pertanyaan umum tentang platform ta'aruf kami
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-taaruf-blue" />
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-7">
                <p className="text-foreground/70">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-taaruf-blue/5 to-taaruf-green/5 border border-taaruf-blue/10">
          <h2 className="text-xl font-semibold mb-4 text-center">Punya Pertanyaan Lain?</h2>
          <p className="text-foreground/70 text-center mb-6">
            Jika Anda memiliki pertanyaan yang tidak tercantum di atas, silakan kirimkan kepada kami
          </p>
          
          <div className="space-y-4">
            <Textarea 
              placeholder="Tulis pertanyaan Anda di sini..." 
              className="min-h-[120px]"
            />
            <Button className="w-full bg-gradient-to-r from-taaruf-blue to-taaruf-green text-white">
              <Send className="mr-2 h-4 w-4" />
              Kirim Pertanyaan
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FAQ;
