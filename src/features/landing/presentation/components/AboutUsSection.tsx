import React from 'react';
import { AppBox, AppButton, AppContainer, AppStack, AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { Stack } from '@mui/material';

const AboutUsSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }}>
      <AppContainer>
        <AppStack spacing={3} mb={5} sx={{ maxWidth: 700, mx: 'auto' }}>
          <AppTypography variant="h2Bold" color="primary" textAlign="center">
            Perfil Corporativo
          </AppTypography>
          <AppTypography variant="baseMedium" textAlign="center">
            Conoce nuestra historia, misión, visión y valores que guían a Boliviana de Aviación como
            empresa estratégica del transporte aéreo nacional e internacional.
          </AppTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <AppButton onClick={() => navigate(ROUTES.CORPORATE_PROFILE)} color="primary">
              Leer más
            </AppButton>
          </Stack>
        </AppStack>
      </AppContainer>
    </AppBox>
  );
};

export default AboutUsSection;
