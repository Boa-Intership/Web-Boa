import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      py: 2,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.background.paper,
      textAlign: 'center',
      borderTop: '1px solid',
      borderColor: (theme) => theme.palette.divider,
    }}
  >
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} BOA. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;