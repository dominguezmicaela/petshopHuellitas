const Label = ({ children }) => (
  <label style={{
    fontSize: "0.78rem", fontWeight: 700,
    textTransform: "uppercase", letterSpacing: "0.08em",
    color: "#6b8c7a",
  }}>
    {children}
  </label>
);

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "12px",
  background: "#fff",
  border: "2px solid #e8d9c8",
  color: "#2d5140",
  fontSize: "0.9rem",
  fontWeight: 500,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const Input = ({ type = "text", name, placeholder, value, onChange, required }) => (
  <input
    type={type} name={name} placeholder={placeholder}
    value={value} onChange={onChange} required={required}
    style={inputStyle}
    onFocus={e => { e.target.style.borderColor = "#3d6b4f"; e.target.style.boxShadow = "0 0 0 4px rgba(61,107,79,0.08)"; }}
    onBlur={e =>  { e.target.style.borderColor = "#e8d9c8"; e.target.style.boxShadow = "none"; }}
  />
);

const StatusMsg = ({ status }) => {
  if (!status) return null;
  const ok = status === "success";
  return (
    <div style={{
      padding: "0.75rem 1rem", borderRadius: "12px",
      fontSize: "0.85rem", fontWeight: 600, textAlign: "center",
      border: `2px solid ${ok ? "#bbf7d0" : "#fecaca"}`,
      background: ok ? "#f0fdf4" : "#fef2f2",
      color: ok ? "#166534" : "#991b1b",
    }}>
      {ok ? "✓ ¡Mensaje enviado! Te responderemos pronto." : "✕ Hubo un error. Intentá nuevamente."}
    </div>
  );
};

const ContactoForm = ({ formData, status, isLoading, handleChange, handleSubmit }) => (
  <div style={{
    position: "relative",
    padding: "3rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#f5ede0",
    overflow: "hidden",
  }}>

    {/* Grid background — esquina superior derecha */}
    <div style={{
      position: "absolute",
      top: 0, right: 0,
      width: "220px", height: "220px",
      pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(61,107,79,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(61,107,79,0.07) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
      maskImage: "radial-gradient(ellipse at top right, black 0%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at top right, black 0%, transparent 70%)",
    }}/>

    {/* Grid background — esquina inferior izquierda */}
    <div style={{
      position: "absolute",
      bottom: 0, left: 0,
      width: "160px", height: "160px",
      pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(61,107,79,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(61,107,79,0.06) 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
      maskImage: "radial-gradient(ellipse at bottom left, black 0%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 0%, transparent 70%)",
    }}/>

    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#2d5140", letterSpacing: "-0.5px", marginBottom: "6px" }}>
          Contactanos
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#6b8c7a", fontWeight: 500 }}>
          Si tenés dudas sobre algún producto… ¡Escribinos!
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <StatusMsg status={status}/>

        {/* Nombre + Apellido */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Label>Nombre</Label>
            <Input name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required/>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Label>Apellido</Label>
            <Input name="apellido" placeholder="Tu apellido" value={formData.apellido} onChange={handleChange} required/>
          </div>
        </div>

        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="tucorreo@ejemplo.com" value={formData.email} onChange={handleChange} required/>
        </div>

        {/* Mensaje */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Label>Mensaje</Label>
          <textarea
            name="mensaje" placeholder="Escribí aquí tu consulta..."
            value={formData.mensaje} onChange={handleChange} required rows={4}
            style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
            onFocus={e => { e.target.style.borderColor = "#3d6b4f"; e.target.style.boxShadow = "0 0 0 4px rgba(61,107,79,0.08)"; }}
            onBlur={e =>  { e.target.style.borderColor = "#e8d9c8"; e.target.style.boxShadow = "none"; }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%", padding: "1rem",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #3d6b4f, #2d5140)",
            color: "#fff", fontWeight: 700, fontSize: "0.95rem",
            border: "none", cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.75 : 1,
            boxShadow: "0 6px 24px rgba(61,107,79,0.3)",
            fontFamily: "inherit",
            transition: "box-shadow 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={e => !isLoading && (e.currentTarget.style.boxShadow = "0 10px 32px rgba(61,107,79,0.42)")}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(61,107,79,0.3)")}
        >
          {isLoading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <span style={{
                width: "16px", height: "16px",
                border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff",
                borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block",
              }}/>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              Enviando...
            </span>
          ) : "Enviar Mensaje →"}
        </button>
      </form>
    </div>
  </div>
);

export default ContactoForm;