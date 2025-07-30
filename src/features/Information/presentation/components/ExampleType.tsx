import { Box,Typography } from "@mui/material"

type ExampleTypeProps = {
    title : string
    description : string
    image : string
}

function ExampleType ({title,description,image}:ExampleTypeProps){
 return(
    
        <Box sx={{display:"flex", alignItems:"center", flexDirection: "column", width: "100%"}}>
            <Box>
                {image && (
                <img src={image} alt={title} style={{ width: 150, borderRadius: 4}} />
                )}
            </Box>
             <Box sx={{display:"flex", alignItems:"center", flexDirection: "column", width: "100%"}}>
                <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
 )
        
}

export default ExampleType