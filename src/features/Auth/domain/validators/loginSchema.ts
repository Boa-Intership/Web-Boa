import { z } from 'zod';
import { LoginFormData } from './types';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .email('El formato del correo electrónico no es válido'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
  captcha: z.string().min(1, 'Por favor resuelve el captcha'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const validateLogin = (data: LoginFormData) => {
  return loginSchema.safeParse(data);
};
