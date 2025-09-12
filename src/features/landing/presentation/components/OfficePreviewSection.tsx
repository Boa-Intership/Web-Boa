import React from 'react';
import { AppContainer, AppGrid, AppStack, AppTypography, AppButton } from 'ui';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { AppTypography } from 'ui';

interface OfficePreview {
  ciudad: string;
  direccion: string;
  urlGoogleMaps: string;
}

const offices: OfficePreview[] = [
  {
    ciudad: 'Cochabamba',
    direccion: 'Av. Killman ex Terminal Aeropuerto',
    urlGoogleMaps: 'https://maps.app.goo.gl/eiNkgYLVVrbqGGnC8',
  },
  {
    ciudad: 'La Paz',
    direccion: 'Carga Aeropuerto Internacional El Alto',
    urlGoogleMaps: 'https://maps.app.goo.gl/2JNVq6WC8aFRwicL7',
  },
  {
    ciudad: 'Tarija Ciudad',
    direccion: 'Calle General Trigo, zona centro',
    urlGoogleMaps: 'https://maps.app.goo.gl/cSnMAV6Kh6ARomrN9',
  },
];

const OfficePreviewSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppContainer sx={{ py: { xs: 7, md: 8 } }}>
      <AppStack textAlign="center" mb={2}>
        <AppTypography variant="h4Bold" color="primary">
          Nuestras oficinas
        </AppTypography>
      </AppStack>
      <AppGrid container spacing={4} justifyContent="center">
        {offices.map((office, idx) => (
          <AppGrid item xs={12} sm={6} md={4} key={idx}>
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
                cursor: 'pointer',
              }}
              elevation={0}
              onClick={() => window.open(office.urlGoogleMaps, '_blank')}
              tabIndex={0}
              role="button"
              aria-label={`Ver ubicación de ${office.ciudad} en Google Maps`}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 28, mr: 1 }} />
                  <AppTypography variant="h4Regular" fontWeight={600}>
                    {office.ciudad}
                  </AppTypography>
                </Box>
                <AppTypography variant="h4Regular" color="text.secondary">
                  {office.direccion}
                </AppTypography>
              </CardContent>
            </Card>
          </AppGrid>
        ))}
      </AppGrid>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <AppButton
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/contacto')}
        >
          Ver todas las oficinas
        </AppButton>
      </Box>
    </AppContainer>
  );
};

export default OfficePreviewSection;
