import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TipoCarga, SeccionCarga } from '../../domain/entities/Carga';

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { SvgIconComponent } from '@mui/icons-material';

interface Props {
  data: TipoCarga;
  onSelectSeccion?: (seccion: SeccionCarga) => void;
}

const MenuTiposDeCarga: React.FC<Props> = ({ data, onSelectSeccion }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpand = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Mapa de nombre string -> componente
  const iconMap: Record<string, SvgIconComponent> = {
    Inventory2OutlinedIcon,
    PetsOutlinedIcon,
    SetMealOutlinedIcon,
    LocalHospitalOutlinedIcon,
    MonetizationOnOutlinedIcon,
    DangerousOutlinedIcon,
  };

  return (
    <Box sx={{ width: '100%', p: 1 }}>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
        Contenido
      </Typography>

      {data.categorias_cargas.map((categoria) => (
        <Accordion
          key={categoria.documentoId}
          expanded={expanded === categoria.documentoId}
          onChange={handleExpand(categoria.documentoId)}
          sx={{
            borderRadius: 2,
            boxShadow: 'none',
            mb: 1,
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            sx={{
              border: '1px solid',
              borderColor: 'primary.dark',
              backgroundColor:
                expanded === categoria.documentoId ? 'primary.dark' : 'background.default',
              '&:hover': { backgroundColor: 'primary.dark' },
              color: expanded === categoria.documentoId ? '#fafafa' : 'primary.dark',
              '&: hover': { color: '#fafafa' },
              borderRadius: 2,
            }}
            expandIcon={<ExpandMoreIcon />}
          >
            {iconMap[categoria.icono] && (
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                {React.createElement(iconMap[categoria.icono], {
                  sx: { mr: 1 },
                })}
              </Box>
            )}
            <Typography variant="subtitle2" fontWeight="bold">
              {categoria.titulo}
            </Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              p: 0,
              border: '1px solid',
              borderColor: 'grey.100',
            }}
          >
            <List disablePadding>
              {categoria.seccions.length > 0 ? (
                categoria.seccions.map((seccion) => (
                  <React.Fragment key={seccion.documentoId}>
                    <ListItemButton
                      sx={{
                        pl: 3,
                        py: 1,
                        backgroundColor: 'background.default',
                        '&:hover': { backgroundColor: '#E6EEF8' },
                      }}
                      onClick={() => onSelectSeccion?.(seccion)}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'primary.main',
                              fontSize: '0.9rem',
                              //textDecoration: 'underline',
                            }}
                          >
                            {seccion.titulo}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    p: 2,
                    color: '#555',
                    backgroundColor: 'background.default',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >
                  No hay secciones disponibles
                </Typography>
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default MenuTiposDeCarga;
