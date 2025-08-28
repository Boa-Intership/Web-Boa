import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import portada from 'assets/GGI_portada1.webp';

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
      <Box sx={{ width: '100%', maxWidth: 1000, py: { xs: 4, md: 8 }, px: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{
            fontSize: {
              xs: '1.5rem',
              md: '2.125rem',
            },
          }}
        >
          Gestiona tus envíos de carga de forma rápida y sencilla.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: 'grey.200', maxWidth: 600, mx: 'auto' }}
        >
          Realiza el seguimiento de tus envios en tiempo real, con la seguridad
          y confianza de BoA Cargo.
        </Typography>

        {/* Buscador */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            placeholder="N° de guía o tracking"
            size="small"
            value={tracking}
            onChange={(e) => onTrackingChange(e.target.value)}
            sx={{
              bgcolor: 'background.default',
              borderRadius: 10,
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
            sx={{ borderRadius: 10, px: 3 }}
          >
            Rastrear
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
