import { AppBox, AppTypography } from 'ui';
import { Divider } from '@mui/material';

const ManifestSection = () => (
  <AppBox sx={{ py: 8 }}>
    <AppTypography variant="h4Regular" fontWeight={700} mb={2}>
      Manifiesto y Códigos de Barras
    </AppTypography>
    <AppTypography variant="h4Regular" color="text.secondary" mb={4}>
      Gestión y trazabilidad de paquetes mediante manifiestos y etiquetas.
    </AppTypography>
    <Divider sx={{ mb: 4 }} />
    <AppTypography variant="h4Regular" mb={2}>
      El manifiesto es el documento que agrupa todos los paquetes de un vuelo. Cada paquete y cada
      vuelo tienen su propio código de barras y etiqueta individual.
    </AppTypography>
    <AppTypography variant="h4Regular">
      Los códigos se insertan y escanean para registrar el ingreso y salida de cada paquete.
    </AppTypography>
  </AppBox>
);

export default ManifestSection;
