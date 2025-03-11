
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Logout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  
  const handleConfirmLogout = () => {
    // Clear auth data from localStorage
    localStorage.removeItem('taaruf_auth');
    
    // Show success toast
    toast({
      title: 'Berhasil keluar',
      description: 'Anda telah keluar dari akun Anda.',
    });
    
    setIsLoggedOut(true);
  };
  
  const handleCancelLogout = () => {
    // Navigate back to the previous page
    navigate(-1);
  };
  
  // Redirect to login page after logout is confirmed
  if (isLoggedOut) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Konfirmasi Keluar</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin keluar dari akun Anda?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancelLogout}>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmLogout} className="bg-red-500 hover:bg-red-600">
            Keluar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Logout;
