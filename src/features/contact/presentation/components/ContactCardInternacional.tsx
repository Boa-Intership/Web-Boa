import { Box, Typography, Divider } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface Props {
  ciudad: string;
  direccion: string;
  contacto: string[];
  email: string;
  mapEmbed: string;
}

export const ContactCardInternacional = ({ direccion, contacto, email, mapEmbed }: Props) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
      <Box flex={1}>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn color="info" sx={{ mr: 1 }} />
          <AppTypography variant="h4Regular">{direccion}</AppTypography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center" mb={1}>
          <Phone color="info" sx={{ mr: 1 }} />
          <AppTypography variant="h4Regular">
            <strong>Contacto:</strong> {contacto.join(' - ')}
          </AppTypography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <Email color="info" sx={{ mr: 1 }} />
          <AppTypography variant="h4Regular">
            <strong>Email:</strong> {email}
          </AppTypography>
        </Box>
      </Box>

      <Box flex={1}>
        <iframe
          title="Mapa de la oficina internacional"
          src={mapEmbed}
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};
