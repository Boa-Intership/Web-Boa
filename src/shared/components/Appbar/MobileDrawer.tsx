import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import type { NavItem } from "./types";

const MobileDrawer: React.FC<{
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  navigate: (to: string) => void;
}> = ({ open, onClose, navItems, navigate }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300 }} role="presentation">
        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.key}>
              <ListItemButton
                onClick={() => {
                  onClose();
                  if (item.route) navigate(item.route);
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>

              {item.columns && (
                <Box sx={{ pl: 2 }}>
                  {item.columns.map((col, i) => (
                    <Box key={i}>
                      {col.title && (
                        <Box sx={{ fontWeight: 700, pl: 1, pt: 1 }}>
                          {col.title}
                        </Box>
                      )}
                      {col.links.map((l) => (
                        <ListItemButton
                          key={l.to}
                          sx={{ pl: 4 }}
                          onClick={() => {
                            onClose();
                            navigate(l.to);
                          }}
                        >
                          <ListItemText primary={l.label} />
                        </ListItemButton>
                      ))}
                    </Box>
                  ))}
                </Box>
              )}
              <Divider />
            </React.Fragment>
          ))}

          <ListItemButton
            onClick={() => {
              onClose();
              navigate("/login");
            }}
          >
            <ListItemText primary="Iniciar sesión" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              onClose();
              navigate("/registro");
            }}
          >
            <ListItemText primary="Abrir cuenta" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
