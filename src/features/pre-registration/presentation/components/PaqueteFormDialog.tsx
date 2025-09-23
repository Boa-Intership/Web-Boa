import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  validateDescripcion,
  validateEntero,
  validateDecimal,
} from '../../domain/validators/validateCarga';

interface Paquete {
  descripcion: string;
  peso: string;
  piezas: string;
  alto: string;
  ancho: string;
  largo: string;
}

interface Props {
  open: boolean;
  title: string;
  values: Paquete;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  submitLabel?: string;
}

const campos = ['descripcion', 'peso', 'piezas', 'alto', 'ancho', 'largo'];

const PaqueteFormDialog: React.FC<Props> = ({
  open,
  title,
  values,
  onClose,
  onChange,
  onSubmit,
  submitLabel = 'Guardar',
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'descripcion') error = validateDescripcion(value);
    if (['piezas'].includes(name)) error = validateEntero(value);
    if (['peso', 'alto', 'ancho', 'largo'].includes(name)) error = validateDecimal(value);

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    campo: string
  ) => {
    if (campo === 'descripcion') return; // libre
    if (campo === 'piezas') {
      if (!/[\d]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
        e.preventDefault();
      }
    }
    if (['peso', 'alto', 'ancho', 'largo'].includes(campo)) {
      if (!/[\d.]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
        e.preventDefault();
      }
    }
  };

  const handleSubmit = () => {
    // validar todos los campos
    const newErrors: Record<string, string> = {};
    campos.forEach((campo) => {
      newErrors[campo] = validateField(campo, values[campo as keyof Paquete]);
    });

    if (Object.values(newErrors).some((e) => e)) {
      setErrors(newErrors);
      return;
    }
    onSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {campos.map((campo) => (
            <Grid item xs={campo === 'descripcion' ? 12 : 6} key={campo}>
              <TextField
                name={campo}
                label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                value={values[campo as keyof Paquete]}
                onChange={onChange}
                onBlur={handleBlur}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, campo)}
                fullWidth
                required
                error={Boolean(errors[campo])}
                helperText={errors[campo] || ' '}
                type={
                  campo === 'descripcion' ? 'text' : 'number' // activa teclado numérico en móvil
                }
                inputProps={{
                  step: campo === 'piezas' ? 1 : 'any', // enteros o decimales
                  inputMode: campo === 'descripcion' ? 'text' : 'decimal', // teclado móvil
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {(campo === 'peso' && 'kg') ||
                        (['alto', 'ancho', 'largo'].includes(campo) && 'cm') ||
                        null}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaqueteFormDialog;
