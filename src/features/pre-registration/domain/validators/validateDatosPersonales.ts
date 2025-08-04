export const validateField = (
  name: string,
  value: string
): string | null => {
  if (!value) return 'Campo obligatorio';

  switch (name) {
    case 'ci':
    case 'celular':
      if (!/^\d+$/.test(value)) return 'Solo se permiten números';
      break;
    case 'nombre':
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'Solo se permiten letras';
      break;
    case 'correo':
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) return 'Correo inválido';
      break;
  }

  return null; // No hay error
};
