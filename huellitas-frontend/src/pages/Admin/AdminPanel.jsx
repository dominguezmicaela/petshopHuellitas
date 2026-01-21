import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel() {
  const [activeSection, setActiveSection] = useState('estrategico');
  const [collapsed, setCollapsed] = useState(false); // Ya lo tienes

  return (
    <div className={`admin-grid-container ${collapsed ? 'collapsed' : ''}`}>
      
      {/* BARRA SUPERIOR */}
      <div className="admin-top-bar">
        <div className="topbar-left">
          <div className="topbar-brand">
            <img src="/img/LOGO.jpg" alt="Logo" className="topbar-logo" />
            <div>
              <h1 className="topbar-title">Huellitas Admin</h1>
              <p className="topbar-subtitle">Panel de Administración</p>
            </div>
          </div>
        </div>
        
        <div className="topbar-right">
          <div className="topbar-user">
            <div className="user-avatar">M</div>
            <span className="user-name">Micaela</span>
          </div>
          
          <Link to="/" className="topbar-btn">
            🏠 Volver al Home
          </Link>
          
          <button className="topbar-btn logout">
            🚪 Cerrar Sesión
          </button>
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="sidebar-section">
        {/* BOTÓN TOGGLE - ESTO ES LO NUEVO */}
        <button 
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expandir menú' : 'Contraer menú'}
        >
          {collapsed ? '➡️' : '⬅️'}
        </button>

        <div className="sidebar-header">
          <p className="sidebar-title"></p>
        </div>
        
        <nav className="nav-menu">
          <button 
            className={`nav-link ${activeSection === 'estrategico' ? 'active' : ''}`}
            onClick={() => setActiveSection('estrategico')}
          >
            <span className="nav-icon">📊</span>
            <span className="nav-text">Análisis Estratégico</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'usuarios' ? 'active' : ''}`}
            onClick={() => setActiveSection('usuarios')}
          >
            <span className="nav-icon">👥</span>
            <span className="nav-text">Gestión de Usuarios</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'stock' ? 'active' : ''}`}
            onClick={() => setActiveSection('stock')}
          >
            <span className="nav-icon">📦</span>
            <span className="nav-text">Control de Stock</span>
          </button>
        </nav>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="dashboard-main-area">
        <div className="dashboard-card">
          <div className="looker-frame">
            <h2>Reporte de Decisiones</h2>
            <p>Visualización de datos de 580 usuarios</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default AdminPanel;