import { C } from "../../styles/colores";

//Barra de búsqueda 
export const FaqSearch = ({ value, onChange }) => (
  <div style={{ position: "relative", width: "240px" }}>
    <svg
      style={{
        position: "absolute", left: "12px", top: "50%",
        transform: "translateY(-50%)",
        width: "14px", height: "14px",
        stroke: C.muted, fill: "none", pointerEvents: "none",
      }}
      viewBox="0 0 24 24" strokeWidth="2.2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar pregunta..."
      style={{
        width: "100%",
        padding: "11px 16px 11px 38px",
        background: "#fff",
        border: `1.5px solid ${C.beige2}`,
        borderRadius: "12px",
        color: C.verde2,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.84rem",
        outline: "none",
      }}
    />
  </div>
);

//Sidebar de categorías
export const FaqSidebar = ({ categorias, activa, onSelect }) => (
  <nav style={{}}>
    <p style={{
      fontSize: "0.66rem", fontWeight: 800,
      textTransform: "uppercase", letterSpacing: "0.1em",
      color: C.muted, marginBottom: "10px",
    }}>
      Categorías
    </p>
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      {categorias.map(({ id, label }) => {
        const activo = activa === id;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            style={{
              width: "100%",
              background: activo ? C.gradiente : "none",
              border: `1.5px solid ${activo ? C.verde3 : "transparent"}`,
              textAlign: "left",
              padding: "9px 12px",
              borderRadius: "12px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.87rem",
              fontWeight: activo ? 700 : 500,
              color: activo ? C.sobreVerde : C.muted2,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  </nav>
);

//Item individual
export const FaqItem = ({ item, isOpen, onToggle }) => (
  <div style={{ borderBottom: `1px solid ${C.beige2}` }}>
    <button
      onClick={onToggle}
      style={{
        width: "100%",
        background: "none",
        border: "none",
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <span style={{
        fontSize: "0.93rem",
        fontWeight: 700,
        color: isOpen ? C.verde2 : C.texto,
        lineHeight: 1.45,
        transition: "color 0.2s",
      }}>
        {item.pregunta}
      </span>

      {/* Toggle circular */}
      <div style={{
        width: "28px", height: "28px",
        borderRadius: "50%",
        background: isOpen ? C.verde3 : C.beige2,
        flexShrink: 0,
        position: "relative",
        transition: "background 0.2s",
      }}>
        {/* línea horizontal */}
        <span style={{
          position: "absolute",
          width: "10px", height: "1.5px",
          background: isOpen ? "#fff" : C.verde3,
          borderRadius: "2px",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "background 0.2s",
        }} />
        {/* línea vertical */}
        <span style={{
          position: "absolute",
          width: "1.5px", height: "10px",
          background: isOpen ? "#fff" : C.verde3,
          borderRadius: "2px",
          top: "50%", left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) rotate(90deg)"
            : "translate(-50%, -50%)",
          opacity: isOpen ? 0 : 1,
          transition: "transform 0.28s, opacity 0.22s, background 0.2s",
        }} />
      </div>
    </button>

    <div style={{
      maxHeight: isOpen ? "260px" : "0",
      overflow: "hidden",
      transition: "max-height 0.36s cubic-bezier(0.4,0,0.2,1)",
    }}>
      <p style={{
        paddingBottom: "22px",
        fontSize: "0.88rem",
        color: C.muted2,
        lineHeight: 1.85,
        maxWidth: "560px",
        fontWeight: 400,
        margin: 0,
      }}>
        {item.respuesta}
      </p>
    </div>
  </div>
);

//grupo con título y pill
export const FaqGroup = ({ grupo, itemAbierto, onToggle }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <div style={{
      display: "flex", alignItems: "center", gap: "10px",
      paddingBottom: "10px", marginBottom: "4px",
      borderBottom: `1.5px solid ${C.beige2}`,
    }}>
      <h3 style={{
        fontSize: "0.66rem", fontWeight: 800,
        textTransform: "uppercase", letterSpacing: "0.1em",
        color: C.muted,
      }}>
        {grupo.titulo}
      </h3>
      <span style={{
        fontSize: "0.68rem", fontWeight: 600,
        color: "#fff", background: C.verde3,
        padding: "2px 8px", borderRadius: "100px",
      }}>
        {grupo.items.length}
      </span>
    </div>

    {grupo.items.map((item) => (
      <FaqItem
        key={item.id}
        item={item}
        isOpen={itemAbierto === item.id}
        onToggle={() => onToggle(item.id)}
      />
    ))}
  </div>
);

//Sin resultados
export const FaqNoResults = () => (
  <div style={{ textAlign: "center", padding: "5rem 0", color: C.muted }}>
    <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🐾</div>
    <p style={{ fontWeight: 700, fontSize: "1.05rem", color: C.texto, marginBottom: "6px" }}>
      Sin resultados
    </p>
    <p style={{ fontSize: "0.85rem" }}>
      Probá con otro término o escribinos directamente.
    </p>
  </div>
);

//cta
export const FaqCTA = ({ onContacto }) => (
  <div style={{
    marginTop: "3rem",
    padding: "2.2rem 2.5rem",
    background: C.gradiente,
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    flexWrap: "wrap",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(30,59,46,0.18)",
  }}>
    <div style={{
      position: "absolute", top: "-10px", right: "-10px",
      fontSize: "4rem", opacity: 0.1, pointerEvents: "none",
    }}>
      🐾
    </div>
    <div>
      <p style={{
        fontWeight: 800, fontSize: "1.05rem",
        color: C.sobreVerde, marginBottom: "4px",
        letterSpacing: "-0.02em",
      }}>
        ¿No encontraste lo que buscabas?
      </p>
      <p style={{ fontSize: "0.82rem", color: C.sobreVerdeSubtle, lineHeight: 1.5 }}>
        Nuestro equipo responde en menos de 24 horas
      </p>
    </div>
    <button
      onClick={onContacto}
      style={{
        padding: "0.65rem 1.5rem",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.15)",
        border: "1.5px solid rgba(255,255,255,0.25)",
        color: C.sobreVerde,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: "0.88rem",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 0.2s",
      }}
    >
      Escribinos →
    </button>
  </div>
);