import { useState } from "react";
import { Container } from "./style";
//importar icons
import { IoMdMenu } from "react-icons/io";
import { IoCode } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
//importar imagem
import picture from "../../assets/home/menu.png";
import { Link } from "react-router-dom";
export default function Navegador() {
  const [showMenu, setShowMenu] = useState(false);
  function Menu() {
    setShowMenu(!showMenu);
  }
  function fecharMenu() {
    setShowMenu(false);
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
          <li onClick={() => fecharMenu()}>
            <Link to="/">
              <IoCode /> HOMEPAGE <IoCodeSlashSharp />
            </Link>
          </li>
          <li onClick={() => fecharMenu()}>
            <Link to="/sobre">
              <IoCode /> SOBRE MI <IoCodeSlashSharp />
            </Link>
          </li>
          <li onClick={() => fecharMenu()}>
            <Link to="/projeto">
              <IoCode /> PROJETOS <IoCodeSlashSharp />
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
