import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContainer from '@/shared/components/AppContainer';
import { Stack, Typography } from '@mui/material';
import PackageList from '@/features/packageTracking/presentation/components/PackageList';
import { usePackages } from '@/features/packageTracking/presentation/hooks/usePackages';
import { ROUTES } from '@/router/routes';
import AppButton from '@/shared/components/AppButton';
const PackagesScreen: React.FC = () => {
  const navigate = useNavigate();
  const { flightId = '', manifestId = '' } = useParams<{ flightId: string; manifestId: string }>();
  const { data = [], isLoading } = usePackages(manifestId);

  const onSelect = (pkg: any) => {
    navigate(
      `${ROUTES.TRACKING}/${encodeURIComponent(flightId)}/${encodeURIComponent(manifestId)}/${encodeURIComponent(pkg.id)}`
    );
  };

  React.useEffect(() => {
    console.debug('[PackagesScreen] params ->', { flightId, manifestId });
  }, [flightId, manifestId]);

  return (
    <AppContainer>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <AppButton
          variant="outlined"
          onClick={() => navigate(`${ROUTES.TRACKING}/${encodeURIComponent(flightId)}`)}
        >
          Volver a manifiestos
        </AppButton>
        <Typography variant="h5" color="primary.main">
          Paquetes — {manifestId}
        </Typography>
      </Stack>
      {isLoading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <PackageList packages={data} onSelect={onSelect} />
      )}
    </AppContainer>
  );
};

export default PackagesScreen;
