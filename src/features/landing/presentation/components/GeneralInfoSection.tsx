import React from 'react';
import { AppContainer, AppButton, AppGrid, AppTypography, AppStack } from 'ui';
import { Divider, Box, CircularProgress, Alert } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from 'react-router-dom';
import { useGeneralInfo } from '../hooks/useGeneralInfo';

// Mapeo simplificado de iconos
const getIconComponent = (tipo: string): React.ReactNode => {
  const iconProps = { sx: { fontSize: 48, mb: 2 } };

  switch (tipo) {
    case 'envio':
      return <LocalShippingIcon {...iconProps} sx={{ ...iconProps.sx, color: 'primary.main' }} />;
    case 'legal':
      return <GavelIcon {...iconProps} sx={{ ...iconProps.sx, color: 'secondary.main' }} />;
    case 'documentos':
      return <LocalShippingIcon {...iconProps} sx={{ ...iconProps.sx, color: 'success.main' }} />;
    case 'soporte':
      return <GavelIcon {...iconProps} sx={{ ...iconProps.sx, color: 'warning.main' }} />;
    default:
      return <LocalShippingIcon {...iconProps} sx={{ ...iconProps.sx, color: 'primary.main' }} />;
  }
};

const GeneralInfoSection: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useGeneralInfo();

  if (loading) {
    return (
      <AppContainer sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <CircularProgress />
      </AppContainer>
    );
  }

  if (error || !data) {
    return (
      <AppContainer sx={{ py: { xs: 6, md: 8 } }}>
        <Alert severity="error">
          Error cargando información general: {error || 'Datos no disponibles'}
        </Alert>
      </AppContainer>
    );
  }
  return (
    <AppContainer sx={{ py: { xs: 6, md: 8 } }}>
      <AppStack alignItems="center" mb={2} textAlign={'center'}>
        <AppTypography variant="h2Bold" color="primary">
          {data.titulo}
        </AppTypography>
        {data.subtitulo && (
          <AppTypography variant="baseMedium" color="text.secondary">
            {data.subtitulo}
          </AppTypography>
        )}
      </AppStack>
      <Divider sx={{ mb: 4 }} />
      <AppGrid container spacing={4} justifyContent="center">
        {data.elementos.map((elemento) => (
          <AppGrid item xs={12} sm={6} key={elemento.id}>
            <Box
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {getIconComponent(elemento.icono)}
              <AppTypography variant="h4Bold" mb={2}>
                {elemento.titulo}
              </AppTypography>
              <AppTypography variant="baseRegular" mb={2} color="text.secondary" textAlign="center">
                {elemento.descripcion}
              </AppTypography>
              <AppButton
                variant="contained"
                color="primary"
                size="large"
                onClick={() => navigate(elemento.enlace)}
                sx={{ mt: 'auto' }}
              >
                {elemento.texto_boton}
              </AppButton>
            </Box>
          </AppGrid>
        ))}
      </AppGrid>
    </AppContainer>
  );
};

export default GeneralInfoSection;
