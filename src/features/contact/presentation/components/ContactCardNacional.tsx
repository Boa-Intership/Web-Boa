import { Box, Typography, Divider } from '@mui/material';
import { LocationOn, AccessTime, Phone } from '@mui/icons-material';

interface Props {
  ciudad: string;
  direccion: string;
  horarios: {
    semana: string;
    sabado: string;
    feriados: string;
  };
  contacto: string[];
  mapEmbed: string;
}

export const ContactCardNacional = ({
  direccion,
  horarios,
  contacto,
  mapEmbed,
}: Props) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
      <Box flex={1}>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn color="warning" sx={{ mr: 1 }} />
          <Typography>{direccion}</Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="warning" sx={{ mr: 1 }} />
          <Typography>
            <strong>Lunes a Viernes:</strong> {horarios.semana}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="warning" sx={{ mr: 1 }} />
          <Typography>
            <strong>Sábados:</strong> {horarios.sabado}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="warning" sx={{ mr: 1 }} />
          <Typography>
            <strong>Domingos y Feriados:</strong> {horarios.feriados}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center">
          <Phone color="warning" sx={{ mr: 1 }} />
          <Typography>
            <strong>Contacto:</strong> {contacto.join(' - ')}
          </Typography>
        </Box>
      </Box>

      <Box flex={1}>
        <iframe
          title="Mapa de la oficina"
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
