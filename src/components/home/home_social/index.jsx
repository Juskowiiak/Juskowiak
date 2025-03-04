import { Container } from "./style";
//importar Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function HomeSocial() {
  return (
    <Container>
      <li>
        <a href="#">
          <FaLinkedin className="i" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaGithub className="i" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaYoutube className="i" />
        </a>
      </li>
    </Container>
  );
}
