import React from 'react';
import { AppBox, AppContainer, AppStack, AppTypography } from 'ui';
import { Grid, Paper } from '@mui/material';

const principles = [
  'Equidad: tratamiento igualitario y justo a todos los clientes internos y externos.',
  'Universalidad: acceso democrático al transporte aéreo.',
];

const values = [
  'Honestidad',
  'Transparencia',
  'Vocación de Servicio',
  'Eficiencia y Productividad',
  'Compromiso',
  'Gerenciamiento Participativo',
  'Cooperación y Trabajo en Equipo',
  'Proactividad',
];

const CorporateProfileScreen: React.FC = () => (
  <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }}>
    <AppContainer>
      <AppStack spacing={3} mb={5}>
        <AppTypography variant="h2Bold" color="primary" textAlign="center">
          Perfil Corporativo
        </AppTypography>
        <AppTypography variant="baseMedium" color="text.secondary" textAlign="justify">
          El 24 de octubre de 2007, mediante el Decreto Supremo Nº 29318, se crea la Empresa Pública
          Nacional Estratégica Boliviana de Aviación – BoA, como persona jurídica de derecho
          público, con duración indefinida, patrimonio propio y autonomía de gestión administrativa,
          financiera, legal y técnica, bajo tuición del Ministerio de Obras Públicas, Servicios y
          Vivienda.
        </AppTypography>
        <AppTypography variant="baseMedium" color="text.secondary" textAlign="justify">
          El 30 de marzo de 2009, BoA inicia sus operaciones en el eje troncal del país, expandiendo
          posteriormente su cobertura nacional e internacional hacia destinos en Argentina, Brasil,
          España y Estados Unidos, consolidándose como un actor estratégico del transporte aéreo.
        </AppTypography>

        {/* Visión */}
        <AppTypography variant="h3Bold" color="primary">
          Visión
        </AppTypography>
        <AppTypography variant="baseMedium" color="text.secondary" textAlign="justify">
          “Brindar servicio integral de transporte aerocomercial de alcance nacional e internacional
          con calidad, seguridad y gestión empresarial transparente”.
        </AppTypography>

        {/* Misión */}
        <AppTypography variant="h3Bold" color="primary">
          Misión
        </AppTypography>
        <AppTypography variant="baseMedium" color="text.secondary" textAlign="justify">
          “Boliviana de Aviación contribuirá significativamente a la consecución de los objetivos
          estratégicos del país y al bienestar de los bolivianos, a través de servicios aeronáuticos
          de calidad reconocida”.
        </AppTypography>

        {/* Principios */}
        <AppTypography variant="h3Bold" color="primary">
          Principios
        </AppTypography>
        {principles.map((item) => (
          <AppTypography key={item} variant="baseMedium" color="text.secondary" textAlign="justify">
            • {item}
          </AppTypography>
        ))}

        {/* Valores */}
        <AppTypography variant="h3Bold" color="primary" mt={4} mb={2}>
          Valores
        </AppTypography>
        <Grid container spacing={3}>
          {values.map((value) => (
            <Grid item xs={12} sm={6} md={3} key={value}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 2px 8px rgba(46,92,154,0.1)',
                }}
              >
                <AppTypography variant="baseMedium" color="text.primary">
                  {value}
                </AppTypography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </AppStack>
    </AppContainer>
  </AppBox>
);

export default CorporateProfileScreen;
