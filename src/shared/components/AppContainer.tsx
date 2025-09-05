import React from 'react';
import { Container, ContainerProps } from '@mui/material';
const AppContainer: React.FC<ContainerProps> = ({ children, maxWidth = 'lg', sx, ...rest }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        //px: { xs: 2, sm: 4 }, // padding horizontal
        py: 1, // padding vertical
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
