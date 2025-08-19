import React, { useState } from 'react';
import { Box, Stack, TextField, Button as MuiButton, InputAdornment, Typography, Container, Alert } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeActionButton from '../components/HomeActionButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';
import Hero from '../components/Hero';
import CardInfoSection from '../../../Information/presentation/components/CardInfoSection';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tracking, setTracking] = useState('');

  const handleTrack = () => {
    alert(`Buscando información para: ${tracking}`);
  };

  return (
  <>
    <Hero 
        tracking={tracking}
        onTrackingChange={setTracking}
        onTrack={handleTrack}
    />
    <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
      <Container maxWidth="xl" disableGutters>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center" justifyContent="center">
          <HomeActionButton
            label="Información"
            icon={<InfoIcon fontSize="large" />}
            description="Consulta tipos de carga"
            onClick={() => navigate(ROUTES.INFORMACION)}
          />
          <HomeActionButton
            label="Cotizar envío"
            icon={<AttachMoneyIcon fontSize="large" />}
            description="Cotización rápida para tu envío."
            onClick={() => navigate(ROUTES.COTIZAR)}
          />
          <HomeActionButton
            label="Pre-registro"
            icon={<AssignmentIcon fontSize="large" />}
            description="Completa el pre-registro."
            onClick={() => navigate(ROUTES.PREREGISTRO)}
          />
        </Stack>
      </Container>
      <CardInfoSection />
    </Container>
  </>
  );
};

export default HomeScreen; 