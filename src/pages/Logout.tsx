
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Logout = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Clear auth data from localStorage
    localStorage.removeItem('taaruf_auth');
    
    // Show success toast
    toast({
      title: 'Berhasil keluar',
      description: 'Anda telah keluar dari akun Anda.',
    });
  }, [toast]);
  
  // Redirect to login page immediately
  return <Navigate to="/login" replace />;
};

export default Logout;
