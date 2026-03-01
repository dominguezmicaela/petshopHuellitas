import { Routes, Route, useLocation } from "react-router-dom";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  Inicio from "./pages/Home/Inicio";
import  Contacto  from "./pages/Contact/Contacto";
import  Login  from "./pages/Login/Login";
import AdminPanel from "./pages/Admin/AdminPanel";
import Carrito from "./pages/Cart/Carrito";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f5ede0" }}>
      {!isAdmin && <Header />}

      <main style={{ flex: 1, width: "100%" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>

      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;