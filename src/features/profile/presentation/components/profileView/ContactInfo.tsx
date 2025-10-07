import React from 'react';
import { Box, Grid, Paper, TextField } from '@mui/material';
import { Phone, LocationOn, Email } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface User {
  number: string;
  email: string;
  address?: string;
  name: string;
  ci: string;
  nitComplemento?: string;
  businessName?: string;
  billingDocType?: string;
  billingNit?: string;
  billingNitComplemento?: string;
}

interface ContactInfoProps {
  user: User;
  isEditable?: boolean;
  onUserDataChange?: (field: keyof User, value: string) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  user,
  isEditable = false,
  onUserDataChange,
}) => {
  const handleFieldChange = (field: keyof User, value: string) => {
    if (onUserDataChange) {
      onUserDataChange(field, value);
    }
  };

  return (
    <Box>
      <AppTypography variant="h4Regular" color="primary.main" sx={{ mb: 3 }}>
        Información de Contacto
      </AppTypography>

      <Grid container spacing={3}>
        {/* Email */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <Email
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Correo Electrónico
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  disabled={true}
                  variant="outlined"
                  size="small"
                  value={user.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  type="email"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.email}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>
        {/* Celular */}
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
                  Número de Celular
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.number}
                  onChange={(e) => handleFieldChange('number', e.target.value)}
                  type="tel"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.number}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>
        {/* Dirección */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <LocationOn
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Dirección
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.address || ''}
                  onChange={(e) => handleFieldChange('address', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.address || 'No registrada'}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
