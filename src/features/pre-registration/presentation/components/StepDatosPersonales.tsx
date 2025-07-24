import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper } from '@mui/material';

const StepDatosPersonales = ({ data, setData, onNext }: any) => {
  const [localData, setLocalData] = useState(data || {
    remitente: {},
    destinatario: {}
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    tipo: 'remitente' | 'destinatario'
    ) => {
    const { name, value } = e.target;
    setLocalData((prev: any) => ({
        ...prev,
        [tipo]: {
        ...prev[tipo],
        [name]: value
        }
    }));
    };

  const handleNextClick = () => {
    // Validación mínima
    const requiredFields = ['ci', 'nombre', 'celular'];
    const remitenteOk = requiredFields.every(f => localData.remitente?.[f]);
    const destinatarioOk = requiredFields.every(f => localData.destinatario?.[f]);

    if (!remitenteOk || !destinatarioOk) {
      alert('Por favor llena los campos obligatorios (*) de remitente y destinatario.');
      return;
    }

    setData(localData);
    onNext();
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {/* Panel Remitente */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="subtitle1" gutterBottom>Información del Remitente</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CI"
                  name="ci"
                  fullWidth
                  required
                  value={localData.remitente?.ci || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número Celular"
                  name="celular"
                  fullWidth
                  required
                  value={localData.remitente?.celular || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dirección"
                  name="direccion"
                  fullWidth
                  value={localData.remitente?.direccion || ''}
                  onChange={(e) => handleChange(e, 'remitente')}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Panel Destinatario */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="subtitle1" gutterBottom>Información del Destinatario</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CI"
                  name="ci"
                  fullWidth
                  required
                  value={localData.destinatario?.ci || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Correo Electrónico"
                  name="correo"
                  fullWidth
                  value={localData.destinatario?.correo || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dirección"
                  name="direccion"
                  fullWidth
                  value={localData.destinatario?.direccion || ''}
                  onChange={(e) => handleChange(e, 'destinatario')}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Botón siguiente */}
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={handleNextClick}>Siguiente</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepDatosPersonales;
