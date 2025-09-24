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
  imageUrl?: string;
  subtitle: string;
  details: Detail[];
  notice: string[];
  example: Example[];
}

// Creamos el objeto con los datos del tipo de carga
export const cargaData: Record<string, InfoTipoCarga> = {
  cargaGeneral: {
    title: 'Carga general',
    description:
      'La carga general son artículos que no se clasifican como carga especial y que no requieren precauciones adicionales ni manipulación especial durante el transporte aéreo. Estos tipos de artículos incluyen artículos minoristas y la mayoría de los bienes de consumo (con excepción de teléfonos móviles, tabletas y portátiles), productos secos, artículos de ferretería, textiles, etc. Piense en los objetos cotidianos; la mayoría de ellos se clasificarían en la categoría de carga general.',
    subtitle: 'Requisitos y condiciones para el transporte de carga general',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'La carga debe presentarse abierta, sin estar empaquetada en su totalidad, para permitir la revisión por parte de los agentes de seguridad.',
          'Para la aceptación del envío, es requisito presentar su documento de identidad vigente, el cual puede ser el carnet de identidad, la licencia de conducir o el pasaporte.',
          'Tanto usted como su agente de carga deben llevar el material necesario, como cinta de embalaje y etiquetas, para poder terminar de embalar y cerrar la carga.',
          'Asegúrese de que el empaque incluya el marcado, etiquetado y rotulado correspondiente, con la información del destinatario: nombre, teléfono, ciudad y país.',
          'Una vez aceptada la carga para transporte aéreo, se le entregará una Guía Aérea por cada envío. Este documento principal contiene los datos del remitente y destinatario, origen, destino, descripción de la carga, peso, instrucciones especiales y un número único de rastreo.',
          'El día del vuelo, usted debe entregar la carga como mínimo 2 horas antes de la salida del avión, debido al tiempo requerido para realizar los controles de seguridad en el aeropuerto.',
          'La recepción de la carga se realiza exclusivamente en oficinas de BoA Cargo.',
          'La persona autorizada para recoger la carga debe presentar su documento de identidad vigente (Cédula, Licencia de Conducir o Pasaporte).',
          'La carga podrá ser recogida a partir de 1 hora después de que el avión haya aterrizado en destino.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Para obtener información detallada sobre los requisitos y procedimientos relacionados con la carga general en envíos internacionales, le recomendamos consultar con un agente de carga de su confianza.',
          // 'El cliente debe contar con material para reembalar después de la revisión.',
          // 'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          // 'La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.',
          // 'Se requiere documento de identidad vigente (carnet de identidad, licencia de conducir o pasaporte) y sello de la empresa si va a nombre de una empresa para aceptar el envío.',
          // 'Se entregará al cliente una guía aérea (Air Waybill) por cada envío, la cual es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          // 'La carga de exportación internacional se recibe y almacena hasta 24 horas antes de la salida del vuelo.',
          // 'El envío y la recepción se realizan únicamente en oficinas de BoA Cargo.',
          // 'Factura comercial de exportación.',
          // 'Si son más de un artículo que se quiere enviar, con ayuda del agente de carga se debe presentar una lista de empaque.',
          // 'Certificados (SENASAG, SENAVEX, SENARECON, etc.) según corresponda.',
          // 'Declaración de Exportación (DEX) emitida por Aduana mediante el sistema SUMA.',
          // 'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          // 'Documentos validados por la Aduana Nacional de Bolivia.',
          // 'El cliente debe coordinar con un agente de carga de su confianza, quien lo asistirá con trámites aduaneros, embalaje, y controles en origen y destino.',
        ],
      },
    ],
    notice: [
      'La carga dañada o embalada en forma inapropiada con señales de haber estado filtrando, sea esta carga general o mercancías peligrosas no será aceptada para el transporte.',
    ],
    example: [
      {
        title: 'Bienes manufacturados',
        description: 'Ropa, calzado, juguetes',
        image: '/informacioPage/cargaGeneral/GGI_manu.webp',
      },
      {
        title: 'Material impreso y papelería',
        description: 'Libros, revistas, catálogos',
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
    title: 'Animales vivos',
    description:
      'Boliviana de Aviación ofrece un servicio seguro y confiable para el transporte de animales vivos, tanto a nivel nacional como internacional. Contamos con instalaciones y procedimientos diseñados para garantizar el bienestar de los animales durante todo el proceso, desde la carga hasta la entrega, asegurando condiciones adecuadas de temperatura, ventilación y manejo especializado. Este servicio está pensado para mascotas y animales domésticos, brindando tranquilidad y confianza a nuestros clientes en cada envío.',
    subtitle: 'Requisitos para el transporte de animales vivos: Solo animales domésticos',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar su envio con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'Presentar al animal 2 horas antes del vuelo, esto por controles de seguridad.',
          'El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.',
          'El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.',
          'La edad mínima del animal es de 3 meses.',
          'Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.',
          'Certificado veterinario que acredite buen estado de salud (original + 2 copias).',
          'Para especies distintas a perros y gatos, se requiere autorización del SENASAG.',
          'Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.',
          'No se transportan perros ni gatos braquicéfalos (nariz achatada).',
          'Una vez aceptado al animal para transporte aéreo, se le entregará una Guía Aérea por cada envío. Este documento principal contiene los datos del remitente y destinatario, origen, destino, descripción de la carga, peso, instrucciones especiales y un número único de rastreo.',
          'El destinatario debe recoger al animal a la llegada del vuelo.',
          'Se recomienda no sedar animales.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Para el transporte internacional de animales vivos, le recomendamos ponerse en contacto con un agente de carga de su confianza, quien le brindará la orientación necesaria sobre los requisitos y procedimientos establecidos.',
          // 'Presentar animales vivos 4 horas antes del vuelo.',
          // 'El animal debe viajar en jaula adecuada, segura, con material absorbente, marcada, etiquetada y rotulada.',
          // 'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.',
          // 'El contenedor debe estar homologado por IATA: rígido, con ventilación, puerta metálica y espacio suficiente para que el animal pueda moverse con normalidad. No se aceptan jaulas de malla de alambre o soldada.',
          // 'La edad mínima del animal es de 3 meses (excepto pollitos bebés).',
          // 'Presentar cartilla de vacunas (original + 2 copias). Deben haber pasado 30 días desde la vacuna antirrábica.',
          // 'Certificado veterinario que acredite buen estado de salud. Para especies distintas a perros y gatos, se requiere autorización del SENASAG.',
          // 'Se entregará al cliente una guía aérea (Air Waybill) por cada envío, la cual es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          // 'Los perros de musculatura fuerte y aspecto robusto deben llevar bozal.',
          // 'No se transportan perros ni gatos braquicéfalos (nariz achatada).',
          // 'El consignatario debe recoger al animal a la llegada del vuelo.',
          // 'Se recomienda no sedar animales domésticos',
          // 'Certificado zoosanitario que confirme que el animal está libre de enfermedades y parásitos.',
          // 'Todos los documentos deben estar validados por la embajada del país de destino cuando corresponda.',
          // 'Algunos países requieren microchip. El expedidor debe consultar en el consulado o embajada las restricciones y presentar la documentación al menos 4 horas antes del vuelo.',
          // 'Acompañar la certificación del expedidor de animales vivos y toda la documentación exigida por los países de origen y tránsito.',
          // 'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          // 'Para exportar mascotas a Estados Unidos, el agente de carga debe solicitar aprobación escrita al CDC enviando un correo a CDCanimalimports@cdc.gov con al menos 30 días hábiles de anticipación.',
          // 'Para envíos a EE.UU., toda la documentación debe presentarse también en inglés.',
          // 'Importante: BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES). Para mas información consulte con un agente de cargo.',
        ],

        imageUrl: [],
      },
    ],
    notice: [
      'BoA Cargo transporta cualquier animal aceptado para su transporte de acuerdo a la " Reglamentación para el Transporte de Animales Vivos de la IATA". LAR vigente.',
      // 'Importante: BoA no transporta animales salvajes o en peligro de extinción sin los permisos legales requeridos (como el CITES). Para mas información consulte con un agente de cargo.',
    ],
    example: [
      {
        title: 'Los más comunes',
        description: 'Perros, gatos',
        image: '/informacioPage/animalesVivos/GGI_mascotas.webp',
      },
      {
        title: 'Otros vistos',
        description: 'Conejos, hamster.',
        image: '/informacioPage/animalesVivos/GGI_aniPeque.webp',
      },
    ],
  },
  perecederos: {
    title: 'Perecederos',
    description:
      'La categoría de perecederos son aquellas mercancías que, cuando no se mantienen dentro de ciertas condiciones o elementos o no se tiene en consideración su ciclo de vida, pierden sus propiedades inherentes o la calidad de sus componentes, y como consecuencia dejan de ser útiles para lo que fueron destinados originalmente. Son suceptibles de deterioro o pérdida debido a cambios de clima,temperatura o cualquier otra situación normal. ',
    subtitle: 'Requisitos para el transporte de carga perecedera',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después del arribo de la aeronave.',
          'La carga debe presentarse abierta para revisión total.',
          'El cliente debe contar con material para reembalar después de la revisión.',
          'La carga debe embalarse de manera que proteja el producto transportado.',
          'Usar embalaje adecuado según el tipo de producto.',
          'El paquete debe estar marcado y rotulado con: nombre completo del destinatario, teléfono y ciudad.',
          'Una vez aceptado la carga para transporte aéreo, se le entregará una Guía Aérea por cada envío. Este documento principal contiene los datos del remitente y destinatario, origen, destino, descripción de la carga, peso, instrucciones especiales y un número único de rastreo.',
          'Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.',
          'El transporte se realiza a temperatura ambiente; el cliente debe tomar las previsiones necesarias para mantener la temperatura óptima.',
          'En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.',
        ],

        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Para el transporte internacional de carga perecedera, le recomendamos ponerse en contacto con un agente de carga de su confianza, quien le brindará la orientación necesaria sobre los requisitos y procedimientos establecidos.',
          // 'La carga se recibe hasta 4 horas antes del vuelo y se entrega 1 hora después de la llegada.',
          // 'La carga debe presentarse abierta para revisión total.',
          // 'El cliente debe contar con material para reembalar después de la revisión.',
          // 'La carga debe embalarse de manera que proteja el producto transportado.',
          // 'Usar embalaje adecuado según el tipo de producto.',
          // 'El paquete debe estar marcado y rotulado con: nombre completo del consignatario, teléfono y ciudad.',
          // 'Se entregará al cliente una guía aérea (Air Waybill) por cada envío, la cual es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          // 'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben estar en inglés.',
          // 'La carga se recibe hasta 2 horas antes del vuelo y se entrega 1 hora después de la llegada.',
          // 'Si la carga es sensible a la temperatura, debe incluir su propio refrigerante.',
          // 'El transporte se realiza a temperatura ambiente; el cliente debe prever medidas para mantener la temperatura óptima.',
          // // 'En productos con hielo seco (CO₂ sólido), se debe indicar en la etiqueta la cantidad exacta en kilogramos.',
          // 'Factura comercial de exportación.',
          // 'Lista de empaque.',
          // 'Certificados (SENASAG, SENAVEX, etc.) según corresponda.',
          // 'Declaración de Exportación (DEX) emitida por la Aduana mediante el sistema SUMA.',
          // 'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          // 'Todos los documentos validados por la Aduana Nacional de Bolivia.',
        ],
        imageUrl: [],
      },
    ],
    notice: [
      'BoA Cargo acepta y transporta carga perecedera, siempre que se cumpla con lo establecido en el Reglamento de Carga Perecedera (PCR) de la IATA y demás normativas aplicables.',
    ],
    example: [
      {
        title: 'Alimentos frescos',
        description: 'Frutas, verduras, hortalizas, hierbas frescas',
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
      {
        title: 'Farmacéuticos y productos médicos',
        description: 'Medicamentos, vacunas que requieren refrigeración',
        image: '/informacioPage/perecederos/vacunas.webp',
      },
    ],
  },
  restosHumanos: {
    title: 'Restos humanos',
    description:
      'Boliviana de Aviación ofrece el transporte de restos humanos de cuerpo completo (féretro) o cremados (cenizas) en vuelos nacionales e internacionales, garantizando un servicio respetuoso y seguro. Para su aceptación es necesario contar con la documentación exigida por las autoridades competentes, como certificados médicos y de embalsamamiento, además de cumplir con las normativas de los países de origen, tránsito y destino.',
    subtitle: 'Requisitos para el transporte de restos humanos',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          'Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.',
          'Certificado médico forense.',
          'Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original + 2 copias) ',
          'Certificado de formolización, (embalsamamiento), cremación según sea aplicable.',
          'Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.',
          'Una vez aceptado la carga para transporte aéreo, se le entregará una Guía Aérea por cada envío. Este documento principal contiene los datos del remitente y destinatario, origen, destino, descripción de la carga, peso, instrucciones especiales y un número único de rastreo.',
          'Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años,  no serán aceptados para el transporte.',
        ],
        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Para el transporte internacional de restos humanos, le recomendamos ponerse en contacto con un agente de carga de su confianza, quien le brindará la orientación necesaria sobre los requisitos y procedimientos establecidos.',
          // 'Usar embalaje adecuado con marcado, etiquetado y rotulado (nombre del consignatario, teléfono, ciudad-país).',
          // 'La documentación, etiquetas y rótulos deben estar en inglés para destinos donde no se hable español.',
          // 'Certificado de Defunción original emitido por una Oficina Gubernamental(SERECI) donde se produjo el fallecimiento.',
          // 'Certificado forense',
          // 'Certificado sanitario emitido por el médico forense que compruebe que el difunto no falleció a causa de una enfermedad infectocontagiosa (original y dos copias) ',
          // 'Certificado de formolización, (embalsamamiento), cremación según sea aplicable.',
          // 'Autorización para traslado del cadáver, emitido por una Oficina Gubernamental(Alcaldía o Policía Boliviana) del departamento local donde se origina el embarque.',
          // 'Cualquier otro certificado que pudiera ser exigido por los países de tránsito o destino del féretro. ',
          // 'Los restos humanos exhumados, cuya data de fallecimiento sea inferior a 5 años, no serán aceptados para el transporte.',
          // 'La documentación señalada anteriormente así como cualquier otra documentación adicional que sea requerida, debe estar visada por el consulado del país de origen.',
          // 'Se recibe el transporte de restos humanos Internacional mediante Agentes de Carga.',
          // 'Declaración General de seguridad de Carga, emitido por el agente de carga.',
          // 'Se entregará al cliente una guía aérea (Air Waybill) por cada envío, la cual es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
        ],
        imageUrl: [],
      },
    ],
    notice: [
      'Se recomienda para el traslado de restos humanos se contacte con su funeraria de confianza.',
    ],
    example: [
      {
        title: 'Restos humanos en féretro',
        description:
          'El cuerpo del fallecido, preparado, embalsamado y colocado en un ataúd especial para vuelos.',
        image: '/informacioPage/restosHumanos/ataud.webp',
      },
      {
        title: 'Cenizas humanas (urnas)',
        description: 'Restos cremados transportados en urnas funerarias adecuadas.',
        image: '/informacioPage/restosHumanos/GGI_cenizas.webp',
      },
    ],
  },
  cargaValorada: {
    title: 'Carga valorada',
    description: `Se considera carga valiosa a todo envío que incluya artículos de alto valor o con un valor declarado para el transporte igual o superior a lo establecido en el tarifario por kilogramo bruto de peso.Entre ellos se encuentran: 

1) Artículos con valor declarado de USD 1.000 que pese desde un kilo bruto. 
2) Oro, platino y sus metales afines (paladio, iridio, osmio, rutenio y rodio), en barras, lingotes, láminas, alambres u otras formas. (Se excluyen isótopos radiactivos y aleaciones clasificadas como mercancías peligrosas). 
3) Billetes de banco, valores, acciones, cheques de viajero, sellos, tarjetas bancarias o de crédito listas para su uso. 
4) Piedras preciosas: diamantes, rubíes, esmeraldas, zafiros, ópalos y perlas auténticas (incluidas las cultivadas), así como joyería compuesta por estos artículos. 
5) Joyería y relojes de oro, plata o platino. 
6) Artículos de oro o platino no enchapados.`,
    subtitle: 'Requisitos para el transporte de carga valorada',
    details: [
      {
        title: 'Nacional (Interior de Bolivia)',
        description: [
          'Reservar con al menos 24 horas de anticipación en oficinas de BoA Cargo.',
          'El transporte debe gestionarse a través de un agente de carga especializado en equipos porta valor certificado.',
          'El embalaje debe ser adecuado al peso y contenido, evitando manipulación indebida o extracción de componentes.',
          'Presentar fotocopia del Formulario M-02 de compra y venta de minerales y metales, emitido y autorizado por SENARECOM.',
          'Una vez aceptado la carga para transporte aéreo, se le entregará una Guía Aérea por cada envío. Este documento principal contiene los datos del remitente y destinatario, origen, destino, descripción de la carga, peso, instrucciones especiales y un número único de rastreo.',
        ],
        imageUrl: [],
      },
      {
        title: 'Internacional (Desde Bolivia)',
        description: [
          'Para el transporte internacional de restos humanos, le recomendamos ponerse en contacto con un agente de carga de su confianza, quien le brindará la orientación necesaria sobre los requisitos y procedimientos establecidos.',
          // 'El transporte debe gestionarse a través de un agente de carga especializado en equipos porta valor certificado.',
          // 'El embalaje debe ser adecuado al peso y contenido, evitando manipulación indebida o extracción de componentes.',
          // 'La Guía Aérea (Air Waybill) es el documento principal del transporte de carga aérea. Contiene datos del remitente y destinatario, origen y destino, descripción de la carga, peso, instrucciones especiales y número único de rastreo.',
          // 'Requisitos de Exportación: Formulario M-03 (exportación de minerales y metales) y Formulario JDLP-001 (acta de inspección), ambos emitidos por SENARECOM.',
          // 'Declaración de Exportación (DEX) emitida por la Aduana Nacional mediante el sistema SUMA.',
          // 'Factura comercial y lista de empaque.',
          // 'Declaración General de Seguridad de Carga emitida por el agente de carga.',
          // 'En destinos donde no se hable español, la documentación, etiquetas y rótulos deben presentarse en inglés.',
        ],
        imageUrl: [],
      },
    ],
    notice: ['La carga valorada se transporta a través de equipos porta valor.'],
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
        title: 'Electrónicos valiosos',
        description: 'Equipos de computación, de audio.',
        image: '/informacioPage/valiosos/GGI_electronicosValiosos.webp',
      },
    ],
  },
  peligrosa: {
    title: 'Carga peligrosa',
    description:
      'El transporte aéreo exige los más altos estándares de seguridad, especialmente en lo que respecta al transporte de mercancias peligrosas, no es necesariamente su uso común, sino su composición química o física y su potencial de causar daño en un vuelo. Estos deben ser identificadas, clasificadas, embaladas, marcadas y documentadas de acuerdo con regulaciones específicas y sumamente estrictas para garantizar la seguridad o inclusive algunos prohibirse para el transporte aéreo',
    imageUrl: '/informacioPage/otroCarga/peligrososEtiquetas.png',
    subtitle: '',
    details: [
      // {
      //   title: 'Carga peligrosa',
      //   description: [],
      //   imageUrl: ['/informacioPage/otroCarga/peligrososEtiquetas.png'],
      // },
    ],
    notice: [
      'Las Mercancías Peligrosas sólo serán aceptados si cumplen con la Reglamentación de la IATA, los requerimientos de los países a través de los cuales dichas expediciones hayan de ser transportadas.',
    ],
    example: [
      // {
      //   title: 'Mercancias Peligrosas',
      //   description: 'Según reglamento DGR de la IATA',
      //   image: '/informacioPage/otroCarga/DGR.webp',
      // },
      // {
      //   title: 'Suministros médicos',
      //   description: 'Vacunas, medicamentos',
      //   image: '/informacioPage/otroCarga/GGI_suministrosMedicos.webp',
      // },
    ],
  },
};
