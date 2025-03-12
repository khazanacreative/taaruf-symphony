
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
    
    // Navigate to login page
    navigate('/login', { replace: true });
  }, [toast, navigate, refresh]);
  
  // Show minimal loading state while handling logout
  return <div className="flex items-center justify-center min-h-screen">Logging out...</div>;
};

export default Logout;
