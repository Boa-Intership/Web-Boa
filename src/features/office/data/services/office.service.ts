import axios from 'axios';
//import { httpClient } from '@/config/httpClient';
import { Oficina } from '../models/office.model';

const API_URL = 'http://localhost:1337/api/oficinas?populate=*';
//const API_URL = `${httpClient}/oficinas?populate=*`;
//const API_URL = '/oficinas?populate=*';

export const OfficeService = {
  async getAll(): Promise<Oficina[]> {
    const res = await axios.get(API_URL);
    return res.data.data as Oficina[];
  },

  async getByRegion(region: 'Nacional' | 'Internacional'): Promise<Oficina[]> {
    const all = await this.getAll();
    return all.filter((of) => of.RegionOficinas === region);
  },
};
