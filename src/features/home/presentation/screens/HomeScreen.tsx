import React, { useState } from 'react';
import { Box, Stack, TextField, Button as MuiButton, InputAdornment, Typography, Container } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import HomeActionButton from '../components/HomeActionButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [tracking, setTracking] = useState('');

  const handleTrack = () => {
    // Aquí iría la lógica de rastreo
    alert(`Buscando información para: ${tracking}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      {/* Título, descripción y buscador */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between" mb={6}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Bienvenido a BOA Cargo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Gestiona tus envíos de carga de forma rápida y sencilla. Consulta información, cotiza y realiza tu pre-registro.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: { xs: 2, sm: 0 } }}>
          <TextField
            label="N° de guía o tracking"
            variant="outlined"
            value={tracking}
            onChange={e => setTracking(e.target.value)}
            size="small"
            sx={{ width: { xs: 160, sm: 220 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <MuiButton variant="contained" color="primary" onClick={handleTrack} sx={{ height: 40, minWidth: 100 }}>
            Rastrear
          </MuiButton>
        </Stack>
      </Stack>
      {/* Botones de acción */}
      <Container maxWidth="md" disableGutters>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center" justifyContent="center">
          <HomeActionButton
            label="Información "
            icon={<InfoIcon fontSize="large" color="primary" />}
            description="¿Que puedo enviar en Boa cargo"
            onClick={() => navigate(ROUTES.INFORMACION)}
          />
          <HomeActionButton
            label="Cotizar envío"
            icon={<AttachMoneyIcon fontSize="large" color="primary" />}
            description="¿Cual es el precio de mi envio?"
            onClick={() => navigate(ROUTES.COTIZAR)}
          />
          <HomeActionButton
            label="Registro envio"
            icon={<AssignmentIcon fontSize="large" color="primary" />}
            description="Acelera el proceso de envio."
            onClick={() => navigate(ROUTES.PREREGISTRO)}
          />
        </Stack>
      </Container>
    </Container>
  );
};

export default HomeScreen; 