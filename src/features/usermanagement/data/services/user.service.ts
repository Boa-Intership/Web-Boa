import { User } from '../../types/user.types';

// Simulación de datos desde backend
let users: User[] = [
  {
    id: 1,
    nombre: 'Ana García López',
    email: 'ana.garcia@empresa.com',
    tipo: 'Administrador',
  },
  {
    id: 2,
    nombre: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@empresa.com',
    tipo: 'Funcionario',
    rolesFuncionario: ['Facturador', 'Revisor / Recepción de Paquetes'],
  },
  {
    id: 3,
    nombre: 'María Fernández',
    email: 'maria.fernandez@empresa.com',
    tipo: 'Usuario',
  },
];

export const getUsers = async (): Promise<User[]> => {
  return users;
};

export const updateUser = async (updatedUser: User): Promise<void> => {
  users = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
};
