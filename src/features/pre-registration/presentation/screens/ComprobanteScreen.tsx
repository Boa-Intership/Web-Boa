import { Box, Button, Grid, Paper, Typography, Divider, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ResumenEnvio from '../components/ResumenEnvio';
import { AppTypography } from 'ui';
import { downloadPreRegisterPDF } from '../../data/services/pre-register.service';

const ComprobanteScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;
  const codePR = location.state?.codePR;

  if (!formData || !codePR) {
    return (
      <AppTypography variant="h4Regular">No hay datos disponibles. Redirigiendo...</AppTypography>
    );
  }

  const handleDownload = async () => {
    try {
      await downloadPreRegisterPDF(codePR);
    } catch (error) {
      console.error('Error al descargar el comprobante:', error);
    }
  };

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
          {codePR}
        </AppTypography>

        {/* Resumen del Envío */}
        <ResumenEnvio formData={formData} />

        {/* Botones */}
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Descargar Comprobante
          </Button>
          <Button variant="contained" color="success" onClick={() => navigate('/preregistro')}>
            Nuevo Pre-Registro
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ComprobanteScreen;
