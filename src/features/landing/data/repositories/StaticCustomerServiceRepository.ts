import {
  CustomerServiceContent,
  CustomerServiceRepository,
} from '../../domain/entities/CustomerServiceContent';

export class StaticCustomerServiceRepository implements CustomerServiceRepository {
  async getCustomerService(): Promise<CustomerServiceContent> {
    // Datos por defecto cuando Strapi no está disponible
    return {
      id: 'default',
      titulo: 'Atención al Cliente',
      descripcion:
        'Nuestro equipo de atención al cliente está disponible para ayudarte con tus envíos, dudas y solicitudes. Contáctanos para recibir soporte personalizado y eficiente.',
      imagen_url: '',
      texto_boton: 'Contáctanos',
      enlace_boton: '/contacto',
      activo: true,
      elementos_izquierda: [
        {
          id: '1',
          texto: 'Soporte por teléfono y correo',
          orden: 1,
        },
        {
          id: '2',
          texto: 'Chat en vivo disponible',
          orden: 2,
        },
        {
          id: '3',
          texto: 'Horarios extendidos de atención',
          orden: 3,
        },
        {
          id: '4',
          texto: 'Personal capacitado',
          orden: 4,
        },
      ],
      elementos_derecha: [
        {
          id: '5',
          texto: 'Respuestas rápidas',
          orden: 1,
        },
        {
          id: '6',
          texto: 'Seguimiento de casos',
          orden: 2,
        },
        {
          id: '7',
          texto: 'Atención en todo el país',
          orden: 3,
        },
        {
          id: '8',
          texto: 'Soluciones personalizadas',
          orden: 4,
        },
      ],
    };
  }
}
