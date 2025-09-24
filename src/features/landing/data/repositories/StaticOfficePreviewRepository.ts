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
          nombre: 'Cochabamba',
          direccion: 'Av. Principal 123, Centro',
          telefono: '',
          horarios: '',
          orden: 1,
        },
        {
          id: '2',
          nombre: 'La Paz',
          direccion: 'Calle 45 #12-34, Zona Norte',
          telefono: '',
          horarios: '',
          orden: 2,
        },
        {
          id: '3',
          nombre: 'Santa Cruz',
          direccion: 'Carrera 78 #56-78, Zona Sur',
          telefono: '',
          horarios: '',
          orden: 3,
        },
      ],
    };
  }
}
