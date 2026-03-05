import { useState, useMemo } from "react";
import { FAQ_DATA } from "../data/FaqData";

const useFaq = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCat] = useState("pedidos");
  const [itemAbierto, setItemAbierto] = useState(null);

  const gruposFiltrados = useMemo(() => {
    const query = busqueda.toLowerCase().trim();

    return FAQ_DATA.map((grupo) => ({
      ...grupo,
      items: grupo.items.filter(({ pregunta, respuesta }) => {
        const coincideTexto =
          !query ||
          pregunta.toLowerCase().includes(query) ||
          respuesta.toLowerCase().includes(query);

        const coincideCategoria =
          categoriaActiva === "all" || grupo.categoria === categoriaActiva;

        return coincideTexto && coincideCategoria;
      }),
    })).filter((grupo) => grupo.items.length > 0);
  }, [busqueda, categoriaActiva]);

  const toggleItem = (id) =>
    setItemAbierto((prev) => (prev === id ? null : id));

  return {
    busqueda,
    setBusqueda,
    categoriaActiva,
    setCategoriaActiva: setCat,
    itemAbierto,
    toggleItem,
    gruposFiltrados,
    hayResultados: gruposFiltrados.length > 0,
  };
};

export default useFaq;
