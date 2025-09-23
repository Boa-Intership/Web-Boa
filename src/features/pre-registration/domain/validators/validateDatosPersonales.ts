export const validateField = (name: string, value: string, required = false): string | null => {
  if (required && !value) return 'Este campo es requerido';
  if (!value) return null; // si no es requerido y está vacío, pasa

  switch (name) {
    case 'ci': {
      if (!/^\d+$/.test(value)) return 'El CI solo debe contener números';
      if (value.length < 5) return 'El CI debe tener al menos 5 dígitos';
      if (value.length > 12) return 'El CI no puede superar los 12 dígitos';
      break;
    }
    case 'celular': {
      if (!/^\d+$/.test(value)) return 'El celular solo debe contener números';
      if (value.length < 8) return 'El celular debe tener al menos 8 dígitos';
      if (value.length > 15) return 'El celular no puede superar los 15 dígitos';
      break;
    }
    case 'nombre': {
      if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/.test(value)) return 'Solo se permiten letras, espacios';
      if (value.length < 2) return 'El nombre debe tener al menos 2 caractéres';
      if (value.length > 60) return 'El nombre no puede superar los 60 caractéres';
      break;
    }
    case 'correo': {
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!regex.test(value)) return 'Correo inválido';
      if (value.length > 254) return 'El correo no puede superar los 254 caracteres';
      break;
    }
  }

  return null; // No hay error
};
