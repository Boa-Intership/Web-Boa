import { z } from 'zod';
import { RegisterFormData } from './types';

const identificationSchema = z
  .string()
  .min(1, 'El número de identificación es obligatorio')
  .max(10, 'El número de identificación no puede tener más de 10 dígitos')
  .regex(/^[0-9]+$/, 'Solo se permiten números en la identificación');

const doctypeSchema = z.enum(['1', '5'], {
  message: 'El tipo de documento es obligatorio',
});

const complementoSchema = z
  .string()
  .optional()
  .refine(
    (value) => !value || /^[a-zA-Z0-9]{0,2}$/.test(value),
    'El complemento debe tener máximo 2 caracteres alfanuméricos'
  );

const phoneSchema = z
  .string()
  .min(1, 'El número de celular es obligatorio')
  .regex(/^[0-9]+$/, 'Solo se permiten números en el celular')
  .min(7, 'El celular debe tener al menos 7 dígitos')
  .max(15, 'El celular no puede tener más de 15 dígitos');

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, 'El correo electrónico es obligatorio')
      .email('El formato del correo electrónico no es válido'),
    name: z
      .string()
      .min(1, 'El nombre es obligatorio')
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(50, 'El nombre no puede tener más de 50 caracteres'),
    password: z
      .string()
      .min(1, 'La contraseña es obligatoria')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .regex(/[a-z]/, 'La contraseña debe contener al menos una minúscula')
      .regex(/[A-Z]/, 'La contraseña debe contener al menos una mayúscula')
      .regex(/[0-9]/, 'La contraseña debe contener al menos un número'),
    confirmPassword: z.string().min(1, 'Debes confirmar tu contraseña'),
    docType: doctypeSchema,
    billingDocType: doctypeSchema,
    nit: identificationSchema,
    nitComplemento: complementoSchema,
    number: phoneSchema,
    address: z.string().optional(),
    businessName: z
      .string()
      .min(1, 'La razón social es obligatoria')
      .min(2, 'La razón social debe tener al menos 2 caracteres')
      .max(100, 'La razón social no puede tener más de 100 caracteres'),
    billingNit: identificationSchema,
    billingNitComplemento: complementoSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const validateRegister = (data: RegisterFormData) => {
  return registerSchema.safeParse(data);
};
