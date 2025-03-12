
import { useState, useEffect } from 'react';

export const useAdminAuth = () => {
  const [state, setState] = useState({
    isAuthenticated: false,
    userRole: '',
    isLoading: true,
    isAdmin: false
  });
  
  useEffect(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      try {
        const parsedData = JSON.parse(authData);
        setState({
          isAuthenticated: parsedData.isAuthenticated || false,
          userRole: parsedData.role || '',
          isLoading: false,
          isAdmin: (parsedData.role || '') === 'admin'
        });
      } catch (error) {
        console.error('Error parsing auth data:', error);
        // Reset auth data if it's invalid
        localStorage.removeItem('taaruf_auth');
        setState({
          isAuthenticated: false,
          userRole: '',
          isLoading: false,
          isAdmin: false
        });
      }
    } else {
      setState(prev => ({...prev, isLoading: false}));
    }
  }, []);
  
  return state;
};
