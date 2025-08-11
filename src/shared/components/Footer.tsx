import React from 'react';
import { Box, Typography, Grid, Link, Button } from '@mui/material';
import { ROUTES } from '../../router/routes';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
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

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
          <Link href="/" title="BOA" sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Logotipo_de_BoA.svg"
              alt="BOA Logo"
              style={{ height: 40 }}
            />
          </Link>
          <Box display="flex" alignItems="center" gap={2}>
            <Link href="/" underline="none" color="inherit" variant="subtitle2">
              Home
            </Link>
            <Link href="" target="_blank" underline="none" color="inherit" variant="subtitle2">
              Documentación
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              href=""
              target="_blank"
              sx={{ ml: 2 }}
            >
              Cotizar ahora
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2" align="center" gutterBottom>
          © {new Date().getFullYear()} BOA. Todos los derechos reservados.
        </Typography>
        <Typography variant="caption" align="center" display="block" sx={{ opacity: 0.8 }}>
          Cuando visitas o interactúas con nuestros sitios, servicios o herramientas, nosotros o nuestros proveedores autorizados podemos usar cookies para almacenar información y así brindarte una mejor experiencia y fines de marketing.
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;