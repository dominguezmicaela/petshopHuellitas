// pages/Login/Login.jsx
import { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm";
import DecorativePanel from "../../components/Login/DecorativePanel";

export const Login = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  return (
    <div style={{
      width: "100%",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem 1.5rem",
      background: "linear-gradient(135deg, #f5ede0 0%, #faf5ee 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "900px",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
        border: "1.5px solid rgba(255,255,255,0.6)",
        /* ✅ Fix: altura fija para que ambos paneles sean siempre del mismo tamaño */
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "620px",  /* altura fija — ambos paneles siempre iguales */
      }}>

        {/* Panel decorativo — siempre a la izquierda en login, derecha en register */}
        <div style={{ order: isRegisterMode ? 2 : 1 }}>
          <DecorativePanel isRegisterMode={isRegisterMode} />
        </div>

        {/* Panel formulario — siempre al lado opuesto */}
        <div style={{
          order: isRegisterMode ? 1 : 2,
          padding: "3rem 2.5rem",
          background: "linear-gradient(135deg, rgba(242,233,220,0.98), rgba(250,245,238,0.95))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowY: "auto",     /* scroll interno si el contenido es muy largo */
          maxHeight: "620px",
        }}>
          {isRegisterMode
            ? <RegisterForm onGoLogin={() => setIsRegisterMode(false)} />
            : <LoginForm    onGoRegister={() => setIsRegisterMode(true)} />
          }
        </div>

      </div>
    </div>
  );
};

export default Login;