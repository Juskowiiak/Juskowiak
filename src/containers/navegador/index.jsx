import { useState } from "react";
import { Container } from "./style";
//importar icons
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
//importar imagem
import picture from "../../assets/home/menu.png";
import { Link } from "react-router-dom";
export default function Navegador() {
  //abre e fecha menu
  const [showMenu, setShowMenu] = useState(false);
  function Menu() {
    setShowMenu(!showMenu);
  }
  function fecharMenu() {
    setShowMenu(false);
  }
  function showMail() {
    alert("Email: juskoh_96@hotmail.com");
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
          <li onClick={() => fecharMenu()} title="HOMEPAGE" className="opcao">
            <Link to="/" className="opcaoLink">
              <IoHomeOutline /> HOMEPAGE
            </Link>
          </li>
          <li onClick={() => fecharMenu()} title="SOBRE MIM" className="opcao">
            <Link to="/sobre" className="opcaoLink">
              <FaRegUser /> SOBRE MIM
            </Link>
          </li>
          <li onClick={() => fecharMenu()} title="PROJETOS" className="opcao">
            <Link to="/projetos" className="opcaoLink">
              <GrProjects /> PROJETOS
            </Link>
          </li>
          <ul title="CONTACTOS" className="contato">
            <a
              onClick={() => fecharMenu()}
              href="https://www.linkedin.com/in/juskowiak-afonso-36a0b6201/"
              target="_blank"
              title="Linkedin"
              className="contatoLink"
            >
              <TbBrandLinkedin />
            </a>
            <a
              onClick={() => fecharMenu()}
              href="https://github.com/Juskowiiak"
              target="_blank"
              title="Github"
              className="contatoLink"
            >
              <FaGithub />
            </a>
            <li className="contatoLink" title="Mail" onClick={() => showMail()}>
              <IoMailOpenOutline />
            </li>

            <li></li>
          </ul>
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
