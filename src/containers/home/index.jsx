//importar componentes do style.js
import { Container, HomePage, Janela } from "./style";
//importar icons
import { TiArrowRight } from "react-icons/ti";
//importar componentes do Home
import HomeSocial from "../../components/home/home_social";
import HomeSkill from "../../components/home/home_skill";
import HomeInfo from "../../components/home/home_info";
export default function Home() {
  return (
    <Container>
      <HomePage>
        <HomeInfo />
        <HomeSkill />
        <HomeSocial />
      </HomePage>
      <Janela>
        <li>
          <img src="#"></img>
          <a href="#">
            <h4>
              SOBRE MI <TiArrowRight className="i" />
            </h4>
          </a>
        </li>
        <li>
          <img src="#"></img>
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
