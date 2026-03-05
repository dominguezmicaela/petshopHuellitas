import { C } from "../../styles/colores";

const ReseniaCard = ({ resenia, activa, onClick }) => (
  <div
    onClick={onClick}
    style={{
      flexShrink: 0,
      width: "300px",
      borderRadius: "24px",
      padding: "1.6rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.9rem",
      cursor: "pointer",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      ...(activa ? {
        background: C.beige,
        border: "2px solid rgba(255,255,255,0.5)",
        boxShadow: "0 24px 56px rgba(0,0,0,0.3)",
        transform: "scale(1.05)",
        opacity: 1,
      } : {
        background: "rgba(245,237,224,0.08)",
        border: "1px solid rgba(245,237,224,0.08)",
        transform: "scale(0.91)",
        opacity: 0.3,
      }),
    }}
  >
    {/* Top */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "2rem", color: C.verde3, opacity: 0.25, fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
      <div style={{ display: "flex", gap: "2px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ fontSize: "0.8rem", color: i < resenia.estrellas ? "#f5a623" : C.beige2 }}>★</span>
        ))}
      </div>
    </div>

    {/* Texto */}
    <p style={{ fontSize: "0.85rem", color: C.texto, lineHeight: 1.75, flex: 1 }}>
      {resenia.texto}
    </p>

    {/* Separador */}
    <div style={{ height: "1px", background: C.beige2 }}/>

    {/* Autor */}
    <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
        background: C.gradiente,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.1rem",
      }}>
        {resenia.avatar}
      </div>
      <div>
        <p style={{ fontWeight: 800, fontSize: "0.82rem", color: C.verde2 }}>{resenia.nombre}</p>
      </div>
    </div>
  </div>
);

export default ReseniaCard;