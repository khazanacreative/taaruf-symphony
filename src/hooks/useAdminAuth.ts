
import { useState, useEffect } from 'react';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      try {
        const parsedData = JSON.parse(authData);
        setIsAuthenticated(parsedData.isAuthenticated || false);
        setUserRole(parsedData.role || '');
      } catch (error) {
        console.error('Error parsing auth data:', error);
        // Reset auth data if it's invalid
        localStorage.removeItem('taaruf_auth');
      }
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
