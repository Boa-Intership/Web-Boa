import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  Divider,
  Alert,
  colors
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Person,
  Inventory2,
  ReceiptLong,
  TaskAlt,
  CheckCircle,
} from '@mui/icons-material';

const StepResumen = ({ formData, onBack }: any) => {
  const navigate = useNavigate();

  const { remitente, destinatario, ruta, carga, factura } = formData;

  const handleConfirm = () => {
    // Aquí podrías llamar a un servicio si deseas enviar datos al backend
    // Luego rediriges al resumen final con código
    navigate('/resumen-final', { state: { formData } });
  };

  return (
    <Box>
      <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
        <TaskAlt color='primary' />
        <Typography variant="h5" color='primary'>Resumen del Envío</Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
        <Grid container spacing={3}>
          {/* Remitente */}
          <Grid item xs={12} sm={6}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={1}>
              <Person sx={{color: '#424647'}} />
              <Typography variant="h6" sx={{color: '#424647'}}>Remitente</Typography>
            </Box>
            <Typography><strong>CI: </strong>{remitente.ci}</Typography>
            <Typography><strong>Nombre: </strong>{remitente.nombre}</Typography>
            <Typography><strong>Celular: </strong>{remitente.celular}</Typography>
            <Typography><strong>Correo: </strong>{remitente.correo}</Typography>
            <Typography><strong>Dirección: </strong>{remitente.direccion}</Typography>
          </Grid>

          {/* Destinatario */}
          <Grid item xs={12} sm={6}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={1}>
              <Person sx={{color: '#424647'}} />
              <Typography variant="h6" sx={{color: '#424647'}}>Destinatario</Typography>
            </Box>
            <Typography><strong>CI: </strong>{destinatario.ci}</Typography>
            <Typography><strong>Nombre: </strong>{destinatario.nombre}</Typography>
            <Typography><strong>Celular: </strong>{destinatario.celular}</Typography>
            <Typography><strong>Correo: </strong>{destinatario.correo}</Typography>
            <Typography><strong>Dirección: </strong>{destinatario.direccion}</Typography>
          </Grid>

          {/* Ruta y Carga */}
          <Grid item xs={12} sm={6}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={1}>
              <Inventory2 sx={{color: '#424647'}} />
              <Typography variant="h6" sx={{color: '#424647'}}>Ruta y Servicio</Typography>
            </Box>
            <Typography><strong>Origen: </strong>{ruta.origen}</Typography>
            <Typography><strong>Destino: </strong>{ruta.destino}</Typography>
            <Typography><strong>Tipo de Carga: </strong>{carga.tipo}</Typography>
            <Typography><strong>Nro. Ítems: </strong>{carga.detalles.length}</Typography>
          </Grid>

          {/* Estimación y Factura */}
          <Grid item xs={12} sm={6}>
            <Box display='flex' alignItems='center' gap={1} marginBottom={1}>
              <ReceiptLong sx={{color: '#424647'}} />
              <Typography variant="h6" sx={{color: '#424647'}}>Facturación e Importe</Typography>
            </Box>
            <Typography><strong>Documento: </strong>{factura.tipoDocumento} - {factura.numeroDocumento}</Typography>
            {factura.tipoDocumento === 'NIT' && <Typography>Razón Social: {factura.razonSocial}</Typography>}
            <Typography variant="h6" color="primary" fontWeight="bold" mt={2}>
              Importe Total Estimado: Bs. {factura.precioEstimado}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

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