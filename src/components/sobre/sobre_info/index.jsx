import { Container } from "./style";
//importar picture
import Main from "../../../assets/sobre/menu.png";
import Web from "../../../assets/sobre/web.png";
import Target from "../../../assets/sobre/target.png";
export default function SobreInfo() {
  return (
    <Container>
      <ul className="text">
        <li>
          <span>As</span> pessoas tratam-me por Afonso, tenho 28 anos, o meu
          interesse pela informatica surgiu aos 15 quando obtive o meu 1º
          computador, sempre tive aquela curiosidade em saber como os jogos
          trabalhavam por trás daqueles códigos <img src={Web} className="i" />.
        </li>
        <li>
          <span>O </span>meu primeiro contato com a programação foi na escola,
          aonde aprendi o básico de C++ e PHP, mas o que realmente chamou-me
          atenção foi o FrontEnd, gostava de saber o que estava a fazer pouco a
          pouco.
        </li>
        <li>
          <span>A</span> minha meta <img src={Target} className="i" /> ? Por
          enquanto... aumentar a minha experiência e criar projetos cada vez
          melhores.
        </li>
      </ul>
      <div className="picture">
        <img src={Main} />
      </div>
    </Container>
  );
}
