import useCarrito from "../../hooks/useCarrito";
import CarritoItem from "../../components/Carrito/CarritoItem";
import CarritoResumen from "../../components/Carrito/CarritoResumen";
import CarritoVacio from "../../components/Carrito/CarritoVacio";

export const Carrito = () => {
  const { items, updateCantidad, removeItem, subtotal, envio, total } = useCarrito();

  if (items.length === 0) return <CarritoVacio />;

  return (
    <div style={{
      minHeight: "calc(100vh - 72px)",
      background: "linear-gradient(135deg, #3d6b4f 0%, #2d5140 60%, #1e3b2e 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "2rem", color: "#fff", letterSpacing: "-0.5px" }}>
            Mi Carrito
          </h1>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", marginTop: "4px", fontWeight: 500 }}>
            {items.length} producto{items.length !== 1 ? "s" : ""} en tu carrito
          </p>
        </div>

        {/* Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}>

          {/* Lista productos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map(item => (
              <CarritoItem
                key={item.id}
                item={item}
                updateCantidad={updateCantidad}
                removeItem={removeItem}
              />
            ))}
          </div>

          {/* Resumen */}
          <CarritoResumen subtotal={subtotal} envio={envio} total={total} />

        </div>
      </div>
    </div>
  );
};

export default Carrito;