import {
  CorporateProfileContent,
  CorporateProfileRepository,
} from '../../domain/entities/CorporateProfileContent';

export class GetCorporateProfileUseCase {
  constructor(private readonly repository: CorporateProfileRepository) {}

  async execute(): Promise<CorporateProfileContent> {
    try {
      return await this.repository.getCorporateProfileContent();
    } catch (error) {
      console.error('Error fetching perfil corporativo:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }

  private getDefaultContent(): CorporateProfileContent {
    return {
      id: 'default',
      titulo: 'Sobre nosotros',
      descripcion:
        'Conoce nuestra historia, misión, visión y valores que guían a Boliviana de Aviación como empresa estratégica del transporte aéreo nacional e internacional.',
      textoBoton: 'Conocer más',
      enlaceBoton: '#',
      activo: true,
      imagenUrl: null,
    };
  }
}
