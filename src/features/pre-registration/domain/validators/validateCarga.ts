/*export const validateDescripcion = (value: string) => {
  if (!value.trim()) return 'La descripción es obligatoria';
  return '';
};

export const validateEntero = (value: string) => {
  if (!value.trim()) return 'Este campo es requerido';
  if (!/^\d+$/.test(value)) return 'Solo números enteros';
  return '';
};

export const validateDecimal = (value: string) => {
  if (!value.trim()) return 'Este campo es requerido';
  if (!/^\d+(\.\d+)?$/.test(value)) return 'Solo números decimales válidos';
  return '';
};*/

// src/features/pre-registration/domain/validators/validateCarga.ts

export interface ValidationResult {
  isValid: boolean;
  error: string;
}

export const validateDescripcion = (value: string): ValidationResult => {
  if (!value.trim()) return { isValid: false, error: 'Este campo es requerido' };
  return { isValid: true, error: '' };
};

export const validateEntero = (value: string): ValidationResult => {
  if (!value.trim()) return { isValid: false, error: 'Este campo es requerido' };
  if (!/^\d+$/.test(value)) return { isValid: false, error: 'Solo se permiten números enteros' };
  return { isValid: true, error: '' };
};

export const validateDecimal = (value: string): ValidationResult => {
  if (!value.trim()) return { isValid: false, error: 'Este campo es requerido' };
  if (!/^\d+(\.\d+)?$/.test(value))
    return { isValid: false, error: 'Solo se permiten números decimales' };
  return { isValid: true, error: '' };
};
