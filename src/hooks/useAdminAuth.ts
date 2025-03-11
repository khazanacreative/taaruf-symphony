
import { useState, useEffect } from 'react';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      const { isAuthenticated, role } = JSON.parse(authData);
      setIsAuthenticated(isAuthenticated);
      setUserRole(role);
    }
    setIsLoading(false);
  }, []);
  
  return {
    isAuthenticated,
    userRole,
    isLoading,
    isAdmin: userRole === 'admin'
  };
};
