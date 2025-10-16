import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Alert,
} from '@mui/material';
import { AppContainer, AppTypography, AppBox } from 'ui';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
import { useTerms } from '../hooks/useTerms';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Alerta } from '../../../Information/presentation/components/TipoAlerta';

function TerminosScreen() {
  const { data: terminosData, loading, error } = useTerms();
  const theme = useTheme();

  if (loading) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppBox>
    );
  }

  if (error) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 } }}>
        <AppContainer>
          <Alert severity="error">Error cargando contenido: {error}</Alert>
        </AppContainer>
      </AppBox>
    );
  }

  if (!terminosData) {
    return null;
  }
  return (
    <AppContainer sx={{ py: 4 }}>
      <AppTypography variant="h2Bold" mb={2} color={theme.palette.primary.main}>
        {terminosData.titulo}
      </AppTypography>
      <AppTypography variant="baseRegular" component="div" textAlign={'justify'}>
        <BlocksRenderer content={terminosData.descripcion} />
      </AppTypography>
      <AppTypography
        variant="h4Bold"
        color={theme.palette.primary.main}
        textAlign="center"
        mt={4}
        mb={2}
      >
        {terminosData.tituloContrato}
      </AppTypography>
      <Alerta
        titulo={terminosData.aviso.titulo}
        tipo={terminosData.aviso.tipo}
        contenido={terminosData.aviso.contenido}
      />
      {terminosData.reglas.map((regla, index) => (
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
              <BlocksRenderer content={regla.contenido} />
            </AppTypography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AppContainer>
  );
}

export default TerminosScreen;
