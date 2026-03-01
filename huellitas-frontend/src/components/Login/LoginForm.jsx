import { useLoginForm } from "../../hooks/useLoginForm";
import { AuthInput, SubmitBtn, StatusMsg, Divider } from "./AuthUI";

const LoginForm = ({ onGoRegister }) => {
  const {
    loginData,
    showPassword,
    setShowPassword,
    remember,
    setRemember,
    status,
    isLoading,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#2d5140",
            letterSpacing: "-1px",
            marginBottom: "4px",
          }}
        >
          Iniciar Sesión
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#6b8c7a", fontWeight: 500 }}>
          Ingresá a tu cuenta de Huellitas
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <StatusMsg status={status} mode="login" />

        <AuthInput
          label="Email"
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••"
          value={loginData.password}
          onChange={handleChange}
          required
          showToggle
          showPassword={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
        />

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            style={{
              width: "16px",
              height: "16px",
              accentColor: "#3d6b4f",
              cursor: "pointer",
            }}
          />
          <span
            style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6b8c7a" }}
          >
            Recordarme
          </span>
        </label>

        <SubmitBtn
          label="Iniciar Sesión"
          loadingLabel="Iniciando sesión..."
          loading={isLoading}
        />
      </form>

      <Divider />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.5rem",
          borderTop: "1.5px solid rgba(61,107,79,0.1)",
        }}
      >
        <button
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#3d6b4f",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "10px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(61,107,79,0.08)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          ¿Olvidaste tu contraseña?
        </button>
        <button
          onClick={onGoRegister}
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#3d6b4f",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "10px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(61,107,79,0.08)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
