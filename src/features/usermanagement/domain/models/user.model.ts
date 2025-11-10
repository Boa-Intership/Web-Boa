import { Role } from './role.model';

export interface BillingData {
  id: number;
  businessName: string;
  docType: number;
  nit: string;
  complement: string | null;
  isDefault: boolean;
}

export interface User {
  id: number;
  ci: string;
  complement: string | null;
  name: string;
  address: string | null;
  phone: string;
  email: string;
  billingData: BillingData[];
  roles: Role[];
  rolesFuncionario: string[];
}
