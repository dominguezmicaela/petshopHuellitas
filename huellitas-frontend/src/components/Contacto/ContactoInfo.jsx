
const INFO_ITEMS = [
  { icon: "📧", value: "contacto@huellitas.com" },
  { icon: "📱", value: "+54 11 0000-0000" },
  { icon: "📍", value: "Buenos Aires, Argentina" },
];

const MapSVG = () => (
  <div style={{
    position: "relative",
    width: "100%",
    marginTop: "1rem",
    perspective: "400px",
  }}>
    {/* Mapa inclinado en plano */}
    <div style={{
      transform: "rotateX(40deg) scale(1.1)",
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
    }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="Mapa mundial"
        style={{
          width: "100%",
          opacity: 0.4,
          filter: "brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg)",
          display: "block",
        }}
      />
    </div>

    {/* Punto en Buenos Aires — encima del mapa inclinado */}
    <div style={{
      position: "absolute",
      left: "27%",
      top: "72%",
      transform: "translate(-50%, -50%)",
      zIndex: 10,
    }}>
      {/* Línea vertical (vector) */}
      <div style={{
        position: "absolute",
        left: "50%",
        bottom: "8px",
        transform: "translateX(-50%)",
        width: "1.5px",
        height: "36px",
        background: "linear-gradient(to bottom, rgba(163,230,180,0.9), rgba(163,230,180,0.1))",
        zIndex: 9,
      }}/>

      {/* Pulso */}
      <div style={{
        position: "absolute",
        width: "32px", height: "32px",
        borderRadius: "50%",
        background: "rgba(163,230,180,0.25)",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        animation: "pulse-ring 2s ease-out infinite",
      }}/>

      {/* Punto central */}
      <div style={{
        width: "10px", height: "10px",
        borderRadius: "50%",
        background: "#a3e6b4",
        boxShadow: "0 0 14px rgba(163,230,180,1), 0 0 4px #fff",
        position: "relative", zIndex: 10,
      }}/>

      {/* Tooltip arriba del vector */}
      <div style={{
        position: "absolute",
        bottom: "52px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(30,59,46,0.95)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "8px",
        padding: "4px 10px",
        fontSize: "0.68rem",
        fontWeight: 700,
        color: "#fff",
        whiteSpace: "nowrap",
        zIndex: 11,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}>
        Estamos aquí 🐾
      </div>
    </div>

    <style>{`
      @keyframes pulse-ring {
        0%   { transform: translate(-50%,-50%) scale(0.8); opacity: 0.8; }
        100% { transform: translate(-50%,-50%) scale(2.6); opacity: 0; }
      }
    `}</style>
  </div>
);

const ContactoInfo = () => (
  <div style={{
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3rem 2.5rem",
    overflow: "hidden",
    background: "linear-gradient(135deg, #3d6b4f 0%, #2d5140 60%, #1e3b2e 100%)",
    minHeight: "100%",
    textAlign: "center",
  }}>
    {/* Dot pattern */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}/>
    <div style={{
      position: "absolute", top: "-80px", right: "-80px",
      width: "260px", height: "260px", borderRadius: "50%", pointerEvents: "none",
      background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
    }}/>

    {/* Contenido centrado */}
    <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.5rem", margin: "0 auto 1.2rem",
        background: "rgba(242,233,220,0.15)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}>✉️</div>

      <h2 style={{
        fontSize: "1.8rem", fontWeight: 800, color: "#fff",
        letterSpacing: "-0.5px", marginBottom: "0.5rem",
      }}>¡Hablemos!</h2>

      <p style={{
        fontSize: "0.88rem", fontWeight: 300,
        color: "rgba(242,233,220,0.72)", lineHeight: 1.7,
        marginBottom: "1.5rem", maxWidth: "260px", margin: "0 auto 1.5rem",
      }}>
        Estamos aquí para ayudarte con cualquier duda sobre el cuidado de tus mascotas
      </p>

      {/* Info centrada */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        {INFO_ITEMS.map(({ icon, value }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.85rem" }}>{icon}</span>
            <span style={{ fontSize: "0.82rem", color: "rgba(242,233,220,0.65)", fontWeight: 500 }}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Mapa inclinado */}
    <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
      <MapSVG />
    </div>
  </div>
);

export default ContactoInfo;