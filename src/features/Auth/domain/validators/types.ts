// src/features/auth/domain/validators/types.ts
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  nombre: string;
  password: string;
  confirmPassword: string;
  identificacion: string;
  celular: string;
  direccion?: string;
  razonSocial: string;
  nit: string;
}
