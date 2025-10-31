import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '@/shared/components/AppContainer';
import { Typography } from '@mui/material';
import FlightList from '@/features/packageTracking/presentation/components/FlightList';
import { useFlights } from '@/features/packageTracking/presentation/hooks/useFlights';
import { ROUTES } from '@/router/routes';

const FlightsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { data = [], isLoading } = useFlights();

  const onSelect = (flight: any) => {
    navigate(`${ROUTES.TRACKING}/${encodeURIComponent(flight.id)}`);
  };

  return (
    <AppContainer>
      <Typography variant="h4" color="primary.main" mb={2}>
        Vuelos
      </Typography>
      {isLoading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <FlightList flights={data} onSelect={onSelect} />
      )}
    </AppContainer>
  );
};

export default FlightsScreen;
