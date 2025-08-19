import { Box, Typography, Divider } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';

interface Props {
  ciudad: string;
  direccion: string;
  contacto: string[];
  email: string;
  mapEmbed: string;
}

export const ContactCardInternacional = ({
  direccion,
  contacto,
  email,
  mapEmbed,
}: Props) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
      <Box flex={1}>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn color="primary" sx={{ mr: 1 }} />
          <Typography>{direccion}</Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center" mb={1}>
          <Phone color="secondary" sx={{ mr: 1 }} />
          <Typography>
            <strong>Contacto:</strong> {contacto.join(' - ')}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <Email color="info" sx={{ mr: 1 }} />
          <Typography>
            <strong>Email:</strong> {email}
          </Typography>
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
