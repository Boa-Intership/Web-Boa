import React from 'react';
import AppBox from '../../../../shared/components/AppBox';
import AppContainer from '../../../../shared/components/AppContainer';
import AppGrid from '../../../../shared/components/AppGrid';
import AppButton from '../../../../shared/components/AppButton';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

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
    urlGoogleMaps: 'https://maps.app.goo.gl/eiNkgYLVVrbqGGnC8',
  },
  {
    ciudad: 'Tarija',
    direccion: 'Calle General Trigo, zona centro',
    urlGoogleMaps: 'https://maps.app.goo.gl/eiNkgYLVVrbqGGnC8',
  },
];

const OfficePreviewSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBox sx={{ py: { xs: 7, md: 8 }, background: 'background.paper' }}>
      <AppContainer>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          textAlign="center"
          color="primary"
        >
          Nuestras oficinas
        </Typography>
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
                    <LocationOnIcon
                      sx={{ color: 'primary.main', fontSize: 28, mr: 1 }}
                    />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {office.ciudad}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {office.direccion}
                  </Typography>
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
    </AppBox>
  );
};

export default OfficePreviewSection;
