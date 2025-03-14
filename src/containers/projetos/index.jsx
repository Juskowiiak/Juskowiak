import { Container } from "./style";
//importar icons
import { FaSquareFull } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
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
                <div className="card-nome">
                  <a
                    href={item.link}
                    title={item.link}
                    target="_blank"
                    className="card-nomeWeb"
                  >
                    <h3>{item.nome}</h3>
                    <FiExternalLink className="i" />
                  </a>
                  <a
                    href={item.git}
                    target="_blank"
                    title={item.git}
                    className="card-nomeGit"
                  >
                    <FaGithub />
                  </a>
                </div>

                <h5 className="card-titulo">{item.titulo}</h5>
                <div className="card-descricao">
                  <p>
                    {item.descricao1}{" "}
                    <span className="autor">{item.autor}</span>
                  </p>
                  <p>{item.descricao2}</p>
                  <p>{item.descricao3}</p>
                </div>
              </div>
              <div className="estado">
                <FaSquareFull className="i" style={{ color: item.cor }} />
                <p>{item.estado} </p>
              </div>
            </div>
          </li>
        ))}
    </Container>
  );
}
