import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCarrito from "../../hooks/useCarrito";

const ProductCard = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();
  const [expanded, setExpanded] = useState(false);
  const [added, setAdded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setExpanded(false);
    };
    if (expanded) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [expanded]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const handleAdd = (e) => {
    e.stopPropagation();
    agregarAlCarrito({
      id: producto.idProducto,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
      talle: producto.talle ?? null,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      {/* ── Modal expandido ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
              background: "rgba(20,35,28,0.65)",
              backdropFilter: "blur(6px)",
            }}
            onClick={() => setExpanded(false)}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.88, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 28 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl overflow-hidden w-full max-w-md"
              style={{
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              {/* Cerrar */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.35)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.35)")
                }
              >
                ✕
              </button>

              {/* Badge */}
              <span
                className="absolute top-4 left-4 z-20 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
                style={{
                  background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
                }}
              >
                Nuevo
              </span>

              {/* Imagen */}
              <div
                className="h-72 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #faf5ee 0%, #f2e9dc 100%)",
                }}
              >
                {producto.img ? (
                  <img
                    src={producto.img}
                    alt={producto.nombre}
                    className="w-full h-full object-contain p-6"
                  />
                ) : (
                  <span style={{ fontSize: "4rem" }}>🐾</span>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="font-bold text-lg leading-snug flex-1"
                    style={{ color: "#2d5140" }}
                  >
                    {producto.nombre}
                  </h3>
                  <span
                    className="font-extrabold text-xl whitespace-nowrap"
                    style={{ color: "#2d7a3c" }}
                  >
                    ${producto.precio?.toLocaleString("es-AR")}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#6b8c7a" }}
                >
                  {producto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {producto.categoria && (
                    <span
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{ background: "#f2e9dc", color: "#3d6b4f" }}
                    >
                      🏷 {producto.categoria}
                    </span>
                  )}
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "#ecfdf5", color: "#166534" }}
                  >
                    ✓ En stock
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "#f2e9dc", color: "#3d6b4f" }}
                  >
                    🚚 Envío disponible
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleAdd}
                  className="w-full py-3 rounded-2xl text-sm font-bold text-white transition-all duration-200"
                  style={{
                    background: added
                      ? "linear-gradient(135deg, #d1fae5, #a7f3d0)"
                      : "linear-gradient(135deg, #3d6b4f, #2d5140)",
                    color: added ? "#166534" : "#fff",
                    boxShadow: added
                      ? "none"
                      : "0 4px 16px rgba(61,107,79,0.3)",
                  }}
                >
                  {added ? "✓ Agregado al carrito" : "+ Agregar al carrito"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Card normal ── */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={() => setExpanded(true)}
        className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
        style={{
          border: "1.5px solid rgba(235, 218, 199, 0.9)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.07)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)")
        }
      >
        {/* Img */}
        <div
          className="w-full overflow-hidden"
          style={{
            height: "200px",
            flexShrink: 0,
            background: "linear-gradient(135deg, #faf5ee 0%, #f2e9dc 100%)",
          }}
        >
          {producto.img ? (
            <img
              src={producto.img}
              alt={producto.nombre}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ fontSize: "3.5rem" }}>🐾</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className="font-bold text-sm leading-snug line-clamp-1 flex-1"
              style={{ color: "#2d5140" }}
            >
              {producto.nombre}
            </h3>
            <span
              className="font-extrabold text-sm whitespace-nowrap"
              style={{ color: "#2d7a3c" }}
            >
              ${producto.precio?.toLocaleString("es-AR")}
            </span>
          </div>

          <p
            className="text-xs leading-relaxed line-clamp-2 mb-3"
            style={{ color: "#8aaa96" }}
          >
            {producto.descripcion}
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
            style={{
              background: added
                ? "#ecfdf5"
                : "linear-gradient(135deg, #3d6b4f, #2d5140)",
              color: added ? "#166534" : "#fff",
              boxShadow: added ? "none" : "0 3px 10px rgba(61,107,79,0.25)",
            }}
          >
            {added ? "✓ Agregado" : "+ Agregar al carrito"}
          </motion.button>

          <p
            className="text-center text-xs mt-2.5 font-medium select-none"
            style={{ color: "rgba(61,107,79,0.45)" }}
          >
            Tocá para ver más →
          </p>
        </div>

        {/* Línea inferior animada */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: "linear-gradient(90deg, #3d6b4f, #5a8a69)" }}
        />
      </motion.div>
    </>
  );
};

export default ProductCard;
