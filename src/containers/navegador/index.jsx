import { useState } from "react";
import { Container } from "./style";
//importar icons
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
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
          <img src="#" />
        </div>
        <ul>
          <li onClick={() => fecharMenu()} title="HOMEPAGE">
            <Link to="/">
              <IoHomeOutline /> HOMEPAGE
            </Link>
          </li>
          <li onClick={() => fecharMenu()} title="SOBRE MIM">
            <Link to="/sobre">
              <FaRegUser /> SOBRE MIM
            </Link>
          </li>
          <li onClick={() => fecharMenu()} title="PROJETOS">
            <Link to="/projeto">
              <GrProjects /> PROJETOS
            </Link>
          </li>
        </ul>
        <IoMdClose
          className="close"
          title="fechar"
          onClick={() => fecharMenu()}
        />
      </div>
    </Container>
  );
}
