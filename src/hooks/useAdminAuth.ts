
import { useState, useEffect, useCallback, useMemo } from 'react';

export const useAdminAuth = () => {
  const [state, setState] = useState({
    isAuthenticated: false,
    userRole: '',
    isLoading: true,
    isAdmin: false
  });
  
  const getAuthData = useCallback(() => {
    const authData = localStorage.getItem('taaruf_auth');
    if (authData) {
      try {
        const parsedData = JSON.parse(authData);
        return {
          isAuthenticated: parsedData.isAuthenticated || false,
          userRole: parsedData.role || '',
          isLoading: false,
          isAdmin: (parsedData.role || '') === 'admin'
        };
      } catch (error) {
        console.error('Error parsing auth data:', error);
        // Reset auth data if it's invalid
        localStorage.removeItem('taaruf_auth');
        return {
          isAuthenticated: false,
          userRole: '',
          isLoading: false,
          isAdmin: false
        };
      }
    } else {
      return {
        isAuthenticated: false,
        userRole: '',
        isLoading: false,
        isAdmin: false
      };
    }
  }, []);
  
  useEffect(() => {
    const authData = getAuthData();
    setState(authData);
  }, [getAuthData]);
  
  // Memoize common derived values
  const isParticipant = useMemo(() => 
    state.isAuthenticated && state.userRole === 'participant',
    [state.isAuthenticated, state.userRole]
  );
  
  return {
    ...state,
    isParticipant,
    refresh: useCallback(() => {
      const authData = getAuthData();
      setState(authData);
    }, [getAuthData])
  };
};
