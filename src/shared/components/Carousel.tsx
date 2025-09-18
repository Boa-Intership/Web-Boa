import React from 'react';
import { Button, useTheme, Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppBox from './AppBox';
import AppContainer from './AppContainer';
import AppButton from './AppButton';
import { AppTypography } from 'ui';

const LinkButton = ({ href, children, ...props }) => (
  <Box
    component="a"
    href={href}
    {...props}
    sx={{
      fontSize: 12,
      fontWeight: 500,
      color: useTheme().palette.primary.main,
      textTransform: 'none',
      letterSpacing: 0.5,
      transition: 'color 0.2s',
      '&:hover': {
        textDecoration: 'underline',
      },
      ...(props.sx || {}),
    }}
  >
    {children}
  </Box>
);

export interface CarouselItem {
  id: string | number;
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const theme = useTheme();
  const [current, setCurrent] = React.useState(0);

  const handlePrev = () => {
    const next = Math.max(current - 1, 0);
    setCurrent(next);
  };

  const handleNext = () => {
    const next = Math.min(current + 1, items.length - 1);
    setCurrent(next);
  };

  return (
    <AppContainer sx={{ position: 'relative', width: '100%', maxWidth: 400, mx: 'auto', py: 4 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 500, md: 620 },
          overflow: 'hidden',
          borderRadius: 4,
        }}
      >
        {items.map((item, idx) => (
          <Box
            key={item.id}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: idx === current ? 1 : 0,
              zIndex: idx === current ? 2 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: idx === current ? 'auto' : 'none',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '90%', md: '70%' },
                height: { xs: '90%', md: '80%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={item.image}
                alt={item.title || 'Imagen'}
                style={{
                  width: '120%',
                  height: '120%',
                  objectFit: 'contain',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  display: 'block',
                  borderRadius: 8,
                }}
              />
              {(item.title || item.description || item.link) && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'rgba(255,255,255,0.90)',
                    p: { xs: 2, md: 3 },
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  {item.title && (
                    <AppTypography variant="h4Bold" color="primary.main">
                      {item.title}
                    </AppTypography>
                  )}
                  {item.description && (
                    <AppTypography variant="baseMedium">{item.description}</AppTypography>
                  )}
                  {item.link && (
                    <LinkButton href={item.link} target="_blank">
                      Leer más
                    </LinkButton>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      {/* Indicators */}
      <AppBox
        sx={{
          position: 'absolute',
          zIndex: 10,
          display: 'flex',
          left: '50%',
          bottom: 16,
          transform: 'translateX(-50%)',
          gap: 1.5,
        }}
      >
        {items.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            sx={{
              minWidth: 0,
              width: 12,
              height: 12,
              borderRadius: '50%',
              p: 0,
              backgroundColor:
                idx === current ? theme.palette.primary.main : theme.palette.grey[400],
              opacity: idx === current ? 1 : 0.6,
              boxShadow: 0,
              border: '1px solid white',
            }}
          />
        ))}
      </AppBox>
      {/* Controls */}
      <AppButton
        onClick={handlePrev}
        disabled={current === 0}
        sx={{
          minWidth: 0,
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 100,
          borderRadius: '50%',
          width: 44,
          height: 44,
          opacity: 1,
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s, border 0.2s',
          '&:hover': {},
        }}
        aria-label="Anterior"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </AppButton>
      <AppButton
        onClick={handleNext}
        disabled={current === items.length - 1}
        sx={{
          minWidth: 0,
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 100,
          width: 44,
          height: 44,
          opacity: 1,
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s, border 0.2s',
          '&:hover': {},
        }}
        aria-label="Siguiente"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </AppButton>
    </AppContainer>
  );
};

export default Carousel;
