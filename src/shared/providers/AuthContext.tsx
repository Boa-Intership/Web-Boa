import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userData: User, accessToken: string) => {
    setToken(accessToken);
    setUser(userData);
    setIsAuthenticated(true);
    // Guardar el token en localStorage para persistencia
    localStorage.setItem('token', accessToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    // Limpiar el token del localStorage
    localStorage.removeItem('token');
  };

  // Verificar token existente al cargar la aplicación
  React.useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Aquí podrías validar el token con el backend si es necesario
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
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
