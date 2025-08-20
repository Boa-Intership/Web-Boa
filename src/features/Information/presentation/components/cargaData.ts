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
                    "La carga debe presentarse abierta para revisión total.",
                    "El cliente debe contar con material para reembalar después de la revisión.",
                    "Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).",
                    "Se requiere documento de identidad vigente para aceptar el envío.",
                    "La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de su llegada.",
                    "El envío y la recepción solo se realizan en oficinas de BoA Cargo.",
                ],

                imageUrl: [
                    "/informacioPage/cargaGeneral/Gemini_Generated_Image_paquete.png",
                ],
            },
            {
                title: "Internacional",
                description: [
                    "La carga debe presentarse abierta para revisión total.",
                    "El cliente debe contar con material para reembalar después de la revisión.",
                    "Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).",
                    "La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.",
                    "Se requiere documento de identidad vigente para aceptar el envío.",
                    "La carga de exportación internacional se recibe y almacena hasta 24 horas antes de la salida del vuelo.",
                    "El envío y la recepción se realizan únicamente en oficinas de BoA Cargo.",
                    "Factura comercial de exportación.",
                    "Lista de empaque.",
                    "Certificados (SENASAG, SENAVEX, SENARECON, etc.) según corresponda.",
                    "Declaración de Exportación (DEX) emitida por Aduana mediante el sistema SUMA.",
                    "Declaración General de Seguridad de Carga emitida por el agente de carga.",
                    "Documentos validados por la Aduana Nacional de Bolivia.",
                    "El cliente debe coordinar con un agente de carga de su confianza, quien lo asistirá con trámites aduaneros, embalaje, y controles en origen y destino.",
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
                    "Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.",
                    "Presentar animales vivos 2 horas antes del vuelo.",
                    "El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.",
                    "El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.",
                    "La edad mínima del animal es de 3 meses (excepto pollitos bebés).",
                    "Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.",
                    "Certificado veterinario que acredite buen estado de salud. Para especies distintas a perros y gatos, se requiere autorización del SENASAG.",
                    "Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.",
                    "No se transportan perros ni gatos braquicéfalos (nariz achatada).",
                    "El consignatario debe recoger al animal a la llegada del vuelo.",
                    "Se recomienda no sedar animales domésticos en vuelos nacionales e internacionales.",
                ],

                imageUrl: ["/informacioPage/animalesVivos/mascotas1.webp", "/informacioPage/animalesVivos/vacunas.webp"],
            },
            {
                title: "Internacional",
                description: [
                    "Reservar con al menos 48 horas de anticipación en oficinas de BoA Cargo.",
                    "Presentar animales vivos 4 horas antes del vuelo.",
                    "El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.",
                    "En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.",
                    "El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.",
                    "La edad mínima del animal es de 3 meses (excepto pollitos bebés).",
                    "Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.",
                    "Certificado veterinario que acredite buen estado de salud. Para especies distintas a perros y gatos, se requiere autorización del SENASAG.",
                    "Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.",
                    "No se transportan perros ni gatos braquicéfalos (nariz achatada).",
                    "El consignatario debe recoger al animal a la llegada del vuelo.",
                    "Se recomienda no sedar animales domésticos en vuelos nacionales e internacionales.",
                    "Certificado zoosanitario que confirme que el animal está libre de enfermedades y parásitos.",
                    "Todos los documentos deben estar validados por la embajada del país de destino cuando corresponda.",
                    "Algunos países requieren microchip. El expedidor debe consultar en el consulado o embajada las restricciones y presentar la documentación al menos 4 horas antes del vuelo.",
                    "Acompañar la certificación del expedidor de animales vivos y toda la documentación exigida por los países de origen y tránsito.",
                    "Declaración General de Seguridad de Carga emitida por el agente de carga.",
                    "Para exportar mascotas a Estados Unidos, el agente de carga debe solicitar aprobación escrita al CDC enviando un correo a CDCanimalimports@cdc.gov con al menos 30 días hábiles de anticipación.",
                    "Para envíos a EE.UU., toda la documentación debe presentarse también en inglés.",

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
    perecederos: {
        title: "Perecederos",
        description: "La categoría perecederos son aquellos productos que tienen una vida útil limitada y que requieren condiciones especiales de temperatura, humedad o manejo para evitar su deterioro durante el transporte.",
        subtitle: "Requisitos",
        details: [
            {
                title: "Nacional",
                description: [
                    "Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.",
                    "La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de la llegada.",
                    "La carga debe presentarse abierta para revisión total.",
                    "El cliente debe contar con material para reembalar después de la revisión.",
                    "La carga debe embalarse de manera que proteja el producto transportado.",
                    "Usar embalaje adecuado según el tipo de producto.",
                    "El paquete debe estar marcado y rotulado con: nombre completo del consignatario, teléfono y ciudad.",
                    "Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.",
                    "El transporte se realiza a temperatura ambiente; el cliente debe prever medidas para mantener la temperatura óptima.",
                    "En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.",
                ],

                imageUrl: [
                    "/informacioPage/cargaGeneral/Gemini_Generated_Image_paquete.png",
                ],
            },
            {
                title: "Internacional",
                description: [
                    "Reservar con al menos 48 horas de anticipación en oficinas de BoA Cargo.",
                    "La carga se recibe hasta 4 horas antes del vuelo y se entrega 1 hora después de la llegada.",
                    "La carga debe presentarse abierta para revisión total.",
                    "El cliente debe contar con material para reembalar después de la revisión.",
                    "La carga debe embalarse de manera que proteja el producto transportado.",
                    "Usar embalaje adecuado según el tipo de producto.",
                    "El paquete debe estar marcado y rotulado con: nombre completo del consignatario, teléfono y ciudad.",
                    "En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.",
                    "La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de la llegada.",
                    "Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.",
                    "El transporte se realiza a temperatura ambiente; el cliente debe prever medidas para mantener la temperatura óptima.",
                    "En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.",
                    "Factura comercial de exportación.",
                    "Lista de empaque.",
                    "Certificados (SENASAG, SENAVEX, etc.) según corresponda.",
                    "Declaración de Exportación (DEX) emitida por la Aduana mediante el sistema SUMA.",
                    "Declaración General de Seguridad de Carga emitida por el agente de carga.",
                    "Todos los documentos validados por la Aduana Nacional de Bolivia.",
                ],
                imageUrl: [
                    "/informacioPage/cargaGeneral/Gemini_Generated_Image_paquete.png",
                ],
            },
        ],
        example: [
            {
                title: "Alimentos frescos",
                description: "	Frutas, verduras, hortalizas, hierbas frescas",
                image: "/informacioPage/perecederos/GGI_frescos.png",
            },
            {
                title: "Productos cárnicos y derivados",
                description: "Carne fresca o congelada, embutidos, charcutería",
                image: "/informacioPage/perecederos/GGI_embutidos.png",
            },
            {
                title: "Pescados y mariscos",
                description: "Filetes, camarones, productos congelados",
                image: "/informacioPage/perecederos/GGI_pescados.png",
            },
            {
                title: "Productos lácteos y panadería",
                description: "Yogur, quesos, postres, pasteles",
                image: "/informacioPage/perecederos/GGI_panaderia.png",
            },
            {
                title: "Flores y plantas vivas",
                description: "Rosas, claveles, orquídeas, plantas ornamentales",
                image: "/informacioPage/perecederos/GGI_flores.png",
            }
        ],
    },
    restosHumanos: {
        title: "Restos humanos",
        description: "la categoría de Restos Humanos se refiere al transporte aéreo de personas fallecidas, ya sea en forma de cuerpo completo (féretro) o de cenizas (urnas funerarias), cumpliendo con normas legales, sanitarias y logísticas estrictas.",
        subtitle: "Requisitos",
        details: [
            {
                title: "Nacional",
                description: [
                    "Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.",
                    "Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).",
                    "Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.",
                    "Certificado forense sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original y dos copias) ",
                    "Certificado de formolización, (embalsamamiento), cremación según sea aplicable.",
                    "Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.",
                    "Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años,  no serán aceptados para el transporte."

                ],
                imageUrl: [
                    "/informacioPage/cargaGeneral/Gemini_Generated_Image_paquete.png",
                ],
            },
            {
                title: "Internacional",
                description: [
                    "Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.",
                    "Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).",
                    "La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.",
                    "Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.",
                    "Certificado forense sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original y dos copias) ",
                    "Certificado de formolización, (embalsamamiento), cremación según sea aplicable.",
                    "Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.",
                    "Cualquier otro certificado que pudiera ser exigido por los países de tránsito o destino del féretro. ",
                    "Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años, no serán aceptados para el transporte.",
                    "La documentación señalada anteriormente así como cualquier otra documentación adicional que sea requerida, debe estar visada por el consulado del país de origen.",
                    "Se recibe el transporte de restos humanos Internacional mediante Agentes de Carga.",
                    "Declaración General de seguridad de Carga, emitido por el agente de carga.",
                ]
            },
        ],
        example: [
            {
                title: "Restos humanos en féretro",
                description: "El cuerpo del fallecido, preparado, embalsamado y colocado en un ataúd especial para vuelos.",
                image: "/informacioPage/restosHumanos/GGI_ataud.png",
            },
            {
                title: "Cenizas humanas (urnas)",
                description: "Restos cremados transportados en urnas funerarias adecuadas.",
                image: "/informacioPage/restosHumanos/GGI_cenizas.png",
            }
        ],
    },

    prohibidos: {
        title: "Peligrosos",
          description: "La categoría de “carga prohibida” hace referencia a todos aquellos objetos o sustancias que no están permitidos para su transporte por vía aérea, ya sea por riesgo a la seguridad, la salud pública, normas nacionales o internacionales, o por limitaciones técnicas de la aeronave.",
          subtitle: "",
          details: [],
          example: [
            {
              title: "Explosivos",
              description: "municiones, material para expediciones,bengalas,fuegos artificiales, articulos pirotécnicos",
              image: "/informacioPage/peligroso/explosive-symbol.jpg",
            },
            {
              title: "Solidos inflamables",
              description: "fosforo, articulos de facil ignicion,combustion expontanea o que al tacto con el agua emitan gases inflamables",
              image: "/informacioPage/peligroso/Flammables.gif",
            },
            {
              title: "Venenos y sustancias infecciosas",
              description: "muestras para diagnosticos, sustancias toxicas o infecciosas y herbicidas",
              image: "/informacioPage/peligroso/sustanciasInfecciosas.jpg",
            },
            {
              title: "Gases comprimidos inflamables, no inflamables y venenosos",
              description: "extintores, botellas de oxigeno para bucear, licuados refrigerrados o disueltos",
              image: "/informacioPage/peligroso/gasComprimido.gif",
            },
            {
              title: "Liquidos inflamables",
              description: "Bombonas de gas para recargar encendedores, pinturas, disolventes,combustibles liquidos o solidos,cerillas ",
              image: "/informacioPage/peligroso/Flammables.gif",
            },
            {
              title: "Material radioactivo",
              description: "Material con isotopos radiactivos",
              image: "/informacioPage/peligroso/nuclear.png",
            },
            {
              title: "Materiales corrosivos y Oxidantes",
              description: "acidos alcalinos, mercurio, pilas humedas, peroxidos,acumuladores electricos",
              image: "/informacioPage/peligroso/corrosivoOxidante.jpg",
            },
            {
              title: "Pilas y baterias",
              description: "Ademas de otros articulos considerados peligrosos como material ferro-magnetico, hielo seco y baterias de coche",
              image: "/informacioPage/peligroso/bateriasLitio.webp",
            }
          ],
    },
    
    // Aquí podrías ir agregando otras categorías como "cargaPeligrosa", "perecederos", etc.
};
