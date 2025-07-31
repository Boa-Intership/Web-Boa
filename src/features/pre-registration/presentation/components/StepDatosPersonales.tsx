import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import { validateField } from '../../domain/validators/validateDatosPersonales';

const StepDatosPersonales = ({ data, setData, onNext }: any) => {
  const [localData, setLocalData] = useState(data || {
    remitente: {},
    destinatario: {}
  });

  const [errors, setErrors] = useState<any>({});
  /*
  const [errors, setErrors] = useState({
    remitente: {},
    destinatario: {}
  });
  */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    tipo: 'remitente' | 'destinatario'
  ) => {
    const { name, value } = e.target;
    // Validar el campo individualmente
    const error = validateField(name, value);
    setLocalData((prev: any) => ({
        ...prev,
        [tipo]: {
        ...prev[tipo],
        [name]: value
        }
    }));

    setErrors((prev: any) => ({
      ...prev,
      [tipo]: {
        ...prev[tipo],
        [name]: error
      }
    }));
  };

  const handleNextClick = () => {
    const newErrors: any = { remitente: {}, destinatario: {} };
    let isValid = true;

    const requiredFieldsRemitente = ['ci', 'celular', 'nombre', 'correo'];
    const requiredFieldsDestinatario = ['celular', 'nombre'];

    requiredFieldsRemitente.forEach(field => {
      const value = localData.remitente?.[field] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors.remitente[field] = error;
        isValid = false;
      }
    });

    requiredFieldsDestinatario.forEach(field => {
      const value = localData.destinatario?.[field] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors.destinatario[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setData(localData);
      onNext();
    }
  };

  const renderTextField = (
    tipo: 'remitente' | 'destinatario',
    name: string,
    label: string,
    required = false
  ) => (
    <TextField
      label={label}
      name={name}
      fullWidth
      required={required}
      value={localData[tipo]?.[name] || ''}
      onChange={(e) => handleChange(e, tipo)}
      error={!!errors[tipo]?.[name]}
      helperText={errors[tipo]?.[name] || ''}
    />
  );

  return (
    <Box>
      <Grid container spacing={4}>
        {/* Panel Remitente */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
              <Person color='primary' />
              <Typography variant="h5" color='primary'>Información del Remitente</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CI"
                  name="ci"
                  fullWidth
                  required
                  value={localData.remitente?.ci || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                  error={!!errors.remitente?.ci}
                  helperText={errors.remitente?.ci}
                />
                {/** {renderTextField('remitente', 'celular', 'Número Celular', true)} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número Celular"
                  name="celular"
                  fullWidth
                  required
                  value={localData.remitente?.celular || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                  error={!!errors.remitente?.celular}
                  helperText={errors.remitente?.celular}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  name="nombre"
                  fullWidth
                  required
                  value={localData.remitente?.nombre || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                  error={!!errors.remitente?.nombre}
                  helperText={errors.remitente?.nombre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Correo Electrónico"
                  name="correo"
                  fullWidth
                  required
                  value={localData.remitente?.correo || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                  error={!!errors.remitente?.correo}
                  helperText={errors.remitente?.correo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dirección"
                  name="direccion"
                  fullWidth
                  value={localData.remitente?.direccion || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                  error={!!errors.remitente?.direccion}
                  helperText={errors.remitente?.direccion}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Panel Destinatario */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
              <Person color='primary' />
              <Typography variant="h5" color='primary'>Información del Destinatario</Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CI"
                  name="ci"
                  fullWidth
                  value={localData.destinatario?.ci || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                  error={!!errors.destinatario?.ci}
                  helperText={errors.destinatario?.ci}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número Celular"
                  name="celular"
                  fullWidth
                  required
                  value={localData.destinatario?.celular || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                  error={!!errors.destinatario?.celular}
                  helperText={errors.destinatario?.celular}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nombre"
                  name="nombre"
                  fullWidth
                  required
                  value={localData.destinatario?.nombre || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                  error={!!errors.destinatario?.nombre}
                  helperText={errors.destinatario?.nombre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Correo Electrónico"
                  name="correo"
                  fullWidth
                  value={localData.destinatario?.correo || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                  error={!!errors.destinatario?.correo}
                  helperText={errors.destinatario?.correo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dirección"
                  name="direccion"
                  fullWidth
                  value={localData.destinatario?.direccion || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                  error={!!errors.destinatario?.direccion}
                  helperText={errors.destinatario?.direccion}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Botón siguiente */}
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleNextClick}>Siguiente</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepDatosPersonales;
