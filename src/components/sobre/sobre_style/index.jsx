import { Container, Works } from "./style";
//importar file
import File from "../../../Api/trabalhos.json";
//importar icon
import { GoLinkExternal } from "react-icons/go";
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
                  <h4>{item.nome}</h4>
                  <GoLinkExternal className="i" />
                </a>

                <ul>
                  {item.lista.map((i) => (
                    <li>
                      <img src={i} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </Works>
    </Container>
  );
}
