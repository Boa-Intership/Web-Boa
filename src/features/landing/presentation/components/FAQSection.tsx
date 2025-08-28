import AppBox from '../../../../shared/components/AppBox';
import AppContainer from '../../../../shared/components/AppContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';

const faqs = [
  {
    question: '¿Cuáles son los horarios de atención de BOA Cargo?',
    answer:
      'Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 14:00. Puedes contactarnos por teléfono, correo o chat en vivo durante estos horarios.',
  },
  {
    question: '¿Qué restricciones existen para enviar paquetes?',
    answer:
      'No se permite el envío de materiales peligrosos, sustancias prohibidas, dinero en efectivo, armas, ni productos perecederos sin embalaje adecuado. Consulta nuestras políticas para más detalles.',
  },
  {
    question: '¿Qué debo hacer si mi paquete se retrasa o se pierde?',
    answer:
      'Si tu paquete se retrasa o no llega, comunícate con nuestro equipo de atención al cliente para iniciar el proceso de rastreo y reclamación. Te ayudaremos a resolver cualquier inconveniente.',
  },
  {
    question: '¿Cómo puedo rastrear mi paquete?',
    answer:
      'Puedes rastrear tu paquete ingresando el número de guía en nuestra página web o en la sección de seguimiento. También puedes recibir notificaciones por correo o SMS.',
  },
  {
    question: '¿Cómo funciona el pre-registro de envíos?',
    answer:
      'El pre-registro te permite agilizar el proceso de envío. Registra los datos de tu paquete en línea y presenta el código generado en la oficina para completar el envío.',
  },
];

const FAQSection = () => (
  <AppBox sx={{ xs: 5, md: 8, background: 'background.paper' }}>
    <AppContainer>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="primary">
          Preguntas Frecuentes
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 700, mx: 'auto' }}>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ mb: 2, boxShadow: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content-${idx}`}
              id={`faq-header-${idx}`}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </AppContainer>
  </AppBox>
);

export default FAQSection;
