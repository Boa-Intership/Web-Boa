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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.46097572249175!2d-66.17292040539294!3d-17.41020684101914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37396c09e0d11%3A0x237f368416d20b08!2sBoA%20Cargo!5e1!3m2!1ses-419!2sbo!4v1756733452865!5m2!1ses-419!2sbo',
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.7446107713931!2d-63.13665556496211!3d-17.653025772924618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e1e9759eefa1%3A0x796984b8f4e93738!2sBoa%20Cargo!5e1!3m2!1ses-419!2sbo!4v1756732579013!5m2!1ses-419!2sbo",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d739.6045702968908!2d-65.26463737211203!3d-19.0401604109328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc9004e30c38f%3A0xe4ea8e5941daf7d6!2sBoa%20Sucre!5e1!3m2!1ses-419!2sbo!4v1756733808018!5m2!1ses-419!2sbo",
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.79061172755195!2d-64.73568347480199!3d-21.535221559844434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e1968755f9%3A0x93de1540736be998!2sBOA%20Agencia%20De%20Pasajes!5e1!3m2!1ses-419!2sbo!4v1756734018551!5m2!1ses-419!2sbo',
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
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.262327722714!2d-64.70915345770842!3d-21.547059923421873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940639b03e3068cf%3A0x66a2595846fe0c32!2sBoa%20Cargo%20Tarija!5e1!3m2!1ses-419!2sbo!4v1756734118940!5m2!1ses-419!2sbo',
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.68181211157554!2d-64.91946662503668!3d-14.822474272657304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93dd71dad45d6f23%3A0x4622815d91c759e8!2sAeropuerto%20Teniente%20Jorge%20Henrich%20Arauz%20(TTD)!5e1!3m2!1ses-419!2sbo!4v1756734277808!5m2!1ses-419!2sbo",
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.71701968828353!2d-67.11512810584186!3d-17.971306254463993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b10ed57fe6af%3A0x65aa06787544bc4c!2sBOA%20CARGO!5e1!3m2!1ses-419!2sbo!4v1756734589965!5m2!1ses-419!2sbo',
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d929.6439442346699!2d-67.07951272249564!3d-17.96170594572893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b743341d029b%3A0x7a086e6df0978676!2sAeropuerto%20Internacional%20Juan%20Mendoza!5e1!3m2!1ses-419!2sbo!4v1756734745122!5m2!1ses-419!2sbo",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.5396738374519!2d-66.84345955800724!3d-20.445001042187457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93ffbaedbf7d0749%3A0x6e7f4fcef28579ad!2sAeropuerto%20Internacional%20La%20Joya%20Andina!5e1!3m2!1ses-419!2sbo!4v1756734951778!5m2!1ses-419!2sbo",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.3032448195087!2d-68.75814583027434!3d-11.025681200026138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917eb0d73675c5c3%3A0x3f495a50a8580456!2sBoA!5e1!3m2!1ses-419!2sbo!4v1756735715057!5m2!1ses-419!2sbo",
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
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d897.0200470947035!2d-63.65698907017053!3d-21.965704548831088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940f2be809205bf1%3A0xe12e7040ba1274f3!2sAeropuerto%20de%20Yacuiba%20(BYC)!5e1!3m2!1ses-419!2sbo!4v1756735829535!5m2!1ses-419!2sbo',
  },
];

const oficinasInternacionales = [
  {
    ciudad: 'Buenos Aires',
    direccion: 'Autopista Richieri S/N, CP 1802 a 35 Km del sud oeste de Buenos Aires - Terminal \"A\" frente al mostrador 1',
    contacto: ['+54 11 4322 4222', '+54 911 6052 1267'],
    email: 'sergio.dufo@crossracer.aero',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6460028244624!2d-58.541010292982364!3d-34.814490500666714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd0f4e2dea557%3A0xf19b6f81d441cc3b!2sAeropuerto%20Internacional%20Ezeiza!5e1!3m2!1ses-419!2sbo!4v1756736401748!5m2!1ses-419!2sbo',
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
