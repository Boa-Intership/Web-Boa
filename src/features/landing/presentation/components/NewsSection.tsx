import React from 'react';
import { AppBox, AppTypography, Carousel } from 'ui';
import { CarouselItem } from 'src/shared/components/Carousel';

// Carga dinámica de imágenes new*.jpg desde src/assets usando import.meta.glob (Vite)
const imageModules = import.meta.glob<{ default: string }>('/src/assets/new*.jpg', { eager: true });
const imagePaths = Object.values(imageModules).map((mod) => mod.default);

// {
//   id: 1,
//   image: require('src/assets/new.jpg'),
//   title: 'Título de la noticia',
//   description: 'Descripción de la noticia',
//   link: 'https://ejemplo.com/noticia1',
// }

const news: CarouselItem[] = [
  {
    id: 1,
    image: imagePaths[0],
    // title: 'Título noticia 1',
    // description: 'Descripción de la noticia 1',
    // link: 'https://ejemplo.com/noticia1',
  },
  {
    id: 2,
    image: imagePaths[1],
    // title: 'Título noticia 2',
    // description: 'Descripción de la noticia 2',
    // link: 'https://ejemplo.com/noticia2',
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
