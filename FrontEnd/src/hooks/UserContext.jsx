import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('account:userData');

    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  function putUserData(userData) {
    setUserInfo(userData);
    localStorage.setItem('account:userData', JSON.stringify(userData));
  }

  function logout() {
    setUserInfo(null);
    localStorage.removeItem('account:userData');
  }

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
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
