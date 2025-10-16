import { TermsEntity, TermsRepository } from '../entities/TermsEntity';
import { BlocksContent } from '@strapi/blocks-react-renderer';

export class GetTermsUseCase {
  constructor(private termsRepository: TermsRepository) {}
  async execute(): Promise<TermsEntity> {
    try {
      return await this.termsRepository.getTermsContent();
    } catch (error) {
      console.error('Error in GetTermsUseCase:', error);
      //fallback: contenido por defecto
      return this.getDefaultTerms();
    }
  }

  private getDefaultTerms(): TermsEntity {
    return {
      id: 0,
      titulo: 'Términos y Condiciones por Defecto',
      descripcion: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Se recomienda al remitente que por su cuenta asuma la contratación de un seguro para proteger sus intereses contra toda eventualidad.',
              type: 'text',
            },
          ],
        },
      ] as BlocksContent,
      activo: true,
      tituloContrato: 'Titulo Contrato por Defecto',
      aviso: {
        id: 0,
        titulo: 'Aviso por Defecto',
        tipo: 'info',
        contenido: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se recomienda al remitente que por su cuenta asuma la contratación de un seguro para proteger sus intereses contra toda eventualidad.',
                type: 'text',
              },
            ],
          },
        ] as BlocksContent,
      },
      reglas: [
        {
          id: 0,
          titulo: 'Regla por Defecto',
          contenido: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'a) Transportador, en adelante Boliviana de Aviación - BoA, es la línea aérea responsable del transporte.',
                  type: 'text',
                },
              ],
            },
          ] as BlocksContent,
        },
      ],
    };
  }
}
