import { useNavigate } from "react-router-dom";
import useFaq from "../../hooks/useFaq";
import { CATEGORIAS } from "../../data/FaqData";
import { C } from "../../styles/colores";
import { FaqSearch, FaqSidebar, FaqGroup, FaqNoResults, FaqCTA } from "./Faqui";

const FaqSeccion = () => {
  const navigate = useNavigate();
  const {
    busqueda,
    setBusqueda,
    categoriaActiva,
    setCategoriaActiva,
    itemAbierto,
    toggleItem,
    gruposFiltrados,
    hayResultados,
  } = useFaq();

  return (
    <section
      style={{
        background: C.beige,
        padding: "64px 2rem 96px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1060px",
          margin: "0 auto 52px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "32px",
          paddingBottom: "28px",
          borderBottom: `1px solid ${C.beige2}`,
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.66rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: C.verde3,
              marginBottom: "0.7rem",
            }}
          >
            Ayuda
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: C.texto,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Preguntas <span style={{ color: C.verde3 }}>frecuentes</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <FaqSearch value={busqueda} onChange={setBusqueda} />
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          maxWidth: "1060px",
          margin: "0 auto",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <FaqSidebar
          categorias={CATEGORIAS}
          activa={categoriaActiva}
          onSelect={setCategoriaActiva}
        />

        <div>
          {hayResultados ? (
            gruposFiltrados.map((grupo) => (
              <FaqGroup
                key={grupo.categoria}
                grupo={grupo}
                itemAbierto={itemAbierto}
                onToggle={toggleItem}
              />
            ))
          ) : (
            <FaqNoResults />
          )}

          <FaqCTA onContacto={() => navigate("/contacto")} />
        </div>
      </div>
    </section>
  );
};

export default FaqSeccion;
