import { Link } from "react-router-dom";

const CarritoVacio = () => (
  <div style={{
    display: "flex", justifyContent: "center", alignItems: "center",
    minHeight: "60vh", padding: "2rem",
  }}>
    <div style={{
      background: "#fff", borderRadius: "28px",
      border: "1.5px solid #f0e6d8",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      padding: "5rem 4rem", textAlign: "center", maxWidth: "460px",
    }}>
      <div style={{ fontSize: "6rem", marginBottom: "1.5rem", animation: "bounce 2s infinite" }}>🛒</div>
      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }`}</style>

      <h2 style={{ fontWeight: 800, fontSize: "1.6rem", color: "#2d5140", marginBottom: "0.8rem" }}>
        Tu carrito está vacío
      </h2>
      <p style={{ fontSize: "0.95rem", color: "#6b8c7a", lineHeight: 1.6, marginBottom: "2.5rem" }}>
        ¡Descubrí nuestros productos y encontrá lo mejor para tu mascota!
      </p>

      <Link to="/" style={{
        display: "inline-block", padding: "0.95rem 2.5rem",
        background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
        color: "#fff", textDecoration: "none",
        borderRadius: "14px", fontWeight: 800, fontSize: "0.95rem",
        boxShadow: "0 6px 20px rgba(61,107,79,0.3)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(61,107,79,0.4)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(61,107,79,0.3)"; }}
      >
        🐾 Ver Productos
      </Link>
    </div>
  </div>
);

export default CarritoVacio;