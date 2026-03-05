import { useContacto }  from "../../hooks/useContacto";
import ContactoInfo     from "../../components/Contacto/ContactoInfo";
import ContactoForm     from "../../components/Contacto/ContactoForm";
import { C }            from "../../styles/colores";

export const Contacto = () => {
  const contacto = useContacto();

  return (
    <div style={{
      width: "100%",
      minHeight: "calc(100vh - 64px)",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      background: `linear-gradient(135deg, ${C.beige} 0%, #faf5ee 100%)`,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "38% 62%",
      }}>
        <ContactoInfo/>
        <ContactoForm {...contacto}/>
      </div>
    </div>
  );
};

export default Contacto;