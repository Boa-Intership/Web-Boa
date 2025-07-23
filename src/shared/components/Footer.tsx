import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.secondary.contrastText,
      textAlign: 'center',
      borderTop: '2px solid',
      borderColor: (theme) => theme.palette.divider,
      boxShadow: 3,
      fontSize: 16,
      letterSpacing: 1,
      position: 'relative',
      zIndex: 10,
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: 500 }}>
      © {new Date().getFullYear()} BOA. Todos los derechos reservados.
    </Typography>
    <Typography variant="caption" sx={{ opacity: 0.8 }}>
      Desarrollado para el área de carga de BOA
    </Typography>
  </Box>
);

export default Footer;