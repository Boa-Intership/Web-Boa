import React, { useEffect, useState } from 'react';
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

export default UserManagementScreen;
