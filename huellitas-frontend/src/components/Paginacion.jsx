// components/Paginacion.jsx
import { C } from "../styles/colores";

const Paginacion = ({ pagina, totalPaginas, setPagina }) => {
  if (totalPaginas <= 1) return null;

  const rango = () => {
    const delta = 2;
    const start = Math.max(1, pagina - delta);
    const end   = Math.min(totalPaginas, pagina + delta);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const BtnPagina = ({ numero }) => {
    const activa = numero === pagina;
    return (
      <button
        onClick={() => setPagina(numero)}
        style={{
          width: "40px", height: "40px", borderRadius: "10px",
          fontWeight: activa ? 800 : 600, fontSize: "0.88rem",
          border: `2px solid ${activa ? C.verde3 : "transparent"}`,
          background: activa ? C.gradiente : "rgba(61,107,79,0.06)",
          color: activa ? C.sobreVerde : C.verde2,
          cursor: "pointer", transition: "all 0.15s ease",
        }}
        onMouseEnter={e => { if (!activa) e.currentTarget.style.background = "rgba(61,107,79,0.12)"; }}
        onMouseLeave={e => { if (!activa) e.currentTarget.style.background = "rgba(61,107,79,0.06)"; }}
      >
        {numero}
      </button>
    );
  };

  const BtnNav = ({ onClick, disabled, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        height: "40px", padding: "0 1rem", borderRadius: "10px",
        fontWeight: 700, fontSize: "0.85rem",
        border: "2px solid transparent",
        background: disabled ? "transparent" : "rgba(61,107,79,0.06)",
        color: disabled ? C.beige3 : C.verde3,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.15s ease",
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "rgba(61,107,79,0.12)"; }}
      onMouseLeave={e => { if (!disabled) e.currentTarget.style.background = "rgba(61,107,79,0.06)"; }}
    >
      {children}
    </button>
  );

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: "6px", marginTop: "3rem", flexWrap: "wrap",
    }}>
      <BtnNav onClick={() => setPagina(1)} disabled={pagina === 1}>«</BtnNav>
      <BtnNav onClick={() => setPagina(p => p - 1)} disabled={pagina === 1}>← Anterior</BtnNav>

      {rango()[0] > 1 && (
        <span style={{ color: C.muted, fontWeight: 600, padding: "0 4px" }}>…</span>
      )}

      {rango().map(n => <BtnPagina key={n} numero={n}/>)}

      {rango()[rango().length - 1] < totalPaginas && (
        <span style={{ color: C.muted, fontWeight: 600, padding: "0 4px" }}>…</span>
      )}

      <BtnNav onClick={() => setPagina(p => p + 1)} disabled={pagina === totalPaginas}>Siguiente →</BtnNav>
      <BtnNav onClick={() => setPagina(totalPaginas)} disabled={pagina === totalPaginas}>»</BtnNav>
    </div>
  );
};

export default Paginacion;