import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';
import { Person } from '@mui/icons-material';
import { validateField } from '../../domain/validators/validateDatosPersonales';
import { AppTypography } from 'ui';

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

    const requiredFieldsRemitente = ['ci', 'celular', 'nombre', 'correo'];
    const requiredFieldsDestinatario = ['celular', 'nombre'];

    requiredFieldsRemitente.forEach((field) => {
      const value = localData.remitente?.[field] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors.remitente[field] = error;
        isValid = false;
      }
    });

    requiredFieldsDestinatario.forEach((field) => {
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
          <Paper elevation={2} sx={{ p: 2, borderRadius: 4, bgcolor: '#FAFAFA' }}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
              <Person color="primary" />
              <AppTypography variant="h4Regular" color="primary">
                Información del Remitente
              </AppTypography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {renderTextField('remitente', 'ci', 'CI', true)}
                {/** {renderTextField('remitente', 'celular', 'Número Celular', true)} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                {renderTextField('remitente', 'celular', 'Número Celular', true)}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('remitente', 'nombre', 'Nombre', true)}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('remitente', 'correo', 'Correo Electrónico', true)}
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
              <AppTypography variant="h4Regular" color="primary">
                Información del Destinatario
              </AppTypography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {renderTextField('destinatario', 'ci', 'CI')}
              </Grid>
              <Grid item xs={12} sm={6}>
                {renderTextField('destinatario', 'celular', 'Número Celular', true)}
              </Grid>
              <Grid item xs={12}>
                {renderTextField('destinatario', 'nombre', 'Nombre', true)}
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
