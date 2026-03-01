const DecorativePanel = ({ isRegisterMode }) => (
  <div style={{
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "3rem 2.5rem",
    background: "linear-gradient(135deg, #2d5140 0%, #3d6b4f 60%, #4a7d5e 100%)",
    overflow: "hidden",
    minHeight: "100%",
  }}>
    {/* Dot pattern */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }} />
    {/* Glow */}
    <div style={{
      position: "absolute", top: "-80px", right: "-80px",
      width: "260px", height: "260px", borderRadius: "50%", pointerEvents: "none",
      background: "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 70%)",
    }} />

    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{
        width: "100px", height: "100px", borderRadius: "20px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "3rem", margin: "0 auto 2rem",
        background: "rgba(242,233,220,0.18)",
        border: "1.5px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
      }}>
        🐾
      </div>
      <h2 style={{
        fontSize: "2.4rem", fontWeight: 800, color: "#fff",
        letterSpacing: "-1px", marginBottom: "1rem", lineHeight: 1.2,
      }}>
        {isRegisterMode ? "¡Únete!" : "Bienvenido"}
      </h2>
      <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(242,233,220,0.85)", lineHeight: 1.7, maxWidth: "260px" }}>
        {isRegisterMode
          ? "Creá tu cuenta y empezá a cuidar mejor a tus mascotas"
          : "Tu tienda de confianza para el cuidado y bienestar de tus mascotas"}
      </p>
    </div>
  </div>
);

export default DecorativePanel;