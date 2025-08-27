import React from 'react';
import { Box, Typography, Grid, Link, Button } from '@mui/material';

const sxLink = {
  fontSize: 12,
  fontWeight: 500,
  color: (theme) => theme.palette.primary.contrastText,
  textTransform: 'none',
  letterSpacing: 0.5,
  transition: 'color 0.2s',
  '&:hover': {
    color: (theme) => theme.palette.secondary.light,
  },
};

const sxTitle = {
  fontWeight: 700,
  color: (theme) => theme.palette.primary.contrastText,
  mb: 1,
  fontSize: { xs: 15, md: 19 },
  letterSpacing: 0.5,
};

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.primary.contrastText,
      borderTop: '2px solid',
      borderColor: (theme) => theme.palette.grey[200],
      boxShadow: 3,
      fontSize: 16,
      letterSpacing: 1,
      position: 'relative',
      zIndex: 10,
      py: { xs: 3, md: 5 },
      px: { xs: 2, md: 8 },
    }}
  >
    <Grid container spacing={4} justifyContent="center" alignItems="stretch">
      {/* Acerca de BoA */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          gap={1}
        >
          <Typography sx={sxTitle}>Acerca de BoA</Typography>
          <Link href="#" underline="hover" sx={sxLink}>
            BoA Institucional
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Perfil Corporativo
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Avisos Importantes
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Somos IOSA
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Convocatorias
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Responsabilidad Social
          </Link>
        </Box>
      </Grid>
      {/* Información legal */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          gap={1}
        >
          <Typography sx={sxTitle}>Información legal</Typography>
          <Link href="#" underline="hover" sx={sxLink}>
            Nuestras Tarifas
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Contrato de Transporte
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Derechos y Responsabilidades
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Términos y Condiciones
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Políticas de Privacidad
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Políticas de Cookies
          </Link>
        </Box>
      </Grid>
      {/* Contáctanos */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          gap={1}
        >
          <Typography sx={sxTitle}>Contáctanos</Typography>
          <Link href="#" underline="hover" sx={sxLink}>
            Contact Center
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Nuestras Oficinas
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Whatsapp
          </Link>
          <Box display="flex" gap={1} mt={1}>
            <img
              src="/public/vite.svg"
              alt="iata logo"
              style={{ height: 24 }}
            />
          </Box>
        </Box>
      </Grid>
      {/* Enlaces Rápidos */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          gap={1}
        >
          <Typography sx={sxTitle}>Enlaces Rápidos</Typography>
          <Link href="#" underline="hover" sx={sxLink}>
            BoACargo
          </Link>
          <Link href="#" underline="hover" sx={sxLink}>
            Mapa de Sitio
          </Link>
          <Box display="flex" gap={1} mt={1}>
            <img src="/public/vite.svg" alt="facebook" style={{ height: 24 }} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="left"
          alignItems="center"
          gap={2}
          mt={2}
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <img src="/public/vite.svg" alt="Facebook" style={{ height: 28 }} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/public/vite.svg"
              alt="Instagram"
              style={{ height: 28 }}
            />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <img src="/public/vite.svg" alt="YouTube" style={{ height: 28 }} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <img src="/public/vite.svg" alt="X" style={{ height: 28 }} />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={3}>
          <Typography
            variant="inherit"
            align="center"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
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
  </Box>
);

export default Footer;
