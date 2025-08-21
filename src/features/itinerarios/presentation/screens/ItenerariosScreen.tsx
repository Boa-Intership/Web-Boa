import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ItinerariosScreen: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Itinerarios
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Consulta y gestiona tus itinerarios de carga.
      </Typography>
    </Container>
  );
};

export default ItinerariosScreen;
