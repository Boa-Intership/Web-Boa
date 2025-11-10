import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Button, Pagination, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PreRegistroCard from '../components/PreRegistroCard';
import { getAllPreRegisters } from '../../data/services/pre-register.service';
import { PreRegistroModel } from '../../data/models/pre-register.model';
import { AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const MisPreRegistros: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<PreRegistroModel[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    const fetchPreRegistros = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await getAllPreRegisters(page, limit, token);
        setData(res.data);
        setTotal(res.total);
        setLastPage(Math.ceil(res.total / limit)); // calcular lastPage
      } catch (error) {
        console.error('Error al obtener preregistros', error);
      }
    };
    fetchPreRegistros();
  }, [page]);

  const handlePageChange = (_: any, value: number) => {
    setPage(value);
  };

  return (
    <Container sx={{ py: 4, minHeight: '80vh' }}>
      <AppTypography variant="h2Bold" color="primary" gutterBottom>
        Mis Preregistros
      </AppTypography>
      {/*<AppTypography variant="baseRegular" gutterBottom>
        Total: {total} preregistros
      </AppTypography>*/}

      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/preregistro')}
        >
          Nuevo Envío
        </Button>
      </Box>

      {data.length === 0 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="60vh"
          textAlign="center"
        >
          <Box>
            <DescriptionOutlinedIcon sx={{ fontSize: 60, color: '#90a4ae', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              No hay preregistros
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 360 }}>
              Aún no ha realizado ningún preregistro de envío. Comience creando su primer envío.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => navigate('/preregistro')}
            >
              Crear Nuevo Envío
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: '10px',
          }}
        >
          {data.map((p) => (
            <Box key={p.id}>
              <PreRegistroCard preregistro={p} />
            </Box>
          ))}
        </Box>
      )}
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination count={lastPage} page={page} onChange={handlePageChange} color="primary" />
      </Box>
    </Container>
  );
};

export default MisPreRegistros;
