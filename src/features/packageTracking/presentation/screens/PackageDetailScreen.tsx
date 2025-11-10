import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContainer from '@/shared/components/AppContainer';
import { Stack, Typography } from '@mui/material';
import { usePackageHistory } from '@/features/packageTracking/presentation/hooks/usePackageHistory';
import PackageTimeline from '@/features/packageTracking/presentation/components/PackageTimeline';
import { ROUTES } from '@/router/routes';
import AppButton from '@/shared/components/AppButton';
const PackageDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const {
    flightId = '',
    manifestId = '',
    packageId = '',
  } = useParams<{
    flightId: string;
    manifestId: string;
    packageId: string;
  }>();
  const { data = [], isLoading } = usePackageHistory(packageId);

  return (
    <AppContainer>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <AppButton
          variant="outlined"
          onClick={() =>
            navigate(
              `${ROUTES.TRACKING}/${encodeURIComponent(flightId)}/${encodeURIComponent(manifestId)}`
            )
          }
        >
          Volver a paquetes
        </AppButton>
        <Typography variant="h5" color="primary.main">
          Paquete {packageId}
        </Typography>
      </Stack>
      {isLoading ? <Typography>Cargando...</Typography> : <PackageTimeline history={data} />}
    </AppContainer>
  );
};

export default PackageDetailScreen;
