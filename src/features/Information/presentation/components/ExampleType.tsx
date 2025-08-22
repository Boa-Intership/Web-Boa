import { Box, Typography, Fade } from '@mui/material';

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
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: 150, borderRadius: 4, mb: 1 }}
        loading="lazy"
      />
      <Box
        sx={{
          textAlign: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
}

export default ExampleType;
