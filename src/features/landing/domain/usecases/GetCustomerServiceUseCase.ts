import {
  CustomerServiceContent,
  CustomerServiceRepository,
} from '../entities/CustomerServiceContent';

export class GetCustomerServiceUseCase {
  constructor(private readonly repository: CustomerServiceRepository) {}

  async execute(): Promise<CustomerServiceContent> {
    try {
      const customerService = await this.repository.getCustomerService();

      // Validar que esté activo
      if (!customerService.activo) {
        throw new Error('Customer Service section is not active');
      }

      // Ordenar elementos por orden
      const sortedElementosIzquierda = [...customerService.elementos_izquierda].sort(
        (a, b) => a.orden - b.orden
      );
      const sortedElementosDerecha = [...customerService.elementos_derecha].sort(
        (a, b) => a.orden - b.orden
      );

      return {
        ...customerService,
        elementos_izquierda: sortedElementosIzquierda,
        elementos_derecha: sortedElementosDerecha,
      };
    } catch (error) {
      console.error('Error getting customer service:', error);
      throw error;
    }
  }
}
