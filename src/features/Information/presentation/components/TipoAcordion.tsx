import React from 'react';
import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppTypography } from 'ui';

interface TipoAcordionProps {
  titulo: string;
  contenido: BlocksContent;
  defaultExpanded?: boolean;
}

export const TipoAcordion: React.FC<TipoAcordionProps> = ({
  titulo,
  contenido,
  defaultExpanded = false,
}) => {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        backgroundColor: '#E4F4FF',
        my: 2,
        boxShadow: 'none',
        borderRadius: 2,
        // border: '1px solid #cfeafcff',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${titulo}-content`}
        id={`panel-${titulo}-header`}
        sx={{
          pl: 4,
        }}
      >
        <Typography variant="subtitle1" fontWeight={'bold'} component="span" color="#295188">
          {titulo}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: 6,
        }}
      >
        <AppTypography variant="baseRegular" component="div" textAlign="justify">
          <BlocksRenderer
            content={contenido}
            blocks={{
              paragraph: ({ children }) => (
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {children}
                </Typography>
              ),
              link: ({ children, url }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'primary.main',
                    textDecoration: 'underline',
                  }}
                >
                  {children}
                </a>
              ),
            }}
          />
        </AppTypography>
      </AccordionDetails>
    </Accordion>
  );
};
