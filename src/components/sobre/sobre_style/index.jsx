import { Container, Works } from "./style";
//importar file
import File from "../../../Api/trabalhos.json";
//importar icon
import { FaSquareFull } from "react-icons/fa";
export default function SobreStyle() {
  return (
    <Container>
      <h2>Alguns trabalhos</h2>
      <Works>
        {File &&
          File.map((item) => (
            <li key={item.id} className="card">
              <div className="picture">
                <img src={item.pic} />
              </div>
              <div className="info">
                <a href={item.link} target="_blank">
                  <img src={item.logo} className="logo" title={item.nome} />
                  <h4>{item.nome}</h4>
                </a>

                <ul className="listaSkill">
                  {item.lista.map((i) => (
                    <li key={i.id} className="listaSkill-card">
                      <img src={i.pic} title={i.title} />
                    </li>
                  ))}
                </ul>
                <div className="estado">
                  <FaSquareFull className="i" style={{ color: item.cor }} />
                  <p>{item.estado}</p>
                </div>
              </div>
            </li>
          ))}
      </Works>
    </Container>
  );
}
