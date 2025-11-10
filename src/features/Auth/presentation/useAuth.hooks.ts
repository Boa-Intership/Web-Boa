import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../data/auth.service';
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  User,
  SendCodeRequest,
  ValidateCodeRequest,
  SendResetCodeRequest,
  ValidateResetCodeRequest,
  ResetPasswordWithCodeRequest,
} from '../domain/auth.types';

// Query keys para React Query
export const AUTH_QUERY_KEYS = {
  profile: ['auth', 'profile'] as const,
  user: (id: string) => ['auth', 'user', id] as const,
};

/**
 * Hook para login
 */
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
    onSuccess: (data) => {
      // Invalidar queries relacionadas con auth
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.profile });

      // Opcional: guardar datos del usuario en cache
      if (data.data?.user) {
        queryClient.setQueryData(AUTH_QUERY_KEYS.profile, data.data.user);
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
};

/**
 * Hook para logout
 */
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      // Limpiar todo el cache de queries
      queryClient.clear();
    },
    onError: (error) => {
      console.error('Logout error:', error);
      // Limpiar cache incluso si hay error
      queryClient.clear();
    },
  });
};

/**
 * Hook para obtener perfil del usuario
 */
export const useProfile = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.profile,
    queryFn: async () => {
      const response = await authService.getProfile();
      return response.data;
    },
    enabled: authService.isAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: (failureCount, error: unknown) => {
      // No reintentar si es 401 (no autorizado)
      const axiosError = error as { response?: { status?: number } };
      if (axiosError?.response?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

/**
 * Hook para actualizar perfil
 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: Partial<User>) => authService.updateProfile(userData),
    onSuccess: (data) => {
      // Actualizar cache del perfil
      queryClient.setQueryData(AUTH_QUERY_KEYS.profile, data.data);

      // Invalidar queries relacionadas
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.profile });
    },
    onError: (error) => {
      console.error('Update profile error:', error);
    },
  });
};

/**
 * Hook para solicitar recuperación de contraseña
 */
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (request: ForgotPasswordRequest) => authService.forgotPassword(request),
    onError: (error) => {
      console.error('Forgot password error:', error);
    },
  });
};

/**
 * Hook para enviar código de recuperación de contraseña
 */
export const useSendResetCode = () => {
  return useMutation({
    mutationFn: (request: SendResetCodeRequest) => authService.sendResetCode(request),
    onSuccess: () => {
      console.log('Código de recuperación enviado exitosamente');
    },
    onError: (error) => {
      console.error('Error al enviar código de recuperación:', error);
    },
  });
};

/**
 * Hook para validar código de recuperación de contraseña
 */
export const useValidateResetCode = () => {
  return useMutation({
    mutationFn: (request: ValidateResetCodeRequest) => authService.validateResetCode(request),
    onSuccess: () => {
      console.log('Código de recuperación validado exitosamente');
    },
    onError: (error) => {
      console.error('Error al validar código de recuperación:', error);
    },
  });
};

/**
 * Hook para restablecer contraseña con código
 */
export const useResetPasswordWithCode = () => {
  return useMutation({
    mutationFn: (request: ResetPasswordWithCodeRequest) =>
      authService.resetPasswordWithCode(request),
    onSuccess: () => {
      console.log('Contraseña restablecida exitosamente');
    },
    onError: (error) => {
      console.error('Error al restablecer contraseña:', error);
    },
  });
};

/**
 * Hook para verificar email
 */
export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (token: string) => authService.verifyEmail(token),
    onError: (error) => {
      console.error('Verify email error:', error);
    },
  });
};

/**
 * Hook para refrescar token
 */
export const useRefreshToken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.refreshToken(),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEYS.profile });
    },
    onError: (error) => {
      console.error('Refresh token error:', error);
      // Si el refresh falla, limpiar todo y redirigir al login
      queryClient.clear();
    },
  });
};

/**
 * Hook para enviar código de verificación
 * Verifica email y NIT antes de enviar el código
 */
export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: (request: SendCodeRequest) => authService.sendVerificationCode(request),
    onSuccess: () => {
      console.log('Código de verificación enviado exitosamente');
    },
    onError: (error) => {
      console.error('Error al enviar código de verificación:', error);
    },
  });
};

/**
 * Hook para validar código de verificación
 */
export const useValidateVerificationCode = () => {
  return useMutation({
    mutationFn: (request: ValidateCodeRequest) => authService.validateVerificationCode(request),
    onSuccess: (data) => {
      console.log('Código validado exitosamente:', data.data);
    },
    onError: (error) => {
      console.error('Error al validar código:', error);
    },
  });
};

/**
 * Hook para registrar usuario final
 * No maneja login automático, solo registra al usuario
 */
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (userData: RegisterRequest) => authService.registerUser(userData),
    onSuccess: (data) => {
      console.log('Usuario registrado exitosamente:', data.data);
    },
    onError: (error) => {
      console.error('Error al registrar usuario:', error);
    },
  });
};
