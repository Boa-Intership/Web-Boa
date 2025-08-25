import { AppBox, AppContainer, AppGrid } from 'ui';
import { Typography, Divider } from '@mui/material';

const GeneralInfoSection = () => (
  <AppContainer sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={700} mb={2}>
      Información General
    </Typography>
    <Divider sx={{ mb: 4 }} />
    <AppGrid container spacing={4}>
      <AppGrid item xs={12} sm={6}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Titulo 6
        </Typography>
        <Typography variant="body2" mb={1}>
          body2
        </Typography>
        <Typography variant="body2" mb={1}>
          body2.
        </Typography>
        <Typography variant="body2" mb={1}>
          body2
        </Typography>
        <Typography variant="body2" mb={1}>
          body2
        </Typography>
      </AppGrid>
      <AppGrid item xs={12} sm={6}>
        <Typography variant="h6" fontWeight={600} mb={2}>
          titulo 6
        </Typography>
        <Typography variant="body2" mb={1}>
          Lunes a viernes: 08:00 - 18:00
        </Typography>
        <Typography variant="body2" mb={1}>
          Sábados: 08:00 - 12:00
        </Typography>
        <Typography variant="body2" mb={2}>
          Domingos y feriados: cerrado
        </Typography>
        <Typography variant="h6" fontWeight={600} mb={2}>
          titulo 6
        </Typography>
        <Typography variant="body2">
          Verifica el embalaje, etiqueta correctamente y revisa las
          restricciones antes de enviar.
        </Typography>
      </AppGrid>
    </AppGrid>
  </AppContainer>
);

export default GeneralInfoSection;
