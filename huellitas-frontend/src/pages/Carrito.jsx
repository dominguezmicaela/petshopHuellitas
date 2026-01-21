import React from "react";
import '../App.css'; 
export const Carrito = () => {
  return (
    <main>
      <h1 className="titulo-carrito-estilo">Carrito de compras</h1>
      
      <div className="contenedor-flex">
        
        <div className="columna-izquierda">
          <section id="contenedor-carrito">
           
            <p>Tu carrito está vacío.</p>
          </section>
          
          <div className="acciones-carrito" id="acciones-carrito">
           
          </div>
        </div>

        
        <section id="resumen-carrito" className="columna-derecha">
         
          <h3>Resumen</h3>
          <p>Total: $0</p>
        </section>
      </div>
    </main>
  );
};