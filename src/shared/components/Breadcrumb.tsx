import { Box, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import React from 'react';
type BreadcrumbProps = {
  nameSection: string;
  selected: string;
};

function Breadcrumb({ nameSection, selected }: BreadcrumbProps) {
  const navigate = useNavigate();
  return (
    <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" sx={{ color: 'warning.dark' }} />}
        aria-label="breadcrumb"
        sx={{
          bgcolor: '#fafafa',
          p: 2,
          my: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer' }}
        >
          Inicio
        </Link>
        <AppTypography variant="baseRegular" color="text.primary">
          {nameSection}
        </AppTypography>
        <AppTypography variant="baseBold" color="primary.dark" fontWeight="bold">
          {selected}
        </AppTypography>
      </Breadcrumbs>
    </Box>
  );
}

export default Breadcrumb;
