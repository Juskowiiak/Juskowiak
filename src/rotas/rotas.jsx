import { Routes, Route } from "react-router-dom";
import Sobre from "../containers/sobre";
import Projetos from "../containers/projetos";
import Home from "../containers/home";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </>
  );
}
