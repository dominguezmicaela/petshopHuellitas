import React from 'react';

export const Inicio = () => {
  return (
    <main>
      <h1 className="titulo-home">Bienvenidos a Huellitas</h1>
      <p className="parrafo">
        Encuentra todo para tu mascota en un solo lugar. En
        <strong> Huellitas </strong> nos apasiona el bienestar animal. Ya sea
        que estés buscando alimento de calidad, juguetes divertidos o
        accesorios.
      </p>

      <section>
        <h2 className="titulo-productos">Nuestros productos</h2>
        <div id="contenedor-tarjetas" className="contenedor-tarjetas">
          <div className="loader"></div>
          <p className="texto-cargando" style={{ textAlign: "center", color: "#8d7958", marginTop: "10px" }}>
            (productos)
          </p>
        </div>
      </section>
    </main>
  );
};