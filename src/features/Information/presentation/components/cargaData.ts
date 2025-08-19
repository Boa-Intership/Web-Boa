// Definimos la misma interfaz que se usa en infoTipoCarga
interface Detail {
    title: string;
    description: string[];
    imageUrl?: string[];
}

interface Example {
    title: string;
    description: string;
    image: string;
}

export interface InfoTipoCarga {
    title: string;
    description: string;
    subtitle: string;
    details: Detail[];
    example: Example[];
}

// Creamos el objeto con los datos del tipo de carga
export const cargaData: Record<string, InfoTipoCarga> = {
    cargaGeneral: {
        title: "Carga General",
        description:
            "La categoría de Carga general se refiere a todo tipo de mercancía que no necesita condiciones especiales de manipulación, transporte o almacenamiento. Son bienes que pueden ser enviados por vía aérea sin requerir cuidados particulares como refrigeración, manejo delicado o documentación especial como ocurre con los animales vivos o perecederas.",
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
                imageUrl: [
                    "/informacioPage/cargaGeneral/Gemini_Generated_Image_paquete.png",
                ],
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
                image: "/informacioPage/cargaGeneral/GGI_manu.png",
            },
            {
                title: "Maquinaria y repuestos",
                description: "Motores, partes de vehículos, maquinaria liviana",
                image: "/informacioPage/cargaGeneral/GGI_herramientas.png",
            },
            {
                title: "Material impreso y papelería",
                description: "Libros, revistas, catálogos, documentos",
                image: "/informacioPage/cargaGeneral/GGI_papeleria.png",
            },
            {
                title: "Electrodomésticos y electrónicos",
                description: "Celulares, computadoras, impresoras",
                image: "/informacioPage/cargaGeneral/GGI_electronicos.png",
            },
            {
                title: "Productos de higiene o limpieza",
                description: "Detergentes, jabones, desinfectantes (no peligrosos)",
                image: "/informacioPage/cargaGeneral/GGI_limpieza.png",
            },
            {
                title: "Efectos personales",
                description: "Maletas, cajas con pertenencias de viaje",
                image: "/informacioPage/cargaGeneral/GGI_personal.png",
            },
            {
                title: "Muebles pequeños desmontables",
                description: "Sillas, mesas plegables, estanterías livianas",
                image: "/informacioPage/cargaGeneral/GGI_muebles.png",
            },
        ],
    },
    animalesVivos: {
        title: "Animales Vivos",
        description: "La categoría de Animales Vivos hace referencia al servicio especializado para el transporte aéreo de animales vivos bajo condiciones específicas que garanticen su bienestar, seguridad y cumplimiento normativo durante todo el viaje.",
        subtitle: "Requisitos",
        details: [
            {
                title: "Nacional",
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
                imageUrl: ["/informacioPage/animalesVivos/mascotas1.webp", "/informacioPage/animalesVivos/vacunas.webp"],
            },
        ],
        example: [
            {
                title: "Mascotas domésticas",
                description: "Perros, gatos",
                image: "/informacioPage/animalesVivos/GGI_mascotas.png",
            },
            {
                title: "Aves",
                description: "Canarios, loros, aves ornamentales",
                image: "/informacioPage/animalesVivos/GGI_aves.png",
            },
            {
                title: " Animales pequeños",
                description: "Conejos, hámsters, cobayos",
                image: "/informacioPage/animalesVivos/GGI_aniPeque.png",
            },
            {
                title: "Animales de granja (ocasional)",
                description: "Pollitos, cabritos, corderos",
                image: "/informacioPage/animalesVivos/GGI_granja.png",
            },
            {
                title: "Animales exóticos (autorizados)",
                description: "Tortugas, iguanas. Importante:BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES)",
                image: "/informacioPage/animalesVivos/GGI_exotico.png",
            }

        ],
    },

  // Aquí podrías ir agregando otras categorías como "cargaPeligrosa", "perecederos", etc.
};
