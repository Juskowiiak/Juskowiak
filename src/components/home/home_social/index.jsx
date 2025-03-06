import { Container } from "./style";
//importar Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function HomeSocial() {
  return (
    <Container>
      <li>
        <a
          href="https://www.linkedin.com/in/juskowiak-afonso-36a0b6201/"
          target="_blank"
        >
          <FaLinkedin className="i" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Juskowiiak" target="_blank">
          <FaGithub className="i" />
        </a>
      </li>
    </Container>
  );
}
