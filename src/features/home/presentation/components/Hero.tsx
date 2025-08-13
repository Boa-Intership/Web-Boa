import { Box, Typography, Button, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import portada from '../../../../assets/portada.png';

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
    <Box
    
      id="hero-section"
      sx={{
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
        <Stack>
          <Typography>  Gestiona tus envíos de carga de forma rápida y sencilla.
          </Typography>
          

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <TextField
              variant="outlined"
              placeholder="N° de guía o tracking" 
              size="medium"
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
