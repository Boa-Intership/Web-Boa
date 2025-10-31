import { useState } from 'react';
import { userService } from '../../data/user.service';
import { type ChangePasswordSchema } from '../validators/changePasswordSchema';

interface UseChangePasswordProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface UseChangePasswordReturn {
  changePassword: (data: ChangePasswordSchema) => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

/**
 * Hook personalizado para manejar el cambio de contraseña
 */
export const useChangePassword = ({
  onSuccess,
  onError,
}: UseChangePasswordProps = {}): UseChangePasswordReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const changePassword = async (data: ChangePasswordSchema): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Llamar al servicio de backend - La validación ya se hace con Zod
      await userService.changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      console.log('✅ Contraseña cambiada exitosamente');
      onSuccess?.();
    } catch (err: unknown) {
      // Manejar errores del backend
      const apiError = err as {
        response?: {
          data?: {
            message?: string;
          };
        };
        message?: string;
      };

      let errorMessage = 'Error al cambiar la contraseña';

      // Priorizar el mensaje específico del backend
      if (apiError?.response?.data?.message) {
        errorMessage = apiError.response.data.message;
      } else if (apiError?.message) {
        errorMessage = apiError.message;
      }

      setError(errorMessage);
      onError?.(errorMessage);
      throw new Error(errorMessage); // Re-throw para que el componente pueda manejarlo
    } finally {
      setLoading(false);
    }
  };

  return {
    changePassword,
    loading,
    error,
    clearError,
  };
};

export default useChangePassword;
