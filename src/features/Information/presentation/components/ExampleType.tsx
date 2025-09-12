import { Box, Typography } from '@mui/material';
import { AppTypography } from 'ui';

type ExampleTypeProps = {
  title: string;
  description: string;
  image: string;
};

function ExampleType({ title, description, image }: ExampleTypeProps) {
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
          width: '90%',
          borderRadius: 2,
          overflow: 'hidden',
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />

        {/* Capa azulada encima */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 45, 87, 0.2)', // azul semitransparente
          }}
        />
      </Box>

      {/* Texto */}
      <Box
        sx={{
          textAlign: 'center',
          flexDirection: 'column',
          width: '90%',
        }}
      >
        <AppTypography variant="h4Bold" color="primary.dark">
          {title}
        </AppTypography>
        <AppTypography variant="h4Regular">{description}</AppTypography>
      </Box>
    </Box>
  );
}

export default ExampleType;
