
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface ModalDetailItemProps {
  title: string;
  description: string[];
  imageUrl?: string[];
}

function ModalDetailItem({ title, description, imageUrl }: ModalDetailItemProps) {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={imageUrl ? 8 : 12}>
        <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
        <ul>
          {description.map((text, index) => (
            <li key={index}>
              <Typography variant="body2" textAlign={"justify"}>{text}</Typography>
            </li>
          ))}
        </ul>
      </Grid>

      {imageUrl && imageUrl.length > 0 && (
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            {imageUrl.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${title} ${index + 1}`}
                style={{ width: 250, borderRadius: 4, marginBottom: 8 }}
              />
            ))}
          </Box>
        </Grid>
      )}

    </Grid>
  );
}

export default ModalDetailItem;
