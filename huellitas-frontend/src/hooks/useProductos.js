import { useState, useEffect } from "react";

const API_URL = "https://petshophuellitas.onrender.com/api/Productos";
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
        console.log("DATOS RECIBIDOS:", data); // <--- Agregá esto

        const items = data.productos || data.Productos || [];
        const paginasDelServer = data.totalPaginas || data.TotalPaginas || 1;
        const totalItems = data.total || data.Total || 0;

        setProductos(items);
        setTotal(totalItems);
        setTotalPaginas(paginasDelServer);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, [pagina]);

  return { productos, cargando, pagina, setPagina, totalPaginas, total };
};