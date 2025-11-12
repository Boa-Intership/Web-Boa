import React, { useState } from 'react';
import { Box, Stack, Grid, Chip, Alert, Step, Stepper, StepLabel, Divider } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { AppTypography, AppContainer, TrackingCustomerModel } from 'ui';
import { informacionEstados } from './StatusInformation';

function TrackingResultCustomer({ info }: { info: TrackingCustomerModel }) {
  const estadoActual = info.state || 'EN ALMACÉN';

  const infoEstado = informacionEstados.find((e) => e.estado === estadoActual) || {
    tipoInfo: 'info',
    descripcion: 'Información no disponible para este estado.',
  };

  const infoPersona = (
    des: string,
    name: string,
    email: string,
    city: string,
    codStation: string
  ) => {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
        }}
      >
        <AppTypography variant="baseBold" color="primary.dark">
          {des}:
        </AppTypography>

        {/* Nombre */}
        <Stack direction="row" spacing={1}>
          <PersonOutlineOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
          <AppTypography variant="baseRegular">{name}</AppTypography>
        </Stack>

        {/* Email */}
        <Stack direction="row" spacing={1}>
          <AlternateEmailOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
          <AppTypography
            variant="baseRegular"
            sx={{
              fontStyle: 'italic',
              color: 'text.secondary',
            }}
          >
            {email}
          </AppTypography>
        </Stack>

        {/* Ciudad y código */}
        <Stack direction="row" spacing={1}>
          <LocationOnOutlinedIcon sx={{ fontSize: 20, color: 'primary.main' }} />
          <AppTypography variant="baseRegular">{city}</AppTypography>
          <AppTypography variant="baseBold" color="primary.main">
            ({codStation})
          </AppTypography>
        </Stack>
      </Box>
    );
  };

  return (
    <AppContainer>
      <AppTypography variant="h3Bold" color="primary.main" mb={2}>
        Resultado del Rastreo: {info.airWaybill}
      </AppTypography>

      <Grid
        container
        spacing={1}
        sx={{
          p: { xs: 2, sm: 2 },
          borderRadius: 2,
          boxShadow: 2,
          alignItems: 'flex-start',
          justifyContent: 'center', // 🔹 centra horizontalmente los items
        }}
      >
        {/* Estado actual */}
        <Grid
          item
          xs={12}
          sm={10}
          md={5.5}
          sx={{
            mx: 'auto', // 🔹 centra el grid cuando está solo en pantallas medianas
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AppTypography variant="baseBold" color={'primary.dark'} textAlign="center">
            Estado actual del paquete:
          </AppTypography>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              mt: 2,
            }}
          >
            <Chip
              label={estadoActual}
              color={
                infoEstado.tipoInfo === 'success'
                  ? 'success'
                  : infoEstado.tipoInfo === 'warning'
                    ? 'warning'
                    : 'primary'
              }
              sx={{
                px: 3,
                py: 1,
                fontSize: 16,
                fontWeight: 500,
              }}
            />

            <Alert
              severity={infoEstado.tipoInfo as 'error' | 'info' | 'success' | 'warning'}
              sx={{
                maxWidth: 480,
                width: '100%',
                textAlign: 'justify',
              }}
            >
              {infoEstado.descripcion}
            </Alert>
          </Box>
        </Grid>

        {/* Detalles del envío */}
        <Grid
          item
          xs={12}
          sm={10}
          md={5.5}
          sx={{
            mx: 'auto',
          }}
        >
          <AppTypography
            variant="baseBold"
            color="primary.dark"
            mb={2}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Detalles del envío:
          </AppTypography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#e0e0e0' }} />}
            gap={{ xs: 2, sm: 2 }}
            justifyContent="space-around"
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            {infoPersona(
              'Remitente',
              info.sender.name,
              info.sender.email,
              info.origin.city.cityName,
              info.origin.codStation
            )}
            {infoPersona(
              'Destinatario',
              info.recipient.name,
              info.recipient.email,
              info.destination.city.cityName,
              info.destination.codStation
            )}
          </Stack>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default TrackingResultCustomer;
