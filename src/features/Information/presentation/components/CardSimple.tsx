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
                  <img src={imageUrl} alt={title} style={{ width: 190, borderRadius: 4, marginTop:5 }} />
                  )}
              </Box>
              <Box>
                  <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
                  <Typography variant="body2" >{description}</Typography>
              </Box>
          </Box>

      );
  }
//  function CardSimple({ title, description, imageUrl, background }: CardSimpleProps) {
//    return (
//      <Box bgcolor={background} p={2}>
//        <Grid
//          container
//          spacing={2}
        
//          width={700}
//          direction={{ xs: 'column', sm: 'row' }}
//        >
//          {imageUrl && (
//            <Grid item xs={12} sm={4}>
//              <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
//                <img
//                  src={imageUrl}
//                  alt={title}
//                  style={{
//                    width: 190,
//                    borderRadius: 4,
                  
//                  }}
//                />
//              </Box>
//            </Grid>
//          )}

//          <Grid item xs={12} >
//            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//              {title}
//            </Typography>
//            <Typography variant="body2">
//              {description}
//            </Typography>
//          </Grid>
//        </Grid>
//      </Box>
//    );
//  }
export default CardSimple