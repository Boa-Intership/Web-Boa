import { AppBox, AppContainer, AppTypography } from 'ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useFAQ } from '../hooks/useFAQ';

const FAQSection = () => {
  const { data: faqData, loading, error } = useFAQ();
  const faqs = faqData?.preguntas || [];

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

  if (!faqData) {
    return null;
  }

  return (
    <AppBox>
      <AppContainer sx={{ xs: 5, md: 8 }}>
        <Box sx={{ mb: 2 }}>
          <AppTypography variant="h2Bold" color="primary" textAlign="center">
            {faqData.titulo}
          </AppTypography>
        </Box>
        <Box sx={{ maxWidth: 700, mx: 'auto' }}>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 2, boxShadow: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${idx}`}
                id={`faq-header-${idx}`}
              >
                <AppTypography variant="baseBold">{faq.question}</AppTypography>
              </AccordionSummary>
              <AccordionDetails>
                <AppTypography variant="baseRegular" color="text.secondary">
                  {faq.answer}
                </AppTypography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </AppContainer>
    </AppBox>
  );
};

export default FAQSection;
