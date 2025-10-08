export interface PreRegistroModel {
  id: number;
  createdAt: string;
  codePR: string;
  sender: Persona;
  recipient: Persona;
  origin: Estacion;
  destination: Estacion;
  cargoType: CargoType;
  billingData: BillingData;
  estimatedCost: string;
}

export interface Persona {
  id: number;
  nit: string;
  documentType: number;
  complement: string | null;
  name: string;
  address: string | null;
  phone: string;
  email: string;
}

export interface Estacion {
  id: number;
  codStation: string;
  nameStation: string;
  city: Ciudad;
  typeStation: string;
}

export interface Ciudad {
  id: number;
  cityCode: string;
  cityName: string;
  countryID: number;
}

export interface CargoType {
  name: string;
  code: string;
  id: number;
}

export interface BillingData {
  businessName: string;
  docType: number;
  nit: number;
  complement: string | null;
  id: number;
}
