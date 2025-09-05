import { AppBox } from 'ui';
import { Typography, Divider } from '@mui/material';

const ManifestSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Manifiesto y Códigos de Barras
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Gestión y trazabilidad de paquetes mediante manifiestos y etiquetas.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="body2" mb={2}>
      El manifiesto es el documento que agrupa todos los paquetes de un vuelo. Cada paquete y cada
      vuelo tienen su propio código de barras y etiqueta individual.
    </Typography>
    <Typography variant="body2">
      Los códigos se insertan y escanean para registrar el ingreso y salida de cada paquete.
    </Typography>
  </AppBox>
);

export default ManifestSection;
