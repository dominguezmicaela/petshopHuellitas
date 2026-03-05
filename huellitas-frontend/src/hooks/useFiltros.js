import { useState, useMemo } from "react";

export const useFiltros = (productos = []) => {
  const [busqueda, setBusqueda]     = useState("");
  const [categorias, setCategorias] = useState([]);
  const [mascota, setMascota]       = useState("todos");
  const [orden, setOrden]           = useState("relevancia");

  // Este es el salvavidas que evita que la página quede en blanco
  const listaSegura = Array.isArray(productos) ? productos : [];

  const toggleCategoria = (cat) =>
    setCategorias(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );

  const limpiar = () => {
    setCategorias([]);
    setMascota("todos");
    setBusqueda("");
    setOrden("relevancia");
  };

  const hayFiltrosActivos = categorias.length > 0 || mascota !== "todos" || busqueda !== "";

  const productosOrdenados = useMemo(() => {
    const filtrados = listaSegura.filter(p => {
      const matchBusqueda = p.nombre?.toLowerCase().includes(busqueda.toLowerCase());
      const matchCat      = categorias.length === 0 || categorias.includes(p.categoria);
      const matchMascota  = mascota === "todos" || p.mascota === mascota;
      return matchBusqueda && matchCat && matchMascota;
    });

    return [...filtrados].sort((a, b) => {
      if (orden === "precio_asc")  return a.precio - b.precio;
      if (orden === "precio_desc") return b.precio - a.precio;
      return 0;
    });
  }, [listaSegura, busqueda, categorias, mascota, orden]);

  return {
    busqueda, categorias, mascota, orden,
    setBusqueda, setMascota, setOrden,
    toggleCategoria, limpiar, hayFiltrosActivos,
    productosOrdenados,
  };
};