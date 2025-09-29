import { Box, Grid, Paper, Typography } from '@mui/material';
import { Person, Inventory2, ReceiptLong, TaskAlt } from '@mui/icons-material';
import { AppTypography } from 'ui';

const ResumenEnvio = ({ formData }: { formData: any }) => {
  const { remitente, destinatario, ruta, carga, factura } = formData;

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4, bgcolor: '#FAFAFA' }}>
        <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
          <TaskAlt color="primary" />
          <Typography variant="h5" color="primary">
            Resumen del Envío
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Remitente */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Person sx={{ color: '#424647' }} />
              <Typography variant="h6" sx={{ color: '#424647' }}>
                Remitente
              </Typography>
            </Box>
            <Typography>
              <strong>CI: </strong>
              {remitente.ci}
            </Typography>
            <Typography>
              <strong>Nombre: </strong>
              {remitente.nombre}
            </Typography>
            <Typography>
              <strong>Celular: </strong>
              {remitente.celular}
            </Typography>
            <Typography>
              <strong>Correo: </strong>
              {remitente.correo}
            </Typography>
            <Typography>
              <strong>Dirección: </strong>
              {remitente.direccion}
            </Typography>
          </Grid>

          {/* Destinatario */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Person sx={{ color: '#424647' }} />
              <Typography variant="h6" sx={{ color: '#424647' }}>
                Destinatario
              </Typography>
            </Box>
            <Typography>
              <strong>CI: </strong>
              {destinatario.ci}
            </Typography>
            <Typography>
              <strong>Nombre: </strong>
              {destinatario.nombre}
            </Typography>
            <Typography>
              <strong>Celular: </strong>
              {destinatario.celular}
            </Typography>
            <Typography>
              <strong>Correo: </strong>
              {destinatario.correo}
            </Typography>
            <Typography>
              <strong>Dirección: </strong>
              {destinatario.direccion}
            </Typography>
          </Grid>

          {/* Ruta y Carga */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Inventory2 sx={{ color: '#424647' }} />
              <Typography variant="h6" sx={{ color: '#424647' }}>
                Ruta y Servicio
              </Typography>
            </Box>
            <Typography>
              <strong>Origen: </strong>
              {ruta?.origen?.city?.cityName} ({ruta?.origen?.codStation})
            </Typography>
            <Typography>
              <strong>Destino: </strong>
              {ruta?.destino?.city?.cityName} ({ruta?.destino?.codStation})
            </Typography>
            <Typography>
              <strong>Tipo de Carga: </strong>
              {carga.tipo}
            </Typography>
            <Typography>
              <strong>Nro. Ítems: </strong>
              {carga.detalles.length}
            </Typography>
          </Grid>

          {/* Estimación y Factura */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <ReceiptLong sx={{ color: '#424647' }} />
              <Typography variant="h6" sx={{ color: '#424647' }}>
                Facturación e Importe
              </Typography>
            </Box>
            <Typography>
              <strong>Documento: </strong>
              {factura.tipoDocumento} - {factura.numeroDocumento}
            </Typography>
            {factura.tipoDocumento === 'NIT' && (
              <Typography>Razón Social: {factura.razonSocial}</Typography>
            )}
            <Typography variant="h6" color="primary" fontWeight="bold" mt={2}>
              Importe Total Estimado: Bs. {carga?.costoEstimado}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResumenEnvio;
