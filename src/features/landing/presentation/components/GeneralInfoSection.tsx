import React from 'react';
import { AppContainer, AppButton, AppGrid, AppTypography, AppStack } from 'ui';
import { Typography, Divider, Box, Stack } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from 'react-router-dom';

interface SectionInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  buttonText: string;
}

const sections: SectionInfo[] = [
  {
    title: 'Tipos de carga y normativa',
    description:
      'Conoce los diferentes tipos de carga que puedes enviar y la normativa vigente para cada uno.',
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
    link: '/tipos-cargas',
    buttonText: 'Ver más',
  },
  {
    title: 'Términos y condiciones',
    description:
      'Consulta los términos y condiciones para el envío de paquetes y servicios de BOA Cargo.',
    icon: <GavelIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />,
    link: '/terminos',
    buttonText: 'Leer términos',
  },
];

interface GeneralInfoSectionProps {
  title?: string;
  subtitle?: string;
}

const GeneralInfoSection: React.FC<GeneralInfoSectionProps> = ({
  title = 'Información General',
  subtitle = 'Encuentra aquí información relevante sobre nuestros servicios, normativa y condiciones para tus envíos.',
}) => {
  const navigate = useNavigate();
  return (
    <AppContainer sx={{ py: { xs: 6, md: 8 } }}>
      <AppStack alignItems="center" mb={2} textAlign={'center'}>
        <AppTypography variant="h4Bold" color="primary">
          {title}
        </AppTypography>
        {/* <AppTypography variant="baseMedium" color="text.secondary">
          {subtitle}
        </AppTypography> */}
      </AppStack>
      <Divider sx={{ mb: 4 }} />
      <AppGrid container spacing={4} justifyContent="center">
        {sections.map((section) => (
          <AppGrid item xs={12} sm={6} key={section.title}>
            <Box
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: 2,
                background: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {section.icon}
              <AppTypography variant="h6Bold" mb={2} textAlign="center">
                {section.title}
              </AppTypography>
              <AppTypography variant="body2" mb={3} color="text.secondary" textAlign="center">
                {section.description}
              </AppTypography>
              <AppButton
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => navigate(section.link)}
                sx={{ mt: 'auto' }}
              >
                {section.buttonText}
              </AppButton>
            </Box>
          </AppGrid>
        ))}
      </AppGrid>
    </AppContainer>
  );
};

export default GeneralInfoSection;
