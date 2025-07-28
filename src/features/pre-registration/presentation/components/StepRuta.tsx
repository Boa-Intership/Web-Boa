import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

const ciudades = [
  'Cochabamba', 'La Paz', 'Santa Cruz', 'Tarija', 'Oruro', 'Potosí', 'Sucre', 'Trinidad', 'Cobija', 'Buenos Aires'
];

const StepRuta = ({ data, setData, onNext, onBack }: any) => {
    const [localData, setLocalData] = useState(data || { origen: '', destino: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextClick = () => {
    if (localData.origen && localData.destino) {
      setData(localData);
      onNext();
    } else {
      alert('Por favor selecciona origen y destino.');
    }
  };

  return (
    <Box>
      <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
        <LocationOn color='primary' />
        <Typography variant="h5" color='primary'>Información de la Ruta</Typography>
      </Box>
      <Grid container spacing={2}>
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
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={onBack}>Anterior</Button>
          <Button variant="contained" onClick={handleNextClick}>Siguiente</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepRuta;