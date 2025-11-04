import axios from 'axios';
import { Role } from '../../domain/models/role.model';

export const getRoles = async (token: string): Promise<Role[]> => {
  try {
    /*const response = await axios.get('api/role', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });*/
    //return response.data;
    return roles;
  } catch (error) {
    console.error('Error al obtener roles:', error);
    throw error;
  }
};

let roles: Role[] = [
  {
    id: 1,
    name: 'USER',
    description: 'Usuario regular del sistema',
  },
  {
    id: 2,
    name: 'ADMIN',
    description: 'Administrador del sistema',
  },
  {
    id: 3,
    name: 'FUNCIONARIO',
    description: 'Funcionario encargado de realizar el tracking',
  },
];
