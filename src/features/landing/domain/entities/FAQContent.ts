export interface FAQContent {
  id: string;
  titulo: string;
  activo: boolean;
  preguntas: Pregunta[];
}

interface Pregunta {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContentRepository {
  getFAQContent(): Promise<FAQContent>;
}
