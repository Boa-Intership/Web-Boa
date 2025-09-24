import React, { FC } from 'react';
import { AppContainer, AppGrid, AppStack, AppTypography, AppButton } from 'ui';
import { Card, CardContent, Box, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
import { useOfficePreview } from '../hooks/useOfficePreview';

const OfficePreviewSection: FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useOfficePreview();

  const handleButtonClick = () => {
    if (data?.enlace_boton) {
      navigate(data.enlace_boton);
    }
  };

  if (loading) {
    return (
      <AppContainer sx={{ py: { xs: 7, md: 8 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppContainer>
    );
  }

  if (error || !data) {
    return (
      <AppContainer sx={{ py: { xs: 7, md: 8 }, textAlign: 'center' }}>
        <AppTypography variant="baseRegular" color="error">
          Error cargando la información de oficinas
        </AppTypography>
      </AppContainer>
    );
  }
  return (
    <AppContainer sx={{ py: { xs: 7, md: 8 } }}>
      <AppStack textAlign="center" mb={2}>
        <AppTypography variant="h2Bold" color="primary">
          {data.titulo}
        </AppTypography>
        {data.descripcion && (
          <AppTypography
            variant="baseRegular"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 800, mx: 'auto' }}
          >
            {data.descripcion}
          </AppTypography>
        )}
      </AppStack>
      <AppGrid container spacing={4} justifyContent="center">
        {data.oficinas.map((office) => (
          <AppGrid item xs={12} sm={6} md={4} key={office.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 2,
                border: '1px solid',
                borderColor: 'grey.300',
                transition: 'box-shadow 0.2s, border-color 0.2s',
                '&:hover': {
                  boxShadow: 6,
                  borderColor: 'primary.main',
                },
                background: 'background.default',
                cursor: office.imagen_url ? 'pointer' : 'default',
                height: '100%',
              }}
              elevation={0}
            >
              {office.imagen_url && (
                <Box
                  component="img"
                  src={office.imagen_url}
                  alt={office.nombre}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                />
              )}
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 28, mr: 1 }} />
                  <AppTypography variant="h4Bold" fontWeight={600}>
                    {office.nombre}
                  </AppTypography>
                </Box>
                <AppTypography variant="baseRegular" color="text.secondary" sx={{ mb: 2 }}>
                  {office.direccion}
                </AppTypography>
                {office.telefono && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 20, mr: 1 }} />
                    <AppTypography variant="baseRegular" color="text.secondary">
                      {office.telefono}
                    </AppTypography>
                  </Box>
                )}
                {office.horarios && (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 20, mr: 1 }} />
                    <AppTypography variant="baseRegular" color="text.secondary">
                      {office.horarios}
                    </AppTypography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </AppGrid>
        ))}
      </AppGrid>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <AppButton variant="contained" color="primary" size="large" onClick={handleButtonClick}>
          {data.texto_boton}
        </AppButton>
      </Box>
    </AppContainer>
  );
};

export default OfficePreviewSection;
