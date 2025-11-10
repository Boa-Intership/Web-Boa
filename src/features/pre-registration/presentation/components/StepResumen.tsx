import { Box, Button, Grid, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { ROUTES } from '../../../../router/routes';
import ResumenEnvio from '../components/ResumenEnvio';
import { AppTypography } from 'ui';
import { registrarPreRegistro } from '../../data/services/pre-register.service';

const StepResumen = ({ formData, onBack }: any) => {
  const navigate = useNavigate();

  const { remitente, destinatario, ruta, carga, factura } = formData;
  const handleConfirm = async () => {
    try {
      const payload = {
        originID: ruta.origen.id,
        destinationID: ruta.destino.id,
        /*sender: {
          nit: Number(remitente.ci),
          //documentType: factura.tipoDocumento === 'CI' ? 1 : 5,
          documentType: 1, // se manda todo como CI
          complement: remitente.complemento || null,
          name: remitente.nombre,
          address: remitente.direccion,
          phone: remitente.celular,
          email: remitente.correo,
          type: 'sender',
        },*/
        recipient: {
          nit: Number(destinatario.ci) || null,
          //documentType: factura.tipoDocumento === 'CI' ? 1 : 5,
          documentType: 1, // se manda todo como CI
          complement: destinatario.complemento || null,
          name: destinatario.nombre,
          address: destinatario.direccion || null,
          phone: destinatario.celular,
          email: destinatario.correo || null,
          //type: 'recipient',
        },
        cargoType: carga.tipoID,
        billingData: {
          businessName: remitente.nombre,
          docType: factura.numeroDocumento ? (factura.tipoDocumento === 'NIT' ? 5 : 1) : 1,
          nit: Number(factura.numeroDocumento) || Number(remitente.ci),
          complement:
            (factura.numeroDocumento ? factura.complemento : null) || remitente.complemento,
        },
        packages: carga.detalles.map((p) => ({
          description: p.descripcion,
          weight: parseFloat(p.peso),
          height: parseFloat(p.alto),
          width: parseFloat(p.ancho),
          length: parseFloat(p.largo),
          pieces: parseInt(p.piezas),
        })),
        estimatedCost: carga.costoEstimado,
      };
      const result = await registrarPreRegistro(payload);

      navigate(ROUTES.COMPROBANTE, { state: { formData, codePR: result.codePR } });
    } catch (error) {
      alert('Error al confirmar el pre-registro. Intenta nuevamente.');
      console.error(error);
    }
  };

  return (
    <Box>
      {/* Resumen del Envío */}
      <ResumenEnvio formData={formData} />

      {/* Confirmación */}
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          size="large"
          startIcon={<CheckCircle />}
          onClick={handleConfirm}
        >
          Confirmar Pre-Registro
        </Button>
      </Box>

      {/* Info adicional */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} sm={4}>
          <Alert severity="warning">
            <AppTypography variant="h4Bold">Precio estimado</AppTypography>
            El precio final puede variar tras inspección física.
          </Alert>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Alert severity="info">
            <AppTypography variant="h4Bold">Vigencia</AppTypography>
            El pre-registro es válido por 1 día calendario.
          </Alert>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Alert severity="success">
            <AppTypography variant="h4Bold">Garantía</AppTypography>
            Su paquete está asegurado durante todo el transporte.
          </Alert>
        </Grid>
      </Grid>

      {/* Botón Atrás */}
      <Box mt={4} mb={4} display="flex" justifyContent="flex-start">
        <Button variant="outlined" onClick={onBack}>
          Anterior
        </Button>
      </Box>
    </Box>
  );
};

export default StepResumen;
