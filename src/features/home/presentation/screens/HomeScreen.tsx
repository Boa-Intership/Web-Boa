import React, { useState } from 'react';
import { Container, Stack } from '@mui/material';
import { AppContainer, TrackingResultCustomer } from 'ui';
// import { useNavigate } from 'react-router-dom';
import { Hero } from 'ui';
import HomeActionButton from '../components/HomeActionButton';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/routes';
// import { ROUTES } from 'router/routes';

const HomeScreen: React.FC = () => {
  // const navigate = useNavigate();
  const [tracking, setTracking] = useState('');

  const handleTrack = () => {
    alert(`Buscando información para: ${tracking}`);
  };
  // const navigate = useNavigate();

  return (
    <>
      <Hero tracking={tracking} onTrackingChange={setTracking} onTrack={handleTrack} />
      {/* <AppContainer sx={{ mt: 4, mb: 4 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <HomeActionButton
            label="Información"
            icon={<InfoIcon fontSize="large" />}
            description="Consulta tipos de carga"
            onClick={() => navigate(ROUTES.TIPOS_CARGAS)}
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
            desk={() => navigate(ROUTES.PREREGISTRO)}
          />
        </Stack>
        ription="Completa el pre-registro." onCli
      </AppContainer> */}
      {/* <Container sx={{ mb: 6 }}>
        <CardInfoSection />
      </Container> */}
      <AppContainer sx={{ mb: 6 }}>
        <TrackingResultCustomer />
      </AppContainer>
    </>
  );
};

export default HomeScreen;
