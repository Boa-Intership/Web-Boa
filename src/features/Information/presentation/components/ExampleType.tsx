import { Box, Typography, Fade } from '@mui/material';

type ExampleTypeProps = {
  title: string;
  description: string;
  image: string;
  showImages?: boolean; // para controlar la animación
};

function ExampleType({
  title,
  description,
  image,
  showImages = true,
}: ExampleTypeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box>
        {image && (
          <Fade in={showImages} timeout={5000}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{ width: 150, borderRadius: 4 }}
              loading="lazy"
            />
          </Fade>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
}

export default ExampleType;
