import axios from 'axios';
import { User } from '../../domain/models/user.model';

export const getUsers = async (token: string | null): Promise<User[]> => {
  try {
    /*const response = await axios.get('api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });*/
    //return response.data;
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

let users: User[] = [
  {
    id: 37,
    ci: '143214',
    complement: null,
    name: 'Henry Church',
    address: 'Av. Petrolera',
    phone: '76767676',
    email: 'maria@gmail.com',
    billingData: [
      {
        id: 39,
        businessName: 'Luces SRL',
        docType: 5,
        nit: '111232212',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador', 'Inspector NAABOL'],
  },
  {
    id: 38,
    ci: '569854127',
    complement: null,
    name: 'Jhose Teno',
    address: null,
    phone: '65587412',
    email: 'jhoten@gmail.com',
    billingData: [
      {
        id: 40,
        businessName: 'Teno',
        docType: 1,
        nit: '569854127',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 39,
    ci: '87654321',
    complement: null,
    name: 'Jane Jane',
    address: null,
    phone: '64656465',
    email: 'jane@gmail.com',
    billingData: [
      {
        id: 41,
        businessName: 'Coca Cola',
        docType: 5,
        nit: '112414111',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 40,
    ci: '8018523',
    complement: null,
    name: 'Pa',
    address: null,
    phone: '64728536',
    email: 'juanpablo@gmail.com',
    billingData: [
      {
        id: 42,
        businessName: 'Pa',
        docType: 1,
        nit: '8018523',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 41,
    ci: '9382992',
    complement: null,
    name: 'Miguel Mita Choque',
    address: 'Av. Ciircunvalacion',
    phone: '76936077',
    email: 'miguelmita100121144@gmail.com',
    billingData: [
      {
        id: 43,
        businessName: 'Envios',
        docType: 1,
        nit: '9382992',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 42,
    ci: '13257141',
    complement: null,
    name: 'Rodrigo Huanca',
    address: 'Quillacollo',
    phone: '70740632',
    email: 'huancarodrigo1@gmail.com',
    billingData: [
      {
        id: 44,
        businessName: 'Rodrigo Huanca',
        docType: 1,
        nit: '13257141',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 43,
    ci: '9359253',
    complement: null,
    name: 'Michelle Jazmin Figueroa Lopez',
    address: 'Avenida Suecia',
    phone: '69542902',
    email: 'jazminlopez7774@gmail.com',
    billingData: [
      {
        id: 45,
        businessName: 'Figueroa',
        docType: 1,
        nit: '9359253',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 44,
    ci: '8018983',
    complement: null,
    name: 'Juan Pablo',
    address: 'F.jimenez',
    phone: '62747539',
    email: 'juanpablojustinianoorosco@gmail.com',
    billingData: [
      {
        id: 46,
        businessName: 'Juan Pablo',
        docType: 5,
        nit: '8018983',
        complement: null,
        isDefault: true,
      },
    ],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 45,
    ci: '8079464',
    complement: null,
    name: 'Juan',
    address: null,
    phone: '67784539',
    email: 'justinianojuan147@gmail.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 46,
    ci: '80549564',
    complement: null,
    name: 'Juan',
    address: null,
    phone: '62754319',
    email: 'kimijo9592@bllibl.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 47,
    ci: '8079364',
    complement: null,
    name: 'Pablo',
    address: 'Estadio',
    phone: '64785219',
    email: 'jecoxi1479@erynka.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 48,
    ci: '8018928',
    complement: null,
    name: 'Prueba',
    address: null,
    phone: '62748596',
    email: 'vawom30675@fintehs.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 49,
    ci: '6847856',
    complement: null,
    name: 'Prueba',
    address: 'Jjdldld',
    phone: '62741589',
    email: 'kesoy79995@erynka.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 50,
    ci: '55555555',
    complement: null,
    name: 'Andrea',
    address: null,
    phone: '+59166666666',
    email: 'soundgardenlml@gmail.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 51,
    ci: '8018982',
    complement: 'DS',
    name: 'Pruebafinal',
    address: null,
    phone: '64785925',
    email: 'pohol85827@aupvs.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 52,
    ci: '12333212',
    complement: null,
    name: 'Jego Had',
    address: 'Av. Kyllman',
    phone: '65656565',
    email: 'cw494989@gmail.com',
    billingData: [],
    roles: [
      {
        id: 2,
        name: 'ADMIN',
        description: 'Administrador del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 53,
    ci: '9404612',
    complement: null,
    name: 'andres juan jose revollo huanca',
    address: 'arquimides',
    phone: '+59165744997',
    email: 'andresrevollohuanca@gmail.com',
    billingData: [],
    roles: [
      {
        id: 2,
        name: 'ADMIN',
        description: 'Administrador del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 54,
    ci: '9401111',
    complement: null,
    name: 'and',
    address: null,
    phone: '+59165744997',
    email: '201800535@est.umss.edu',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
  {
    id: 55,
    ci: '9359245',
    complement: null,
    name: 'Michelle Jazmin Figueroa Lopez',
    address: null,
    phone: '+59177407798',
    email: 'micheljazminfigaro@gmail.com',
    billingData: [],
    roles: [
      {
        id: 1,
        name: 'USER',
        description: 'Usuario regular del sistema',
      },
    ],
    rolesFuncionario: ['Manifestador'],
  },
];
