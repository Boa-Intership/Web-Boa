import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField, Typography, Paper } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Alert, AlertTitle } from '@mui/material';

const ciudades = [
  'Cochabamba', 'La Paz', 'Santa Cruz', 'Tarija', 'Oruro', 'Potosí', 'Sucre', 'Trinidad', 'Cobija', 'Buenos Aires'
];

const StepRuta = ({ data, setData, onNext, onBack }: any) => {
  const [localData, setLocalData] = useState(data || { origen: '', destino: '' });
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newData = {
      ...localData,
      [name]: value
    };
    setLocalData(newData);
    if (newData.origen && newData.destino) {
      setShowError(false);
    }
  };

  const handleNextClick = () => {
    if (localData.origen && localData.destino) {
      setShowError(false);
      setData(localData);
      onNext();
    } else {
      setShowError(true);
    }
  };

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4, bgcolor: '#FAFAFA' }}>
        <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
          <LocationOn color='primary' />
          <Typography variant="h5" color='primary'>Información de la Ruta</Typography>
        </Box>
        {/* Alert */}
        {showError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Por favor, selecciona tanto el <strong>origen</strong> como el <strong>destino</strong>.
          </Alert>
        )}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Origen"
              name="origen"
              value={localData.origen}
              onChange={handleChange}
              fullWidth
              required
            >
              {ciudades.map((ciudad) => (
                <MenuItem key={ciudad} value={ciudad}>
                  {ciudad}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Destino"
              name="destino"
              value={localData.destino}
              onChange={handleChange}
              fullWidth
              required
            >
              {ciudades.map((ciudad) => (
                <MenuItem key={ciudad} value={ciudad}>
                  {ciudad}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>
      <Grid mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>Anterior</Button>
        <Button variant="contained" onClick={handleNextClick}>Siguiente</Button>
      </Grid>
    </Box>
  );
}

export default StepRuta;