import { httpClient } from '@/config/httpClient';

interface UpdateUserData {
  name?: string;
  address?: string;
  phone?: string;
}

interface UserResponse {
  id: number;
  ci: string;
  complement: string | null;
  name: string;
  address: string | null;
  phone: string;
  email: string;
  billingData: Array<{
    id: number;
    businessName: string;
    docType: number;
    nit: string;
    complement: string | null;
    isDefault: boolean;
  }> | null;
  roles: Array<{
    id: number;
    name: string;
    description: string;
  }>;
}

export const userService = {
  updateUser: async (userId: number, data: UpdateUserData): Promise<UserResponse> => {
    return await httpClient.patch<UserResponse>(`/user/${userId}`, data);
  },
};

export default userService;
