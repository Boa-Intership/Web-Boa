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
    title: 'Carga General',
    description:
      'La carga general son artículos que no se clasifican como carga especial y que no requieren precauciones adicionales ni manipulación especial durante el transporte aéreo. Estos tipos de artículos incluyen artículos minoristas y la mayoría de los bienes de consumo (con excepción de teléfonos móviles, tabletas y portátiles), productos secos, artículos de ferretería, textiles, etc. Piense en los objetos cotidianos; la mayoría de ellos se clasificarían en la categoría de carga general.',
    subtitle: 'Requisitos para el transporte de carga general',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'La carga debe presentarse abierta para revisión total.',
          'El cliente o agente de carga debe contar con material para reembalar después de la revisión.',
          'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          'Para aceptar el envio se requiere documento de identidad vigente (carnet de identidad, licencia de conducir o pasaporte) y sello de la empresa si va a nombre de una empresa.',
          'La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de su llegada.',
          'El envío y la recepción se realizan exclusivamente en oficinas de BoA Cargo.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'La carga debe presentarse abierta para revisión total.',
          'El cliente debe contar con material para reembalar después de la revisión.',
          'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          'La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.',
          'Se requiere documento de identidad vigente (carnet de identidad, licencia de conducir o pasaporte) y sello de la empresa si va a nombre de una empresa para aceptar el envío.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'La carga de exportación internacional se recibe y almacena hasta 24 horas antes de la salida del vuelo.',
          'El envío y la recepción se realizan únicamente en oficinas de BoA Cargo.',
          'Factura comercial de exportación.',
          'Lista de empaque.',
          'Certificados (SENASAG, SENAVEX, SENARECON, etc.) según corresponda.',
          'Declaración de Exportación (DEX) emitida por Aduana mediante el sistema SUMA.',
          'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          'Documentos validados por la Aduana Nacional de Bolivia.',
          'El cliente debe coordinar con un agente de carga de su confianza, quien lo asistirá con trámites aduaneros, embalaje, y controles en origen y destino.',
        ],
      },
    ],
    example: [
      {
        title: 'Bienes manufacturados',
        description: 'Ropa, calzado, juguetes',
        image: '/informacioPage/cargaGeneral/GGI_manu.webp',
      },
      {
        title: 'Material impreso y papelería',
        description: 'Libros, revistas, catálogos, documentos',
        image: '/informacioPage/cargaGeneral/GGI_papeleria.webp',
      },
      {
        title: 'Efectos personales',
        description: 'Maletas, cajas con pertenencias de viaje',
        image: '/informacioPage/cargaGeneral/GGI_personal.webp',
      },
      {
        title: 'Muebles pequeños desmontables',
        description: 'Sillas, mesas plegables, estanterías livianas',
        image: '/informacioPage/cargaGeneral/GGI_muebles.webp',
      },
    ],
  },
  animalesVivos: {
    title: 'Animales Vivos',
    description:
      'La categoría de animales vivos hace referencia al servicio especializado para el transporte aéreo de animales vivos bajo condiciones específicas que garanticen su bienestar, seguridad y cumplimiento normativo durante todo el viaje.',
    subtitle: 'Requisitos para el transporte de animales vivos',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'Presentar animales vivos 2 horas antes del vuelo.',
          'El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.',
          'El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.',
          'La edad mínima del animal es de 3 meses (excepto pollitos bebés).',
          'Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.',
          'Certificado veterinario que acredite buen estado de salud. Para especies distintas a perros y gatos, se requiere autorización del SENASAG.',
          'Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.',
          'No se transportan perros ni gatos braquicéfalos (nariz achatada).',
          'El consignatario debe recoger al animal a la llegada del vuelo.',
          'Se recomienda no sedar animales domésticos.',
          'Importante:BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES). Para mas información para las autorizaciones consulte con un agente de cargo.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Reservar con al menos 48 horas de anticipación en oficinas de BoA Cargo.',
          'Presentar animales vivos 4 horas antes del vuelo.',
          'El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.',
          'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.',
          'El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.',
          'La edad mínima del animal es de 3 meses (excepto pollitos bebés).',
          'Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.',
          'Certificado veterinario que acredite buen estado de salud. Para especies distintas a perros y gatos, se requiere autorización del SENASAG.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.',
          'No se transportan perros ni gatos braquicéfalos (nariz achatada).',
          'El consignatario debe recoger al animal a la llegada del vuelo.',
          'Se recomienda no sedar animales domésticos',
          'Certificado zoosanitario que confirme que el animal está libre de enfermedades y parásitos.',
          'Todos los documentos deben estar validados por la embajada del país de destino cuando corresponda.',
          'Algunos países requieren microchip. El expedidor debe consultar en el consulado o embajada las restricciones y presentar la documentación al menos 4 horas antes del vuelo.',
          'Acompañar la certificación del expedidor de animales vivos y toda la documentación exigida por los países de origen y tránsito.',
          'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          'Para exportar mascotas a Estados Unidos, el agente de carga debe solicitar aprobación escrita al CDC enviando un correo a CDCanimalimports@cdc.gov con al menos 30 días hábiles de anticipación.',
          'Para envíos a EE.UU., toda la documentación debe presentarse también en inglés.',
          'Importante: BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES). Para mas información para las autorizaciones consulte con un agente de cargo.',
        ],

        imageUrl: [],
      },
    ],
    example: [
      {
        title: 'Mascotas domésticas',
        description: 'Perros, gatos',
        image: '/informacioPage/animalesVivos/GGI_mascotas.webp',
      },
      // {
      //   title: 'Animales exóticos (autorizados)',
      //   description:
      //     'Tortugas, iguanas.',
      //   image: '/informacioPage/animalesVivos/GGI_exotico.webp',
      // },
    ],
  },
  perecederos: {
    title: 'Perecederos',
    description:
      'La categoría de perecederos son aquellos productos que tienen una vida útil limitada y que requieren condiciones especiales de temperatura, humedad o manejo para evitar su deterioro durante el transporte.',
    subtitle:'Requisitos para el transporte de carga perecedera',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de la llegada.',
          'La carga debe presentarse abierta para revisión total.',
          'El cliente debe contar con material para reembalar después de la revisión.',
          'La carga debe embalarse de manera que proteja el producto transportado.',
          'Usar embalaje adecuado según el tipo de producto.',
          'El paquete debe estar marcado y rotulado con: nombre completo del consignatario, teléfono y ciudad.',
          'Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.',
          'El transporte se realiza a temperatura ambiente; el cliente debe tomar las previsiones necesarias para mantener la temperatura óptima.',
          'En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Reservar con al menos 48 horas de anticipación en oficinas de BoA Cargo.',
          'La carga se recibe hasta 4 horas antes del vuelo y se entrega 1 hora después de la llegada.',
          'La carga debe presentarse abierta para revisión total.',
          'El cliente debe contar con material para reembalar después de la revisión.',
          'La carga debe embalarse de manera que proteja el producto transportado.',
          'Usar embalaje adecuado según el tipo de producto.',
          'El paquete debe estar marcado y rotulado con: nombre completo del consignatario, teléfono y ciudad.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.',
          'La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de la llegada.',
          'Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.',
          'El transporte se realiza a temperatura ambiente; el cliente debe prever medidas para mantener la temperatura óptima.',
          'En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.',
          'Factura comercial de exportación.',
          'Lista de empaque.',
          'Certificados (SENASAG, SENAVEX, etc.) según corresponda.',
          'Declaración de Exportación (DEX) emitida por la Aduana mediante el sistema SUMA.',
          'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          'Todos los documentos validados por la Aduana Nacional de Bolivia.',
        ],
        imageUrl: [],
      },
    ],
    example: [
      {
        title: 'Alimentos frescos',
        description: '	Frutas, verduras, hortalizas, hierbas frescas',
        image: '/informacioPage/perecederos/GGI_frescos.webp',
      },
      {
        title: 'Productos cárnicos y derivados',
        description: 'Carne fresca o congelada, embutidos, charcutería',
        image: '/informacioPage/perecederos/GGI_embutidos.webp',
      },
      {
        title: 'Pescados y mariscos',
        description: 'Filetes, camarones, productos congelados',
        image: '/informacioPage/perecederos/GGI_pescados.webp',
      },
      {
        title: 'Productos lácteos y panadería',
        description: 'Yogur, quesos, postres, pasteles',
        image: '/informacioPage/perecederos/GGI_panaderia.webp',
      },
      {
        title: 'Flores y plantas vivas',
        description: 'Rosas, claveles, orquídeas, plantas ornamentales',
        image: '/informacioPage/perecederos/GGI_flores.webp',
      },
    ],
  },
  restosHumanos: {
    title: 'Restos humanos',
    description:
      'la categoría de Restos Humanos se refiere al transporte aéreo de personas fallecidas, ya sea en forma de cuerpo completo (féretro) o de cenizas (urnas funerarias), cumpliendo con normas legales, sanitarias y logísticas estrictas.',
    subtitle: 'Requisitos para el transporte de restos humanos',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.',
          'Certificado forense',
          'Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original y dos copias) ',
          'Certificado de formolización, (embalsamamiento), cremación según sea aplicable.',
          'Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.',
          'Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años,  no serán aceptados para el transporte.',
          'NOTA: Se deben presentar los documentos originales más tres copias de cada uno.',
        ],
        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          'La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.',
           'Certificado forense',
          'Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original y dos copias) ',
          'Certificado de formolización, (embalsamamiento), cremación según sea aplicable.',
          'Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.',
          'Cualquier otro certificado que pudiera ser exigido por los países de tránsito o destino del féretro. ',
          'Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años, no serán aceptados para el transporte.',
          'La documentación señalada anteriormente así como cualquier otra documentación adicional que sea requerida, debe estar visada por el consulado del país de origen.',
          'Se recibe el transporte de restos humanos Internacional mediante Agentes de Carga.',
          'Declaración General de seguridad de Carga, emitido por el agente de carga.',
        ],
        imageUrl: [],
      },
    ],
    example: [
      {
        title: 'Restos humanos en féretro',
        description:
          'El cuerpo del fallecido, preparado, embalsamado y colocado en un ataúd especial para vuelos.',
        image: '/informacioPage/restosHumanos/GGI_ataud.webp',
      },
      {
        title: 'Cenizas humanas (urnas)',
        description: 'Restos cremados transportados en urnas funerarias adecuadas.',
        image: '/informacioPage/restosHumanos/GGI_cenizas.webp',
      },
    ],
  },
  cargaValiosa: {
    title: 'Carga Valiosa',
    description:
      'Se considera carga valiosa a expediciones que contengan uno o más de los siguientes artículos y/o, cualquier artículo con un valor declarado para el transporte igual o superior al indicado en el tarifario por kilogramo bruto de peso. ',
    subtitle: 'Requisitos para el transporte de carga valiosa',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'El transporte debe gestionarse a través de un agente de carga especializado en equipos porta valor certificado.',
          'El embalaje debe ser adecuado al peso y contenido, evitando manipulación indebida o extracción de componentes.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'Presentar fotocopia del Formulario M-02 de compra y venta de minerales y metales, emitido y autorizado por SENARECOM.',
        ],
        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'El transporte debe gestionarse a través de un agente de carga especializado en equipos porta valor certificado.',
          'El embalaje debe ser adecuado al peso y contenido, evitando manipulación indebida o extracción de componentes.',
          'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          'Requisitos de Exportación: Formulario M-03 (exportación de minerales y metales) y Formulario JDLP-001 (acta de inspección), ambos emitidos por SENARECOM.',
          'Declaración de Exportación (DEX) emitida por la Aduana Nacional mediante el sistema SUMA.',
          'Factura comercial y lista de empaque.',
          'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben presentarse en inglés.',
        ],
        imageUrl: [],
      },
    ],
    example: [
      {
        title: 'Dinero en efectivo',
        description: 'Billetes, monedas',
        image: '/informacioPage/valiosos/GGI_money.webp',
      },
      {
        title: 'Joyas y metales preciosos',
        description: 'Oro, plata, diamantes, piedras preciosas.',
        image: '/informacioPage/valiosos/GGI_joyas.webp',
      },
      {
        title: 'Obras de arte',
        description: 'Pinturas, esculturas, piezas de colección.',
        image: '/informacioPage/valiosos/GGI_obrasarte.webp',
      },
      {
        title: 'Electrónica de alto valor',
        description: 'Computadoras de última generación, equipos médicos portátiles.',
        image: '/informacioPage/valiosos/GGI_electronicosValiosos.webp',
      },
      {
        title: 'Documentos valiosos',
        description: 'Títulos de propiedad, bonos, valores bursátiles, contratos originales.',
        image: '/informacioPage/valiosos/GGI_documentosvaliosos.webp',
      },
    ],
  },
  peligrosas: {
    title: 'Peligrosas',
    description:
      'La categoría de Carga Peligrosa son aquellas mercancías que reúnen los criterios de una o más de las nueve clases de peligros de las Naciones Unidas, de acuerdo con las disposiciones de esta seción. ',
    subtitle: '',
    details: [],
    example: [
      {
        title: 'Explosivos',
        description:
          'municiones, material para expediciones,bengalas,fuegos artificiales, articulos pirotécnicos',
        image: '/informacioPage/peligroso/explosive-symbol.webp',
      },
      {
        title: 'Solidos inflamables',
        description:
          'fosforo, articulos de facil ignicion,combustion expontanea o que al tacto con el agua emitan gases inflamables',
        image: '/informacioPage/peligroso/Flammables.webp',
      },
      {
        title: 'Gases comprimidos inflamables, no inflamables y venenosos',
        description:
          'extintores, botellas de oxigeno para bucear, licuados refrigerrados o disueltos',
        image: '/informacioPage/peligroso/gasComprimido.webp',
      },
      {
        title: 'Liquidos inflamables',
        description:
          'Bombonas de gas para recargar encendedores, pinturas, disolventes,combustibles liquidos o solidos,cerillas ',
        image: '/informacioPage/peligroso/Flammables.webp',
      },
      {
        title: 'Material radioactivo',
        description: 'Material con isotopos radiactivos',
        image: '/informacioPage/peligroso/nuclear.webp',
      },
      {
        title: 'Materiales corrosivos y Oxidantes',
        description: 'acidos alcalinos, mercurio, pilas humedas, peroxidos,acumuladores electricos',
        image: '/informacioPage/peligroso/corrosivoOxidante.webp',
      },
    ],
  },
};
