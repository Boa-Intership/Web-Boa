import { FAQContent, FAQContentRepository } from '../entities/FAQContent';

export class GetFAQUseCase {
  constructor(private readonly repository: FAQContentRepository) {}
  async execute(): Promise<FAQContent> {
    try {
      return await this.repository.getFAQContent();
    } catch (error) {
      console.error('Error fetching FAQ content:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }
  private getDefaultContent(): FAQContent {
    return {
      id: 'default',
      titulo: 'Preguntas Frecuentes',
      activo: true,
      preguntas: [
        {
          id: '1',
          question: '¿Cuáles son los horarios de atención de BOA Cargo?',
          answer:
            'Nuestro horario de atención es de lunes a viernes de 8:00 a 16:00 y sábados de 9:00 a 14:00. Puedes contactarnos por teléfono, correo o chat en vivo durante estos horarios.',
        },
        {
          id: '2',
          question: '¿Por qué la carga debe estar abierta antes de ser aceptada?',
          answer:
            'La presentación de la carga en condición abierta constituye un requisito indispensable para llevar a cabo los procesos de verificación e inspección conforme a las normativas internacionales de la OACI y a la regulación nacional de la DGAC Bolivia. Este procedimiento garantiza la detección de artículos prohibidos o no declarados. De esta manera, se preserva la integridad de la operación aérea, los pasajeros, la tripulación y la aeronave.',
        },
        {
          id: '3',
          question:
            '¿Por qué se exige que la carga sea presentada al menos 2 horas antes del vuelo?',
          answer:
            'La entrega anticipada de la carga, con un margen mínimo de dos horas previo a la salida del vuelo, responde a la necesidad de realizar los controles de seguridad establecidos por la OACI y la DGAC Bolivia. Dicho intervalo garantiza el tiempo suficiente para ejecutar inspecciones rigurosas, verificar documentación, aplicar medidas de sellado y certificar el cumplimiento de los estándares de seguridad aeronáutica.',
        },
        {
          id: '4',
          question: '¿Qué restricciones existen para enviar paquetes?',
          answer:
            'No se permite el envío de materiales peligrosos, sustancias prohibidas, dinero en efectivo, armas, ni productos perecederos sin embalaje adecuado. Consulta nuestras políticas para más detalles.',
        },
        {
          id: '5',
          question: '¿Qué debo hacer si mi paquete se retrasa o se pierde?',
          answer:
            'Si tu paquete se retrasa o no llega, comunícate con nuestro equipo de atención al cliente para iniciar el proceso de rastreo y reclamación. Te ayudaremos a resolver cualquier inconveniente.',
        },
        {
          id: '6',
          question: '¿Cómo puedo rastrear mi paquete?',
          answer:
            'Puedes rastrear tu paquete ingresando el número de guía en nuestra página web o en la sección de seguimiento. También puedes recibir notificaciones por correo o SMS.',
        },
        {
          id: '7',
          question: '¿Cómo funciona el pre-registro de envíos?',
          answer:
            'El pre-registro te permite agilizar el proceso de envío. Registra los datos de tu paquete en línea y presenta el código generado en la oficina para completar el envío.',
        },
      ],
    };
  }
}
