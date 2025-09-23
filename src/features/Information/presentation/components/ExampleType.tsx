import { Box } from '@mui/material';
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
          width: '95%', //aqui
          borderRadius: '9px',
          height: 300,
          // borderWidth: 2,
          // borderStyle: 'solid',
          // borderColor: 'primary.light',
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
            bgcolor: 'rgba(135, 205, 233, 0.18)', // azul semitransparente
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
          {title}
        </AppTypography>
        <AppTypography variant="smallRegular">{description}</AppTypography>
      </Box>
    </Box>
  );
}

export default ExampleType;
