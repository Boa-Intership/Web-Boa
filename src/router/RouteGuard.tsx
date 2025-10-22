import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteAccess } from './hooks/useRouteAccess';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  const { checkRouteAccess, isLoading } = useRouteAccess();

  useEffect(() => {
    if (!isLoading) {
      checkRouteAccess(location.pathname);
    }
  }, [location.pathname, checkRouteAccess, isLoading]);

  if (isLoading) {
    return null; // O un componente de Spinner/Loader global
  }

  return <>{children}</>;
};

export default RouteGuard;
