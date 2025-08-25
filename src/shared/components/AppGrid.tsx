import React from 'react';
import { Grid, GridProps } from '@mui/material';

const AppGrid: React.FC<GridProps> = ({ children, ...rest }) => (
  <Grid {...rest}>{children}</Grid>
);

export default AppGrid;
