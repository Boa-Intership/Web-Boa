import { Box, Divider } from '@mui/material';
import { LocationOn, AccessTime, Phone, HorizontalRule } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface Props {
  ciudad: string;
  direccion: string;
  horarios: {
    dias: string;
    semana: string;
    sabado: string;
    feriados: string;
  };
  contacto: string[];
  mapEmbed: string;
}

export const ContactCardNacional = ({ direccion, horarios, contacto, mapEmbed }: Props) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
      <Box flex={1}>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">{direccion}</AppTypography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">
            <strong>{horarios.dias}:</strong> {horarios.semana}
          </AppTypography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">
            <strong>Sábados:</strong> {horarios.sabado}
          </AppTypography>
        </Box>

        <Box display="flex" alignItems="center" mb={1}>
          <AccessTime color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">
            <strong>Domingos y Feriados:</strong> {horarios.feriados}
          </AppTypography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" alignItems="center">
          <Phone color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">
            <strong>Contacto:</strong> {contacto.join(' - ')}
          </AppTypography>
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
