import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { reglasContrato } from '../components/reglasData';
import { AppContainer } from 'ui';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
import { terminosData } from '../components/terminosData';

function TerminosScreen() {
  const theme = useTheme();
  return (
    <AppContainer sx={{ py: 4 }}>
      <Typography
        variant="h4"
        fontWeight={'bold'}
        mb={2}
        color={theme.palette.primary.main}
      >
        Terminos y Condiciones
      </Typography>
      <Typography variant="body1" component="div" textAlign={'justify'}>
        <ReactMarkdown>{terminosData.infoSeguridadCarga}</ReactMarkdown>
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        color={theme.palette.primary.main}
        textAlign="center"
        mt={4}
        mb={2}
      >
        {terminosData.subtitulo}
      </Typography>

      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => <Typography mb={2} ml={1} {...props} />,
        }}
      >
        {terminosData.nota}
      </ReactMarkdown>
      {reglasContrato.map((regla, index) => (
        <Accordion
          key={index}
          defaultExpanded={index === 0}
          sx={{
            backgroundColor: '#fafafa',
            my: 2,
            border: '1px solid #e4e4e4ff',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              component="span"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              {regla.titulo}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="div" textAlign={'justify'}>
              <ReactMarkdown>{regla.contenido}</ReactMarkdown>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AppContainer>
  );
}

export default TerminosScreen;
