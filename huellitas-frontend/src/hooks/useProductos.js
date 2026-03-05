import { useState, useEffect } from "react";

const API_URL = "http://localhost:5055/api/Productos";
const LIMIT = 12;

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      setCargando(true);
      try {
        const response = await fetch(`${API_URL}?page=${pagina}&limit=${LIMIT}`);
        const data = await response.json();

        const items = data.productos || data.item1 || [];
        const count = data.total || data.item2 || 0;

        setProductos(items);
        setTotal(count);
        setTotalPaginas(Math.ceil(count / LIMIT));
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, [pagina]);

  return { productos, cargando, pagina, setPagina, totalPaginas, total };
};