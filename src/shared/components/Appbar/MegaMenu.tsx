import React from 'react';
import {
  Popper,
  Paper,
  ClickAwayListener,
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { NavColumn } from './types';
import { AppTypography } from 'ui';

const MegaMenu: React.FC<{
  open: boolean;
  anchorEl: HTMLElement | null | undefined;
  columns?: NavColumn[];
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}> = ({ open, anchorEl, columns, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      style={{ zIndex: 1400 }}
      modifiers={
        [
          { name: 'offset', options: { offset: [0, 8] } },
          { name: 'preventOverflow', options: { boundary: 'viewport' } },
        ] as any
      }
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={{
            p: 2,
            boxShadow: 2,
            backgroundColor: '#fafafa',
          }}
        >
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {columns?.map((col, i) => (
              <Box key={i} sx={{ minWidth: 160 }}>
                {col.title && (
                  <AppTypography variant="h4Bold" color="primary.main">
                    {col.title}
                  </AppTypography>
                )}
                <MenuList role="menu" dense>
                  {col.links.map((l) => (
                    <MenuItem
                      key={l.to}
                      component={Link}
                      to={l.to}
                      onClick={onClose}
                      role="menuitem"
                      sx={{
                        borderRadius: 1,
                        transition: 'all 0.2s ease',

                        '&:hover': {
                          backgroundColor: 'Transparent',
                          color: 'primary.main',
                          pl: 2,
                        },
                      }}
                    >
                      {l.icon && (
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 30 }}>
                          {l.icon}
                        </ListItemIcon>
                      )}
                      <ListItemText primary={l.label} />
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            ))}
          </Box>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default MegaMenu;
