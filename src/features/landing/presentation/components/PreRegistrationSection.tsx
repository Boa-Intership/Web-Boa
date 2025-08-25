import { AppBox } from 'ui';
import { Typography, Divider } from '@mui/material';

const PreRegistrationSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Pre-registro
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Agiliza tu envío generando el preregistro desde la web.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="body2" mb={2}>
      El preregistro es el proceso previo a la entrega del paquete. Debes
      ingresar los datos del remitente, destinatario, ruta, detalles del paquete
      y factura.
    </Typography>
    <Typography variant="body2" mb={2}>
      Al finalizar, se genera un código de preregistro que puedes eliminar si lo
      deseas. El sistema permite descargar el comprobante en PDF y enviarlo por
      email o WhatsApp.
    </Typography>
  </AppBox>
);

export default PreRegistrationSection;
