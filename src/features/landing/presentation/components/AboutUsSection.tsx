import React from 'react';
import { Grid, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublicIcon from '@mui/icons-material/Public';
import { AppBox, AppContainer, AppStack, AppTypography } from 'ui';

const values = [
  {
    title: 'Confianza',
    description:
      'Más de 10 años brindando soluciones de carga aérea con transparencia y compromiso.',
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
  },
  {
    title: 'Seguridad',
    description:
      'Tus envíos están protegidos y gestionados bajo estrictos estándares de seguridad.',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />,
  },
  {
    title: 'Cobertura Nacional',
    description: 'Llegamos a todo el país con oficinas y rutas en las principales ciudades.',
    icon: <PublicIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />,
  },
];

const AboutUsSection: React.FC = () => (
  <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }} textAlign={'center'}>
    <AppContainer>
      <AppStack spacing={2} mb={4}>
        <AppTypography variant="h4Bold" mb={3} color="primary">
          Sobre nosotros
        </AppTypography>
        <AppTypography variant="baseRegular" color="text.secondary" textAlign="justify">
          BOA Cargo es una empresa líder en transporte aéreo de carga, fundada para conectar
          personas y negocios en todo Bolivia. Nuestra misión es ofrecer servicios confiables,
          rápidos y seguros, adaptándonos a las necesidades de cada cliente.
        </AppTypography>
        <AppTypography variant="baseRegular" color="text.secondary" textAlign="justify">
          Con una visión de crecimiento y excelencia, trabajamos cada día para expandir nuestra
          cobertura y mejorar la experiencia de envío, garantizando la tranquilidad y satisfacción
          de quienes confían en nosotros.
        </AppTypography>
      </AppStack>
      <Grid container spacing={4} justifyContent="center">
        {values.map((value) => (
          <Grid item xs={12} sm={4} key={value.title}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: '0 4px 16px rgba(46,92,154,0.10)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                background: 'background.default',
              }}
            >
              {value.icon}
              <AppTypography variant="baseBold" fontWeight={600} textAlign="center" mb={1}>
                {value.title}
              </AppTypography>
              <AppTypography variant="smallMedium" color="text.secondary" textAlign="center">
                {value.description}
              </AppTypography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  </AppBox>
);

export default AboutUsSection;
