import { Container } from "./style";
//importar pictures
import Hand from "../../../assets/home/hand.png";
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
          Dev que usa a sua <span>Curiosidade</span> e
          <span> Criatividade </span>
          para a contrução de projetos incriveis.
        </p>
      </div>
      <div className="picture">
        <img src="#" />
      </div>
    </Container>
  );
}
