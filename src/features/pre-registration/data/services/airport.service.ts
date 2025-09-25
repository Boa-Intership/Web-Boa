import axios from 'axios';

export interface Airport {
  id: number;
  codStation: string;
  nameStation: string;
  city: {
    id: number;
    cityCode: string;
    cityName: string;
    countryID: number;
  };
  typeStation: string;
}

export const getAirports = async (): Promise<Airport[]> => {
  const response = await axios.get<Airport[]>('api/airport');
  return response.data;
};
