/*import React, { useEffect, useState } from 'react';
import { getUsers, updateUser } from '../../data/services/user.service';
import { User } from '../../types/user.types';
import { UserCard } from '../components/UserCard';
import { Container, Typography } from '@mui/material';

const UserManagementScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleUpdate = async (updatedUser: User) => {
    await updateUser(updatedUser);
    setUsers((prev) => prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>
        Gestión de Usuarios
      </Typography>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onUpdate={handleUpdate} />
      ))}
    </Container>
  );
};

export default UserManagementScreen;*/

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Chip,
  Button,
  Container,
} from '@mui/material';
import { Security, Group, Person, FilterList, PersonAddAlt } from '@mui/icons-material';

type TipoUsuario = 'Administrador' | 'Funcionario' | 'Usuario';

interface User {
  id: number;
  nombre: string;
  email: string;
  tipo: TipoUsuario;
  rolesFuncionario?: string[];
}

const rolesDisponibles = [
  'Revisor / Recepción de Paquetes',
  'Inspector NAABOL',
  'Almacenador / Encargado de Almacén',
  'Encargado de Aeronave',
  'Entregador / Despachador',
  'Manifestador',
  'Facturador',
  'Control Físico',
  'Administrador (Admin General)',
];

const usuariosIniciales: User[] = [
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
    rolesFuncionario: ['Facturador', 'Control Físico', 'Revisor / Recepción de Paquetes'],
  },
  {
    id: 3,
    nombre: 'María Fernández',
    email: 'maria.fernandez@empresa.com',
    tipo: 'Usuario',
  },
  {
    id: 4,
    nombre: 'David Martínez',
    email: 'david.martinez@empresa.com',
    tipo: 'Funcionario',
    rolesFuncionario: ['Encargado de Aeronave', 'Inspector NAABOL'],
  },
  {
    id: 5,
    nombre: 'Laura Sánchez',
    email: 'laura.sanchez@empresa.com',
    tipo: 'Funcionario',
    rolesFuncionario: [],
  },
];

const UserManagement: React.FC = () => {
  const [usuarios, setUsuarios] = useState<User[]>(usuariosIniciales);
  const [filtro, setFiltro] = useState<TipoUsuario | 'Todos'>('Todos');
  const [busqueda, setBusqueda] = useState('');

  const handleTipoChange = (id: number, nuevoTipo: TipoUsuario) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, tipo: nuevoTipo, rolesFuncionario: nuevoTipo === 'Funcionario' ? [] : [] }
          : u
      )
    );
  };

  const handleRoleToggle = (id: number, role: string) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              rolesFuncionario: u.rolesFuncionario?.includes(role)
                ? u.rolesFuncionario.filter((r) => r !== role)
                : [...(u.rolesFuncionario || []), role],
            }
          : u
      )
    );
  };

  const filtrados = usuarios.filter(
    (u) =>
      (filtro === 'Todos' || u.tipo === filtro) &&
      (u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.email.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const contadores = {
    Administrador: usuarios.filter((u) => u.tipo === 'Administrador').length,
    Funcionario: usuarios.filter((u) => u.tipo === 'Funcionario').length,
    Usuario: usuarios.filter((u) => u.tipo === 'Usuario').length,
  };

  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Gestión de Usuarios
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        Administra los tipos de usuario y roles del sistema
      </Typography>

      {/* Tarjetas resumen */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Security sx={{ color: '#EF4444' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Administradores
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Administrador}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Group sx={{ color: '#3B82F6' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Funcionarios
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Funcionario}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Person sx={{ color: '#6B7280' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Usuarios
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Usuario}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filtros */}
      <Box display="flex" gap={2} mb={3} flexWrap="wrap">
        <TextField
          label="Buscar usuarios"
          placeholder="Buscar por nombre o email..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          sx={{ flex: 1, minWidth: 260 }}
        />
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Filtrar por tipo de usuario</InputLabel>
          <Select
            value={filtro}
            label="Filtrar por tipo de usuario"
            onChange={(e) => setFiltro(e.target.value as any)}
            startAdornment={<FilterList sx={{ mr: 1 }} />}
          >
            <MenuItem value="Todos">Todos los tipos</MenuItem>
            <MenuItem value="Administrador">Administrador</MenuItem>
            <MenuItem value="Usuario">Usuario</MenuItem>
            <MenuItem value="Funcionario">Funcionario</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<PersonAddAlt />}
          sx={{ backgroundColor: '#2563EB' }}
        >
          Agregar Usuario
        </Button>
      </Box>

      {/* Lista de usuarios */}
      {filtrados.map((u) => (
        <Card key={u.id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{u.nombre}</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {u.email}
            </Typography>

            <Typography variant="subtitle2">Tipo de Usuario:</Typography>
            <RadioGroup
              row
              value={u.tipo}
              onChange={(e) => handleTipoChange(u.id, e.target.value as TipoUsuario)}
            >
              <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
              <FormControlLabel value="Usuario" control={<Radio />} label="Usuario" />
              <FormControlLabel value="Funcionario" control={<Radio />} label="Funcionario" />
            </RadioGroup>

            {u.tipo === 'Funcionario' && (
              <>
                <Typography variant="subtitle2" mt={2}>
                  Roles de Funcionario:
                </Typography>
                <Grid container spacing={1}>
                  {rolesDisponibles.map((role) => (
                    <Grid item xs={12} sm={6} md={4} key={role}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={u.rolesFuncionario?.includes(role) || false}
                            onChange={() => handleRoleToggle(u.id, role)}
                          />
                        }
                        label={role}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="subtitle2" mt={2}>
                  Roles Actuales:
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  {u.rolesFuncionario && u.rolesFuncionario.length > 0 ? (
                    u.rolesFuncionario.map((r) => (
                      <Chip key={r} label={r} color="primary" variant="outlined" />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Sin roles asignados
                    </Typography>
                  )}
                </Box>

                <Button variant="contained" sx={{ mt: 2 }}>
                  Guardar cambios
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default UserManagement;
