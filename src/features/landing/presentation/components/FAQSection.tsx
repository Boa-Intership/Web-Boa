import { AppBox, AppStack } from 'ui';
import { Typography, Divider, Box } from '@mui/material';

const FAQSection = () => (
  <AppBox sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Preguntas Frecuentes
    </Typography>
    <Typography variant="h5" color="text.secondary" mb={4}>
      Respuestas a las dudas más comunes sobre el proceso de envío y
      preregistro.
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <AppStack spacing={3}>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          ¿Cuánto dura el preregistro?
        </Typography>
        <Typography variant="body2">
          El preregistro tiene una validez de 24 horas desde su generación.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          ¿Qué pasa si no recojo el paquete?
        </Typography>
        <Typography variant="body2">
          El paquete permanecerá en resguardo por 7 días. Pasado ese plazo, se
          aplicarán cargos de almacenamiento.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          ¿Puedo modificar o eliminar el preregistro?
        </Typography>
        <Typography variant="body2">
          Sí, puedes modificar o eliminar el preregistro antes de entregar el
          paquete en oficina.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          ¿Qué sucede si se exceden dimensiones o peso?
        </Typography>
        <Typography variant="body2">
          El paquete será rechazado o se aplicarán cargos adicionales según la
          política vigente.
        </Typography>
      </Box>
    </AppStack>
  </AppBox>
);

export default FAQSection;
