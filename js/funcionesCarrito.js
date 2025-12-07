import { guardarCarrito, obtenerCarrito, vaciarCarritoS } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";
//agregarr
export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  carrito.push(producto); //insrta producto
  guardarCarrito(carrito); //actualiza la info en el local storage
  actualizarContador(carrito);
  mostrarMensaje("Producto agregado");
};
//eliminar
export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); //modifica  array en el tercer argumento seria para reemplazar pero como no pase nada entonces lo elimina.
  guardarCarrito(carrito);
  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado");
};

export const vaciarCarrito = () => {
  vaciarCarritoS();
  actualizarContador([]);
  mostrarMensaje("Carrito vaciado");
};
