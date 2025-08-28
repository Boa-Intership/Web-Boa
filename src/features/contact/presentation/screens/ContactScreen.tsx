import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
  Container,
} from '@mui/material';

import { ContactCardNacional } from '../components/ContactCardNacional';
import { ContactCardInternacional } from '../components/ContactCardInternacional';
import { ExpandMore, Home, Public } from '@mui/icons-material';
import AppContainer from '../../../../shared/components/AppContainer';

const oficinasNacionales = [
  {
    ciudad: 'Cochabamba',
    direccion: 'Avenida Killman ex Terminal de Aeropuerto Cochabamba',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '08:00 - 18:00',
      sabado: '08:00 - 12:00',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'La Paz',
    direccion: 'Carga Aeropuerto Internacional El Alto',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9996952671529!2d-68.17870070406249!3d-16.508407498958256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfa55ce2a94b%3A0x9c6b77f93da624ad!2sBoa%20Cargo!5e1!3m2!1ses-419!2sbo!4v1755658885105!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Tarija Ciudad',
    direccion:
      'Calle General Trigo entre Alejandro del Carpio, y Virginio Lema',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.2232816764404!2d-64.73616889100174!3d-21.535367962012895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e193625af5%3A0xc8390887b357f59d!2sAMASZONAS%20linea%20a%C3%A9rea!5e1!3m2!1ses-419!2sbo!4v1755659109521!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Tarija Ato',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Oruro',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Yacuiba',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      dias: 'Martes y Jueves',
      semana: '8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
];

const oficinasInternacionales = [
  {
    ciudad: 'Buenos Aires',
    direccion:
      'Autopista Ricchieri S/N, EP 1802 a 35 Km del centro Terminal "A"',
    contacto: ['+54 11 4322 4222', '+54 911 6052 1267'],
    email: 'sergio.dufo@crossracer.aero',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200668.9404677262!2d-58.47644675!3d-34.68774425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a7f531c7b5%3A0xfdd992892f9ccadb!2sAeroparque%20Internacional%20Jorge%20Newbery!5e1!3m2!1ses-419!2sbo!4v1755659240317!5m2!1ses-419!2sbo',
  },
];

export default function ContactScreen() {
  const [tabIndex, setTabIndex] = useState(0); // 0 = nacional, 1 = internacional
  const [expanded, setExpanded] = useState<number | false>(0); // para una expansión a la vezzz
  const oficinas =
    tabIndex === 0 ? oficinasNacionales : oficinasInternacionales;

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container sx={{ py: 4, minHeight: '80vh' }}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Nuestras Oficinas
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Información detallada de horarios de atención y contacto
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
        <Chip
          icon={<Home fontSize="small" />}
          label={`Nacional (${oficinasNacionales.length})`}
          color="primary"
          variant={tabIndex === 0 ? 'filled' : 'outlined'}
          onClick={() => setTabIndex(0)}
          sx={{
            p: 1.5,
          }}
        />
        {/*** '&:focus': { outline: 'none' }, */}
        <Chip
          icon={<Public fontSize="small" />}
          label={`Internacional (${oficinasInternacionales.length})`}
          color="primary"
          variant={tabIndex === 1 ? 'filled' : 'outlined'}
          onClick={() => setTabIndex(1)}
          sx={{
            p: 1.5,
          }}
        />
      </Box>

      {oficinas.map((oficina, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ my: 2, backgroundColor: '#FAFAFA' }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              fontWeight="bold"
              fontSize="1.1rem"
              color="primary"
              my={1}
            >
              {oficina.ciudad}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {tabIndex === 0 ? (
              <ContactCardNacional {...oficina} />
            ) : (
              <ContactCardInternacional {...oficina} />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
