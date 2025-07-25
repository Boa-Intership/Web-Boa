import { Box, Container, Typography,Grid } from "@mui/material";
import DetailSection from "./DetailSection";
import CardSimple from "./CardSimple";
import ModalDetailItem from "./ModalDetailItem";
import ExampleType from "./ExampleType";
import { wrap } from "module";

export default function SectionInfo(){

return(
    <Container >
        <Box justifyContent={"center"} display={"flex"}>
           <CardSimple
            title="CARGA GENERAL"
            description="Una 'Carga general' se refiere a todo tipo de mercancía que no necesita condiciones especiales de manipulación, transporte o almacenamiento. Son bienes que pueden ser enviados por vía aérea sin requerir cuidados particulares como refrigeración, manejo delicado o documentación especial como ocurre con cargas peligrosas o perecederas."
            imageUrl="../src/assets/cargaGeneral.jpg"
            background="#00000060"
           />
        </Box>
         {/* <Box sx={{ bgcolor:"#4f3f949a", padding:2, gap: 2}}>
            <Typography fontSize={16} variant="subtitle1" fontWeight="bold">REQUISITOS</Typography>
            <ModalDetailItem
                title= "Nacional"
                description= {[
                "Toda carga debe ser presentada abierta para su correspondiente revisión al 100%.",
                "El cliente debe tener material para terminar de embalar luego de la revisión de su carga.",
                "La carga debe contar con embalaje adecuado de acuerdo al tipo de carga que desea enviar.",
                "Toda encomienda o carga será aceptada para envío con el respectivo documento de identidad vigente.",
                "La carga será aceptada hasta dos horas antes de la salida del vuelo y entregada una hora después de la llegada del vuelo.",
                "Todo envío y recepción de cargas se debe realizar únicamente en oficinas de BoA Cargo.",
              ]}
              imageUrl= {"../src/assets/cargaGeneral.jpg"}
            
            />
            <ModalDetailItem
                title= "Internacional"
                description= {["Para el transporte de carga internacional, los clientes deben contactarse con un Agente de carga de su confianza, que lo asesorará con todos los documentos y procedimientos de exportación según normativa aduanera vigente, embalaje de acuerdo a tipo de carga y procedimiento de controles de autoridades gubernamentales en origen y destino."]}
                imageUrl= {"../src/assets/cargaGeneral.jpg"}
            />
        </Box>  */}
        <Typography variant="h6">¿Que cargas pueden entrar a esta categoria?</Typography>
        <Typography variant="body1">Ejemplos comunes de carga general en BoA Cargo:</Typography>
        
            <Grid container rowSpacing={2} columnSpacing={2} sx={{
                justifyContent: "center",
                alignItems: "center",
               
            }}>
                <Grid item>
                    <ExampleType
                    title="Bienes manufacturados"
                    description="Aqui se coloca algunos ejemplos"
                    image="../src/assets/cargaGeneral.jpg"
                    />
                </Grid>
                <Grid item>
                    <ExampleType
                    title="Bienes manufacturados"
                    description="Aqui se coloca algunos ejemplos"
                    image="../src/assets/cargaGeneral.jpg"
                    />
                </Grid>
                <Grid item>
                    <ExampleType
                    title="Bienes manufacturados"
                    description="Aqui se coloca algunos ejemplos"
                    image="../src/assets/cargaGeneral.jpg"
                    />
                </Grid>
                <Grid item>
                    <ExampleType
                    title="Bienes manufacturados"
                    description="Aqui se coloca algunos ejemplos"
                    image="../src/assets/cargaGeneral.jpg"
                    />
                </Grid>
            
        </Grid>
        
        
        
    </Container>
);

}