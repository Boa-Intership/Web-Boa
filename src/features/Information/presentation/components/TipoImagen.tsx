import { Box } from '@mui/material';
import { AppTypography } from 'ui';

interface TipoImagenProps {
  titulo: string;
  descripcion?: string | null;
  imagen_url: string;
}

function TipoImagen({ titulo, descripcion, imagen_url }: TipoImagenProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {/* Imagen con overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100%', //aqui
          height: 320,
          // borderWidth: 2,
          // borderStyle: 'solid',
          // borderColor: 'primary.light',
          overflow: 'hidden',
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={imagen_url}
          alt={titulo}
          sx={{
            width: '100%',
            borderRadius: 4,
            height: { xs: 'auto', sm: '320px' },
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />

        {/* Capa azulada encima */}
        <Box
          sx={{
            position: 'absolute',
            borderRadius: 4,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(11, 114, 155, 0.3)', // azul semitransparente
          }}
        />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          textAlign: 'start', //aqui
          flexDirection: 'column',
          width: '95%',
        }}
      >
        <AppTypography variant="baseBold" color="primary.dark">
          {titulo}
        </AppTypography>
        <AppTypography variant="smallRegular">{descripcion}</AppTypography>
      </Box>
    </Box>
  );
}

export default TipoImagen;
