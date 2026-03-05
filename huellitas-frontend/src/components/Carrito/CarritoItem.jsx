// components/Carrito/CarritoItem.jsx
import { useState } from "react";
import { C } from "../../styles/colores";

const CarritoItem = ({ item, updateCantidad, removeItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "20px",
        border: `1.5px solid ${C.beige2}`,
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.1)" : "0 4px 16px rgba(0,0,0,0.05)",
        padding: "1.2rem",
        display: "grid",
        gridTemplateColumns: "110px 1fr auto auto",
        gap: "1.4rem",
        alignItems: "center",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Imagen */}
      <div style={{
        width: "110px", height: "110px", borderRadius: "14px", overflow: "hidden",
        background: `linear-gradient(135deg, ${C.beige}, #f2e9dc)`,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {item.img
          ? <img src={item.img} alt={item.nombre} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          : <span style={{ fontSize: "2.8rem" }}>🐾</span>
        }
      </div>

      {/* Info */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: C.verde2, lineHeight: 1.3 }}>
          {item.nombre}
        </h3>
        {item.talle && (
          <p style={{ fontSize: "0.8rem", color: C.muted, fontWeight: 500 }}>
            Talle: <strong style={{ color: C.verde2 }}>{item.talle}</strong>
          </p>
        )}
        <p style={{ fontSize: "0.9rem", fontWeight: 700, color: C.verde3, marginTop: "4px" }}>
          ${item.precio.toLocaleString("es-AR")}
        </p>
      </div>

      {/* Cantidad */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        background: C.beige, borderRadius: "12px",
        padding: "0.4rem 0.8rem",
        border: `1.5px solid ${C.beige3}`,
      }}>
        <button
          onClick={() => updateCantidad(item.id, item.cantidad - 1)}
          style={{
            width: "28px", height: "28px", borderRadius: "8px",
            background: C.gradiente,
            color: C.sobreVerde, border: "none", fontWeight: 700, fontSize: "1rem",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "opacity 0.15s",
          }}
        >−</button>
        <span style={{ fontWeight: 800, fontSize: "0.95rem", color: C.verde2, minWidth: "24px", textAlign: "center" }}>
          {item.cantidad}
        </span>
        <button
          onClick={() => updateCantidad(item.id, item.cantidad + 1)}
          style={{
            width: "28px", height: "28px", borderRadius: "8px",
            background: C.gradiente,
            color: C.sobreVerde, border: "none", fontWeight: 700, fontSize: "1rem",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >+</button>
      </div>

      {/* Total + eliminar */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
        <span style={{ fontWeight: 800, fontSize: "1.1rem", color: C.verde2 }}>
          ${(item.precio * item.cantidad).toLocaleString("es-AR")}
        </span>
        <button
          onClick={() => removeItem(item.id)}
          style={{
            background: "rgba(220,80,80,0.08)", color: "#c62828",
            border: "1.5px solid rgba(220,80,80,0.2)",
            padding: "4px 12px", borderRadius: "8px",
            fontSize: "0.75rem", fontWeight: 700, cursor: "pointer",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(220,80,80,0.16)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(220,80,80,0.08)"; }}
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
};

export default CarritoItem;