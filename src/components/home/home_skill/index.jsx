import { Container, Skills } from "./style";
// importar api

import Skill from "../../../Api/homeSkills.json";

export default function HomeSkill() {
  return (
    <Container>
      <h5>Ferramentas</h5>
      <Skills>
        {Skill &&
          Skill.map((item) => <li key={item.id} title={item.nome}></li>)}
      </Skills>
    </Container>
  );
}
