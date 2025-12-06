const key="carrito"
export const guardarCarrito=(carrito)=>{
    localStorage.setItem(key, JSON.stringify(carrito))
}
export const obtenerCarrito=()=>{
    return JSON.parse(localStorage.getItem(carrito)) || [] // ssi el local no encuentra devuelve vacio
}
export const vaciarCarrito=(carrito)=>{
   localStorage.removeItem(key)
}