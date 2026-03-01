import { Link } from "react-router-dom";
import { Logo, IcoHome, IcoMail, IcoCart, IcoUser } from "./icono";

const NavBtn = ({ to, icon: Icon, label, accent }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <div
      style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "10px 18px", borderRadius: "12px",
        fontWeight: 600, fontSize: "13px",
        color: accent ? "#fff" : "#3a5244",
        background: accent ? "linear-gradient(135deg, #3d6b4f, #2d5140)" : "transparent",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: accent ? "0 4px 14px rgba(61,107,79,0.28)" : "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-1px)";
        if (!accent) {
          e.currentTarget.style.background = "rgba(85,124,85,0.08)";
          e.currentTarget.style.color = "#3d6b4f";
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        if (!accent) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#3a5244";
        }
      }}
    >
      <Icon />
      {label}
    </div>
  </Link>
);

export const Header = () => (
  <header style={{
    position: "sticky", top: 0, zIndex: 1000,
    height: "72px", width: "100%",
    background: "rgba(245,237,224,0.92)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(85,124,85,0.1)",
    display: "flex", alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
  }}>
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "3px",
      background: "linear-gradient(90deg, #3d6b4f 0%, #2d5140 50%, #3d6b4f 100%)",
    }}/>

    <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{ transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05) rotate(4deg)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1) rotate(0deg)"}
      >
        <Logo />
      </div>
      <span style={{ fontWeight: 800, fontSize: "1.8rem", color: "#2d5140", letterSpacing: "-0.5px" }}>
        Huellitas
      </span>
    </Link>

    <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <NavBtn to="/" icon={IcoHome} label="Inicio" />
      <NavBtn to="/contacto" icon={IcoMail} label="Contacto" />
      <NavBtn to="/carrito" icon={IcoCart} label="Carrito" />
      <NavBtn to="/login" icon={IcoUser} label="Iniciar Sesión" accent />
    </nav>
  </header>
);

export default Header;