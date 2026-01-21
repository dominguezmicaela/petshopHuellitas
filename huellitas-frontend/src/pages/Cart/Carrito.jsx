import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carrito.css';

export const Carrito = () => {
  const [cartItems, setCartItems] = useState([
    // Para empezar vacío, usa: []
    // Ejemplo con productos:
    {
      id: 1,
      nombre: 'Collar para Perro Premium',
      precio: 2500,
      cantidad: 1,
      talle: 'M'
    },
    {
      id: 2,
      nombre: 'Juguete Interactivo',
      precio: 1800,
      cantidad: 2
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, cantidad: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const envio = subtotal > 5000 ? 0 : 800;
  const total = subtotal + envio;

  // ESTADO VACÍO
  if (cartItems.length === 0) {
    return (
      <div className="carrito-empty-container">
        <div className="carrito-empty-card">
          <div className="carrito-empty-icon">🛒</div>
          <h2 className="carrito-empty-title">Tu carrito está vacío</h2>
          <p className="carrito-empty-text">
            ¡Descubre nuestros productos y encuentra lo mejor para tu mascota!
          </p>
          <Link to="/" className="carrito-empty-button">
            🐾 Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  // CARRITO CON PRODUCTOS
  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <h1 className="carrito-title">Mi Carrito</h1>
        <p className="carrito-subtitle">
          {cartItems.length} producto{cartItems.length !== 1 ? 's' : ''} en tu carrito
        </p>
      </div>

      <div className="carrito-content">
        {/* PRODUCTOS */}
        <div className="carrito-products">
          {cartItems.map(item => (
            <div key={item.id} className="carrito-product-card">
              <div className="carrito-product-image">🐕</div>
              
              <div className="carrito-product-info">
                <h3 className="carrito-product-name">{item.nombre}</h3>
                {item.talle && (
                  <p className="carrito-product-detail">
                    Talle: <strong>{item.talle}</strong>
                  </p>
                )}
                <p className="carrito-product-price">${item.precio.toLocaleString()}</p>
              </div>

              <div className="carrito-product-actions">
                <div className="carrito-quantity-control">
                  <button 
                    className="carrito-quantity-btn"
                    onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                  >
                    −
                  </button>
                  <span className="carrito-quantity">{item.cantidad}</span>
                  <button 
                    className="carrito-quantity-btn"
                    onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="carrito-remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  🗑️ Eliminar
                </button>
              </div>

              <div className="carrito-product-total">
                ${(item.precio * item.cantidad).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <div className="carrito-summary-section">
          <div className="carrito-summary-card">
            <h3 className="carrito-summary-title">Resumen de Compra</h3>
            
            <div className="carrito-summary-row">
              <span className="carrito-summary-label">Subtotal</span>
              <span className="carrito-summary-value">${subtotal.toLocaleString()}</span>
            </div>

            <div className="carrito-summary-row">
              <span className="carrito-summary-label">Envío</span>
              <span className="carrito-summary-value" style={{color: envio === 0 ? '#4caf50' : '#6b7d68'}}>
                {envio === 0 ? '¡Gratis!' : `$${envio.toLocaleString()}`}
              </span>
            </div>

            {subtotal < 5000 && (
              <div className="carrito-free-shipping">
                💚 Te faltan ${(5000 - subtotal).toLocaleString()} para envío gratis
              </div>
            )}

            <div className="carrito-divider"></div>

            <div className="carrito-summary-row" style={{marginBottom: '2rem'}}>
              <span className="carrito-total-label">Total</span>
              <span className="carrito-total-value">${total.toLocaleString()}</span>
            </div>

            <button className="carrito-checkout-btn">
              Finalizar Compra
            </button>

            <Link to="/" className="carrito-continue-btn">
              ← Seguir Comprando
            </Link>

            <div className="carrito-secure">
              🔒 Pago seguro y protegido
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};