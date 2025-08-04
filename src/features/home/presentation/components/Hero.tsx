import { Box, Typography, Button, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import portada from '../../../../assets/portada.png'; // Ajusta la ruta según tu estructura de carpetas

interface HeroProps {
  tracking: string;
  onTrackingChange: (value: string) => void;
  onTrack: () => void;
}

const Hero: React.FC<HeroProps> = ({ tracking, onTrackingChange, onTrack }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${portada})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 400px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        mt: '-64px', // 👈 importante
        pt: '64px',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 800, width: '100%' }}>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h3" fontWeight="bold">
            Bienvenido a BOA Cargo
          </Typography>
          <Typography variant="h6" color="inherit">
            Gestiona tus envíos de carga de forma rápida y sencilla.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <TextField
              variant="outlined"
              placeholder="N° de guía o tracking" 
              size="small"
              value={tracking}
              onChange={e => onTrackingChange(e.target.value)}
              sx={{
                bgcolor: '#fff',
                borderRadius: 1,
                width: { xs: '100%', sm: 220 },
                '& .MuiInputBase-input': { color: '#000' },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
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
            <Button variant="contained" size="medium" onClick={onTrack}>
              Rastrear
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
