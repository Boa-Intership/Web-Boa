import React, { useState } from "react";
import { Container, Box, Alert } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import ButtonCardInfo from "./ButtonCardInfo";
import TransitionsModal from "./TransitionsModal";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import { title } from "process";

export default function CardInfoSection() {
  const [openModal, setOpenModal] = useState<null | "cargaGeneral" | "animalesVivos" | "perecederos" | "restosHumanos" | "prohibidos">(null);

  const handleOpenModal = (type: "cargaGeneral" | "animalesVivos" | "perecederos" | "restosHumanos" | "prohibidos") => {
    setOpenModal(type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  // Informacion especifica de cada tipo de carga
  const getModalProps = () => {
    switch (openModal) {
      case "cargaGeneral":
        return {
          title: "Carga General",
          concept: [{
            description: "Una 'Carga general' se refiere a todo tipo de mercancía que no necesita condiciones especiales de manipulación, transporte o almacenamiento. Son bienes que pueden ser enviados por vía aérea sin requerir cuidados particulares como refrigeración, manejo delicado o documentación especial como ocurre con los animales vivos o perecederas.",
            imageUrl: "../src/assets/cargaGeneral.jpg",
            background: "#22408160",
          }],
          subtitle: "Requisitos",
          details: [
            {
              title: "Nacional",
              description: [
                "Toda carga debe ser presentada abierta para su correspondiente revisión al 100%.",
                "El cliente debe tener material para terminar de embalar luego de la revisión de su carga.",
                "La carga debe contar con embalaje adecuado de acuerdo al tipo de carga que desea enviar.",
                "Toda encomienda o carga será aceptada para envío con el respectivo documento de identidad vigente.",
                "La carga será aceptada hasta dos horas antes de la salida del vuelo y entregada una hora después de la llegada del vuelo.",
                "Todo envío y recepción de cargas se debe realizar únicamente en oficinas de BoA Cargo.",
              ],
              imageUrl: ["../src/assets/Gemini_Generated_Image_paquete.png"],
            },
            {
              title: "Internacional",
              description: [
                "Para el transporte de carga internacional, los clientes deben contactarse con un Agente de carga de su confianza, que lo asesorará con todos los documentos y procedimientos de exportación según normativa aduanera vigente, embalaje de acuerdo a tipo de carga y procedimiento de controles de autoridades gubernamentales en origen y destino.",
              ],

            },
          ],
          example: [
            {
              title: "Bienes manufacturados",
              description: "Ropa, calzado, juguetes, herramientas",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Maquinaria y repuestos",
              description: "Motores, partes de vehículos, maquinaria liviana",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Material impreso y papelería",
              description: "Libros, revistas, catálogos, documentos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Electrodomésticos y electrónicos",
              description: "Celulares, computadoras, impresoras",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Productos de higiene o limpieza",
              description: "Detergentes, jabones, desinfectantes (no peligrosos)",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Efectos personales",
              description: "Maletas, cajas con pertenencias de viaje",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Muebles pequeños desmontables",
              description: "Sillas, mesas plegables, estanterías livianas",
              image: "../src/assets/cargaGeneral.jpg",
            }
          ],
        };

      case "animalesVivos":
        return {
          title: "Animales Vivos",
          concept: [{
            description: "la categoría de 'Animales Vivos' hace referencia al servicio especializado para el transporte aéreo de animales vivos bajo condiciones específicas que garanticen su bienestar, seguridad y cumplimiento normativo durante todo el viaje.",
            imageUrl: "../src/assets/mascotas2.jpg",
            background: "#22408160",
          }],
          subtitle: "Requisitos",
          details: [
            {
              title: "Animales Domésticos",
              description: [
                "Realizar la reserva con un mínimo de 24 horas de anticipación en oficina BoA Cargo de su ciudad.",
                "El animal deberá estar en una jaula adecuada y segura, con material absorbente (tamaño y estado) con su respectivo marcado, etiquetado y rotulado.",
                "Deben viajar en un contenedor homologado con ventilación. Cada animal debe disponer del suficiente espacio para levantarse, estar sentado erguido, estar tumbado en posición natural y darse la vuelta de forma normal mientras esté levantado. Se deberá transportar a las mascotas en contenedores rígidos aprobados por IATA con puerta metálica, adecuados para el transporte aéreo. Los contenedores de malla de alambre o de malla soldada no son aceptables.",
                "La edad del animal a ser transportado debe ser mayor a tres meses (excepto pollitos bebés).",
                "Se deberá presentar cartilla de vacunas (original y dos fotocopias), debe haber transcurrido 30 días posterior a la vacuna antirrábica.",
                "Presentar certificado del veterinario que acredite que el animal es apto para viajar por vía aérea y su estado de salud. Para otras especies (diferentes a perros y gatos) se requiere autorización del SENASAG.",
                "Los animales vivos deberán ser presentados dos horas antes del vuelo.",
                "Por seguridad de los animales, no transportamos perros ni gatos braquicéfalos (nariz achatada).",
                "El consignatario debe recoger a la llegada del vuelo.",
                "Por seguridad sugerimos no sedar animales domésticos en tramos nacionales e internacionales.",
                "Para el transporte de animales vivos de fauna silvestre en peligro de extinción, se debe presentar la Autorización del Ministerio de Medio Ambiente y Agua de Bolivia.",
              ],
              imageUrl: ["../src/assets/mascotas1.webp", "../src/assets/vacunas.webp"],
            },
          ],
          example: [
            {
              title: "Mascotas domésticas",
              description: "Perros, gatos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Aves",
              description: "Canarios, loros, aves ornamentales",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: " Animales pequeños",
              description: "Conejos, hámsters, cobayos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Animales de granja (ocasional)",
              description: "Pollitos, cabritos, corderos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Animales exóticos (autorizados)",
              description: "Tortugas, iguanas. Importante:BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES)",
              image: "../src/assets/cargaGeneral.jpg",
            }

          ],
        };

      case "perecederos":
        return {
          title: "Perecederos",
          concept: [{
            description: "las 'Cargas Perecederas' son aquellos productos que tienen una vida útil limitada y que requieren condiciones especiales de temperatura, humedad o manejo para evitar su deterioro durante el transporte.",
            imageUrl: "../src/assets/alimentos.jpg",
            background: "#22408160",
          }],
          subtitle: "Requisitos",
          details: [
            {
              title: "Alimentos Refrigerados",
              description: [
                "Deberá estar embalada de tal forma que proteja al producto transportado.",
                "Embalaje adecuado de acuerdo al tipo de producto.",
                "Debe contar con su respectivo marcado y rotulado (Nombre completo del consignatario, teléfono y ciudad).",
                "La carga será aceptada hasta dos horas antes de la salida del vuelo y entregada una hora después de la llegada del vuelo.",
                "Si es carga sensible a la temperatura, debe contar con su propio refrigerante.",
                "El transporte se realizará a temperatura ambiente, por ello el cliente debe tomar las previsiones necesarias para que su carga mantenga la temperatura óptima.",
              ],
            },
          ],
          example: [
            {
              title: "Alimentos frescos",
              description: "	Frutas, verduras, hortalizas, hierbas frescas",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Productos cárnicos y derivados",
              description: "Carne fresca o congelada, embutidos, charcutería",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Pescados y mariscos",
              description: "Filetes, camarones, productos congelados",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Productos lácteos y panadería",
              description: "Yogur, quesos, postres, pasteles",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Flores y plantas vivas",
              description: "Rosas, claveles, orquídeas, plantas ornamentales",
              image: "../src/assets/cargaGeneral.jpg",
            }
          ],
        };

      case "restosHumanos":
        return {
          title: "Restos humanos",
          concept: [{
            description: " la categoría de 'Restos humanos' se refiere al transporte aéreo de personas fallecidas, ya sea en forma de cuerpo completo (féretro) o de cenizas (urnas funerarias), cumpliendo con normas legales, sanitarias y logísticas estrictas.",
            imageUrl: "../src/assets/ataud.webp",
            background: "#22408160",
          }],
          subtitle: "Requisitos",
          details: [
            {
              title: "Nacional",
              description: [
                "Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.",
                "Certificado forense.",
                "Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa.",
                "Certificado de formolización, (embalsamamiento), cremación según sea aplicable.",
                "Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.",
                "El embalaje deberá ser adecuado para el transporte.",
                "NOTA: Se deben presentar los documentos originales más tres copias de cada uno.",

              ],
              imageUrl: ["../src/assets/cargaGeneral.jpg", "../src/assets/cargaGeneral.jpg"],
            },
            {
              title: "Internacional",
              description: [
                "Para garantizar un transporte adecuado, es imprescindible seguir una serie de normativas y procedimientos específicos, además toma en cuenta que debes realizar la reserva con 24 horas de anticipación.",
                "Certificado de Defunción original emitido por una Oficina Gubernamental del país donde se produjo el fallecimiento, debidamente validado por el Consulado del país respectivo.",
                "Certificado forense.",
                "Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa.",
                "Certificado de formolización, (embalsamamiento), cremación según sea aplicable.",
                "Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(policial o alcaldía) del país local donde se origina el embarque.",
                "Cualquier otro certificado que pudiera ser exigido por los países de tránsito o destino del féretro.",
                "El embalaje deberá ser adecuado para el transporte.",
              ],

            },
          ],
          example: [
            {
              title: "Bienes manufacturados",
              description: "Ropa, calzado, juguetes, herramientas",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Maquinaria y repuestos",
              description: "Motores, partes de vehículos, maquinaria liviana",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Material impreso y papelería",
              description: "Libros, revistas, catálogos, documentos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Electrodomésticos y electrónicos",
              description: "Celulares, computadoras, impresoras",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Productos de higiene o limpieza",
              description: "Detergentes, jabones, desinfectantes (no peligrosos)",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Efectos personales",
              description: "Maletas, cajas con pertenencias de viaje",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Muebles pequeños desmontables",
              description: "Sillas, mesas plegables, estanterías livianas",
              image: "../src/assets/cargaGeneral.jpg",
            }
          ],
        };

      case "prohibidos":
        return {
          title: "Prohibidos",
          concept: [{
            description: "Una 'Carga general' se refiere a todo tipo de mercancía que no necesita condiciones especiales de manipulación, transporte o almacenamiento. Son bienes que pueden ser enviados por vía aérea sin requerir cuidados particulares como refrigeración, manejo delicado o documentación especial como ocurre con los animales vivos o perecederas.",
            imageUrl: "../src/assets/cargaGeneral.jpg",
            background: "#22408160",
          }],
          subtitle: "Requisitos",
          details: [
            {
              title: "Nacional",
              description: [
                "Toda carga debe ser presentada abierta para su correspondiente revisión al 100%.",
                "El cliente debe tener material para terminar de embalar luego de la revisión de su carga.",
                "La carga debe contar con embalaje adecuado de acuerdo al tipo de carga que desea enviar.",
                "Toda encomienda o carga será aceptada para envío con el respectivo documento de identidad vigente.",
                "La carga será aceptada hasta dos horas antes de la salida del vuelo y entregada una hora después de la llegada del vuelo.",
                "Todo envío y recepción de cargas se debe realizar únicamente en oficinas de BoA Cargo.",
              ],
              imageUrl: ["../src/assets/cargaGeneral.jpg", "../src/assets/cargaGeneral.jpg"],
            },
            {
              title: "Internacional",
              description: [
                "Para el transporte de carga internacional, los clientes deben contactarse con un Agente de carga de su confianza, que lo asesorará con todos los documentos y procedimientos de exportación según normativa aduanera vigente, embalaje de acuerdo a tipo de carga y procedimiento de controles de autoridades gubernamentales en origen y destino.",
              ],

            },
          ],
          example: [
            {
              title: "Bienes manufacturados",
              description: "Ropa, calzado, juguetes, herramientas",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Maquinaria y repuestos",
              description: "Motores, partes de vehículos, maquinaria liviana",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Material impreso y papelería",
              description: "Libros, revistas, catálogos, documentos",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Electrodomésticos y electrónicos",
              description: "Celulares, computadoras, impresoras",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Productos de higiene o limpieza",
              description: "Detergentes, jabones, desinfectantes (no peligrosos)",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Efectos personales",
              description: "Maletas, cajas con pertenencias de viaje",
              image: "../src/assets/cargaGeneral.jpg",
            },
            {
              title: "Muebles pequeños desmontables",
              description: "Sillas, mesas plegables, estanterías livianas",
              image: "../src/assets/cargaGeneral.jpg",
            }
          ],
        };
      default:
        return null;
    }
  };

  const modalProps = getModalProps();

  return (
    <Container>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        <ButtonCardInfo
          title="Carga General"
          description="Unos cuantos ejemplos, restricciones"
          onClick={() => handleOpenModal("cargaGeneral")}
          icon={<Inventory2OutlinedIcon />}
          imageUrl="../src/assets/cargaGeneral.jpg"
        />
        <ButtonCardInfo
          title="Animales vivos"
          description="Unos cuantos ejemplos, restricciones"
          onClick={() => handleOpenModal("animalesVivos")}
          icon={<PetsOutlinedIcon />}
          imageUrl="../src/assets/mascotas2.jpg"
        />
        <ButtonCardInfo
          title="Perecederos"
          description="Unos cuantos ejemplos, restricciones"
          onClick={() => handleOpenModal("perecederos")}
          icon={<SetMealOutlinedIcon />}
          imageUrl="../src/assets/alimentos.jpg"
        />
        <ButtonCardInfo
          title="Restos Humanos"
          description="Unos cuantos ejemplos, restricciones"
          onClick={() => handleOpenModal("restosHumanos")}
          icon={<LocalHospitalOutlinedIcon />}
          imageUrl="../src/assets/ataud.webp"
        />
        <ButtonCardInfo
          title="Prohibidos"
          description="Unos cuantos ejemplos, restricciones"
          onClick={() => handleOpenModal("prohibidos")}
          icon={<DoNotDisturbAltIcon />}
          imageUrl="../src/assets/prohibido.jpg"
        />

      </Box>

      {modalProps && (
        <TransitionsModal
          open={!!openModal}
          onClose={handleCloseModal}
          title={modalProps.title}
          concept={modalProps.concept}
          subtitle={modalProps.subtitle}
          details={modalProps.details}
          example={modalProps.example}
        />
      )}
    </Container>
  );
}
