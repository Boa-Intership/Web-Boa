import { strapiClient } from '@/config';
import { Oficina } from '../models/office.model';

export const OfficeService = {
  async getAll(): Promise<Oficina[]> {
    const res = await strapiClient.get<{ data: Oficina[] }>('/oficinas?populate=*');
    return res.data as Oficina[];
  },

  async getByRegion(region: 'Nacional' | 'Internacional'): Promise<Oficina[]> {
    const all = await this.getAll();
    return all.filter((of) => of.RegionOficinas === region);
  },
};
