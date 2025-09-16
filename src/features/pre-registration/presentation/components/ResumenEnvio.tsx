import { Box, Grid, Paper } from '@mui/material';
import { Person, Inventory2, ReceiptLong, TaskAlt } from '@mui/icons-material';
import { AppTypography } from 'ui';

const ResumenEnvio = ({ formData }: { formData: any }) => {
  const { remitente, destinatario, ruta, carga, factura } = formData;

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4, bgcolor: '#FAFAFA' }}>
        <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
          <TaskAlt color="primary" />
          <AppTypography variant="h4Regular" color="primary">
            Resumen del Envío
          </AppTypography>
        </Box>

        <Grid container spacing={3}>
          {/* Remitente */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Person sx={{ color: '#424647' }} />
              <AppTypography variant="h4Regular" sx={{ color: '#424647' }}>
                Remitente
              </AppTypography>
            </Box>
            <AppTypography variant="h4Regular">
              <strong>CI: </strong>
              {remitente.ci}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Nombre: </strong>
              {remitente.nombre}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Celular: </strong>
              {remitente.celular}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Correo: </strong>
              {remitente.correo}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Dirección: </strong>
              {remitente.direccion}
            </AppTypography>
          </Grid>

          {/* Destinatario */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Person sx={{ color: '#424647' }} />
              <AppTypography variant="h4Regular" sx={{ color: '#424647' }}>
                Destinatario
              </AppTypography>
            </Box>
            <AppTypography variant="h4Regular">
              <strong>CI: </strong>
              {destinatario.ci}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Nombre: </strong>
              {destinatario.nombre}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Celular: </strong>
              {destinatario.celular}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Correo: </strong>
              {destinatario.correo}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Dirección: </strong>
              {destinatario.direccion}
            </AppTypography>
          </Grid>

          {/* Ruta y Carga */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <Inventory2 sx={{ color: '#424647' }} />
              <AppTypography variant="h4Regular" sx={{ color: '#424647' }}>
                Ruta y Servicio
              </AppTypography>
            </Box>
            <AppTypography variant="h4Regular">
              <strong>Origen: </strong>
              {ruta.origen}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Destino: </strong>
              {ruta.destino}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Tipo de Carga: </strong>
              {carga.tipo}
            </AppTypography>
            <AppTypography variant="h4Regular">
              <strong>Nro. Ítems: </strong>
              {carga.detalles.length}
            </AppTypography>
          </Grid>

          {/* Estimación y Factura */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
              <ReceiptLong sx={{ color: '#424647' }} />
              <AppTypography variant="h4Regular" sx={{ color: '#424647' }}>
                Facturación e Importe
              </AppTypography>
            </Box>
            <AppTypography variant="h4Regular">
              <strong>Documento: </strong>
              {factura.tipoDocumento} - {factura.numeroDocumento}
            </AppTypography>
            {factura.tipoDocumento === 'NIT' && (
              <AppTypography variant="h4Regular">Razón Social: {factura.razonSocial}</AppTypography>
            )}
            <AppTypography variant="h4Regular" color="primary" fontWeight="bold" mt={2}>
              Importe Total Estimado: Bs. {factura.precioEstimado}
            </AppTypography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ResumenEnvio;
