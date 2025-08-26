import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import portada from 'assets/portada.webp';

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
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: { xs: '50vh', sm: '60vh', md: 'calc(100vh - 300px)' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, md: 4 },
        mt: { xs: '-56px', md: '-64px' },
        pt: { xs: '56px', md: '64px' },
        position: 'relative',
        color: '#fff',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 1000, py: { xs: 4, md: 8 } }}>
        <Stack spacing={3} sx={{ color: 'inherit' }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Gestiona tus envíos de carga de forma rápida y sencilla.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              variant="outlined"
              placeholder="N° de guía o tracking"
              size="medium"
              value={tracking}
              onChange={(e) => onTrackingChange(e.target.value)}
              sx={{
                bgcolor: '#fff',
                borderRadius: 1,
                width: { xs: '100%', sm: 260 },
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

            <Button variant="contained" size="large" onClick={onTrack}>
              Rastrear
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
