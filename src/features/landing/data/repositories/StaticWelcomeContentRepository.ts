import { WelcomeContent, WelcomeContentRepository } from '../../domain/entities/WelcomeContent';

export class StaticWelcomeContentRepository implements WelcomeContentRepository {
  async getWelcomeContent(): Promise<WelcomeContent> {
    // Datos estáticos de respaldo
    return {
      id: '1',
      title: 'Bienvenido a',
      highlightedWord: 'BOA Cargo',
      subtitle: 'Tu socio confiable en logística aérea',
      description:
        'Ofrecemos soluciones logísticas integrales y confiables para el transporte de carga aérea. Nuestro compromiso es brindar un servicio seguro y eficiente para tus envíos.',
      buttonText: 'Conoce más',
    };
  }
}
