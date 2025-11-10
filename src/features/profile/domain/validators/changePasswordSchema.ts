import { z } from 'zod';

// Schema de validación para el cambio de contraseña
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'La contraseña actual es obligatoria'),
    newPassword: z
      .string()
      .min(1, 'La nueva contraseña es obligatoria')
      .min(8, 'La nueva contraseña debe tener al menos 8 caracteres')
      .regex(/[a-z]/, 'La nueva contraseña debe contener al menos una minúscula')
      .regex(/[A-Z]/, 'La nueva contraseña debe contener al menos una mayúscula')
      .regex(/[0-9]/, 'La nueva contraseña debe contener al menos un número'),
    confirmNewPassword: z.string().min(1, 'Debes confirmar tu nueva contraseña'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmNewPassword'], // Error se asigna al campo de confirmación
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: 'La nueva contraseña debe ser diferente a la actual',
    path: ['newPassword'], // Error se asigna al campo de nueva contraseña
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
