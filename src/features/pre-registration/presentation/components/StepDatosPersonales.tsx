import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import { validateField } from '../../domain/validators/validateDatosPersonales';

const StepDatosPersonales = ({ data, setData, onNext }: any) => {
  const [localData, setLocalData] = useState(
    data || {
      remitente: {},
      destinatario: {},
    }
  );

  const [errors, setErrors] = useState<any>({});
  /*
  const [errors, setErrors] = useState({
    remitente: {},
    destinatario: {}
  });
  */

  // Cambiar desde aqui si un campo será requerido o no
  const fieldConfig: Record<string, Record<string, boolean>> = {
    remitente: {
      ci: true,
      celular: true,
      nombre: true,
      correo: true,
      direccion: false,
    },
    destinatario: {
      ci: false,
      celular: true,
      nombre: true,
      correo: false,
      direccion: false,
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    tipo: 'remitente' | 'destinatario'
  ) => {
    let { name, value } = e.target;
    if (name === 'ci' || name === 'celular') {
      value = value.replace(/\D/g, ''); // elimina todo lo que NO sea digito
    }
    // Validar el campo individualmente
    const error = validateField(name, value);
    setLocalData((prev: any) => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        [name]: value,
      },
    }));

    setErrors((prev: any) => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        [name]: error,
      },
    }));
  };

  const handleNextClick = () => {
    const newErrors: any = { remitente: {}, destinatario: {} };
    let isValid = true;

    (Object.keys(fieldConfig) as ('remitente' | 'destinatario')[]).forEach((tipo) => {
      Object.entries(fieldConfig[tipo]).forEach(([field, required]) => {
        const value = localData[tipo]?.[field] || '';
        const error = validateField(field, value, required);
        if (error) {
          newErrors[tipo][field] = error;
          isValid = false;
        }
      });
    });

    setErrors(newErrors);

    if (isValid) {
      setData(localData);
      onNext();
    }
  };

  const renderTextField = (tipo: 'remitente' | 'destinatario', name: string, label: string) => {
    const required = fieldConfig[tipo][name];
    const isNumericField = name === 'ci' || name === 'celular';
    return (
      <TextField
        label={label}
        name={name}
        fullWidth
        required={required}
        value={localData[tipo]?.[name] || ''}
        onChange={(e) => handleChange(e, tipo)}
        error={!!errors[tipo]?.[name]}
        helperText={errors[tipo]?.[name] || ''}
        inputProps={
          isNumericField
            ? { inputMode: 'numeric' } // para el teclado numerico en dispositivos moviles
            : undefined
        }
      />
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {/* Panel Remitente */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 4, bgcolor: '#FAFAFA' }}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
              <Person color="primary" />
              <Typography variant="h5" color="primary">
                Información del Remitente
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {renderTextField('remitente', 'ci', 'CI')}
              </Grid>
              <Grid item xs={12} sm={6}>
                {renderTextField('remitente', 'celular', 'Número Celular')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('remitente', 'nombre', 'Nombre')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('remitente', 'correo', 'Correo Electrónico')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('remitente', 'direccion', 'Dirección')}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Panel Destinatario */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 4, bgcolor: '#FAFAFA' }}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
              <Person color="primary" />
              <Typography variant="h5" color="primary">
                Información del Destinatario
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {renderTextField('destinatario', 'ci', 'CI')}
              </Grid>
              <Grid item xs={12} sm={6}>
                {renderTextField('destinatario', 'celular', 'Número Celular')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('destinatario', 'nombre', 'Nombre')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('destinatario', 'correo', 'Correo Electrónico')}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('destinatario', 'direccion', 'Dirección')}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Botón siguiente */}
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleNextClick}>
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepDatosPersonales;
