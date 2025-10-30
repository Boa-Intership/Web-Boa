import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../shared/providers/AuthContext';
import { isProtectedRoute, isPublicOnlyRoute, ROUTES, isAdminRoute } from '../routes';
import { getUserProfile } from '@/features/pre-registration/data/services/user.service';

export const useRouteAccess = () => {
  const { isAuthenticated, isLoading, token, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const checkRouteAccess = async (path: string) => {
    if (isLoading) {
      return false;
    }

    // Admin-only routes: require auth + ADMIN role
    if (isAdminRoute(path)) {
      if (!isAuthenticated) {
        navigate(ROUTES.LANDING, { state: { from: location } });
        return false;
      }
    }

    // Protected routes (non-admin)
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

  return { checkRouteAccess, isAuthenticated, isLoading };
};
