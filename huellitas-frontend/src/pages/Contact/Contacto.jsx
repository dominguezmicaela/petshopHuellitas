import { useState } from 'react';
import './Contacto.css'; // Aquí van los estilos que te acabo de dar

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  });
  const [status, setStatus] = useState(''); // 'success', 'error', ''
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Simulación de envío (reemplaza con tu lógica real)
    setTimeout(() => {
      setStatus('success');
      setIsLoading(false);
      setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
    }, 1500);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <h1>Contáctanos</h1>
        <p>¿Tienes dudas sobre algún producto? ¡Escríbenos!</p>
      </div>

      <div className="contacto-card">
        <form className="contacto-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-input"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              className="form-input"
              placeholder="Tu apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="tucorreo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-textarea"
              placeholder="Escribe aquí tu consulta..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          {status && (
            <div className={`form-message ${status}`}>
              {status === 'success' 
                ? '¡Mensaje enviado con éxito! Te responderemos pronto.' 
                : 'Hubo un error. Por favor intenta nuevamente.'}
            </div>
          )}

          <button 
            type="submit" 
            className={`form-submit ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
};