import { Container } from "./style";
//importar pictures
import Hand from "../../../assets/home/hand.png";
import Eu from "../../../assets/home/eu.gif";
export default function HomeInfo() {
  return (
    <Container>
      <div className="text">
        <h2>
          <span className="um"> Desenvolvedor</span>
          <br></br>
          <span className="dois">Front-End Junior</span>
        </h2>{" "}
        <p>
          Boas <img src={Hand} className="i" />, chamo-me Juskowiak Afonso, um
          Dev que tira proveito da sua <span>Curiosidade</span> e
          <span> Criatividade </span>
          para criar projetos incriveis.
        </p>
      </div>
      <div className="picture">
        <img src={Eu} />
      </div>
    </Container>
  );
}
