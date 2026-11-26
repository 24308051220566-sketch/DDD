import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Dashboard from "./pages/Dashboard";
import InicioFeed from "./pages/dashboard/InicioFeed";
import Explorar from "./pages/dashboard/Explorar";
import Mensajes from "./pages/dashboard/Mensajes";
import Estadisticas from "./pages/dashboard/Estadisticas";
import Publicar from "./pages/dashboard/Publicar";
import PerfilCuenta from "./pages/dashboard/PerfilCuenta";
import QuienesSomos from "./pages/QuienesSomos";
import Terminos from "./pages/Terminos";
import Condiciones from "./pages/Condiciones";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/condiciones" element={<Condiciones />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<InicioFeed />} />
        <Route path="explorar" element={<Explorar />} />
        <Route path="publicar" element={<Publicar />} />
        <Route path="mensajes" element={<Mensajes />} />
        <Route path="estadisticas" element={<Estadisticas />} />
        <Route path="perfil" element={<PerfilCuenta />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}