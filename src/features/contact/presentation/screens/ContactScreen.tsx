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
      semana: '08:00 - 17:00',
      sabado: '08:00 - 16:00',
      feriados: 'No hay atención',
    },
    contacto: ['(+591) 72223583', '(+591) (4) 4150000 int: 4243'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo',
  },
  {
    ciudad: 'La Paz',
    direccion: 'Carga Aeropuerto Internacional El Alto',
    horarios: {
      dias: 'Lunes a Viernes',
      semana: '08:00 - 17:00',
      sabado: '08:00 - 16:00',
      feriados: 'No hay atención',
    },
    contacto: ['(+591) 71730180', '(2) 2166531 int: 2051'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.9996952671529!2d-68.17870070406249!3d-16.508407498958256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfa55ce2a94b%3A0x9c6b77f93da624ad!2sBoa%20Cargo!5e1!3m2!1ses-419!2sbo!4v1755658885105!5m2!1ses-419!2sbo',
  },
  {
    ciudad: "Santa Cruz",
    direccion: "Carga Aeropuerto Viru Viru",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "08:00-17:00",
      sabado: "08:00-16:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 72206649", "(+591) (3) 3148300 int: 3051"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Sucre",
    direccion: "Av. Venezuela N°1221, zona central",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "07:00-12:00  / 13:30 17:00",
      sabado: "08:30-12:30",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 68581964", "(+591) (4) 6912325 int: 4850"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Tarija Ciudad",
    direccion: "Calle General Trigo entre Alejandro del Carpio, y Virginio Lema",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "08:30- 17:30",
      sabado: "08:30-14:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) (4) 6114222 int: 4750"],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.2232816764404!2d-64.73616889100174!3d-21.535367962012895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e193625af5%3A0xc8390887b357f59d!2sAMASZONAS%20linea%20a%C3%A9rea!5e1!3m2!1ses-419!2sbo!4v1755659109521!5m2!1ses-419!2sbo',
  },
  {
    ciudad: "Tarija Ato",
    direccion: "Carga Aeropuerto Oriel Lea Plaza  a lado de mostradores de check in BoA",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "08:00-12:00 / 16:00- 21:00",
      sabado: "08:00- 14:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 72242719"],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: "Trinidad",
    direccion: "Carga Aeropuerto Tte. Jorge Henrich Terminal de carga Trinidad",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "09:30-17:30",
      sabado: "09:30-17:30",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 71494371"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Oruro Ciudad",
    direccion: "Avenida del Ejercito entre Avenida Tacna y Tarapacá",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "08:00-18:00",
      sabado: "08:00-14:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 72207628", "(+591) (2) 5112473"],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
  {
    ciudad: "Oruro Ato",
    direccion: "Aeropuerto de Oruro  Juan Mendoza",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "08:00-12:00 / 16:00-19:00",
      sabado: "08:00-11:00  / 16:30-18:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 72207628", "(+591) (2) 5213500"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Uyuni",
    direccion: "Carretera Salida a Oruro Aeropuerto Joya Andina",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "07:00-12:00",
      sabado: "07:00-12:00",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 71821262"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Cobija",
    direccion: "Calle Ernesto Nishikawa # 50 entre Bahía y Antofagasta, paralela al Stadium",
    horarios: {
      dias: "Lunes a Viernes",
      semana: "07:00-16:30",
      sabado: "07:00 13:30",
      feriados: "No hay atención",
    },
    contacto: ["(+591) 72223582", "(+591) 71722437"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.2427567343798!2d-66.17328705743876!3d-17.410553563730986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37300391f6a6b%3A0x2a75e9628fecdbd8!2sEx%20aeropuerto!5e1!3m2!1ses-419!2sbo!4v1755658705331!5m2!1ses-419!2sbo",
  },
  {
    ciudad: 'Yacuiba',
    direccion: 'Aeropuerto Yacuiba',
    horarios: {
      dias: 'Martes y Jueves',
      semana: '08:30 - 16:00',
      sabado: 'No hay atención',
      feriados: 'No hay atención',
    },
    contacto: ['(+591) 72988105'],
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.474304142891!2d-64.72967912487061!3d-21.52816197636296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9406c703cce7babb%3A0xd54252c236a2b6f5!2sTarija%20Terminal%20de%20Buses!5e0!3m2!1ses-419!2sbo!4v1691872360586!5m2!1ses-419!2sbo',
  },
];

const oficinasInternacionales = [
  {
    ciudad: 'Buenos Aires',
    direccion: 'Autopista Richieri S/N, CP 1802 a 35 Km del sud oeste de Buenos Aires - Terminal \"A\" frente al mostrador 1',
    contacto: ['+54 11 4322 4222', '+54 911 6052 1267'],
    email: 'sergio.dufo@crossracer.aero',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200668.9404677262!2d-58.47644675!3d-34.68774425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a7f531c7b5%3A0xfdd992892f9ccadb!2sAeroparque%20Internacional%20Jorge%20Newbery!5e1!3m2!1ses-419!2sbo!4v1755659240317!5m2!1ses-419!2sbo',
  },
  {
    ciudad: "Sao Paulo",
    direccion: "Aeropuerto Internacional Guarulhos, Edificio TECA 4° andar, sala 4.26",
    contacto: ["+55 11 2445 5613", "+55 11 2402 7210"],
    email: "boacargobrasil@crossracer.com.br",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1648.8363711240559!2d-46.488514215496586!3d-23.426351045952824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8bda72e9706b%3A0xa7b8551b265de33e!2sEdif%C3%ADcio%20TECA!5e1!3m2!1ses-419!2sbo!4v1756485535500!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Madrid",
    direccion: "C. de Tierra de Barros, 2, 28823 Coslada, Madrid",
    contacto: ["+34 91 0133071"],
    email: "airmad@greenboxshipping.es",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5836.640550240668!2d-3.5455742!3d40.4320799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42306236de8d1d%3A0xd1f7e73ba329402e!2sC.%20de%20Tierra%20de%20Barros%2C%202%2C%2028823%20Coslada%2C%20Madrid%2C%20Espa%C3%B1a!5e1!3m2!1ses-419!2sbo!4v1756485856431!5m2!1ses-419!2sbohttps://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d813.741070897686!2d-3.5432740518962897!3d40.43193104277979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42306236de8d1d%3A0xd1f7e73ba329402e!2sC.%20de%20Tierra%20de%20Barros%2C%202%2C%2028823%20Coslada%2C%20Madrid%2C%20Espa%C3%B1a!5e1!3m2!1ses-419!2sbo!4v1756485911935!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Miami",
    direccion: "Miami Airport -W.F.S.  2361 N.W. 66 AVE BLDG-702 Miami FL 33122.",
    contacto: ["+1 305 492-8612-8618-8615-8621"],
    email: "boacargomia@boa.bo",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.1193824753984!2d-80.303883604859!3d25.79520897714485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b91e291cff27%3A0x861c2b5633d39142!2sWorldwide%20Flight%20Services%20(MIA%20702B)!5e1!3m2!1ses-419!2sbo!4v1756485987451!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Lima",
    direccion: "Av. Elmer Faucett N° 2851 - 4to. Piso Of. 409  Lima Cargo City",
    contacto: ["+51  938 296 638", "+51 1 574 1691"],
    email: "luftcargo.team@luftcargo.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1328.0486379306753!2d-77.10411865948004!3d-12.028724614914099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cc21d6209a9b%3A0x939ce97a9688100f!2sLima%20Cargo%20City!5e1!3m2!1ses-419!2sbo!4v1756486051120!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Caracas",
    direccion: "Antigua Aduana Aérea , sector 3B de carga Aérea lado este del Aeropuerto Simón Bolívar",
    contacto: ["+58 212 351 25 58", "+58 424 233 25 07"],
    email: "cviloria@siaca-logistics.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2833.759451399129!2d-66.9726710021084!3d10.603418145088284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5d146fde3bcf%3A0x9e09e0c6df9aa16a!2sAduana%20A%C3%A9rea%20de%20Maiquet%C3%ADa!5e1!3m2!1ses-419!2sbo!4v1756486114157!5m2!1ses-419!2sbo",
  },
  {
    ciudad: "Habana",
    direccion: "Carretera Wajay Km 1 ½, Aeropuerto Internacional “José Martí”, Boyeros, La Habana, Cuba.",
    contacto: ["+53 7649-9025", "+53 59939888"],
    email: "yasmani.melenilla@aerovaradero.avianet.cu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.3659057291692!2d-82.40792246362157!3d22.997599453355722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd6fea5acb6d31%3A0x6fba77f095296219!2sAeropuerto%20Internacional%20Jos%C3%A9%20Mart%C3%AD!5e1!3m2!1ses-419!2sbo!4v1756486189657!5m2!1ses-419!2sbo",
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
