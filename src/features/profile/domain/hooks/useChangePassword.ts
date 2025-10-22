import { useState } from 'react';

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
      // Simulación de delay de API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulación de validación básica
      if (!currentPassword) {
        throw new Error('La contraseña actual es requerida');
      }

      if (currentPassword.length < 6) {
        throw new Error('La contraseña actual debe tener al menos 6 caracteres');
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

      // Simulación de error ocasional (10% de probabilidad)
      if (Math.random() < 0.1) {
        throw new Error('La contraseña actual es incorrecta');
      }

      // Simulación de éxito
      console.log('✅ Contraseña cambiada exitosamente (simulación)');
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      onError?.(errorMessage);
      throw err; // Re-throw para que el componente pueda manejarlo
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
