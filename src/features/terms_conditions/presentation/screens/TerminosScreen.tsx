import { Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { reglasContrato } from '../components/reglasData';
import { AppContainer, AppTypography } from 'ui';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
import { terminosData } from '../components/terminosData';

function TerminosScreen() {
  const theme = useTheme();
  return (
    <AppContainer sx={{ py: 4 }}>
      <AppTypography variant="h2Bold" mb={2} color={theme.palette.primary.main}>
        Terminos y condiciones
      </AppTypography>
      <AppTypography variant="baseRegular" component="div" textAlign={'justify'}>
        <ReactMarkdown>{terminosData.infoSeguridadCarga}</ReactMarkdown>
      </AppTypography>
      <AppTypography
        variant="h4Bold"
        color={theme.palette.primary.main}
        textAlign="center"
        mt={4}
        mb={2}
      >
        {terminosData.subtitulo}
      </AppTypography>

      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <AppTypography variant="baseRegular" mb={2} ml={1} {...props} />
          ),
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
            <AppTypography variant="baseBold" component="span" color={theme.palette.primary.main}>
              {regla.titulo}
            </AppTypography>
          </AccordionSummary>
          <AccordionDetails>
            <AppTypography variant="baseRegular" component="div" textAlign={'justify'}>
              <ReactMarkdown>{regla.contenido}</ReactMarkdown>
            </AppTypography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AppContainer>
  );
}

export default TerminosScreen;
