import React from 'react';
import AppContainer from '../../../../shared/components/AppContainer';
import AppButton from '../../../../shared/components/AppButton';
import AppStack from '../../../../shared/components/AppStack';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppBox } from 'ui';

const FinalCTASection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBox
      sx={{
        py: { xs: 6, md: 8 },
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 320, md: 400 },
      }}
    >
      <AppContainer>
        <Typography variant="h4" fontWeight={700} mb={2} color="primary">
          ¿Listo para comenzar con BOA Cargo?
        </Typography>
        <Typography variant="h6" fontWeight={400} mb={5}>
          Registra tu envío o contáctanos ahora y descubre la mejor experiencia
          en carga aérea.
        </Typography>
        <AppStack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <AppButton
            size="large"
            color="secondary"
            sx={{ minWidth: 180, fontWeight: 600, boxShadow: 3 }}
            onClick={() => navigate('/pre-registro')}
          >
            Pre-registro
          </AppButton>
          <AppButton
            size="large"
            color="primary"
            variant="outlined"
            sx={{ minWidth: 180, fontWeight: 600, boxShadow: 3 }}
            onClick={() => navigate('/contacto')}
          >
            Contáctanos
          </AppButton>
        </AppStack>
      </AppContainer>
    </AppBox>
  );
};

export default FinalCTASection;
