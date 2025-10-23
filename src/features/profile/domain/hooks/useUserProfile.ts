import { useState, useEffect } from 'react';
import { httpClient } from '@/config/httpClient';
import { userService } from '../../data/user.service';

interface UserRole {
  id: number;
  name: string;
  description: string;
}
interface UserBillingData {
  businessName: string;
  docType: number;
  nit: string;
  complement: string | null;
}

interface UserProfileResponse {
  id: number;
  ci: string;
  complement: string | null;
  name: string;
  address: string | null;
  phone: string;
  email: string;
  billingData: UserBillingData[] | null;
  roles: UserRole[];
}

interface UpdateUserData {
  name?: string;
  address?: string;
  phone?: string;
}

interface UseUserProfileReturn {
  userData: UserProfileResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateUser: (data: UpdateUserData) => Promise<void>;
}

export const useUserProfile = (): UseUserProfileReturn => {
  const [userData, setUserData] = useState<UserProfileResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = async () => {
    // No hacer nada si ya hay datos cargados
    if (userData) return;

    setLoading(true);
    setError(null);

    try {
      const response = await httpClient.get<UserProfileResponse>('/user/me');
      setUserData(response);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error al obtener datos del usuario';
      setError(errorMessage);
      console.error('Error fetching user profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: UpdateUserData) => {
    if (!userData) throw new Error('No hay datos de usuario');

    setLoading(true);
    setError(null);

    try {
      const response = await userService.updateUser(userData.id, data);
      setUserData(response);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error al actualizar datos del usuario';
      setError(errorMessage);
      console.error('Error updating user profile:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    userData,
    loading,
    error,
    refetch: fetchUserProfile,
    updateUser,
  };
};

export default useUserProfile;
