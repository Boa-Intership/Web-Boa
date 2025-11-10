import {
  GeneralInfoContent,
  GeneralInfoRepository,
} from '../../domain/entities/GeneralInfoContent';

export class StaticGeneralInfoRepository implements GeneralInfoRepository {
  async getGeneralInfo(): Promise<GeneralInfoContent> {
    // Datos por defecto cuando Strapi no está disponible
    return {
      id: 'default',
      titulo: 'Información General',
      subtitulo:
        'Encuentra aquí información relevante sobre nuestros servicios, normativa y condiciones para tus envíos.',
      activo: true,
      elementos: [
        {
          id: '1',
          titulo: 'Tipos de carga y normativa',
          descripcion:
            'Conoce los diferentes tipos de carga que puedes enviar y la normativa vigente para cada uno.',
          imagen: 'https://via.placeholder.com/600x400?text=Tipos+de+Carga',
          enlace: '/tipos-cargas',
          orden: 1,
        },
        {
          id: '2',
          titulo: 'Términos y condiciones',
          descripcion:
            'Consulta los términos y condiciones para el envío de paquetes y servicios de BOA Cargo.',
          imagen:
            'https://cdnboa-aab8augderd2cff4.a02.azurefd.net/images/e0f60c30-addd-4251-9466-98580f5c0870.png',
          enlace: '/terminos',
          orden: 2,
        },
      ],
    };
  }
}
