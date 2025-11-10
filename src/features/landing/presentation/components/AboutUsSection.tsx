import React from 'react';
import { AppBox, AppButton, AppContainer, AppStack, AppTypography } from 'ui';
import { Alert, CircularProgress, Grid, Box } from '@mui/material';
import { useCorporateProfile } from '../hooks/useCorporateProfile';

const AboutUsSection: React.FC = () => {
  const { data, loading, error } = useCorporateProfile();

  if (loading) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppBox>
    );
  }

  if (error) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 } }}>
        <AppContainer>
          <Alert severity="error">Error cargando contenido: {error}</Alert>
        </AppContainer>
      </AppBox>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }}>
      <Grid container spacing={2} sx={{ width: '90%', margin: 'auto' }}>
        <Grid
          item
          xs={12}
          sm={data.imagenUrl ? 6 : 12}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          gap={3}
          sx={{
            alignItems: data.imagenUrl ? 'flex-start' : 'center',
            textAlign: data.imagenUrl ? 'left' : 'center',
          }}
        >
          <AppTypography variant="h2Bold" color="primary">
            {data.titulo}
          </AppTypography>
          <AppTypography variant="baseMedium">{data.descripcion}</AppTypography>
          <AppButton
            onClick={() => window.open(data.enlaceBoton, '_blank', 'noopener,noreferrer')}
            color="primary"
            sx={{ width: 'fit-content' }}
          >
            {data.textoBoton}
          </AppButton>
        </Grid>
        {data.imagenUrl && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ width: '100%', justifyItems: 'center', position: 'relative', mb: 3 }}>
              <Box
                component="img"
                src={data.imagenUrl}
                alt={data.titulo}
                sx={{
                  width: '100%',
                  height: '22rem',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 2,
                }}
                loading="lazy"
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </AppBox>
  );
};

export default AboutUsSection;
