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

function TerminosScreen() {
  const theme = useTheme();
  return (
    <AppContainer>
      <Typography
        variant="h4"
        fontWeight={'bold'}
        mb={2}
        color={theme.palette.primary.main}
      >
        Terminos y condiciones
      </Typography>
      <Typography mb={2} textAlign={'justify'}>
        Tener términos y condiciones es fundamental para establecer un marco
        claro de reglas y responsabilidades entre una empresa y sus usuarios o
        clientes. Estos documentos definen los derechos, obligaciones y
        limitaciones de ambas partes, protegiendo legalmente a la empresa ante
        posibles malentendidos, reclamaciones o usos indebidos de sus productos
        o servicios.
      </Typography>
      <Typography mb={2}>
        Conoce los términos y condiciones que aceptas a la hora de usar los
        servicios de BoA Cargo
      </Typography>
      <Paper
        sx={{ p: 3, mb: 2, backgroundColor: theme.palette.background.default }}
      >
        <Typography
          variant="h6"
          fontWeight={'bold'}
          mb={2}
          color={theme.palette.primary.main}
          sx={{ textAlign: 'center' }}
        >
          CONTRATO DE TRANSPORTE AÉREO, TERMINOS Y CONDICIONES
        </Typography>
        <Typography mb={2} ml={1}>
          <strong>AVISO IMPORTANTE:</strong> Se recomienda al remitente que por
          su cuenta asuma la contratación de un seguro para proteger sus
          intereses contra toda eventualidad
        </Typography>
        {reglasContrato.map((regla, index) => (
          <Accordion
            key={index}
            defaultExpanded={index === 0}
            sx={{
              backgroundColor: '#fafafa',
              my: 2,
              border: '1px solid #f5f5f5ff',
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
      </Paper>
    </AppContainer>
  );
}

export default TerminosScreen;
