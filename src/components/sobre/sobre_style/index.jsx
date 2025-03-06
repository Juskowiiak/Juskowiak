import { Container, Works } from "./style";
import File from "../../../Api/trabalhos.json";
export default function SobreStyle() {
  return (
    <Container>
      <h2>Alguns trabalhos</h2>
      <Works>
        {File &&
          File.map((item) => (
            <li key={item.id} className="card">
              <div className="picture">
                <img src="#" />
              </div>
              <div className="info">
                <h4>titulo</h4>
                <ul>
                  {item.lista.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </Works>
    </Container>
  );
}
