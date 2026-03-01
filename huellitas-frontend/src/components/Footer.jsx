export const Footer = () => (
  <footer style={{
    background: "rgba(245,237,224,0.95)",
    borderTop: "1px solid rgba(85,124,85,0.12)",
    padding: "2rem 5%",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    color: "#3a5244",
    position: "relative",
  }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "2px",
      background: "linear-gradient(90deg, #3d6b4f 0%, #2d5140 50%, #3d6b4f 100%)",
    }}/>
    <p style={{ fontWeight: 700, fontSize: "1.4rem", opacity: 0.7 }}>
      Sitio realizado por Micaela
    </p>
    <nav style={{ display: "flex", gap: "1rem" }}>
      {["Instagram", "Facebook", "WhatsApp"].map(red => (
        <span key={red} style={{
          fontWeight: 600, fontSize: "1.4rem",
          padding: "7px 14px", borderRadius: "10px",
          background: "rgba(85,124,85,0.07)",
          cursor: "pointer", transition: "all 0.2s ease",
          color: "#3a5244",
        }}>
          {red}
        </span>
      ))}
    </nav>
  </footer>
);
export default Footer;