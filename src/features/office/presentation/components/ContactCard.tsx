import React from 'react';
import { Box, Divider } from '@mui/material';
import { AccessTime, LocationOn, Email, Phone } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { Oficina } from '../../data/models/office.model';

interface Props {
  oficina: Oficina;
}

export const ContactCard: React.FC<Props> = ({ oficina }) => {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
      <Box flex={1}>
        {/* Dirección */}
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOn color="info" sx={{ mr: 1 }} />
          <AppTypography variant="baseRegular">{oficina.Ubicacion?.Descripcion}</AppTypography>
        </Box>

        {/* Horarios */}
        {oficina.Horarios?.length > 0 && (
          <>
            <Divider sx={{ my: 1 }} />
            {oficina.Horarios.map((horario) => (
              <Box key={horario.id} display="flex" alignItems="center" mb={1}>
                <AccessTime color="info" sx={{ mr: 1 }} />
                <AppTypography variant="baseRegular">
                  <strong>{horario.Dia}:</strong> {horario.Hora}
                </AppTypography>
              </Box>
            ))}
          </>
        )}

        {/* Contacto */}
        {oficina.Contacto?.length > 0 && (
          <>
            <Divider sx={{ my: 1 }} />
            <Box display="flex" alignItems="center">
              <Phone color="info" sx={{ mr: 1 }} />
              <AppTypography variant="baseRegular">
                <strong>Contacto:</strong> {oficina.Contacto?.map((c) => c.Numero).join(' - ')}
              </AppTypography>
            </Box>
          </>
        )}

        {/* Correo electrónico */}
        {oficina.Email && (
          <>
            <Divider sx={{ my: 1 }} />
            <Box display="flex" alignItems="center" mb={1}>
              <Email color="info" sx={{ mr: 1 }} />
              <AppTypography variant="baseRegular">
                <strong>Email:</strong> {oficina.Email}
              </AppTypography>
            </Box>
          </>
        )}
      </Box>

      {/* Mapa */}
      <Box flex={1}>
        <iframe
          title="Mapa de la oficina"
          src={oficina.Ubicacion.URL}
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
