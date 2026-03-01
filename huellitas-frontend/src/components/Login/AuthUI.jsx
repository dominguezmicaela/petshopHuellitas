// Componentes UI reutilizables para los formularios de autenticación

const inputStyle = {
  width: "100%",
  padding: "0.9rem 1.2rem",
  borderRadius: "14px",
  background: "#fff",
  color: "#2d5140",
  fontSize: "0.95rem",
  fontWeight: 500,
  border: "2px solid #e8d9c8",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export const AuthInput = ({
  label, type, name, placeholder, value, onChange, required,
  showToggle, showPassword, onToggle,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
    <label style={{ fontSize: "0.82rem", fontWeight: 700, color: "#2d5140" }}>{label}</label>
    <div style={{ position: "relative" }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{ ...inputStyle, paddingRight: showToggle ? "3.2rem" : "1.2rem" }}
        onFocus={e => {
          e.target.style.borderColor = "#3d6b4f";
          e.target.style.boxShadow = "0 0 0 4px rgba(61,107,79,0.10)";
        }}
        onBlur={e => {
          e.target.style.borderColor = "#e8d9c8";
          e.target.style.boxShadow = "none";
        }}
      />
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          style={{
            position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer", fontSize: "1.1rem",
            color: "#6b8c7a", lineHeight: 1,
          }}
        >
          {showPassword ? "👁️" : "👁️‍🗨️"}
        </button>
      )}
    </div>
  </div>
);

export const SubmitBtn = ({ label, loadingLabel, loading }) => (
  <button
    type="submit"
    disabled={loading}
    style={{
      width: "100%",
      padding: "0.95rem",
      borderRadius: "14px",
      background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
      color: "#fff",
      fontWeight: 700,
      fontSize: "0.95rem",
      border: "none",
      cursor: loading ? "not-allowed" : "pointer",
      opacity: loading ? 0.75 : 1,
      boxShadow: "0 6px 24px rgba(61,107,79,0.3)",
      fontFamily: "inherit",
      transition: "opacity 0.2s, box-shadow 0.2s",
      marginTop: "4px",
    }}
    onMouseEnter={e => !loading && (e.currentTarget.style.boxShadow = "0 10px 32px rgba(61,107,79,0.45)")}
    onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(61,107,79,0.3)")}
  >
    {loading ? (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <span style={{
          width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)",
          borderTopColor: "#fff", borderRadius: "50%",
          animation: "spin 0.8s linear infinite", display: "inline-block",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        {loadingLabel}
      </span>
    ) : label}
  </button>
);

export const StatusMsg = ({ status, mode }) => {
  if (!status) return null;
  const isSuccess = status === "success";
  const msg = mode === "login"
    ? isSuccess ? "✓ ¡Bienvenido! Redirigiendo..." : "✕ Email o contraseña incorrectos"
    : isSuccess ? "✓ ¡Cuenta creada! Volviendo al login..." : "✕ Las contraseñas no coinciden";

  return (
    <div style={{
      padding: "0.75rem 1rem",
      borderRadius: "12px",
      fontSize: "0.85rem",
      fontWeight: 600,
      textAlign: "center",
      border: `2px solid ${isSuccess ? "#bbf7d0" : "#fecaca"}`,
      background: isSuccess ? "#f0fdf4" : "#fef2f2",
      color: isSuccess ? "#166534" : "#991b1b",
    }}>
      {msg}
    </div>
  );
};

export const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "4px 0" }}>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(61,107,79,0.2), transparent)" }} />
    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#6b8c7a" }}>o</span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(61,107,79,0.2), transparent)" }} />
  </div>
);