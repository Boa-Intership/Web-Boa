import { httpClient } from '../../../config/httpClient';
import { API_CONFIG } from '../../../config/api';
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  SendCodeRequest,
  ValidateCodeRequest,
} from '../domain/auth.types';

export class AuthService {
  private readonly baseUrl = API_CONFIG.ENDPOINTS.AUTH;

  /**
   * Iniciar sesión
   */
  async login(credentials: LoginRequest) {
    const response = await httpClient.post<AuthResponse>(`${this.baseUrl}/login`, credentials);

    return response;
  }

  /**
   * Cerrar sesión
   */
  async logout() {
    try {
      const response = await httpClient.post<void>(`${this.baseUrl}/logout`, {
        refreshToken: this.getRefreshToken(),
      });
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
  async getProfile() {
    return await httpClient.get<User>(`${this.baseUrl}/me`);
  }

  /**
   * Actualizar perfil del usuario
   */
  async updateProfile(userData: Partial<User>) {
    return await httpClient.put<User>(`${this.baseUrl}/user`, userData);
  }

  /**
   * Solicitar recuperación de contraseña
   */
  async forgotPassword(request: ForgotPasswordRequest) {
    return await httpClient.post<void>(`${this.baseUrl}/forgot-password`, request);
  }

  /**
   * Restablecer contraseña
   */
  async resetPassword(request: ResetPasswordRequest) {
    return await httpClient.post<void>(`${this.baseUrl}/reset-password`, request);
  }

  /**
   * Refrescar token de acceso
   */
  async refreshToken() {
    return 0;
  }

  /**
   * Verificar email
   */
  async verifyEmail(token: string) {
    return await httpClient.post<void>(`${this.baseUrl}/verify-email`, { token });
  }

  /**
   * Enviar código de verificación
   * Verifica que el email y NIT no estén en uso antes de enviar el código
   */
  async sendVerificationCode(request: SendCodeRequest) {
    return await httpClient.post<void>(API_CONFIG.ENDPOINTS.SEND_CODE, request);
  }

  /**
   * Validar código de verificación
   */
  async validateVerificationCode(request: ValidateCodeRequest) {
    return await httpClient.post<void>(API_CONFIG.ENDPOINTS.VALIDATE_CODE, request);
  }

  /**
   * Registrar usuario final después de validar código
   * No maneja tokens, solo registra al usuario
   */
  async registerUser(userData: RegisterRequest) {
    return await httpClient.post<User>(API_CONFIG.ENDPOINTS.REGISTER, userData);
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

  getAccessToken(): string | null {
    return localStorage.getItem('token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('rToken');
  }
}

// Exportar instancia singleton
export const authService = new AuthService();
export default authService;
