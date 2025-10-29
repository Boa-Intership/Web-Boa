import { Oficina } from '../../data/models/office.model';
import { OfficeService } from '../../data/services/office.service';
import { useOfficeQuery } from './useOfficeQuery';

/**
 * Hook para traer oficinas nacionales
 * - Cachea las oficinas nacionales
 * - Sin refetch automático
 */
export const useOficinasNacionales = () => {
  return useOfficeQuery(['oficinas-nacionales'] as const, async () => {
    const all = await OfficeService.getAll();
    return all.filter((of) => of.RegionOficinas === 'Nacional');
  });
};

/**
 * Hook para traer oficinas internacionales
 * - Cachea las oficinas internacionales
 * - Sin refetch automático
 */
export const useOficinasInternacionales = () => {
  return useOfficeQuery(['oficinas-internacionales'] as const, async () => {
    const all = await OfficeService.getAll();
    return all.filter((of) => of.RegionOficinas === 'Internacional');
  });
};

/**
 * Hook para traer todas las oficinas
 * - Cachea todas las oficinas
 * - Sin refetch automático
 */
export const useTodasLasOficinas = () => {
  return useOfficeQuery(['oficinas-todas'] as const, async () => {
    return await OfficeService.getAll();
  });
};
