import { useState, useEffect } from 'react';
import { httpClient } from '@/config/httpClient';
import { getUserProfile } from '@/features/pre-registration/data/services/user.service';
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

interface UseUserProfileReturn {
  userData: UserProfileResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
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
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await getUserProfile(token);
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

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    userData,
    loading,
    error,
    refetch: fetchUserProfile,
  };
};

export default useUserProfile;
