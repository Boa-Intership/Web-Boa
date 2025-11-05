import React, { createContext, useContext, useState } from 'react';
import { getUserProfile } from '@/features/pre-registration/data/services/user.service';

interface User {
  name: string;
  email: string;
  roles?: Array<{ id: number; name: string }>;
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
        const storedToken = localStorage.getItem('token');
        // Si hay token en localStorage, restaurarlo en el estado y obtener perfil
        if (storedToken) {
          setToken(storedToken);
          setIsAuthenticated(true);
          try {
            const profile = await getUserProfile(storedToken);
            if (profile) {
              setUser(profile);
            }
          } catch (e) {
            // Si falla obtener perfil, limpiar autenticación
            console.debug('AuthContext: failed to fetch profile on init', e);
            setIsAuthenticated(false);
            setToken(null);
            setUser(null);
            localStorage.removeItem('token');
            localStorage.removeItem('rToken');
          }
        }
      } catch {
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
