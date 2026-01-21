import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  
  // Estados para Login
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // Estados para Registro
  const [registerData, setRegisterData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    setTimeout(() => {
      if (loginData.email === 'admin@huellitas.com' && loginData.password === 'admin') {
        setStatus('success');
        setIsLoading(false);
        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      } else {
        setStatus('error');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    if (registerData.password !== registerData.confirmPassword) {
      setStatus('error');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setStatus('success');
      setIsLoading(false);
      setTimeout(() => {
        setIsRegisterMode(false);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className={`login-card ${isRegisterMode ? 'register-mode' : ''}`}>
        
        {/* PANEL DECORATIVO */}
        <div className="login-left">
          <div className="login-logo">🐾</div>
          <h2 className="login-left-title">
            {isRegisterMode ? '¡Únete a Huellitas!' : 'Bienvenido a Huellitas'}
          </h2>
          <p className="login-left-subtitle">
            {isRegisterMode 
              ? 'Crea tu cuenta y comienza a cuidar mejor de tus mascotas' 
              : 'Tu tienda de confianza para el cuidado y bienestar de tus mascotas'}
          </p>
        </div>

        {/* FORMULARIOS */}
        <div className="login-right">
          <div className="login-forms-container">
            
            {/* FORMULARIO DE LOGIN */}
            <div className="login-form-wrapper">
              <div className="login-header">
                <h1 className="login-title">Iniciar Sesión</h1>
                <p className="login-subtitle">
                  Ingresa a tu cuenta de Huellitas
                </p>
              </div>

              <form className="login-form" onSubmit={handleLoginSubmit}>
                {status && !isRegisterMode && (
                  <div className={`login-message ${status}`}>
                    {status === 'success' 
                      ? '¡Bienvenido! Redirigiendo...' 
                      : 'Email o contraseña incorrectos'}
                  </div>
                )}

                <div className="login-form-group">
                  <label htmlFor="login-email" className="login-label">
                    Email
                  </label>
                  <div className="login-input-wrapper">
                    <input
                      type="email"
                      id="login-email"
                      name="email"
                      className="login-input"
                      placeholder="tucorreo@ejemplo.com"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                    />
                    <span className="login-input-icon"></span>
                  </div>
                </div>

                <div className="login-form-group">
                  <label htmlFor="login-password" className="login-label">
                    Contraseña
                  </label>
                  <div className="login-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="login-password"
                      name="password"
                      className="login-input"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                    <span className="login-input-icon"></span>
                    <button
                      type="button"
                      className="login-toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="login-remember">
                  <input
                    type="checkbox"
                    id="remember"
                    className="login-checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label htmlFor="remember" className="login-remember-label">
                    Recordarme
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={`login-submit ${isLoading && !isRegisterMode ? 'loading' : ''}`}
                  disabled={isLoading && !isRegisterMode}
                >
                  {isLoading && !isRegisterMode ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
              </form>

              <div className="login-divider">
                <span>o</span>
              </div>

              <div className="login-links">
                <button className="login-link">¿Olvidaste tu contraseña?</button>
                <button 
                  className="login-link"
                  onClick={() => setIsRegisterMode(true)}
                >
                  Crear cuenta
                </button>
              </div>
            </div>

            {/* FORMULARIO DE REGISTRO */}
            <div className="register-form-wrapper">
              <div className="login-header">
                <h1 className="login-title">Crear Cuenta</h1>
                <p className="login-subtitle">
                  Regístrate en Huellitas
                </p>
              </div>

              <form className="login-form" onSubmit={handleRegisterSubmit}>
                {status && isRegisterMode && (
                  <div className={`login-message ${status}`}>
                    {status === 'success' 
                      ? '¡Cuenta creada! Redirigiendo al login...' 
                      : 'Las contraseñas no coinciden'}
                  </div>
                )}

                <div className="login-form-row">
                  <div className="login-form-group">
                    <label htmlFor="nombre" className="login-label">
                      Nombre
                    </label>
                    <div className="login-input-wrapper">
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="login-input"
                        placeholder="Tu nombre"
                        value={registerData.nombre}
                        onChange={handleRegisterChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="login-form-group">
                    <label htmlFor="apellido" className="login-label">
                      
                      Apellido
                    </label>
                    <div className="login-input-wrapper">
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        className="login-input"
                        placeholder="Tu apellido"
                        value={registerData.apellido}
                        onChange={handleRegisterChange}
                        required
                      />
                      
                    </div>
                  </div>
                </div>

                <div className="login-form-group">
                  <label htmlFor="register-email" className="login-label">
                    
                    Email
                  </label>
                  <div className="login-input-wrapper">
                    <input
                      type="email"
                      id="register-email"
                      name="email"
                      className="login-input"
                      placeholder="tucorreo@ejemplo.com"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      required
                    />
                  
                  </div>
                </div>

                <div className="login-form-group">
                  <label htmlFor="register-password" className="login-label">
                    <span className="login-label-icon"></span>
                    Contraseña
                  </label>
                  <div className="login-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="register-password"
                      name="password"
                      className="login-input"
                      placeholder="••••••••"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      required
                    />
                    <span className="login-input-icon"></span>
                    <button
                      type="button"
                      className="login-toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="login-form-group">
                  <label htmlFor="confirm-password" className="login-label">
                    <span className="login-label-icon"></span>
                    Confirmar Contraseña
                  </label>
                  <div className="login-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirm-password"
                      name="confirmPassword"
                      className="login-input"
                      placeholder="••••••••"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                    />
                    <span className="login-input-icon"></span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`login-submit ${isLoading && isRegisterMode ? 'loading' : ''}`}
                  disabled={isLoading && isRegisterMode}
                >
                  {isLoading && isRegisterMode ? 'Creando cuenta...' : 'Crear Cuenta'}
                </button>
              </form>

              <div className="login-divider">
                <span>o</span>
              </div>

              <div className="login-links">
                <button 
                  className="login-link"
                  onClick={() => setIsRegisterMode(false)}
                >
                  ← Volver a Iniciar Sesión
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};