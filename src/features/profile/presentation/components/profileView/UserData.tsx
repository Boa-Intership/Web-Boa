import React from 'react';
import { Box, Grid } from '@mui/material';
import { Person, Badge } from '@mui/icons-material';
import DataCard from './DataCard';

interface User {
  email: string;
  name: string;
  ci: string;
  complemento?: string;
}

interface UserDataProps {
  user: User;
  onUserDataChange?: (field: string, value: string) => void;
  resetEditingState?: boolean;
}

const UserData: React.FC<UserDataProps> = ({ user, onUserDataChange, resetEditingState }) => {
  const handleFieldChange = (field: string, value: string) => {
    if (onUserDataChange) {
      onUserDataChange(field, value);
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Nombre */}
        <Grid item xs={12}>
          <DataCard
            icon={
              <Person
                sx={{
                  fontSize: '1.3rem',
                  color: 'primary.light',
                }}
              />
            }
            label="Nombre"
            value={user.name}
            field="name"
            onValueChange={handleFieldChange}
            variant="standard"
            resetEditingState={resetEditingState}
          />
        </Grid>

        {/* CI */}
        <Grid item xs={12}>
          <DataCard
            icon={
              <Badge
                sx={{
                  fontSize: '1.3rem',
                  color: 'primary.light',
                }}
              />
            }
            label="CI"
            value={user.ci}
            value2={user.complemento}
            field="ci"
            onValueChange={handleFieldChange}
            variant="standard"
            editable={false}
            resetEditingState={resetEditingState}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserData;
