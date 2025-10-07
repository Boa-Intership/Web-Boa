import React from 'react';
import { Box, Grid, Paper, Chip, TextField, MenuItem } from '@mui/material';
import { Business, Receipt } from '@mui/icons-material';
import { AppTypography } from 'ui';

interface User {
  businessName?: string;
  billingDocType?: string;
  billingNit?: string;
  billingNitComplemento?: string;
  name: string;
  email: string;
  ci: string;
  nitComplemento?: string;
  number: string;
  address?: string;
}

interface BillingInfoProps {
  user: User;
  isEditable?: boolean;
  onUserDataChange?: (field: keyof User, value: string) => void;
}

const BillingInfo: React.FC<BillingInfoProps> = ({
  user,
  isEditable = false,
  onUserDataChange,
}) => {
  const handleFieldChange = (field: keyof User, value: string) => {
    if (onUserDataChange) {
      onUserDataChange(field, value);
    }
  };

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

  const docTypeOptions = [
    { value: '1', label: 'CI' },
    { value: '5', label: 'NIT' },
  ];

  return (
    <Box mt={4}>
      <AppTypography variant="h4Regular" color="primary.main" sx={{ mb: 3 }}>
        Datos de Facturación
      </AppTypography>

      <Grid container spacing={3}>
        {/* Email */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <Business
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Razón Social
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.businessName || ''}
                  onChange={(e) => handleFieldChange('businessName', e.target.value)}
                  placeholder="Ingresa la razón social"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.businessName || 'No registrada'}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>

        {/* Tipo de Documento */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <Receipt
                  sx={{
                    fontSize: '1.3rem',
                    color: 'primary.main',
                    mb: 1,
                  }}
                />
                <AppTypography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Tipo de Documento
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  size="small"
                  value={user.billingDocType || ''}
                  onChange={(e) => handleFieldChange('billingDocType', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                >
                  {docTypeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <Chip
                  label={getDocTypeName(user.billingDocType)}
                  size="small"
                  variant="outlined"
                  sx={{
                    height: 24,
                    fontSize: '0.75rem',
                    color: 'primary.main',
                    borderColor: 'primary.main',
                  }}
                />
              )}
            </Box>
          </Box>
        </Grid>

        {/* NIT/CI */}
        <Grid item xs={12} sm={5}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <Box display={'flex'} alignItems="center" gap={0.5}>
                <AppTypography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 0.5, mt: 0.5, display: 'block' }}
                >
                  Número de Documento
                </AppTypography>
              </Box>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.billingNit || ''}
                  onChange={(e) => handleFieldChange('billingNit', e.target.value)}
                  placeholder="Ingresa el número"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.billingNit || 'No registrado'}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>

        {/* Complemento */}
        <Grid item xs={12} sm={3}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box sx={{ flex: 1 }}>
              <AppTypography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 0.5, mt: 0.5, display: 'block' }}
              >
                Complemento
              </AppTypography>
              {isEditable ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={user.billingNitComplemento || ''}
                  onChange={(e) => handleFieldChange('billingNitComplemento', e.target.value)}
                  placeholder="Ej: 1A"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                  }}
                />
              ) : (
                <AppTypography variant="body1" color="text.primary" fontWeight={500}>
                  {user.billingNitComplemento || '-'}
                </AppTypography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BillingInfo;
