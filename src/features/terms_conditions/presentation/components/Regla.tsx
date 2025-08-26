import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

interface ReglaProps {
  titulo: string;
  contenido: string;
}

function Regla({ titulo, contenido }: ReglaProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 3,
        '& p': { marginBottom: '4px' },
      }}
    >
      <Typography variant="body1" fontWeight={'bold'}>
        {titulo}
      </Typography>
      <ReactMarkdown>{contenido}</ReactMarkdown>
    </Box>
  );
}

export default Regla;
