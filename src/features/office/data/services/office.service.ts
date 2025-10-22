import { strapiClient } from '@/config/httpClient';
import { Oficina } from '../models/office.model';

//const API_URL = 'http://localhost:1337/api/oficinas?populate=*';

export const OfficeService = {
  async getAll(): Promise<Oficina[]> {
    //const res = await axios.get(API_URL);
    const res = await strapiClient.get('/oficinas?populate=*');
    return res.data as Oficina[];
  },

  async getByRegion(region: 'Nacional' | 'Internacional'): Promise<Oficina[]> {
    const all = await this.getAll();
    return all.filter((of) => of.RegionOficinas === region);
  },
};
