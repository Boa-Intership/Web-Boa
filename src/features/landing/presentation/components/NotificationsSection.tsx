import { AppBox } from 'ui';
import { Typography, Divider } from '@mui/material';

const NotificationsSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Notificaciones y Comunicación
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Mantente informado sobre el estado de tu paquete en todo momento.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="body2" mb={2}>
      El sistema envía emails automáticos y mensajes por WhatsApp en cada cambio
      de estado: registrado, en tránsito, en destino y entregado.
    </Typography>
  </AppBox>
);

export default NotificationsSection;
