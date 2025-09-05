import React, { useState } from 'react';
import { Container, Stack } from '@mui/material';
import { AppContainer } from 'ui';
// import { useNavigate } from 'react-router-dom';
import { Hero, CardInfoSection } from 'ui';
// import { ROUTES } from 'router/routes';

const HomeScreen: React.FC = () => {
  // const navigate = useNavigate();
  const [tracking, setTracking] = useState('');

  const handleTrack = () => {
    alert(`Buscando información para: ${tracking}`);
  };

  return (
    <>
      <Hero tracking={tracking} onTrackingChange={setTracking} onTrack={handleTrack} />
      <AppContainer sx={{ mt: 4, mb: 4 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          {/* <HomeActionButton
            label="Información"
            icon={<InfoIcon fontSize="large" />}
            description="Consulta tipos de carga"
            onClick={() =>
              navigate(ROUTES.TIPOS_CARGAS.replace(':tipo?', 'cargaGeneral'))
            }
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
          /> */}
        </Stack>
      </AppContainer>
      <Container sx={{ mb: 6 }}>
        <CardInfoSection />
      </Container>
    </>
  );
};

export default HomeScreen;
