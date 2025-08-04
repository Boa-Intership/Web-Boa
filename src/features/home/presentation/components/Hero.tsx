import { Box, Typography, Button } from '@mui/material';
import portada from '../../../../assets/portada.png'; // usa alias o ruta relativa según tengas

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${portada})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: { xs: 300, sm: 400, md: 500 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        py: 6,
        color: '#fff',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Bienvenido a BOA
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Encuentra y gestiona tu experiencia de vuelo
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Comenzar
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
