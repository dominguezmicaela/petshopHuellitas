// pages/Home/Inicio.jsx
import React from "react";
import { useProductos } from "../../hooks/useProductos";
import ProductCard from "../../components/Producto/ProductCard";
import Paginacion from "../../components/Paginacion";
import { PawWatermark, IcoSearch, IcoFilter } from "../../components/icono";
import ReseniasCarrusel from "../../components/Resenia/ReseniaCarrusel";
import FaqSeccion from "../../components/Faq/FaqSection";
import { C } from "../../styles/colores";

const CATEGORIAS = [
  { key: "Alimentos" },
  { key: "Juguetes"  },
  { key: "Accesorios"},
  { key: "Higiene"   },
];

const MASCOTAS = [
  { key: "todos",  label: "Todos"  },
  { key: "Perros", label: "Perros" },
  { key: "Gatos",  label: "Gatos"  },
];

export const Inicio = () => {
  const { productos, cargando, pagina, setPagina, totalPaginas, total } = useProductos();
  const [busqueda, setBusqueda] = React.useState("");
  const [orden, setOrden]       = React.useState("relevancia");

  const productosVisibles = [...productos]
    .filter(p => p.nombre?.toLowerCase().includes(busqueda.toLowerCase()))
    .sort((a, b) => {
      if (orden === "precio_asc")  return a.precio - b.precio;
      if (orden === "precio_desc") return b.precio - a.precio;
      return 0;
    });

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{
        background: C.gradiente,
        padding: "5rem 2rem 6rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-20px", left: "-20px", pointerEvents: "none" }}>
          <PawWatermark size={180} rotate={15} opacity={0.09} />
        </div>
        <div style={{ position: "absolute", top: "30px", right: "60px", pointerEvents: "none" }}>
          <PawWatermark size={145} rotate={-18} opacity={0.07} />
        </div>
        <div style={{ position: "absolute", bottom: "-10px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }}>
          <PawWatermark size={125} rotate={35} opacity={0.06} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, color: C.sobreVerde,
            marginBottom: "1.2rem", letterSpacing: "-1px", lineHeight: 1.2,
          }}>
            Bienvenidos a Huellitas
          </h1>
          <p style={{ fontSize: "1.1rem", color: C.sobreVerdeSubtle, marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Encuentra todo para tu mascota en un solo lugar. En{" "}
            <strong style={{ textDecoration: "underline", textDecorationColor: C.beige3, textUnderlineOffset: "4px" }}>
              Huellitas
            </strong>{" "}
            nos apasiona el bienestar animal.
          </p>
          <div style={{ position: "relative", maxWidth: "560px", margin: "0 auto" }}>
            <input
              type="text"
              placeholder="¿Qué estás buscando hoy?"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%", padding: "1.1rem 1.5rem 1.1rem 3.5rem",
                borderRadius: "16px", border: "none", fontSize: "1rem",
                fontFamily: "inherit", boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                outline: "none", color: C.verde2, background: "#fff",
              }}
            />
            <span style={{ position: "absolute", left: "1.1rem", top: "50%", transform: "translateY(-50%)", color: C.verde3 }}>
              <IcoSearch />
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div style={{
        maxWidth: "1400px", margin: "0 auto", padding: "3rem 2rem",
        display: "flex", gap: "2rem", alignItems: "flex-start",
      }}>

        {/* ── SIDEBAR ── */}
        <aside style={{
          width: "230px", flexShrink: 0,
          background: "#fff", borderRadius: "20px",
          border: `1.5px solid ${C.beige2}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          overflow: "hidden",
          position: "sticky", top: "90px",
        }}>
          {/* Header */}
          <div style={{
            padding: "1.2rem 1.4rem",
            background: C.gradiente,
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            <IcoFilter />
            <span style={{ fontWeight: 800, fontSize: "0.95rem", color: C.sobreVerde }}>Filtros</span>
          </div>

          <div style={{ padding: "1.4rem" }}>
            {/* Mascota */}
            <div style={{ marginBottom: "1.6rem" }}>
              <p style={{ fontSize: "0.66rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "0.7rem" }}>
                Mascota
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {MASCOTAS.map((m, i) => (
                  <div key={m.key} style={{
                    display: "flex", alignItems: "center", gap: "9px",
                    padding: "0.6rem 0.9rem", borderRadius: "12px",
                    fontWeight: i === 0 ? 700 : 500, fontSize: "0.88rem",
                    border: `1.5px solid ${i === 0 ? C.verde3 : "transparent"}`,
                    background: i === 0 ? "rgba(61,107,79,0.08)" : "rgba(0,0,0,0.02)",
                    color: i === 0 ? C.verde2 : C.muted2,
                  }}>
                    <span>{m.emoji}</span>
                    {m.label}
                    {i === 0 && <span style={{ marginLeft: "auto", width: "7px", height: "7px", borderRadius: "50%", background: C.verde3 }}/>}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ height: "1px", background: C.beige2, marginBottom: "1.6rem" }}/>

            {/* Categoría */}
            <div style={{ marginBottom: "1.6rem" }}>
              <p style={{ fontSize: "0.66rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "0.7rem" }}>
                Categoría
              </p>
              {CATEGORIAS.map(({ key, emoji }) => (
                <div key={key} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "0.5rem 0.6rem", borderRadius: "10px", marginBottom: "2px",
                }}>
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "6px", flexShrink: 0,
                    border: `2px solid ${C.beige3}`, background: "transparent",
                  }}/>
                  <span style={{ fontSize: "1rem" }}>{emoji}</span>
                  <span style={{ fontSize: "0.88rem", color: C.texto, fontWeight: 500 }}>{key}</span>
                </div>
              ))}
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
                color: C.sobreVerde, fontWeight: 700, fontSize: "0.8rem", cursor: "pointer",
              }}>
                Ver más →
              </button>
            </div>
          </div>
        </aside>

        {/* ── PRODUCTOS ── */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: "1.5rem", color: C.verde2 }}>
                Nuestros productos
              </h2>
              {!cargando && (
                <p style={{ fontSize: "0.85rem", color: C.muted, marginTop: "2px" }}>
                  {total} productos disponibles
                </p>
              )}
            </div>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              style={{
                border: "none", background: "transparent", fontSize: "0.9rem",
                color: C.muted2, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              <option value="relevancia">Ordenar por: Relevancia</option>
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          {cargando ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8rem 0", gap: "1rem" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: `4px solid rgba(84,115,82,0.2)`, borderTopColor: C.verde3,
                animation: "spin 0.8s linear infinite",
              }}/>
              <p style={{ color: C.verde3, fontWeight: 600 }}>Cargando productos...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : productosVisibles.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {productosVisibles.map((producto) => (
                <ProductCard key={producto.idProducto} producto={producto} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "6rem 0", color: C.muted }}>
              <span style={{ fontSize: "3rem" }}>🐾</span>
              <p style={{ marginTop: "1rem", fontWeight: 600, fontSize: "1.1rem" }}>
                No hay productos disponibles
              </p>
            </div>
          )}

          {!cargando && (
            <Paginacion pagina={pagina} totalPaginas={totalPaginas} setPagina={setPagina} />
          )}
        </div>
      </div>

      {/* Reseñas */}
      <ReseniasCarrusel/>
      <FaqSeccion />
    </div>
  );
};

export default Inicio;