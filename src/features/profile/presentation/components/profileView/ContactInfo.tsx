import React from 'react';
import { Box, Grid } from '@mui/material';
import { Phone, LocationOn, Email } from '@mui/icons-material';
import { AppTypography } from 'ui';
import DataCard from './DataCard';
import { MuiPhone } from '@/shared/components/PhoneInput';

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
  onUserDataChange?: (field: string, value: string) => void;
  resetEditingState?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ user, onUserDataChange, resetEditingState }) => {
  const handleFieldChange = (field: string, value: string) => {
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
          <DataCard
            icon={
              <Email
                sx={{
                  fontSize: '1.3rem',
                  color: 'primary.light',
                }}
              />
            }
            label="Correo Electrónico"
            value={user.email}
            field="email"
            onValueChange={handleFieldChange}
            type="email"
            variant="standard"
            editable={false}
            resetEditingState={resetEditingState}
          />
        </Grid>

        {/* Teléfono */}
        <Grid item xs={12}>
          <DataCard
            icon={
              <Phone
                sx={{
                  fontSize: '1.3rem',
                  color: 'primary.light',
                }}
              />
            }
            label="Número de Celular"
            value={user.number}
            field="number"
            onValueChange={handleFieldChange}
            type="tel"
            variant="standard"
            resetEditingState={resetEditingState}
          />
        </Grid>

        {/* Dirección */}
        <Grid item xs={12}>
          <DataCard
            icon={
              <LocationOn
                sx={{
                  fontSize: '1.3rem',
                  color: 'primary.light',
                }}
              />
            }
            label="Dirección"
            value={user.address || ''}
            field="address"
            onValueChange={handleFieldChange}
            placeholder="Ingresa tu dirección"
            variant="standard"
            resetEditingState={resetEditingState}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
