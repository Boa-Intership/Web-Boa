import React from 'react';
import { Container, ContainerProps } from '@mui/material';

const AppContainer: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  sx,
  ...rest
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 4 }, // padding horizontal
        py: { xs: 2, sm: 4 }, // padding vertical
        mx: 'auto', // centrar

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
