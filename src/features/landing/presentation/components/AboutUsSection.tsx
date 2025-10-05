import React from 'react';
import { AppBox, AppButton, AppContainer, AppStack, AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { Stack } from '@mui/material';
import { useCorporateProfile } from '../hooks/useCorporateProfile';

const AboutUsSection: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useCorporateProfile();
  return (
    <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }}>
      <AppContainer>
        <AppStack spacing={3} mb={5} sx={{ maxWidth: 700, mx: 'auto' }}>
          <AppTypography variant="h2Bold" color="primary" textAlign="center">
            {data.titulo}
          </AppTypography>
          <AppTypography variant="baseMedium" textAlign="center">
            {data.descripcion}
          </AppTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <AppButton onClick={() => navigate(ROUTES.CORPORATE_PROFILE)} color="primary">
              {data.textoBoton}
            </AppButton>
          </Stack>
        </AppStack>
      </AppContainer>
    </AppBox>
  );
};

export default AboutUsSection;
