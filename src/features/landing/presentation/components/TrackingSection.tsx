import { AppBox } from 'ui';
import { Typography, Divider } from '@mui/material';

const TrackingSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Rastreo de Paquetes
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Consulta el estado de tu envío por número de guía o preregistro.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="body2" mb={2}>
      Ingresa el número de guía o preregistro en el buscador para ver el estado
      actual del paquete: registrado, en tránsito, en destino o entregado.
    </Typography>
  </AppBox>
);

export default TrackingSection;
