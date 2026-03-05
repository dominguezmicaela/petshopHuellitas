// pages/Login/Login.jsx
import { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm";
import { Logo } from "../../components/icono";
import { C } from "../../style/colores";

export const Login = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  return (
    <div style={{
      width: "100%",
      minHeight: "calc(100vh - 72px)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>

      {/* ── PANEL VERDE ── */}
      <div style={{
        order: isRegisterMode ? 2 : 1,
        position: "relative",
        background: C.gradiente,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 3rem",
        overflow: "hidden",
        transition: "order 0.4s ease",
      }}>

        {/* Dot pattern */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}/>

        {/* Glow top right */}
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "320px", height: "320px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}/>

        {/* Glow bottom left */}
        <div style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "260px", height: "260px", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}/>

        {/* Watermark */}
        <div style={{
          position: "absolute", bottom: "-40px", right: "-40px",
          opacity: 0.06, pointerEvents: "none", transform: "rotate(-15deg)",
        }}>
          <Logo size={280}/>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "2rem" }}>
            <Logo size={90}/>
          </div>

          <h2 style={{
            fontSize: "2.8rem", fontWeight: 800, color: C.sobreVerde,
            letterSpacing: "-1.5px", marginBottom: "1.2rem", lineHeight: 1.15,
          }}>
            {isRegisterMode ? "¡Únete a\nHuellitas!" : "Bienvenido\nde vuelta"}
          </h2>

          <p style={{
            fontSize: "1rem", color: C.sobreVerdeSubtle,
            lineHeight: 1.75, maxWidth: "300px", margin: "0 auto 2.5rem",
          }}>
            {isRegisterMode
              ? "Creá tu cuenta y empezá a cuidar mejor a tus mascotas"
              : "Tu tienda de confianza para el cuidado y bienestar de tus mascotas"}
          </p>

          <button style={{
            padding: "0.8rem 2.5rem",
            borderRadius: "50px",
            border: "2px solid rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.1)",
            color: C.sobreVerde,
            fontWeight: 700,
            fontSize: "0.9rem",
            cursor: "default",
            backdropFilter: "blur(8px)",
            letterSpacing: "0.3px",
          }}>
            {isRegisterMode ? "Registrándote..." : "Iniciando sesión..."}
          </button>
        </div>
      </div>

      {/* ── PANEL FORMULARIO ── */}
      <div style={{
        order: isRegisterMode ? 1 : 2,
        background: `linear-gradient(135deg, ${C.beige} 0%, #faf5ee 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 5rem",
        overflowY: "auto",
      }}>
        {isRegisterMode
          ? <RegisterForm onGoLogin={() => setIsRegisterMode(false)} />
          : <LoginForm onGoRegister={() => setIsRegisterMode(true)} />
        }
      </div>

    </div>
  );
};

export default Login;