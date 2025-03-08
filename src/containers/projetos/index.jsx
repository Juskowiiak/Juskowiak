import { Container } from "./style";
//importar icons
import { FaSquareFull } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PiSmileyXEyesFill } from "react-icons/pi";
//importar Api
import Obras from "../../Api/projeto.json";
export default function Projetos() {
  return (
    <Container>
      {Obras &&
        Obras.map((item) => (
          <li key={item.id} className="card">
            <div className="picture">
              <img src={item.picture} />
            </div>
            <div className="text">
              <div className="info">
                <a href={item.link} title={item.link} target="_blank">
                  <h3 className="card-nome">{item.nome}</h3>
                  <FiExternalLink className="i" />
                </a>
                <h5 className="card-titulo">{item.titulo}</h5>
                <p className="card-descricao">{item.descricao}</p>
              </div>
              <div className="estado">
                <FaSquareFull className="i" style={{ color: item.cor }} />
                <p>{item.estado}</p>
              </div>
            </div>
          </li>
        ))}
    </Container>
  );
}
