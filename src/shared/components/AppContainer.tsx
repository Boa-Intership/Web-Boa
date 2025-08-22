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
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 },
        mx: 'auto',

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
