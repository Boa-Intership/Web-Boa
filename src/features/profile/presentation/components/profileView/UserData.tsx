import React from 'react';
import { Box, Button, Grid, Link, Paper, TextField } from '@mui/material';
import { Phone, Email, Person } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { is } from 'zod/locales';

interface User {
  email: string;
  name: string;
  ci: string;
}

interface UserDataProps {
  user: User;
  isEditable?: boolean;
  onUserDataChange?: (field: keyof User, value: string) => void;
  onToggleEditName?: () => void;
}

const UserData: React.FC<UserDataProps> = ({
  user,
  isEditable = false,
  onUserDataChange,
  onToggleEditName,
}) => {
  const handleFieldChange = (field: keyof User, value: string) => {
    if (onUserDataChange) {
      onUserDataChange(field, value);
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Nombre */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, boxShadow: 0, width: '100%', backgroundColor: 'blue_light.main' }}>
            <Box display="flex" justifyContent="space-between" gap={1}>
              <Box display={'flex'} alignItems="start">
                <Person
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.light',
                  }}
                />
              </Box>
              <Box width={'100%'} mt={0.5}>
                <AppTypography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Nombre
                </AppTypography>
                {isEditable ? (
                  <TextField
                    fullWidth
                    variant="standard"
                    size="small"
                    value={user.name || ''}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                  />
                ) : (
                  <AppTypography variant="body1" color="primary.dark" fontWeight={500}>
                    {user.name || 'No registrada'}
                  </AppTypography>
                )}
              </Box>
              <Link
                color="primary.light"
                type="button"
                component="button"
                fontWeight="bold"
                onClick={onToggleEditName}
                sx={{
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  ':hover': { color: 'primary.main' },
                  ':focus': { outline: 'none' },
                }}
              >
                {isEditable ? 'Cancelar' : 'Editar'}
              </Link>
            </Box>
          </Paper>
        </Grid>

        {/* CI */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <Phone
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  CI
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.ci}
                  onChange={(e) => handleFieldChange('ci', e.target.value)}
                  type="text"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.ci}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserData;
