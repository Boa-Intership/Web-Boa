import { FAQContent, FAQContentRepository } from '../../domain/entities/FAQContent';

export class StaticFAQRepository implements FAQContentRepository {
  async getFAQContent(): Promise<FAQContent> {
    // Datos por defecto cuando Strapi no está disponible
    return {
      id: 'default',
      titulo: 'Preguntas Frecuentes',
      activo: true,
      preguntas: [
        {
          id: '1',
          question: '¿Cuáles son los horarios de atención de BOA Cargo?',
          answer:
            'Nuestro horario de atención es de lunes a viernes de 8:00 a 16:00 y sábados de 9:00 a 14:00.',
        },
        {
          id: '2',
          question: '¿Qué tipos de carga acepta BOA Cargo?',
          answer:
            'Aceptamos carga general, perecederos, peligrosos, animales vivos, y más. Consulta nuestras categorías.',
        },
        {
          id: '3',
          question: '¿Cuál es el plazo de entrega?',
          answer:
            'Los plazos varían según el destino y tipo de carga. Contáctanos para más información.',
        },
      ],
    };
  }
}
