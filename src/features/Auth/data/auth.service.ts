import { httpClient, ApiResponse } from '../../../config/httpClient';
import { API_CONFIG } from '../../../config/api';
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from '../domain/auth.types';

export class AuthService {
  private readonly baseUrl = API_CONFIG.ENDPOINTS.AUTH;

  /**
   * Iniciar sesión
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await httpClient.post<AuthResponse>(`${this.baseUrl}/login`, credentials);

    // Guardar token automáticamente
    if (response.success && response.data.accessToken) {
      httpClient.setAuthToken(response.data.accessToken);
      this.saveRefreshToken(response.data.refreshToken);
    }

    return response;
  }

  /**
   * Registrar nuevo usuario
   */
  async register(userData: RegisterRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await httpClient.post<AuthResponse>(`${this.baseUrl}/register`, userData);

    // Guardar token automáticamente si el registro es exitoso
    if (response.success && response.data.accessToken) {
      httpClient.setAuthToken(response.data.accessToken);
      this.saveRefreshToken(response.data.refreshToken);
    }

    return response;
  }

  /**
   * Cerrar sesión
   */
  async logout(): Promise<ApiResponse<void>> {
    try {
      const response = await httpClient.post<void>(`${this.baseUrl}/logout`);
      this.clearTokens();
      return response;
    } catch (error) {
      // Limpiar tokens incluso si la petición falla
      this.clearTokens();
      throw error;
    }
  }

  /**
   * Obtener perfil del usuario actual
   */
  async getProfile(): Promise<ApiResponse<User>> {
    return await httpClient.get<User>(`${this.baseUrl}/profile`);
  }

  /**
   * Actualizar perfil del usuario
   */
  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return await httpClient.patch<User>(`${this.baseUrl}/profile`, userData);
  }

  /**
   * Solicitar recuperación de contraseña
   */
  async forgotPassword(request: ForgotPasswordRequest): Promise<ApiResponse<void>> {
    return await httpClient.post<void>(`${this.baseUrl}/forgot-password`, request);
  }

  /**
   * Restablecer contraseña
   */
  async resetPassword(request: ResetPasswordRequest): Promise<ApiResponse<void>> {
    return await httpClient.post<void>(`${this.baseUrl}/reset-password`, request);
  }

  /**
   * Refrescar token de acceso
   */
  async refreshToken(): Promise<ApiResponse<AuthResponse>> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await httpClient.post<AuthResponse>(`${this.baseUrl}/refresh`, {
      refreshToken,
    });

    if (response.success && response.data.accessToken) {
      httpClient.setAuthToken(response.data.accessToken);
      this.saveRefreshToken(response.data.refreshToken);
    }

    return response;
  }

  /**
   * Verificar email
   */
  async verifyEmail(token: string): Promise<ApiResponse<void>> {
    return await httpClient.post<void>(`${this.baseUrl}/verify-email`, { token });
  }

  /**
   * Reenviar email de verificación
   */
  async resendVerificationEmail(): Promise<ApiResponse<void>> {
    return await httpClient.post<void>(`${this.baseUrl}/resend-verification`);
  }

  // Métodos privados para manejo de tokens
  private saveRefreshToken(token: string): void {
    localStorage.setItem('refreshToken', token);
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private clearTokens(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }

  /**
   * Verificar si el usuario está autenticado
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  /**
   * Obtener token de acceso actual
   */
  getAccessToken(): string | null {
    return localStorage.getItem('authToken');
  }
}

// Exportar instancia singleton
export const authService = new AuthService();
export default authService;
