import axios from 'axios';
import { Role } from '../../domain/models/role.model';

export const getRoles = async (token: string): Promise<Role[]> => {
  try {
    const response = await axios.get('api/role', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener roles:', error);
    throw error;
  }
};
