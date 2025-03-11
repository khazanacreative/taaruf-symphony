import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Logout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Clear auth data from localStorage
    localStorage.removeItem('taaruf_auth');
    
    // Show success toast
    toast({
      title: 'Berhasil keluar',
      description: 'Anda telah keluar dari akun Anda.',
    });
    
    // Redirect to login page
    navigate('/login', { replace: true });
  }, [toast, navigate]);
  
  return null;
};

export default Logout;
