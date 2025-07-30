import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { ROUTES } from '../../../../router/routes';
import ResumenEnvio from '../components/ResumenEnvio';

const StepResumen = ({ formData, onBack }: any) => {
  const navigate = useNavigate();

  const { remitente, destinatario, ruta, carga, factura } = formData;

  const handleConfirm = () => {
    // Llamar a un servicio para enviar datos al backend
    // Luego rediriges al resumen final con código
    navigate(ROUTES.COMPROBANTE, { state: { formData } });
  };

  return (
    <Box>
      {/* Resumen del Envío */}
      <ResumenEnvio formData={formData} />

      {/* Confirmación */}
      <Box display="flex" justifyContent="center">
        <Button variant="contained" size="large" startIcon={<CheckCircle />} onClick={handleConfirm}>
            Confirmar Pre-Registro
        </Button>
      </Box>

      {/* Info adicional */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} sm={4}>
          <Alert severity="warning">
            <Typography fontWeight="bold">Precio estimado</Typography>
            El precio final puede variar tras inspección física.
          </Alert>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Alert severity="info">
            <Typography fontWeight="bold">Vigencia</Typography>
            El pre-registro es válido por 1 día calendario.
          </Alert>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Alert severity="success">
            <Typography fontWeight="bold">Garantía</Typography>
            Su paquete está asegurado durante todo el transporte.
          </Alert>
        </Grid>
      </Grid>

      {/* Botón Atrás */}
      <Box mt={4} mb={4} display="flex" justifyContent="flex-start">
        <Button variant="outlined" onClick={onBack}>Anterior</Button>
      </Box>
    </Box>
  );
};

export default StepResumen;