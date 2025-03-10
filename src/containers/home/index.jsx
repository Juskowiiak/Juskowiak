//importar componentes do style.js
import { Container, HomePage } from "./style";

//importar componentes do Home

import HomeSkill from "../../components/home/home_skill";
import HomeInfo from "../../components/home/home_info";
import HomeTela from "../../components/home/home_tela";
export default function Home() {
  return (
    <Container>
      <HomePage>
        <HomeTela />
        <HomeInfo />
        <HomeSkill />
      </HomePage>
    </Container>
  );
}
