import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);

  const agregarAlCarrito = (producto) => {
    setItems(prev => {
      const existe = prev.find(i => i.id === producto.id);
      if (existe) {
        return prev.map(i =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const updateCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    setItems(prev => prev.map(i => i.id === id ? { ...i, cantidad } : i));
  };

  const removeItem = (id) =>
    setItems(prev => prev.filter(i => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const envio    = subtotal > 5000 ? 0 : 800;
  const total    = subtotal + envio;

  return (
    <CarritoContext.Provider value={{
      items,
      agregarAlCarrito,
      updateCantidad,
      removeItem,
      subtotal,
      envio,
      total,
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
export default useCarrito;