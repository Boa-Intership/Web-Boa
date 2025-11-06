export const informacionEstados = [
  {
    estado: 'En almacén',
    tipoInfo: 'info',
    descripcion:
      'En almacen significa que tu paquete se encuentra en una estación de BoA Cargo, a la espera de ser enviado a su destino final',
  },
  {
    estado: 'En tránsito',
    tipoInfo: 'info',
    descripcion:
      'En tránsito indica que tu paquete está en camino hacia su destino final, pasando por las diferentes etapas del proceso de envío.',
  },
  {
    estado: 'Entregado',
    tipoInfo: 'success',
    descripcion:
      'Entregado significa que tu paquete ha llegado a su destino final y ha sido recibido por el destinatario.',
  },
  {
    estado: 'Retrasos operativos',
    tipoInfo: 'warning',
    descripcion:
      'Retrasos operativos indican que tu paquete puede experimentar demoras debido a factores externos como condiciones climáticas, problemas logísticos u otros imprevistos.',
  },
];
