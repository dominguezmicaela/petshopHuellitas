import ReseniaCard from "./ReseniaCard";
import { useResenias, useCountUp } from "../../hooks/useResenias";

// Stat animado 
const StatItem = ({ target, suffix, decimals, label, extra }) => {
  const { value, ref } = useCountUp(target, 1800, decimals);
  return (
    <div ref={ref} style={{
      padding: "1rem 1.6rem", textAlign: "center", position: "relative",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      minWidth: "100px",
    }}>
      <span style={{
        fontSize: "1.5rem", fontWeight: 800, color: "#fff",
        lineHeight: 1, letterSpacing: "-1px",
        fontVariantNumeric: "tabular-nums",
      }}>
        {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
      </span>
      <span style={{ color: "#fbbf24", fontSize: "0.7rem", marginTop: "4px", letterSpacing: "2px", height: "14px", display: "block" }}>
        {extra ?? ""}
      </span>
      <span style={{
        fontSize: "0.6rem", color: "rgba(242,233,220,0.4)",
        fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
      }}>
        {label}
      </span>
    </div>
  );
};

const StatDivider = () => (
  <div style={{ width: "1px", background: "rgba(255,255,255,0.1)", margin: "18% 0" }}/>
);

//Flecha
const Arrow = ({ dir, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "40px", height: "40px", borderRadius: "50%",
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.13)",
      color: "rgba(255,255,255,0.7)", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "1.1rem", transition: "all 0.2s ease",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "scale(1.1)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "scale(1)"; }}
  >
    {dir === "left" ? "‹" : "›"}
  </button>
);

// Componente principal
const ReseniaCarrusel = () => {
  const { resenias, activa, offset, siguiente, anterior, irA, setPausado, viewportRef } = useResenias();

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1e3b2e 0%, #2d5140 50%, #1e3b2e 100%)",
        minHeight: "100vh",
        padding: "4rem 0 3rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      {/* Mesh gradient + dots */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(ellipse at 10% 60%, rgba(74,125,94,0.3) 0%, transparent 55%), radial-gradient(ellipse at 90% 15%, rgba(61,107,79,0.2) 0%, transparent 50%), radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 100% 100%, 32px 32px",
      }}/>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1, width: "100%" }}>

        {/* Header + Stats en misma fila */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "3rem", gap: "2rem", flexWrap: "wrap",
        }}>
          {/* Título izquierda */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "0.2em", color: "#a8d5b5",
              background: "rgba(168,213,181,0.1)", padding: "5px 14px",
              borderRadius: "99px", marginBottom: "1rem",
              border: "1px solid rgba(168,213,181,0.25)",
            }}>
              ✦ &nbsp;Opiniones
            </div>
            <h2 style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 800,
              color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.1,
            }}>
              Ellos ya eligieron{" "}
              <span style={{ color: "#a8d5b5" }}>Huellitas</span>
            </h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(242,233,220,0.45)", marginTop: "0.5rem" }}>
              Lo que dice nuestra comunidad de familias
            </p>
          </div>

          {/* Stats derecha */}
          <div style={{
            display: "flex", alignItems: "stretch", flexShrink: 0,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "18px", overflow: "hidden",
          }}>
            <StatItem target={4.9} suffix="★" decimals={1} label="Calificación" extra="★★★★★"/>
            <StatDivider/>
            <StatItem target={500} suffix="+" decimals={0} label="Familias"/>
            <StatDivider/>
            <StatItem target={98}  suffix="%" decimals={0} label="Recomiendan"/>
          </div>
        </div>
      </div>

      {/* Carrusel full ancho */}
      <div style={{ position: "relative" }}>
        {/* Fades */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "100px", zIndex: 5, pointerEvents: "none", background: "linear-gradient(to right, #1e3b2e, transparent)" }}/>
        <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "100px", zIndex: 5, pointerEvents: "none", background: "linear-gradient(to left, #1e3b2e, transparent)" }}/>

        <div ref={viewportRef} style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex", gap: "1.4rem", padding: "1.5rem 0 2rem",
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            {resenias.map((r, i) => (
              <ReseniaCard key={r.id} resenia={r} activa={i === activa} onClick={() => irA(i)}/>
            ))}
          </div>
        </div>
      </div>

      {/* Controles */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.2rem", marginTop: "2rem", position: "relative", zIndex: 1 }}>
        <Arrow dir="left"  onClick={anterior}/>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {resenias.map((_, i) => (
            <button
              key={i}
              onClick={() => irA(i)}
              style={{
                height: "4px", borderRadius: "99px", border: "none", padding: 0, cursor: "pointer",
                transition: "all 0.35s ease",
                width: i === activa ? "22px" : "4px",
                background: i === activa ? "#f5ede0" : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>
        <Arrow dir="right" onClick={siguiente}/>
      </div>
    </section>
  );
};

export default ReseniaCarrusel;