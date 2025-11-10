import React, { useState } from 'react';
import { Container, Stack } from '@mui/material';
import { AppContainer, TrackingResultCustomer } from 'ui';
// import { useNavigate } from 'react-router-dom';
import { Hero, findTrackingCode, TrackingCustomerModel } from 'ui';
import HomeActionButton from '../components/HomeActionButton';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ROUTES } from 'router/routes';
import { CircularProgress, Alert, Box } from '@mui/material';

const HomeScreen: React.FC = () => {
  // const navigate = useNavigate();
  const [tracking, setTracking] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingCustomerModel | null>(null);
  const [error, setError] = useState('');

  const handleTrack = async () => {
    if (!tracking.trim()) {
      setError('Por favor ingresa un código de rastreo válido.');
      setVisible(false);
      return;
    }

    setError('');
    setVisible(false);
    setLoading(true);

    try {
      const result = await findTrackingCode(tracking);
      console.log('Resultado del tracking:', result);

      setTrackingData(result);
      setVisible(true);
    } catch (error) {
      console.error('Error al obtener el tracking:', error);
      setError(
        'No se pudo obtener la información del rastreo. Verifica el código e inténtalo nuevamente.'
      );
      setVisible(false);
    } finally {
      setLoading(false);
    }
  };

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
      <AppContainer sx={{ mb: 6 }}>
        {/* Mostrar loading mientras carga */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Mostrar error si existe */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Mostrar resultado si se encontró */}
        {visible && trackingData && !loading && <TrackingResultCustomer info={trackingData} />}
      </AppContainer>
    </>
  );
};

export default HomeScreen;
