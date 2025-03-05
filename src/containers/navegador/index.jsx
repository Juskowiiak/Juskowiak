import { useState } from "react";
import { Container } from "./style";
//importar icons
import { IoMdMenu } from "react-icons/io";
import { IoCode } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
//importar imagem
import picture from "../../assets/home/menu.png";
export default function Navegador() {
  const [showMenu, setShowMenu] = useState(false);
  function Menu() {
    setShowMenu(!showMenu);
  }
  return (
    <Container>
      <div id="main">
        <IoMdMenu className="i" onClick={() => Menu()} />
        <h5>JUSKOWIAK</h5>
      </div>
      {/* se showMenu for true, é atribuido a class active */}
      <div id="second" className={showMenu ? "active" : ""}>
        <div className="picture">
          <img src={picture} />
        </div>
        <ul>
          <li>
            <a href="#">
              <IoCode /> HOMEPAGE <IoCodeSlashSharp />
            </a>
          </li>
          <li>
            <a href="#">
              <IoCode /> SOBRE MI <IoCodeSlashSharp />
            </a>
          </li>
          <li>
            <a href="#">
              <IoCode /> PROJETOS <IoCodeSlashSharp />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
