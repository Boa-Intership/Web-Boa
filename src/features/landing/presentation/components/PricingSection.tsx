import { AppBox } from 'ui';
import { Typography, Divider } from '@mui/material';

const PricingSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Tarifario y Estimación de Precio
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Calcula el costo de tu envío según peso, volumen, ruta y tipo de carga.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <Typography variant="body2" mb={2}>
      El precio se calcula considerando el peso real y volumétrico, la ruta y el
      tipo de carga. Existe un precio mínimo y un punto de quiebre para cargas
      voluminosas.
    </Typography>
    <Typography variant="body2" mb={2}>
      <strong>Ejemplo:</strong> Si tu paquete pesa 10 kg y mide 60x40x40 cm, el
      peso volumétrico es (60x40x40)/6000 = 16 kg. Se toma el mayor para el
      cálculo.
    </Typography>
  </AppBox>
);

export default PricingSection;
