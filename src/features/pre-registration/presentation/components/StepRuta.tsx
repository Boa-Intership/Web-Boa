import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField, Typography, Paper } from '@mui/material';
import { LocationOn, AirplanemodeActive } from '@mui/icons-material';
import { Alert, Chip } from '@mui/material';
import { getAirports, Airport } from '../../data/services/airport.service';

const StepRuta = ({ data, setData, onNext, onBack }) => {
  const [localData, setLocalData] = useState(data || { origen: null, destino: null });
  const [showError, setShowError] = useState(false);
  const [airports, setAirports] = useState<Airport[]>([]);
  const findAirport = useCallback(
    (code: string) => airports.find((a) => a.codStation === code),
    [airports]
  ); // Memoizar búsqueda de aeropuerto por código - selección compacta

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const airportsdata = await getAirports();
        if (Array.isArray(airportsdata)) {
          setAirports(airportsdata);
        } else {
          setAirports([]);
        }
      } catch (error) {
        console.error('Error al obtener la lista de aeropuertos:', error);
        setAirports([]);
      }
    };
    fetchAirports();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const airportSelected = airports.find((a) => a.codStation === value);
    const newData = { ...localData, [name]: airportSelected || null };
    setLocalData(newData);
    if (newData.origen && newData.destino) {
      setShowError(false);
    }
  };

  const handleNextClick = () => {
    if (localData.origen && localData.destino) {
      setShowError(false);
      setData(localData);
      console.log(localData);
      onNext();
    } else {
      setShowError(true);
    }
  };

  // Selección compacta
  const renderAirportValue = useCallback(
    (value: unknown) => {
      const a = findAirport(String((value as Airport)?.codStation ?? value ?? ''));
      if (!a) return '';
      return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="primary.dark" fontWeight={700}>
            {a.city.cityName}
          </Typography>
          <Chip label={a.codStation} color="primary" size="small" sx={{ fontWeight: 700 }} />
        </Box>
      );
    },
    [findAirport]
  );

  // Para NO repetir origen ni destino una vez seleccionado
  const airportsOrigenOptions = useMemo(
    () => airports.filter((a) => a.codStation !== localData.destino?.codStation),
    [airports, localData.destino]
  );
  const airportsDestinoOptions = useMemo(
    () => airports.filter((a) => a.codStation !== localData.origen?.codStation),
    [airports, localData.origen]
  );

  // Lista de aeropuertos
  const renderAirportMenuItem = (a: Airport) => (
    <MenuItem key={a.id} value={a.codStation}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
          <AirplanemodeActive color="primary" />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" fontWeight="bold">
            {a.city.cityName?.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {'BOLIVIA'}
          </Typography>
        </Grid>
        <Grid item>
          <Box textAlign="right">
            <Typography variant="body1" fontWeight="bold">
              {a.codStation}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {a.nameStation}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </MenuItem>
  );

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4, bgcolor: '#FAFAFA' }}>
        <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
          <LocationOn color="primary" />
          <Typography variant="h5" color="primary">
            Información de la Ruta
          </Typography>
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
              value={localData.origen?.codStation || ''}
              onChange={handleChange}
              fullWidth
              required
              SelectProps={{ renderValue: renderAirportValue }} // Selección compacta
            >
              {airportsOrigenOptions.map(renderAirportMenuItem)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Destino"
              name="destino"
              value={localData.destino?.codStation || ''}
              onChange={handleChange}
              fullWidth
              required
              SelectProps={{ renderValue: renderAirportValue }} // Selección compacta
            >
              {airportsDestinoOptions.map(renderAirportMenuItem)}
            </TextField>
          </Grid>
        </Grid>
      </Paper>
      <Grid mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          Anterior
        </Button>
        <Button variant="contained" onClick={handleNextClick}>
          Siguiente
        </Button>
      </Grid>
    </Box>
  );
};

export default StepRuta;
