import { AppBox, AppContainer, AppGrid, AppButton } from 'ui';
import { Box, Divider, Stack, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import welcomeImg from '@/assets/welcome.webp';
import { FC } from 'react';
import headline from '@/assets/headline-curve.svg';
import { ROUTES } from 'router/routes';
import { AppTypography } from 'ui';
import { useWelcomeContent } from '../hooks/useWelcomeContent';

interface Exp {
  label: string;
  value: string;
}

const exps: Array<Exp> = [
  { label: 'Paquetes enviados', value: '500+' },
  { label: 'Rutas aereas activas', value: '15+' },
  { label: 'Clientes satisfechos', value: '450+' },
];

const ExpItem: FC<{ item: Exp }> = ({ item }) => (
  <Box sx={{ textAlign: 'center', margin: 2 }}>
    <Stack direction="column" spacing={0.5} alignItems="center" margin={0}>
      <AppTypography variant="h3Bold" color="secondary.main">
        {item.value}
      </AppTypography>
      <AppTypography variant="h4Medium">{item.label}</AppTypography>
    </Stack>
  </Box>
);

const WelcomeSection: FC = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useWelcomeContent();

  if (loading) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppBox>
    );
  }

  if (error) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 } }}>
        <AppContainer>
          <Alert severity="error">Error cargando contenido: {error}</Alert>
        </AppContainer>
      </AppBox>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <AppBox sx={{ py: { xs: 4, md: 7 } }}>
      <AppContainer>
        <AppGrid
          container
          spacing={0}
          sx={{
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <AppGrid item xs={12} md={7}>
            {/*Texto*/}
            <AppBox
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                py: { xs: 4, md: 8 },
                px: { xs: 2, md: 0 },
                maxWidth: { md: 600 },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              <Box sx={{ mb: 3 }}>
                <AppTypography
                  variant="h4Regular"
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <AppTypography
                    variant="h4Regular"
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                      px: 0.5,
                    }}
                  >
                    {' '}
                    {data.title}
                    {/* <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 15, md: 25 },
                        left: 2,
                        transform: 'rotate(2deg)',
                        '& img': {
                          width: { xs: 100, md: 180 },
                          height: 'auto',
                        },
                      }}
                    >
                      {' '}
                      <img src={headline} />
                    </Box>{' '} */}
                  </AppTypography>
                  {/*tus{' '}*/}
                  <AppTypography
                    variant="h4Regular"
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      color: 'secondary.main',
                      px: 0.5,
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    {' '}
                    {data.highlightedWord}
                    {/* SVG decorativo/acento */}
                    {/* <svg version="1.1" viewBox="0 0 3183 3072">
                      <g>
                        <path
                          fill="#F57C00"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#F57C00"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#F57C00"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg> */}
                  </AppTypography>
                  <br />
                  {data.subtitle}
                </AppTypography>
              </Box>
              <Divider sx={{ my: 2, borderColor: 'transparent' }} />
              <AppTypography variant="baseRegular">{data.description}</AppTypography>
              <Divider sx={{ my: 2, borderColor: 'transparent' }} />
              {/* <AppButton
                size="large"
                sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
                onClick={() => navigate(ROUTES.HOME)}
              >
                {data.buttonText}
              </AppButton> */}
            </AppBox>
          </AppGrid>
          {/*imagen*/}
          <AppGrid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'center' },
              overflow: 'visible',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={welcomeImg}
              sx={{
                width: '130%',
                maxWidth: { xs: 320, sm: 400, md: 600 },
                objectFit: 'contain',
                position: 'relative',
                background: 'transparent',
                mr: 5,
              }}
            />
          </AppGrid>
        </AppGrid>
        {/* Estadísticas */}
        <AppBox sx={{ boxShadow: 2, py: 4, px: 4, borderRadius: 4 }}>
          <AppGrid container>
            {exps.map((item) => (
              <AppGrid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </AppGrid>
            ))}
          </AppGrid>
        </AppBox>
      </AppContainer>
    </AppBox>
  );
};

export default WelcomeSection;
