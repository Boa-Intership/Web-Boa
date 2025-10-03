import React from 'react';
import { Box, Grid, Paper, Chip } from '@mui/material';
import { Business, Receipt } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface User {
  businessName?: string;
  billingDocType?: string;
  billingNit?: string;
  billingNitComplemento?: string;
}

interface BillingInfoProps {
  user: User;
}

const BillingInfo: React.FC<BillingInfoProps> = ({ user }) => {
  const hasBillingData = user.businessName || user.billingNit;

  const getDocTypeName = (type?: string) => {
    switch (type) {
      case '1':
        return 'CI';
      case '5':
        return 'NIT';
      default:
        return 'N/A';
    }
  };

  if (!hasBillingData) {
    return (
      <Box>
        <AppTypography variant="h4Regular" color="primary.main" sx={{ mb: 2 }}>
          Datos de Facturación
        </AppTypography>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 2,
            backgroundColor: 'grey.50',
            textAlign: 'center',
          }}
        >
          <Receipt sx={{ color: 'text.secondary', fontSize: '3rem', mb: 1 }} />
          <AppTypography variant="body1" color="text.secondary">
            No hay datos de facturación registrados
          </AppTypography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box>
      <AppTypography variant="h4Regular" color="primary.main" sx={{ mb: 2 }}>
        Datos de Facturación
      </AppTypography>

      <Grid container spacing={3}>
        {user.businessName && (
          <Grid item xs={12}>
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
                <Business
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
                    Razón Social
                  </AppTypography>
                  <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                    {user.businessName}
                  </AppTypography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}

        {user.billingNit && (
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
                <Receipt
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
                    Documento de Facturación
                  </AppTypography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                      {user.billingNit}
                      {user.billingNitComplemento && `-${user.billingNitComplemento}`}
                    </AppTypography>
                    <Chip
                      label={getDocTypeName(user.billingDocType)}
                      size="small"
                      variant="outlined"
                      sx={{
                        height: 20,
                        fontSize: '0.75rem',
                        color: 'primary.main',
                        borderColor: 'primary.main',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default BillingInfo;
