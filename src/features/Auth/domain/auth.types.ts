// Tipos para autenticación
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  ci: number;
  complement?: string;
  phone: string;
  address?: string;
  billingData?: {
    businessName: string;
    docType: number;
    nit: number;
  };
}

export interface SendCodeRequest {
  email: string;
  ci: number;
  complement?: string;
}

export interface ValidateCodeRequest {
  email: string;
  code: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}
