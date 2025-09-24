// Entity para el contenido de Customer Service Section
export interface CustomerServiceItem {
  id: string;
  texto: string;
  orden: number;
}

export interface CustomerServiceContent {
  id: string;
  titulo: string;
  descripcion?: string;
  imagen_url?: string;
  texto_boton: string;
  enlace_boton: string;
  activo: boolean;
  elementos_izquierda: CustomerServiceItem[];
  elementos_derecha: CustomerServiceItem[];
}

// Repository contract
export interface CustomerServiceRepository {
  getCustomerService(): Promise<CustomerServiceContent>;
}
