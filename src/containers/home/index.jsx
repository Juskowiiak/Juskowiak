//importar componentes do style.js
import { Container, HomePage } from "./style";

//importar componentes do Home
import Navegador from "../navegador";
import HomeSocial from "../../components/home/home_social";
import HomeSkill from "../../components/home/home_skill";
import HomeInfo from "../../components/home/home_info";
export default function Home() {
  return (
    <Container>
      <HomePage>
        <HomeInfo />
        <HomeSkill />
      </HomePage>
    </Container>
  );
}
