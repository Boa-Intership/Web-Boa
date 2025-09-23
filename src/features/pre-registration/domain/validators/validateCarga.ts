export const validateDescripcion = (value: string) => {
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
};
