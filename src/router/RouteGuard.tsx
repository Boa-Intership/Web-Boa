import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteAccess } from './hooks/useRouteAccess';

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const location = useLocation();
  const { checkRouteAccess } = useRouteAccess();

  useEffect(() => {
    checkRouteAccess(location.pathname);
  }, [location.pathname, checkRouteAccess]);

  return <>{children}</>;
};

export default RouteGuard;
