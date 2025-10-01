import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../shared/providers/AuthContext';
import { ROUTES } from './routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirigir a login y guardar la página que intentaba acceder
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
