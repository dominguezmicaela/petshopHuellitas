// components/Paginacion.jsx

const Paginacion = ({ pagina, totalPaginas, setPagina }) => {
  if (totalPaginas <= 1) return null;

  // Genera el rango de páginas visibles: máximo 5 botones centrados en la página actual
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
          border: activa ? "2px solid #3d6b4f" : "2px solid transparent",
          background: activa
            ? "linear-gradient(135deg, #3d6b4f, #2d5140)"
            : "rgba(61,107,79,0.06)",
          color: activa ? "#fff" : "#3a5244",
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
        color: disabled ? "#c5d9ce" : "#3d6b4f",
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

      {/* Primera página */}
      <BtnNav onClick={() => setPagina(1)} disabled={pagina === 1}>
        «
      </BtnNav>

      {/* Anterior */}
      <BtnNav onClick={() => setPagina(p => p - 1)} disabled={pagina === 1}>
        ← Anterior
      </BtnNav>

      {/* Puntos suspensivos izquierda */}
      {rango()[0] > 1 && (
        <span style={{ color: "#8aaa96", fontWeight: 600, padding: "0 4px" }}>…</span>
      )}

      {/* Números */}
      {rango().map(n => <BtnPagina key={n} numero={n}/>)}

      {/* Puntos suspensivos derecha */}
      {rango()[rango().length - 1] < totalPaginas && (
        <span style={{ color: "#8aaa96", fontWeight: 600, padding: "0 4px" }}>…</span>
      )}

      {/* Siguiente */}
      <BtnNav onClick={() => setPagina(p => p + 1)} disabled={pagina === totalPaginas}>
        Siguiente →
      </BtnNav>

      {/* Última página */}
      <BtnNav onClick={() => setPagina(totalPaginas)} disabled={pagina === totalPaginas}>
        »
      </BtnNav>

    </div>
  );
};

export default Paginacion;