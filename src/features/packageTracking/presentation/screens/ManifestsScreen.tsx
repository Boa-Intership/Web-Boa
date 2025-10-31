import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContainer from '@/shared/components/AppContainer';
import { Stack, Typography } from '@mui/material';
import ManifestList from '@/features/packageTracking/presentation/components/ManifestList';
import { useManifests } from '@/features/packageTracking/presentation/hooks/useManifests';
import { ROUTES } from '@/router/routes';
import AppButton from '@/shared/components/AppButton';
const ManifestsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { flightId = '' } = useParams<{ flightId: string }>();
  const { data = [], isLoading } = useManifests(flightId);

  const onSelect = (manifest: any) => {
    navigate(
      ROUTES.TRACKING + '/' + encodeURIComponent(flightId) + '/' + encodeURIComponent(manifest.id)
    );
  };

  React.useEffect(() => {
    console.debug('[ManifestsScreen] params ->', { flightId });
  }, [flightId]);

  return (
    <AppContainer>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <AppButton variant="outlined" onClick={() => navigate(ROUTES.TRACKING)}>
          Volver a vuelos
        </AppButton>
        <Typography variant="h5" color="primary.main">
          Manifiestos — {flightId}
        </Typography>
      </Stack>
      {isLoading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <ManifestList manifests={data} onSelect={onSelect} />
      )}
    </AppContainer>
  );
};

export default ManifestsScreen;
