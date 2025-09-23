import React from 'react';
import { Box, Typography, List, ListItem, Stack } from '@mui/material';
import aboutImg from 'assets/call.webp';
import { AppBox, AppContainer, AppGrid, AppButton, AppTypography } from 'ui';
import { ROUTES } from 'router/routes';
import { useNavigate } from 'react-router-dom';

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

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBox>
      <AppContainer>
        <AppGrid container spacing={4} alignItems="center" justifyContent="center">
          <AppGrid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
          <AppGrid item xs={10} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <AppBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1, // espacio entre elementos
                alignItems: 'flex-start',
              }}
            >
              <Stack sx={{ gap: 2, mb: 2 }}>
                <AppTypography variant="h2Bold" color="primary">
                  Atención al Cliente
                </AppTypography>
                <AppTypography variant="baseRegular" color="text.secondary">
                  {data.paragraph}
                </AppTypography>
              </Stack>
              <AppGrid container>
                <AppGrid>
                  <List>
                    {data.Why.map((d, i) => (
                      <ListItem key={`why-${i}`}>{d}</ListItem>
                    ))}
                  </List>
                </AppGrid>
                <AppGrid>
                  <List>
                    {data.Why2.map((d, i) => (
                      <ListItem key={`why2-${i}`}>{d}</ListItem>
                    ))}
                  </List>
                </AppGrid>
              </AppGrid>
              <AppButton size="large" color="primary" onClick={() => navigate(ROUTES.CONTACTO)}>
                Contáctanos
              </AppButton>
            </AppBox>
          </AppGrid>
        </AppGrid>
      </AppContainer>
    </AppBox>
  );
};

export default ServiceSection;
