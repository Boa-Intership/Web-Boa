export interface TrackingCustomerModel {
  id: number;
  createdAt: string;
  codePR: string;
  airWaybill: string;
  sender: Persona;
  recipient: Persona;
  origin: Estacion;
  destination: Estacion;
  cargoType: CargoType;
  billingData: BillingData;
  estimatedCost: string;
  state: string;
  packages: Packages[];
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

export interface Packages {
  description: string;
  row: number;
  weight: number;
  height: number;
  width: number;
  length: number;
  pieces: number;
  id: number;
}
