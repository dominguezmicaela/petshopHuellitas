import { useState, useMemo } from "react";

export const useFiltros = (productos = []) => {
  const [busqueda, setBusqueda]     = useState("");
  const [categorias, setCategorias] = useState([]);
  const [mascota, setMascota]       = useState("todos");
  const [orden, setOrden]           = useState("relevancia");

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
    const filtrados = productos.filter(p => {
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
  }, [productos, busqueda, categorias, mascota, orden]);

  return {
    // valores
    busqueda, categorias, mascota, orden,
    // setters
    setBusqueda, setMascota, setOrden,
    // helpers
    toggleCategoria, limpiar, hayFiltrosActivos,
    // resultado
    productosOrdenados,
  };
};