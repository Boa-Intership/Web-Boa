import axios from 'axios';

export interface CargoType {
  id: number;
  name: string;
  code: string;
}

export const getCargoTypes = async (): Promise<CargoType[]> => {
  const response = await axios.get<CargoType[]>('api/cargo-type');
  return response.data;
};
