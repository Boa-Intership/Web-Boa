import { Box, Typography, List, ListItem } from '@mui/material';
import aboutImg from '../../../../assets/call.webp';
import { AppContainer, AppGrid, AppButton } from 'ui';
import { ROUTES } from '../../../../router/routes';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface CustomerServiceData {
  paragraph: string;
  Why: string[];
  Why2: string[];
}

const data: CustomerServiceData = {
  paragraph:
    'Nuestro equipo de atención al cliente está disponible para ayudarte con tus envíos, dudas y solicitudes. Contáctanos para recibir soporte personalizado y eficiente.',
  Why: [
    'Soporte por teléfono y correo',
    'Chat en vivo disponible',
    'Horarios extendidos de atención',
    'Personal capacitado',
  ],
  Why2: [
    'Respuestas rápidas',
    'Seguimiento de casos',
    'Atención en todo el país',
    'Soluciones personalizadas',
  ],
};

const CustomerServiceSection: FC = () => (
  <AppContainer>
    <AppGrid container spacing={4} alignItems="center" justifyContent="center">
      <AppGrid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          component="img"
          src={aboutImg}
          alt="Atención al Cliente"
          sx={{
            width: { xs: '105%', md: '115%' },
            borderRadius: 6,
          }}
        />
      </AppGrid>
      <AppGrid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Box sx={{ px: { xs: 0, md: 4 } }}>
          <Typography
            variant="h4"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Atención al Cliente
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {data.paragraph}
          </Typography>
          <AppGrid container spacing={2}>
            <AppGrid item xs={12} sm={6}>
              <List>
                {data.Why.map((d, i) => (
                  <ListItem key={`why-${i}`}>{d}</ListItem>
                ))}
              </List>
            </AppGrid>
            <AppGrid item xs={12} sm={6}>
              <List>
                {data.Why2.map((d, i) => (
                  <ListItem key={`why2-${i}`}>{d}</ListItem>
                ))}
              </List>
            </AppGrid>
          </AppGrid>
          <Box sx={{ mt: 4, textAlign: { xs: 'center', md: 'left' } }}>
            <AppButton
              size="large"
              color="primary"
              onClick={() => (window.location.href = ROUTES.CONTACTO)}
            >
              Contáctanos
            </AppButton>
          </Box>
        </Box>
      </AppGrid>
    </AppGrid>
  </AppContainer>
);

export default CustomerServiceSection;
