export interface FlightEntity {
  id: string; // e.g., "AA1234-2025-10-27"
  code: string; // e.g., "AA1234"
  date: string; // ISO date e.g., "2025-10-27"
  route: {
    origin: string; // IATA code
    destination: string; // IATA code
  };
  cargoType: string; // e.g., "Carga General"
  totalWeightKg?: number;
  manifestCount?: number;
}

export type FlightId = FlightEntity['id'];
