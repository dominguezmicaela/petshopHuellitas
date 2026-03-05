// components/FilterSidebar.jsx
import { IcoFilter } from "./icono";
import { C } from "../style/colores";

const CATEGORIAS = [
  { key: "Alimentos",  emoji: "🥩" },
  { key: "Juguetes",   emoji: "🎾" },
  { key: "Accesorios", emoji: "🏷️" },
  { key: "Higiene",    emoji: "🛁" },
];

const MASCOTAS = [
  { key: "todos",  label: "Todos",  emoji: "🐾" },
  { key: "Perros", label: "Perros", emoji: "🐶" },
  { key: "Gatos",  label: "Gatos",  emoji: "🐱" },
];

export const FilterSidebar = ({
  categorias, toggleCategoria,
  mascota, setMascota,
  hayFiltrosActivos, limpiar,
}) => {
  return (
    <aside style={{
      width: "230px", flexShrink: 0,
      background: "#fff",
      borderRadius: "20px",
      border: `1.5px solid ${C.beige2}`,
      boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
      overflow: "hidden",
      position: "sticky", top: "90px",
    }}>

      {/* Header */}
      <div style={{
        padding: "1.2rem 1.4rem",
        background: C.gradiente,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IcoFilter/>
          <span style={{ fontWeight: 800, fontSize: "0.95rem", color: C.sobreVerde }}>Filtros</span>
        </div>
        {hayFiltrosActivos && (
          <button onClick={limpiar} style={{
            fontSize: "0.72rem", color: C.sobreVerdeSubtle, fontWeight: 700,
            background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px", padding: "3px 10px", cursor: "pointer",
          }}>
            Limpiar
          </button>
        )}
      </div>

      <div style={{ padding: "1.4rem" }}>

        {/* Mascota */}
        <div style={{ marginBottom: "1.6rem" }}>
          <p style={{ fontSize: "0.66rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "0.7rem" }}>
            Mascota
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {MASCOTAS.map(m => {
              const active = mascota === m.key;
              return (
                <button key={m.key} onClick={() => setMascota(m.key)} style={{
                  display: "flex", alignItems: "center", gap: "9px",
                  padding: "0.6rem 0.9rem", borderRadius: "12px", width: "100%",
                  fontWeight: active ? 700 : 500, fontSize: "0.88rem",
                  border: `1.5px solid ${active ? C.verde3 : "transparent"}`,
                  background: active ? "rgba(61,107,79,0.08)" : "rgba(0,0,0,0.02)",
                  color: active ? C.verde2 : C.muted2,
                  cursor: "pointer", transition: "all 0.15s ease", textAlign: "left",
                }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(61,107,79,0.05)"; e.currentTarget.style.color = C.verde2; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "rgba(0,0,0,0.02)"; e.currentTarget.style.color = C.muted2; }}}
                >
                  <span>{m.emoji}</span>
                  {m.label}
                  {active && <span style={{ marginLeft: "auto", width: "7px", height: "7px", borderRadius: "50%", background: C.verde3, flexShrink: 0 }}/>}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ height: "1px", background: C.beige2, marginBottom: "1.6rem" }}/>

        {/* Categoría */}
        <div style={{ marginBottom: "1.6rem" }}>
          <p style={{ fontSize: "0.66rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "0.7rem" }}>
            Categoría
          </p>
          {CATEGORIAS.map(({ key, emoji }) => {
            const active = categorias.includes(key);
            return (
              <label key={key} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "0.5rem 0.6rem", borderRadius: "10px", cursor: "pointer",
                background: active ? "rgba(61,107,79,0.07)" : "transparent",
                marginBottom: "2px", transition: "background 0.15s",
              }}>
                <div style={{
                  width: "18px", height: "18px", borderRadius: "6px", flexShrink: 0,
                  border: `2px solid ${active ? C.verde3 : C.beige3}`,
                  background: active ? C.verde3 : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s ease",
                }}>
                  {active && (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <input type="checkbox" checked={active} onChange={() => toggleCategoria(key)} style={{ display: "none" }}/>
                <span style={{ fontSize: "1rem" }}>{emoji}</span>
                <span style={{ fontSize: "0.88rem", color: C.verde2, fontWeight: active ? 700 : 500 }}>{key}</span>
              </label>
            );
          })}
        </div>

        <div style={{ height: "1px", background: C.beige2, marginBottom: "1.4rem" }}/>

        {/* Promo */}
        <div style={{
          background: C.gradiente,
          padding: "1.1rem", borderRadius: "14px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: "-10px", right: "-10px", fontSize: "3.5rem", opacity: 0.15, pointerEvents: "none" }}>🐱</div>
          <p style={{ fontWeight: 800, fontSize: "0.88rem", color: C.sobreVerde, marginBottom: "0.3rem" }}>Promoción Semanal</p>
          <p style={{ fontSize: "0.76rem", color: C.sobreVerdeSubtle, marginBottom: "0.9rem", lineHeight: 1.5 }}>
            ¡20% off en snacks para gatitos!
          </p>
          <button style={{
            width: "100%", padding: "0.45rem", borderRadius: "9px",
            background: "rgba(255,255,255,0.16)", border: "1.5px solid rgba(255,255,255,0.28)",
            color: C.sobreVerde, fontWeight: 700, fontSize: "0.8rem",
            cursor: "pointer", transition: "background 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.26)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.16)"}>
            Ver más →
          </button>
        </div>

      </div>
    </aside>
  );
};

export default FilterSidebar;