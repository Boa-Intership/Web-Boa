import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContainer from '../../../../shared/components/AppContainer';
import { Stack, Typography, Button } from '@mui/material';
import ManifestList from '../components/ManifestList';
import { useManifests } from '../hooks/useManifests';
import { ROUTES } from '../../../../router/routes';

const ManifestsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { flightId = '' } = useParams<{ flightId: string }>();
  const { data = [], isLoading } = useManifests(flightId);

  const onSelect = (manifest: any) => {
    navigate(`${ROUTES.TRACKING}/${encodeURIComponent(flightId)}/${encodeURIComponent(manifest.id)}`);
  };

  return (
    <AppContainer>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Button variant="outlined" onClick={() => navigate(ROUTES.TRACKING)}>
          Volver a vuelos
        </Button>
        <Typography variant="h5" color="primary.main">Manifiestos — {flightId}</Typography>
      </Stack>
      {isLoading ? <Typography>Cargando...</Typography> : <ManifestList manifests={data} onSelect={onSelect} />}
    </AppContainer>
  );
};

export default ManifestsScreen;
