import { Oficina } from '../../data/models/office.model';

export const defaultOficinas: Oficina[] = [
  {
    id: 1,
    Ciudad: 'Cochabamba',
    RegionOficinas: 'Nacional',
    Email: null,
    Horarios: [
      { id: 1, Dia: 'Lunes a Viernes', Hora: '08:00 - 17:00' },
      { id: 2, Dia: 'Sábados', Hora: '08:00 - 16:00' },
      { id: 3, Dia: 'Domingos y Feriados', Hora: 'No hay atención' },
    ],
    Ubicacion: {
      id: 1,
      Descripcion: 'Avenida Killman ex Terminal de Aeropuerto Cochabamba',
      URL: 'https://...',
    },
    Contacto: [{ id: 1, Numero: '(+591) (4) 4150003' }],
  },
  // ...otros objetos de ejemplo nacional/internacional
];
