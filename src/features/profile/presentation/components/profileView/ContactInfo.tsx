import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Phone, LocationOn } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface User {
  number: string;
  address?: string;
}

interface ContactInfoProps {
  user: User;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ user }) => {
  return (
    <Box>
      <AppTypography variant="h4Regular" color="primary.main" sx={{ mb: 2 }}>
        Información de Contacto
      </AppTypography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              backgroundColor: 'background.paper',
            }}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <Phone
                sx={{
                  color: 'primary.main',
                  fontSize: '1.4rem',
                }}
              />
              <Box>
                <AppTypography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 0.5, display: 'block' }}
                >
                  Número de Celular
                </AppTypography>
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.number}
                </AppTypography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              backgroundColor: 'background.paper',
            }}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <LocationOn
                sx={{
                  color: 'primary.main',
                  fontSize: '1.4rem',
                }}
              />
              <Box>
                <AppTypography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                  Dirección
                </AppTypography>
                <AppTypography
                  variant="body1"
                  color="text.primary"
                  fontWeight={500}
                  sx={{
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                  }}
                >
                  {user.address || 'No registrada'}
                </AppTypography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
