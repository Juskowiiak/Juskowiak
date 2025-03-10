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
          <span>As</span> pessoas tratam-me por Afonso, 28 anos, o interesse
          pela informatica surgiu desde cedo, sempre tive aquela curiosidade em
          saber como os jogos e aplicações trabalhavam por trás daqueles códigos{" "}
          <img src={Web} className="i" />.
        </li>
        <li>
          <span>O </span>meu primeiro contato com a programação foi na escola,
          onde aprendi o básico de C++ e PHP, mas o que realmente chamou-me
          atenção foi o FrontEnd, gostava de visualizar o meu progresso e
          resultados de forma mais rápida.
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
