import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string, rToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (userData: User, accessToken: string, refreshToken: string) => {
    setToken(accessToken);
    setUser(userData);
    setIsAuthenticated(true);
    // Guardar el token en localStorage para persistencia
    localStorage.setItem('token', accessToken);
    localStorage.setItem('rToken', refreshToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    // Limpiar el token del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('rToken');
  };

  // Verificar token existente al cargar la aplicación
  React.useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        // Aquí harías una llamada a tu API para validar el token
        if (token) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // <--- FINALIZAR LA CARGA
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
