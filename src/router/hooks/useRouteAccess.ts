import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../shared/providers/AuthContext';
import { isProtectedRoute, isPublicOnlyRoute, ROUTES } from '../routes';

export const useRouteAccess = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const checkRouteAccess = (path: string): boolean => {
    if (isLoading) {
      return false;
    }

    if (isProtectedRoute(path) && !isAuthenticated) {
      navigate(ROUTES.LOGIN, { state: { from: location } });
      return false;
    }

    if (isPublicOnlyRoute(path) && isAuthenticated) {
      navigate(ROUTES.LANDING);
      return false;
    }

    return true;
  };

  return { checkRouteAccess, isAuthenticated };
};
