import { Box, Button, Grid, Paper, Typography, Divider, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ResumenEnvio from '../components/ResumenEnvio';
import { AppTypography } from 'ui';

const generarCodigo = () => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `AE-${random}-${Math.floor(Math.random() * 9999)
    .toString()
    .padStart(4, '0')}`;
};

const ComprobanteScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    return (
      <AppTypography variant="h4Regular">No hay datos disponibles. Redirigiendo...</AppTypography>
    );
  }

  const codigo = generarCodigo();
  const { remitente, destinatario, ruta, carga, factura } = formData;

  return (
    <Container>
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
        <AppTypography variant="h4Regular" align="center" color="success.main">
          ¡Pre-Registro Completado!
        </AppTypography>
        <AppTypography variant="h4Bold" align="center" mt={1}>
          Su código de pre-registro es:
        </AppTypography>
        <AppTypography variant="h4Bold" align="center" color="primary" sx={{ my: 2 }}>
          {codigo}
        </AppTypography>

        {/* Resumen del Envío */}
        <ResumenEnvio formData={formData} />

        {/* Botones */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="contained" color="primary">
            Descargar Comprobante
          </Button>
          <Button variant="contained" color="success" onClick={() => navigate('/home')}>
            Nuevo Pre-Registro
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ComprobanteScreen;
