export interface TrackingCustomerEntity {
  id: number;
  codeTracking: string;
  status: string;
  nroPieces: number;
  sender: Persona;
  receiver: Persona;
  origin: Airport;
  destination: Airport;
}

interface Persona {
  id: number;
  name: string;
  email: string;
}

interface Airport {
  id: number;
  codAirport: string;
  nameAirport: string;
  city: City;
}

interface City {
  id: number;
  cityCode: string;
  cityName: string;
  countryID: number;
}

export interface TrackingCustomerRepository {
  getTrackingCustomer(codeTracking: string): Promise<TrackingCustomerEntity>;
}
