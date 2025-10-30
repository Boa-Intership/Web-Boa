export type TipoUsuario = 'Administrador' | 'Funcionario' | 'Usuario';

export type RolFuncionario =
  | 'Facturador'
  | 'Revisor / Recepción de Paquetes'
  | 'Inspector NAABOL'
  | 'Almacenador / Encargado de Almacén'
  | 'Encargado de Aeronave'
  | 'Entregador / Despachador'
  | 'Manifestador'
  | 'Control Físico'
  | 'Administrador (Admin General)';

export interface User {
  id: number;
  nombre: string;
  email: string;
  tipo: TipoUsuario;
  rolesFuncionario?: RolFuncionario[];
  avatarUrl?: string;
}
