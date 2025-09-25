import React from 'react';
import AppBox from '../../../../shared/components/AppBox';
import AppContainer from '../../../../shared/components/AppContainer';
import AppGrid from '../../../../shared/components/AppGrid';
import AppButton from '../../../../shared/components/AppButton';
import { Card, CardContent, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppTypography } from 'ui';

const clients = [
  //   {
  //     title: 'Cuenta Corriente',
  //     description: 'Clientes con contrato formal y requisitos legales cumplidos.',
  //     icon: (
  //       <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
  //     ),
  //   },
  {
    title: 'Eventuales',
    description: 'Envíos puntuales con pago al momento de realizar el servicio.',
    icon: <PersonIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />,
  },
  {
    title: 'COMAT/COMAIL',
    description: 'Clientes internos autorizados por la jefatura.',
    icon: <GroupsIcon sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />,
  },
];

const ServicesSection: React.FC = () => (
  <AppBox sx={{ py: { xs: 5, md: 8 }, background: 'background.paper' }}>
    <AppContainer>
      <AppTypography variant="h4Bold" textAlign="center" mb={4} color="primary">
        Clientes
      </AppTypography>
      <AppGrid
        container
        spacing={4}
        justifyContent="center"
        sx={{ background: 'grey.100', borderRadius: 4, p: { xs: 2, md: 4 } }}
      >
        {clients.map((client) => (
          <AppGrid item xs={12} sm={6} md={4} key={client.title}>
            <Card
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                boxShadow: '0 4px 16px rgba(46,92,154,0.10)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                background: 'background.default',
                transition: 'box-shadow 0.2s, transform 0.2s',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(46,92,154,0.18)',
                  transform: 'translateY(-2px) scale(1.04)',
                },
              }}
            >
              {client.icon}
              <AppTypography variant="h4Regular" fontWeight={600} textAlign="center" mb={1}>
                {client.title}
              </AppTypography>
              <AppTypography variant="h4Regular" color="text.secondary" textAlign="center" mb={3}>
                {client.description}
              </AppTypography>
              <AppButton variant="contained" size="small">
                Más información
              </AppButton>
            </Card>
          </AppGrid>
        ))}
      </AppGrid>
    </AppContainer>
  </AppBox>
);

export default ServicesSection;
