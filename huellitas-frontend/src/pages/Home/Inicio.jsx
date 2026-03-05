import React from "react";
import { useProductos } from "../../hooks/useProductos";
import { useFiltros } from "../../hooks/useFiltros";
import FilterSidebar from "../../components/FilterSidebar";
import ProductCard from "../../components/Producto/ProductCard";
import { PawWatermark, IcoSearch } from "../../components/icono";
import Paginacion from "../../components/Paginacion";

export const Inicio = () => {
 const { productos, cargando, pagina, setPagina, totalPaginas, total } = useProductos();

  const {
    busqueda,
    setBusqueda,
    categorias,
    toggleCategoria,
    mascota,
    setMascota,
    orden,
    setOrden,
    hayFiltrosActivos,
    limpiar,
    productosOrdenados,
  } = useFiltros(productos);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #3d6b4f 0%, #2d5140 60%, #1e3b2e 100%)",
          padding: "5rem 2rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            pointerEvents: "none",
          }}
        >
          <PawWatermark size={180} rotate={15} opacity={0.09} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "60px",
            pointerEvents: "none",
          }}
        >
          <PawWatermark size={145} rotate={-18} opacity={0.07} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          <PawWatermark size={125} rotate={35} opacity={0.06} />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1.2rem",
              letterSpacing: "-1px",
              lineHeight: 1.2,
            }}
          >
            Bienvenidos a Huellitas
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.82)",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            Encuentra todo para tu mascota en un solo lugar. En{" "}
            <strong
              style={{
                textDecoration: "underline",
                textDecorationColor: "#dccfb8",
                textUnderlineOffset: "4px",
              }}
            >
              Huellitas
            </strong>{" "}
            nos apasiona el bienestar animal.
          </p>
          <div
            style={{
              position: "relative",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              placeholder="¿Qué estás buscando hoy?"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: "100%",
                padding: "1.1rem 1.5rem 1.1rem 3.5rem",
                borderRadius: "16px",
                border: "none",
                fontSize: "1rem",
                fontFamily: "inherit",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                outline: "none",
                color: "#2d5140",
                background: "#fff",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "1.1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#547352",
              }}
            >
              <IcoSearch />
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 2rem",
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <FilterSidebar
          categorias={categorias}
          toggleCategoria={toggleCategoria}
          mascota={mascota}
          setMascota={setMascota}
          hayFiltrosActivos={hayFiltrosActivos}
          limpiar={limpiar}
        />

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#2d5140",
                }}
              >
                Nuestros productos
              </h2>
              {!cargando && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#8aaa96",
                    marginTop: "2px",
                  }}
                >
                  {productosOrdenados.length} productos disponibles
                </p>
              )}
            </div>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "0.9rem",
                color: "#6b8c7a",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <option value="relevancia">Ordenar por: Relevancia</option>
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          {cargando ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "8rem 0",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "4px solid rgba(84,115,82,0.2)",
                  borderTopColor: "#547352",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              <p style={{ color: "#547352", fontWeight: 600 }}>
                Cargando productos...
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : productosOrdenados.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {productosOrdenados.map((producto) => (
                <ProductCard key={producto.idProducto} producto={producto} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "6rem 0",
                color: "#8aaa96",
              }}
            >
              <span style={{ fontSize: "3rem" }}>🐾</span>
              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                No hay productos disponibles
              </p>
            </div>
          )}
           {/* Paginación */}
          {!cargando && (
            <Paginacion
              pagina={pagina}
              totalPaginas={totalPaginas}
              setPagina={setPagina}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Inicio;
