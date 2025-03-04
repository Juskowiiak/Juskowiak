import { Container } from "./style";
//importar icons
import { IoMdMenu } from "react-icons/io";
export default function Navegador() {
  return (
    <Container>
      <div className="main">
        <IoMdMenu className="i" />
        <h5>JUSKOWIAK</h5>
      </div>
    </Container>
  );
}
