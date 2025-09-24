import {
  OfficePreviewContent,
  OfficePreviewRepository,
} from '../../domain/entities/OfficePreviewContent';

export class StaticOfficePreviewRepository implements OfficePreviewRepository {
  async getOfficePreview(): Promise<OfficePreviewContent> {
    // Datos estáticos como fallback
    return {
      id: 'static-office-preview',
      titulo: 'Nuestras Oficinas',
      descripcion:
        'Visita nuestras oficinas estratégicamente ubicadas para brindarte el mejor servicio de envío y logística.',
      texto_boton: 'Ver Todas las Oficinas',
      enlace_boton: '/oficinas',
      activo: true,
      oficinas: [
        {
          id: '1',
          nombre: 'BOA Centro',
          direccion: 'Av. Principal 123, Centro',
          telefono: '+1 234-567-8900',
          horarios: 'Lun-Vie: 8:00-18:00, Sáb: 8:00-14:00',
          orden: 1,
        },
        {
          id: '2',
          nombre: 'BOA Norte',
          direccion: 'Calle 45 #12-34, Zona Norte',
          telefono: '+1 234-567-8901',
          horarios: 'Lun-Vie: 8:00-18:00, Sáb: 8:00-14:00',
          orden: 2,
        },
        {
          id: '3',
          nombre: 'BOA Sur',
          direccion: 'Carrera 78 #56-78, Zona Sur',
          telefono: '+1 234-567-8902',
          horarios: 'Lun-Vie: 8:00-17:00, Sáb: 9:00-13:00',
          orden: 3,
        },
      ],
    };
  }
}
