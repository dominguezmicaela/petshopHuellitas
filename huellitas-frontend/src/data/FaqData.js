export const CATEGORIAS = [
  { id: "pedidos",   label: "Pedidos" },
  { id: "envios",    label: "Envíos" },
  { id: "pagos",     label: "Pagos" },
  { id: "productos", label: "Productos" },
  { id: "cuenta",    label: "Mi cuenta" },
];


export const FAQ_DATA = [
  {
    categoria: "pedidos",
    titulo: "Pedidos",
    items: [
      {
        id: "pedidos-1",
        pregunta: "¿Cómo realizo un pedido?",
        respuesta:
          "Buscá el producto que querés, seleccioná la cantidad y hacé click en 'Agregar al carrito'. Cuando estés listo, ingresá a tu carrito y seguí los pasos para confirmar tu compra.",
      },
      {
        id: "pedidos-2",
        pregunta: "¿Puedo cancelar o modificar mi pedido?",
        respuesta:
          "Podés cancelar o modificar tu pedido dentro de las 2 horas posteriores a la compra. Después de ese plazo el pedido ya está en preparación. Contactanos a contacto@huellitas.com lo antes posible.",
      },
      {
        id: "pedidos-3",
        pregunta: "¿Cuál es la política de devoluciones?",
        respuesta:
          "Aceptamos devoluciones dentro de los 30 días de recibido el producto, siempre que esté en su estado original y sin usar. Los productos de alimentación no tienen devolución por cuestiones de higiene.",
      },
    ],
  },
  {
    categoria: "envios",
    titulo: "Envíos",
    items: [
      {
        id: "envios-1",
        pregunta: "¿Cuánto tarda en llegar mi pedido?",
        respuesta:
          "Los pedidos dentro de CABA y GBA llegan en 24 a 48 horas hábiles. Para el interior del país el tiempo estimado es de 3 a 7 días hábiles. Recibirás un email con el número de seguimiento una vez despachado.",
      },
      {
        id: "envios-2",
        pregunta: "¿Hay envío gratis?",
        respuesta:
          "Todos los pedidos mayores a $5.000 tienen envío gratis a todo el país. Para pedidos menores, el costo se calcula automáticamente según tu ubicación al momento del checkout.",
      },
    ],
  },
  {
    categoria: "pagos",
    titulo: "Pagos",
    items: [
      {
        id: "pagos-1",
        pregunta: "¿Qué medios de pago aceptan?",
        respuesta:
          "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria y MercadoPago. Todos los pagos son procesados con encriptación SSL.",
      },
      {
        id: "pagos-2",
        pregunta: "¿Es seguro comprar en Huellitas?",
        respuesta:
          "Totalmente. Usamos HTTPS en todo el sitio y nunca almacenamos datos de tarjetas en nuestros servidores. Los pagos son procesados por MercadoPago con certificación PCI DSS nivel 1.",
      },
    ],
  },
  {
    categoria: "productos",
    titulo: "Productos",
    items: [
      {
        id: "productos-1",
        pregunta: "¿Los productos son aptos para todas las razas?",
        respuesta:
          "Cada producto tiene especificado en su descripción para qué raza o tamaño de mascota está recomendado. Podés filtrar por tipo de mascota desde el sidebar de la tienda.",
      },
      {
        id: "productos-2",
        pregunta: "¿Los alimentos tienen fecha de vencimiento?",
        respuesta:
          "Sí, todos los alimentos cuentan con fecha de vencimiento visible en el envase. Garantizamos al menos 6 meses de vida útil al momento del envío.",
      },
    ],
  },
  {
    categoria: "cuenta",
    titulo: "Mi cuenta",
    items: [
      {
        id: "cuenta-1",
        pregunta: "¿Cómo recupero mi contraseña?",
        respuesta:
          "En la pantalla de login, hacé click en '¿Olvidaste tu contraseña?' e ingresá tu email. Te enviaremos un link para resetearla. Si no llega en 5 minutos, revisá la carpeta de spam.",
      },
      {
        id: "cuenta-2",
        pregunta: "¿Dónde veo el historial de mis pedidos?",
        respuesta:
          "Una vez logueado, hacé click en tu nombre en la barra de navegación y accedé a 'Mi perfil'. Ahí encontrarás el historial completo de pedidos con su estado actual.",
      },
    ],
  },
];


