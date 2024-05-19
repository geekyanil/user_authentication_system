import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');

  const authorizationToken = `Bearer ${token}`;
  console.log('Authorization:', authorizationToken);

  //   const API = import.meta.env.VITE_APP_URI_API;
  const API = `http://localhost:5001`;

  console.log('API:', API);

  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);
  };

  // Tackling the Logout Functionality
  const LogoutUser = () => {
    setToken('');
    return localStorage.removeItem('token');
  };

  // AUTHENTICATION ---> To get the currently loggedIn user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/profile`, {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log('Error Fetching user Data');
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error fetching user data');
    }
  };

  // To Fetch the services data from the database

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        authorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error('useAuth used outside of the provider');
  }
  return authContextValue;
};
