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
              text: 'De acuerdo con las normativas internacionales de la ',
              type: 'text',
            },
            {
              url: 'https://www2023.icao.int/Meetings/atconf6/Documents/WorkingPapers/ATConf6-ip007_es.pdf',
              type: 'link',
              children: [
                {
                  bold: true,
                  text: 'OACI',
                  type: 'text',
                },
              ],
            },
            {
              text: ' y nacionales de la ',
              type: 'text',
            },
            {
              url: 'https://www.dgac.gob.bo/wp-content/uploads/2022/10/RAB-999E3_para-public.pdf',
              type: 'link',
              children: [
                {
                  bold: true,
                  text: 'DGAC',
                  type: 'text',
                },
              ],
            },
            {
              text: ' Bolivia, el manejo seguro de la carga aérea en ',
              type: 'text',
            },
            {
              bold: true,
              text: 'vuelos de pasajeros',
              type: 'text',
            },
            {
              text: ' es prioritario para garantizar la integridad de la aeronave, los pasajeros y la tripulación.',
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
                bold: true,
                text: 'AVISO IMPORTANTE: ',
                type: 'text',
              },
              {
                text: 'Se r',
                type: 'text',
              },
              {
                text: 'ecomienda',
                type: 'text',
                underline: true,
              },
              {
                text: ' al remitente que por su cuenta asuma la contratación de un seguro para',
                type: 'text',
              },
              {
                text: ' proteger ',
                type: 'text',
                italic: true,
              },
              {
                text: 'sus intereses contra toda eventualidad.',
                type: 'text',
              },
            ],
          },
        ] as BlocksContent,
      },
      reglas: [
        {
          id: 339,
          titulo: 'PRIMERA.- PARTES',
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
            {
              type: 'paragraph',
              children: [
                {
                  text: 'b) Remitente, es la persona natural o jurídica que embarca y envía la carga.',
                  type: 'text',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'c) Destinatario, es la persona natural o jurídica a quien va dirigida la carga.',
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
