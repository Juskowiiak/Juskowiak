//importar componentes do style.js
import { Container, HomePage, Janela } from "./style";
//importar icons
import { TiArrowRight } from "react-icons/ti";
//importar picture
import Projeto from "../../assets/home/projeto.gif";
import Sobre from "../../assets/home/sobre.gif";
//importar componentes do Home
import Navegador from "../navegador";
import HomeSocial from "../../components/home/home_social";
import HomeSkill from "../../components/home/home_skill";
import HomeInfo from "../../components/home/home_info";
export default function Home() {
  return (
    <Container>
      <HomePage>
        <Navegador />
        <HomeInfo />
        <HomeSkill />
        <HomeSocial />
      </HomePage>
      <Janela>
        <li>
          <img src={Sobre}></img>
          <a href="#">
            <h4>
              SOBRE MI <TiArrowRight className="i" />
            </h4>
          </a>
        </li>
        <li>
          <img src={Projeto}></img>
          <a href="#">
            <h4>
              PROJETOS <TiArrowRight className="i" />
            </h4>
          </a>
        </li>
      </Janela>
    </Container>
  );
}
