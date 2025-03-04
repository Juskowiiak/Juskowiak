import { Container, Skills } from "./style";
// importar api
import Teclado from "../../../Api/homeKeyboard.json";
import Skill from "../../../Api/homeSkills.json";

export default function HomeSkill() {
  return (
    <Container>
      <div className="partCima">
        {Teclado && Teclado.map((item) => <li key={item.id}></li>)}
      </div>
      <Skills>
        {Skill &&
          Skill.map((item) => <li key={item.id} title={item.nome}></li>)}
      </Skills>
      <div className="partBaixo">
        {Teclado && Teclado.map((item) => <li key={item.id}></li>)}
      </div>
    </Container>
  );
}
