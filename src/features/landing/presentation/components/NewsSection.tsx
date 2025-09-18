import React from 'react';
import { AppBox, AppTypography, Carousel } from 'ui';
import { CarouselItem } from 'src/shared/components/Carousel';

// Tipado local para Vite import.meta.glob solo en este archivo
const imageModules = import.meta.glob('/src/assets/new*.jpg', { eager: true }) as Record<
  string,
  { default: string }
>;

const imagePaths = Object.values(imageModules).map((mod) => mod.default);

const news: CarouselItem[] = [
  {
    id: 1,
    image: imagePaths[0],
  },
  {
    id: 2,
    image: imagePaths[1],
  },
  {
    id: 3,
    image: imagePaths[2],
    title: 'Título noticia 3',
    description: 'Descripción de la noticia 3',
    link: 'https://ejemplo.com/noticia3',
  },
  {
    id: 4,
    image: 'https://assets.codepen.io/2585/Entertainment.svg',
    title: 'Título noticia 4',
    description: 'Descripción de la noticia 4',
    link: 'https://ejemplo.com/noticia4',
  },
];

const NewsSection: React.FC = () => (
  <AppBox sx={{ py: { xs: 5, md: 8 }, background: '#fff' }}>
    <AppTypography variant="h2Bold" color="primary" textAlign="center">
      Noticias
    </AppTypography>
    <Carousel items={news} />
  </AppBox>
);

export default NewsSection;
