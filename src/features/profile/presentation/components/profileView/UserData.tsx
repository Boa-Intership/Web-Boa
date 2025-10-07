import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import { Phone, Email, Person } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface User {
  email: string;
  name: string;
  ci: string;
}

interface UserDataProps {
  user: User;
  isEditable?: boolean;
  onUserDataChange?: (field: keyof User, value: string) => void;
}

const UserData: React.FC<UserDataProps> = ({ user, isEditable = false, onUserDataChange }) => {
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
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <Person
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Nombre
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.name || ''}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.name || 'No registrada'}
                </AppTypography>
              )}
            </Box>
          </Box>
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
                  type="tel"
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
