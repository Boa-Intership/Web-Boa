import React from "react";
import {
  Popper,
  Paper,
  ClickAwayListener,
  Box,
  MenuList,
  MenuItem,
  useTheme,
} from "@mui/material";
import type { NavColumn } from "./types";

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
          { name: "offset", options: { offset: [0, 8] } },
          { name: "preventOverflow", options: { boundary: "viewport" } },
        ] as any
      }
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={{ mt: 1, p: 2, minWidth: 320 }}
        >
          <Box sx={{ display: "flex", gap: 4 }}>
            {columns?.map((col, i) => (
              <Box key={i} sx={{ minWidth: 160 }}>
                {col.title && (
                  <Box sx={{ fontWeight: 700, mb: 1 }}>{col.title}</Box>
                )}
                <MenuList dense>
                  {col.links.map((l) => (
                    <MenuItem
                      key={l.to}
                      onClick={() => {
                        onClose();
                        window.location.pathname = l.to;
                      }}
                    >
                      {l.label}
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
