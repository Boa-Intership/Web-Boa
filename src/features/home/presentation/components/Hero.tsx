import React from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import portada from 'assets/GGI_portada1.webp';
import { AppTypography } from 'ui';

interface HeroProps {
  tracking: string;
  onTrackingChange: (value: string) => void;
  onTrack: () => void;
}

const Hero: React.FC<HeroProps> = ({ tracking, onTrackingChange, onTrack }) => {
  return (
    <Box
      id="hero-section"
      sx={{
        backgroundImage: `url(${portada})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: { xs: '50vh', sm: '60vh', md: 'calc(100vh - 300px)' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'background.default',
      }}
    >
      <Box sx={{ width: '100%', py: { xs: 14, md: 14 }, px: 2 }}>
        <AppTypography
          variant="h1Bold"
          mb={2}
          sx={{
            textAlign: 'center',
          }}
        >
          Gestiona tus envíos de carga de forma rápida y sencilla.
        </AppTypography>
        <AppTypography
          variant="h4Regular"
          sx={{ textAlign: 'center', color: 'grey.200', mx: 'auto', my: 4 }}
        >
          Realiza el seguimiento de tus envios en tiempo real, con la seguridad y confianza de BoA
          Cargo.
        </AppTypography>

        {/* Buscador */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            placeholder="Código de tracking"
            size="small"
            value={tracking}
            onChange={(e) => onTrackingChange(e.target.value)}
            sx={{
              bgcolor: 'background.default',
              borderRadius: 2,
              flex: { xs: '1 1 100%', sm: '0 0 260px' }, // ancho flexible en móviles
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            size="medium"
            onClick={onTrack}
            sx={{ borderRadius: 2, px: 3 }}
          >
            Rastrear
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
