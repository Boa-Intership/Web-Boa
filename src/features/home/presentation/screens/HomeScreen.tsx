import React, { useState } from 'react';
import { Box, Stack, TextField, Button as MuiButton, InputAdornment, Typography, Container, Alert } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeActionButton from '../components/HomeActionButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';
import { homeApi } from '../../data/homeApi';
import Hero from '../components/Hero';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tracking, setTracking] = useState('');
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const handleTrack = () => {
    // Aquí iría la lógica de rastreo
    alert(`Buscando información para: ${tracking}`);
  };

  const testApiConnection = async () => {
    try {
      const result = await homeApi.testApiConnection();
      if (result.success) {
        setApiMessage(' API conectada correctamente');
        console.log('API Response:', result.data);
      } else {
        setApiMessage(' Error al conectar con la API');
      }
    } catch (error) {
      setApiMessage(' Error al conectar con la API');
      console.error('API Error:', error);
    }
  };

  return (
  <>
    <Hero 
        tracking={tracking}
        onTrackingChange={setTracking}
        onTrack={handleTrack}
    />
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>

      {/* Botón para probar API */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <MuiButton 
          variant="outlined" 
          color="secondary" 
          onClick={testApiConnection}
          sx={{ mb: 2 }}
        >
          Probar Conexión API
        </MuiButton>
        {apiMessage && (
          <Alert severity={apiMessage.includes('conectada') ? 'success' : 'error'} sx={{ mt: 2 }}>
            {apiMessage}
          </Alert>
        )}
      </Box>

      {/* Botones de acción */}
      <Container maxWidth="md" disableGutters>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center" justifyContent="center">
          <HomeActionButton
            label="Información"
            icon={<InfoIcon fontSize="large" color="primary" />}
            description="Consulta tipos de carga"
            onClick={() => navigate(ROUTES.INFORMACION)}
          />
          <HomeActionButton
            label="Cotizar envío"
            icon={<AttachMoneyIcon fontSize="large" color="primary" />}
            description="Cotización rápida para tu envío."
            onClick={() => navigate(ROUTES.COTIZAR)}
          />
          <HomeActionButton
            label="Pre-registro"
            icon={<AssignmentIcon fontSize="large" color="primary" />}
            description="Completa el pre-registro."
            onClick={() => navigate(ROUTES.PREREGISTRO)}
          />
        </Stack>
      </Container>
    </Container>
  </>
  );
};

export default HomeScreen; 