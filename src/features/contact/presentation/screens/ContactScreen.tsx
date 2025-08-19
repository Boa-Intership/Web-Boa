import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
} from '@mui/material';

import { ContactCardNacional } from '../components/ContactCardNacional';
import { ContactCardInternacional } from '../components/ContactCardInternacional';
import { Home, Public, ExpandMore } from "@mui/icons-material";

const oficinasNacionales = [
  {
    ciudad: 'Cochabamba',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      semana: '08:00 - 18:00',
      sabado: '08:00 - 12:00',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'La Paz',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      semana: 'Martes y Jueves 8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Tarija Ciudad',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      semana: 'Martes y Jueves 8:30 - 16:00',
      sabado: 'Cerrado',
      feriados: 'Cerrado',
    },
    contacto: ['(+591) 72207628', '(+591) 5112473'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'Tarija Ato',
    direccion: 'Avenida del Ejército entre Avenida Tacna y Tarapacá',
    horarios: {
      semana: 'Martes y Jueves 8:30 - 16:00',
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
      semana: 'Martes y Jueves 8:30 - 16:00',
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
    direccion: 'Autopista Ricchieri S/N, EP 1802 a 35 Km del centro Terminal "A"',
    contacto: ['+54 11 4322 4222', '+54 911 6052 1267'],
    email: 'sergio.dufo@crossracer.aero',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2793891591445!2d-58.536492924524256!3d-34.64669777294006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8fd7632e011%3A0x8b20a9a3cb1ff00f!2sTerminal%20A%2C%20Ezeiza!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
];

export default function ContactScreen() {
  const [tabIndex, setTabIndex] = useState(0);
  const oficinas = tabIndex === 0 ? oficinasNacionales : oficinasInternacionales;

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Nuestras Oficinas
      </Typography>
      <Typography variant="body2" color="textSecondary" mt={1}>
        Información detallada de horarios de atención y contacto
      </Typography>
      
      <Box sx={{ display: "flex", gap: 2, my: 2 }}>
        <Chip
          icon={<Home fontSize="small" />}
          label={`Nacional (${oficinasNacionales.length})`}
          color="primary"
          variant={tabIndex === 0 ? "filled" : "outlined"}
          onClick={() => setTabIndex(0)}
          sx={{
            p: 1.5,
            borderRadius: "999px",
          }}
        />
        <Chip
          icon={<Public fontSize="small" />}
          label={`Internacional (${oficinasInternacionales.length})`}
          color="primary"
          variant={tabIndex === 1 ? "filled" : "outlined"}
          onClick={() => setTabIndex(1)}
          sx={{
            p: 1.5,
            borderRadius: "999px",
          }}
        />
      </Box>

      {oficinas.map((oficina, index) => (
        <Accordion key={index} defaultExpanded={index === 0} sx={{my:2}}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight="bold" fontSize="1.1rem" color='primary'>
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
    </Box>
  );
}
