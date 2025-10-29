import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContainer from '../../../../shared/components/AppContainer';
import { Stack, Typography, Button } from '@mui/material';
import PackageList from '../components/PackageList';
import { usePackages } from '../hooks/usePackages';
import { ROUTES } from '../../../../router/routes';

const PackagesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { flightId = '', manifestId = '' } = useParams<{ flightId: string; manifestId: string }>();
  const { data = [], isLoading } = usePackages(manifestId);

  const onSelect = (pkg: any) => {
    navigate(
      `${ROUTES.TRACKING}/${encodeURIComponent(flightId)}/${encodeURIComponent(manifestId)}/${encodeURIComponent(pkg.id)}`
    );
  };

  return (
    <AppContainer>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Button variant="outlined" onClick={() => navigate(`${ROUTES.TRACKING}/${encodeURIComponent(flightId)}`)}>
          Volver a manifiestos
        </Button>
        <Typography variant="h5" color="primary.main">Paquetes — {manifestId}</Typography>
      </Stack>
      {isLoading ? <Typography>Cargando...</Typography> : <PackageList packages={data} onSelect={onSelect} />}
    </AppContainer>
  );
};

export default PackagesScreen;
