import { WelcomeContent, WelcomeContentRepository } from '../entities/WelcomeContent';

export class GetWelcomeContentUseCase {
  constructor(private readonly repository: WelcomeContentRepository) {}

  async execute(): Promise<WelcomeContent> {
    try {
      return await this.repository.getWelcomeContent();
    } catch (error) {
      console.error('Error fetching welcome content:', error);
      // Fallback a contenido por defecto
      return this.getDefaultContent();
    }
  }

  private getDefaultContent(): WelcomeContent {
    return {
      id: 'default',
      title: '¡Lleva ',
      highlightedWord: 'tu carga',
      subtitle: 'con nosotros!',
      description:
        'SERVICIOS DE CARGA AEREA PARA ENVIOS NACIONALES E INTERNACIONALES. GESTIONA TUS PAQUETES CON FACILIDAD Y TRANSPARENCIA.',
      buttonText: 'Comenzar',
    };
  }
}
