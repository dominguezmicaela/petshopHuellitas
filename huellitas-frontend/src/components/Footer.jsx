// components/Footer.jsx
import { Link } from "react-router-dom";

const LINKS = {
  Páginas: [
    { label: "Inicio",    to: "/" },
    { label: "Productos", to: "/" },
    { label: "Carrito",   to: "/carrito" },
    { label: "Contacto",  to: "/contacto" },
  ],
  Redes: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook",  href: "https://facebook.com" },
    { label: "WhatsApp",  href: "https://wa.me/5491100000000" },
  ],
  Legal: [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de cookies",    href: "#" },
    { label: "Defensa del consumidor", href: "#" },
  ],
};

const ColTitle = ({ children }) => (
  <p style={{
    fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase",
    letterSpacing: "0.12em", color: "rgba(242,233,220,0.5)", marginBottom: "1rem",
  }}>
    {children}
  </p>
);

const FooterLink = ({ label, to, href }) => {
  const style = {
    display: "block", fontSize: "0.88rem", fontWeight: 500,
    color: "rgba(242,233,220,0.8)", textDecoration: "none", marginBottom: "0.6rem",
    transition: "color 0.15s ease",
    cursor: "pointer",
  };
  const onEnter = e => { e.currentTarget.style.color = "#f2e9dc"; };
  const onLeave = e => { e.currentTarget.style.color = "rgba(242,233,220,0.8)"; };

  if (to) return (
    <Link to={to} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {label}
    </Link>
  );
  return (
    <a href={href} target="_blank" rel="noreferrer" style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {label}
    </a>
  );
};

export const Footer = () => (
  <footer style={{
    background: "linear-gradient(135deg, #2d5140 0%, #3d6b4f 60%, #2d5140 100%)",
    borderTop: "none",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    position: "relative",
  }}>
    {/* Dots decorativos igual que el hero */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.25,
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}/>

    {/* Cuerpo principal */}
    <div style={{
      maxWidth: "1400px", margin: "0 auto",
      padding: "3.5rem 2rem 2rem",
      display: "grid",
      gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
      gap: "3rem",
    }}>

      {/* Columna marca */}
      <div>
        
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#f2e9dc", letterSpacing: "-0.3px" }}>
            Huellitas
          </span>
        <p style={{ fontSize: "0.85rem", color: "rgba(242,233,220,0.75)", lineHeight: 1.7, maxWidth: "220px", marginBottom: "1.4rem" }}>
          Todo para tu mascota en un solo lugar. Calidad y amor para tus mejores amigos.
        </p>

        <p style={{ fontSize: "0.78rem", color: "rgba(242,233,220,0.5)", fontWeight: 600 }}>
          Sitio realizado por <span style={{ color: "#f2e9dc" }}>Micaela</span>
        </p>
      </div>

      {/* Columnas de links */}
      {Object.entries(LINKS).map(([titulo, items]) => (
        <div key={titulo}>
          <ColTitle>{titulo}</ColTitle>
          {items.map(item => <FooterLink key={item.label} {...item}/>)}
        </div>
      ))}
    </div>

    {/* Barra inferior */}
    <div style={{
      borderTop: "1px solid rgba(242,233,220,0.12)",
      maxWidth: "1400px", margin: "0 auto",
      padding: "1.2rem 2rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "0.8rem",
    }}>
      <p style={{ fontSize: "0.78rem", color: "rgba(242,233,220,0.45)", fontWeight: 500 }}>
        © {new Date().getFullYear()} Huellitas. Todos los derechos reservados.
      </p>
      <p style={{ fontSize: "0.78rem", color: "rgba(242,233,220,0.45)", fontWeight: 500 }}>
        🇦🇷 Buenos Aires, Argentina
      </p>
    </div>
  </footer>
);

export default Footer;