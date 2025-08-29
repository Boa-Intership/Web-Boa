import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { AppBox, AppContainer } from 'ui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { grey } from '@mui/material/colors';

const LinkButton = ({ href, children, ...props }) => (
  <Box
    component="a"
    href={href}
    {...props}
    sx={{
      fontSize: 12,
      fontWeight: 500,
      color: grey[300],
      textTransform: 'none',
      letterSpacing: 0.5,
      transition: 'color 0.2s',
      '&:hover': {
        color: grey[300],
        textDecoration: 'underline',
      },
      ...(props.sx || {}),
    }}
  >
    {children}
  </Box>
);

const sxLink = {
  fontSize: 12,
  fontWeight: 500,
  color: (theme) => theme.palette.primary.main,
  textTransform: 'none',
  letterSpacing: 0.5,
  transition: 'color 0.2s',
  '&:hover': {
    color: (theme) => theme.palette.secondary.main,
    textDecoration: 'underline',
  },
};

const sxTitle = {
  fontWeight: 700,
  color: '#FFFFFF',
  mb: 1,
  fontSize: { xs: 15, md: 19 },
  letterSpacing: 0.5,
};

interface FooterSectionProps {
  children: React.ReactNode;
  align?: 'center' | 'left';
}

const FooterSection: React.FC<FooterSectionProps> = ({
  children,
  align = 'left',
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems={{
      xs: 'center',
      md: align === 'left' ? 'flex-start' : 'center',
    }}
    textAlign={{ xs: 'center', md: align }}
    gap={1}
  >
    {children}
  </Box>
);

const Footer: React.FC = () => (
  <AppBox
    component="footer"
    sx={{
      width: '100%',
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.primary.dark,
      color: grey[300],
      borderColor: (theme) => theme.palette.background.paper,
      boxShadow: 3,
      fontSize: 16,
      letterSpacing: 1,
      position: 'relative',
      zIndex: 10,
      py: { xs: 3, md: 5 },
      px: { xs: 2, md: 8 },
    }}
  >
    <AppContainer>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* Acerca de BoA */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection align="left">
            <Typography sx={sxTitle}>Acerca de BoA</Typography>
            <LinkButton href="#">BoA Institucional</LinkButton>
            <LinkButton href="#">Perfil Corporativo</LinkButton>
            <LinkButton href="#">Avisos Importantes</LinkButton>
            <LinkButton href="#">Somos IOSA</LinkButton>
            <LinkButton href="#">Convocatorias</LinkButton>
            <LinkButton href="#">Responsabilidad Social</LinkButton>
          </FooterSection>
        </Grid>
        {/* Información legal */}

        <Grid item xs={12} sm={6} md={3}>
          <FooterSection align="left">
            <Typography sx={sxTitle}>Información legal</Typography>
            <LinkButton href="#">Nuestras Tarifas</LinkButton>
            <LinkButton href="#">Contrato de Transporte</LinkButton>
            <LinkButton href="#">Derechos y Responsabilidades</LinkButton>
            <LinkButton href="#">Términos y Condiciones</LinkButton>
            <LinkButton href="#">Políticas de Privacidad</LinkButton>
            <LinkButton href="#">Políticas de Cookies</LinkButton>
          </FooterSection>
        </Grid>
        {/* Contáctanos */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection align="left">
            <Typography sx={sxTitle}>Contáctanos</Typography>
            <LinkButton href="#">Contact Center</LinkButton>
            <LinkButton href="#">Nuestras Oficinas</LinkButton>
            <LinkButton href="#">Whatsapp</LinkButton>
          </FooterSection>
        </Grid>
        {/* Enlaces Rápidos */}
        <Grid item xs={12} sm={6} md={3}>
          <FooterSection align="left">
            <Typography sx={sxTitle}>Enlaces Rápidos</Typography>
            <LinkButton href="#">BoACargo</LinkButton>
            <LinkButton href="#">Mapa de Sitio</LinkButton>
          </FooterSection>
        </Grid>
        {/* Redes Sociales */}
        <Grid item xs={12}>
          <Grid container justifyContent="center" sx={{ gap: 4 }}>
            <FacebookIcon href="https://www.facebook.com/BolivianaDeAviacion" />
            <InstagramIcon href="https://www.instagram.com/boa_bolivia/" />
            <YouTubeIcon href="https://www.youtube.com/@BoADigital" />
            <XIcon href="https://x.com/VueleConBoA" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              variant="inherit"
              align="center"
              sx={{
                color: grey[400],
                fontWeight: 500,
                fontSize: 14,
              }}
              gutterBottom
            >
              Copyright © 2025 Boliviana de Aviación. Todos los derechos
              reservados
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </AppContainer>
  </AppBox>
);

export default Footer;
