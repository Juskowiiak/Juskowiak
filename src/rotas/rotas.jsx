import { Routes, Route } from "react-router-dom";
import Sobre from "../containers/sobre";
import Projetos from "../containers/projetos";
import Home from "../containers/home";
import HomeSocial from "../components/home/home_social";
import Navegador from "../containers/navegador";
export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <HomeSocial />
      <Navegador />
    </>
  );
}
