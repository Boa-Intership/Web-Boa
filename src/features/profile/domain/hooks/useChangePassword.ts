import { useState } from 'react';
import { userService } from '../../data/user.service';

interface UseChangePasswordProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface UseChangePasswordReturn {
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
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

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Validación básica del lado del cliente
      if (!currentPassword) {
        throw new Error('La contraseña actual es requerida');
      }

      if (!newPassword) {
        throw new Error('La nueva contraseña es requerida');
      }

      if (newPassword.length < 8) {
        throw new Error('La nueva contraseña debe tener al menos 8 caracteres');
      }

      if (currentPassword === newPassword) {
        throw new Error('La nueva contraseña debe ser diferente a la actual');
      }

      // Llamar al servicio de backend
      await userService.changePassword({
        currentPassword,
        newPassword,
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
