import { Itinerario, DiaCorto } from '../domain/Itinerario';
import csvData from './itinerarios.csv?raw';

// Mapping de códigos IATA a nombres de ciudades
const CIUDADES_MAP: Record<string, string> = {
  // Bolivia
  CBB: 'Cochabamba',
  LPB: 'La Paz',
  VVI: 'Santa Cruz',
  SRE: 'Sucre',
  TJA: 'Tarija',
  UYU: 'Uyuni',
  ORU: 'Oruro',
  RBQ: 'Rurrenabaque',
  TDD: 'Trinidad',
  CIJ: 'Cobija',
  BYC: 'Yacuiba',
  ASU: 'Asunción',

  // Internacionales
  LIM: 'Lima',
  EZE: 'Buenos Aires',
  GRU: 'São Paulo',
  SCL: 'Santiago',
  CCS: 'Caracas',
  PTY: 'Ciudad de Panamá',
  MIA: 'Miami',
  MAD: 'Madrid',
  BCN: 'Barcelona',
  HAV: 'La Habana',
};

// Mapeo de columnas de días a nombres cortos
const DIAS_MAP: Record<string, DiaCorto> = {
  LUN: 'Lun',
  MAR: 'Mar',
  MIE: 'Mié',
  JUE: 'Jue',
  VIE: 'Vie',
  SAB: 'Sáb',
  DOM: 'Dom',
};

function parseCsvToItinerarios(csvString: string): Itinerario[] {
  const lines = csvString.trim().split('\n');

  return lines.slice(1).map((line, index) => {
    const values = line.split(',');
    const vuelo = values[0];
    const origenCodigo = values[1];
    const destinoCodigo = values[2];
    const salida = values[3];
    const llegada = values[4];

    // Procesar días de la semana
    const dias: DiaCorto[] = [];
    const diasColumns = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];

    diasColumns.forEach((dia, colIndex) => {
      const cellValue = values[5 + colIndex];
      if (cellValue && cellValue.trim() === 'X') {
        dias.push(DIAS_MAP[dia]);
      }
    });

    // Formatear horas para asegurar formato HH:MM:SS
    const formatTime = (timeStr: string): string => {
      if (!timeStr) return '00:00';
      const parts = timeStr.split(':');
      if (parts.length === 2) {
        return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
      }
      return timeStr;
    };

    return {
      id: `OB-${vuelo}-${index + 1}`,
      vuelo: `OB-${vuelo}`,
      origenCodigo,
      origenNombre: CIUDADES_MAP[origenCodigo] || origenCodigo,
      destinoCodigo,
      destinoNombre: CIUDADES_MAP[destinoCodigo] || destinoCodigo,
      salida: formatTime(salida),
      llegada: formatTime(llegada),
      dias,
    };
  });
}

export const ITINERARIOS_MOCK: Itinerario[] = parseCsvToItinerarios(csvData);
