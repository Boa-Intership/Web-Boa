import { Box,Typography,Grid } from "@mui/material"


type CardSimpleProps = {
    title? : string
    description : string
    imageUrl? : string
    background? : string
}

  function CardSimple ({title,description,imageUrl,background}:CardSimpleProps) {
      return(
          <Box 
              bgcolor={background}
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }} // columna en móviles, fila en pantallas medianas o mayores
              gap={2}
              p={1}
              alignItems="center"
              borderRadius={2}
              >
            
              <Box flexShrink={0} >
                  {imageUrl && (
                  <img src={imageUrl} alt={title} style={{ width: 150,height: 100, borderRadius: 4, marginTop:4 }} />
                  )}
              </Box>
              <Box>
                  <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
                  <Typography variant="body2" >{description}</Typography>
              </Box>
          </Box>

      );
  }

export default CardSimple