import React from 'react';
import { Box, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Person, Email } from '@mui/icons-material';
import { AppTypography } from 'ui';

// Tipo temporal para los datos del usuario (basado en el schema de registro)
interface User {
  name: string;
  email: string;
  ci: string;
  nitComplemento?: string;
}

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  // Generar iniciales del nombre
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        borderRadius: 2,
        mb: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            {user.name ? getInitials(user.name) : <Person />}
          </Avatar>

          <Box flex={1}>
            <AppTypography variant="h3Medium" sx={{ color: 'white', mb: 1 }}>
              {user.name}
            </AppTypography>

            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <Email sx={{ fontSize: '1.2rem', opacity: 0.8 }} />
              <AppTypography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {user.email}
              </AppTypography>
            </Box>

            <Chip
              label={`CI: ${user.ci}${user.nitComplemento ? `-${user.nitComplemento}` : ''}`}
              variant="outlined"
              size="small"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '& .MuiChip-label': {
                  fontWeight: 500,
                },
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
