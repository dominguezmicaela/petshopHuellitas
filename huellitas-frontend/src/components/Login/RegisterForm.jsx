import { useRegisterForm } from "../../hooks/useRegisterForm";
import { AuthInput, SubmitBtn, StatusMsg, Divider } from "./AuthUI";

const RegisterForm = ({ onGoLogin }) => {
  const {
    registerData,
    showPassword,
    setShowPassword,
    status,
    isLoading,
    handleChange,
    handleSubmit,
  } = useRegisterForm(onGoLogin);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
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
          Crear Cuenta
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#6b8c7a", fontWeight: 500 }}>
          Registrate en Huellitas
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}
      >
        <StatusMsg status={status} mode="register" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          <AuthInput
            label="Nombre"
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={registerData.nombre}
            onChange={handleChange}
            required
          />
          <AuthInput
            label="Apellido"
            type="text"
            name="apellido"
            placeholder="Tu apellido"
            value={registerData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <AuthInput
          label="Email"
          type="email"
          name="email"
          placeholder="tucorreo@ejemplo.com"
          value={registerData.email}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••••"
          value={registerData.password}
          onChange={handleChange}
          required
          showToggle
          showPassword={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
        />

        <AuthInput
          label="Confirmar Contraseña"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="••••••••"
          value={registerData.confirmPassword}
          onChange={handleChange}
          required
        />

        <SubmitBtn
          label="Crear Cuenta"
          loadingLabel="Creando cuenta..."
          loading={isLoading}
        />
      </form>

      <Divider />

      <div
        style={{
          paddingTop: "0.5rem",
          borderTop: "1.5px solid rgba(61,107,79,0.1)",
        }}
      >
        <button
          onClick={onGoLogin}
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
          ← Volver a Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
