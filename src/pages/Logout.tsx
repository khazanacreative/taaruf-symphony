
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const Logout = () => {
  const { toast } = useToast();
  const { refresh } = useAdminAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Clear auth data from localStorage
    localStorage.removeItem('taaruf_auth');
    
    // Refresh auth state
    refresh();
    
    // Show success toast
    toast({
      title: "Berhasil keluar",
      description: "Anda telah keluar dari akun Anda.",
    });
    
    // Immediately navigate to login page
    navigate('/login', { replace: true });
  }, [navigate, refresh, toast]);
  
  // Return null as this component shouldn't render anything
  return null;
};

export default Logout;
