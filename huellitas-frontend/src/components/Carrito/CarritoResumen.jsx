import { Link } from "react-router-dom";

const Row = ({ label, value, highlight }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
    <span style={{ fontSize: "0.88rem", color: "#6b8c7a", fontWeight: 600 }}>{label}</span>
    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: highlight ? "#3d6b4f" : "#2d5140" }}>
      {value}
    </span>
  </div>
);

const CarritoResumen = ({ subtotal, envio, total }) => (
  <aside style={{
    background: "#fff",
    borderRadius: "24px",
    border: "1.5px solid #f0e6d8",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    padding: "2rem",
    position: "sticky", top: "90px",
  }}>

    {/* Header */}
    <div style={{
      background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
      borderRadius: "14px", padding: "1rem 1.2rem",
      marginBottom: "1.6rem",
    }}>
      <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", margin: 0 }}>Resumen de compra</h3>
    </div>

    <Row label="Subtotal" value={`$${subtotal.toLocaleString("es-AR")}`}/>
    <Row
      label="Envío"
      value={envio === 0 ? "¡Gratis! 🎉" : `$${envio.toLocaleString("es-AR")}`}
      highlight={envio === 0}
    />

    {/* Barra progreso envío gratis */}
    {subtotal < 5000 && (
      <div style={{ marginBottom: "1.4rem" }}>
        <div style={{
          background: "rgba(61,107,79,0.08)", borderRadius: "10px",
          padding: "0.7rem 0.9rem", marginBottom: "0.6rem",
        }}>
          <p style={{ fontSize: "0.78rem", color: "#3d6b4f", fontWeight: 700, margin: 0 }}>
            💚 Te faltan ${(5000 - subtotal).toLocaleString("es-AR")} para envío gratis
          </p>
        </div>
        <div style={{ height: "6px", background: "#f0e6d8", borderRadius: "99px", overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: "99px",
            width: `${Math.min((subtotal / 5000) * 100, 100)}%`,
            background: "linear-gradient(90deg, #3d6b4f, #5a8a69)",
            transition: "width 0.4s ease",
          }}/>
        </div>
      </div>
    )}

    {/* Divisor */}
    <div style={{ height: "1px", background: "#f0e6d8", margin: "1.2rem 0" }}/>

    {/* Total */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.6rem" }}>
      <span style={{ fontWeight: 800, fontSize: "1rem", color: "#2d5140" }}>Total</span>
      <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "#2d5140" }}>
        ${total.toLocaleString("es-AR")}
      </span>
    </div>

    {/* Finalizar */}
    <button
      style={{
        width: "100%", padding: "0.95rem", borderRadius: "14px",
        background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
        color: "#fff", fontWeight: 800, fontSize: "0.95rem",
        border: "none", cursor: "pointer", marginBottom: "0.8rem",
        boxShadow: "0 6px 20px rgba(61,107,79,0.3)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 28px rgba(61,107,79,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(61,107,79,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      Finalizar Compra →
    </button>

    {/* Seguir comprando */}
    <Link to="/" style={{
      display: "block", textAlign: "center", padding: "0.8rem",
      borderRadius: "12px", fontSize: "0.85rem", fontWeight: 700,
      color: "#3d6b4f", textDecoration: "none",
      border: "1.5px solid rgba(61,107,79,0.25)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "rgba(61,107,79,0.06)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
    >
      ← Seguir Comprando
    </Link>

    {/* Pago seguro */}
    <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#8aaa96", fontWeight: 600, marginTop: "1rem" }}>
      🔒 Pago seguro y protegido
    </p>
  </aside>
);

export default CarritoResumen;