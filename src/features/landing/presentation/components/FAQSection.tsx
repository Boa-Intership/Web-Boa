import { AppBox, AppContainer, AppTypography } from 'ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';

const faqs = [
  {
    question: '¿Cuáles son los horarios de atención de BOA Cargo?',
    answer:
      'Nuestro horario de atención es de lunes a viernes de 8:00 a 16:00 y sábados de 9:00 a 14:00. Puedes contactarnos por teléfono, correo o chat en vivo durante estos horarios.',
  },
  {
    question: '¿Por qué la carga debe estar abierta antes de ser aceptada?',
    answer:
      'La presentación de la carga en condición abierta constituye un requisito indispensable para llevar a cabo los procesos de verificación e inspección conforme a las normativas internacionales de la OACI y a la regulación nacional de la DGAC Bolivia. Este procedimiento garantiza la detección de artículos prohibidos o no declarados. De esta manera, se preserva la integridad de la operación aérea, los pasajeros, la tripulación y la aeronave.',
  },
  {
    question: '¿Por qué se exige que la carga sea presentada al menos 2 horas antes del vuelo?',
    answer:
      'La entrega anticipada de la carga, con un margen mínimo de dos horas previo a la salida del vuelo, responde a la necesidad de realizar los controles de seguridad establecidos por la OACI y la DGAC Bolivia. Dicho intervalo garantiza el tiempo suficiente para ejecutar inspecciones rigurosas, verificar documentación, aplicar medidas de sellado y certificar el cumplimiento de los estándares de seguridad aeronáutica.',
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
  <AppContainer sx={{ xs: 5, md: 8 }}>
    <Box sx={{ mb: 2, textAlign: 'center' }}>
      <AppTypography variant="h4Bold" color="primary">
        Preguntas Frecuentes
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
            <AppTypography variant="smallBold">{faq.question}</AppTypography>
          </AccordionSummary>
          <AccordionDetails>
            <AppTypography variant="smallRegular" color="text.secondary">
              {faq.answer}
            </AppTypography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </AppContainer>
);

export default FAQSection;
