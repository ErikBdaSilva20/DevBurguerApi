import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const { data } = await api.get('/session-verify');
      setUserInfo(data);
    } catch {
      setUserInfo(null);
      localStorage.removeItem('devburguer:userData');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem('devburguer:userData');
    if (storedUserData) {
      setUserInfo(JSON.parse(storedUserData));
    }
    loadUser();
  }, []);

  function putUserData(user) {
    setUserInfo(user);
    localStorage.setItem('devburguer:userData', JSON.stringify(user));
  }

  function logout() {
    setUserInfo(null);
    localStorage.removeItem('devburguer:userData');
  }

  return (
    <UserContext.Provider value={{ userInfo, loading, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
