import React from 'react';
import '../App.css'; // Aseguramos que cargue los estilos

export const Contacto = () => {
  return (
    <main className="contacto-main">
      <div className="contacto-card">
        
        <h1 className="titulo-contacto">Contáctanos</h1>
        <p className="subtitulo-contacto">¿Tienes dudas sobre algún producto? ¡Escríbenos!</p>

        {/* Formulario funcionando con Formspree */}
        <form action="https://formspree.io/f/xwprwegz" method="POST" className="form-area">
            
            <div className="grupo-input">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" type="text" name="name" placeholder="Tu nombre" required />
            </div>

            <div className="grupo-input">
              <label htmlFor="apellido">Apellido</label>
              <input id="apellido" type="text" name="name" placeholder="Tu apellido" required />
            </div>

            <div className="grupo-input">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>

            <div className="grupo-input">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="message" rows="5" placeholder="Escribe aquí tu consulta..." required></textarea>
            </div>

            <button className="btn-enviar" type="submit">Enviar</button>

        </form>
      </div>
    </main>
  );
};