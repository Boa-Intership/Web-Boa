import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteAccess } from './hooks/useRouteAccess';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  const { checkRouteAccess, isLoading, isAuthenticated } = useRouteAccess();

  useEffect(() => {
    const run = async () => {
      if (!isLoading) {
        await checkRouteAccess(location.pathname);
      }
    };

    run();
  }, [location.pathname, checkRouteAccess, isLoading, isAuthenticated]);

  if (isLoading) {
    return null; // O un componente de Spinner/Loader global
  }

  return <>{children}</>;
};

export default RouteGuard;
