import { useEffect, useState } from "react";
import { Container } from "./style";
//importar pictures
import picture from "../../../assets/home/menu2.png";
export default function HomeTela() {
  const [tela, setTela] = useState(true);

  //sempre que a pagina carregar, vai correr o useEffect
  useEffect(() => {
    const dados = sessionStorage.getItem("dado");

    if (dados == null) {
      sessionStorage.setItem("dado", 1);
    } else {
      setTela(false);
    }
  }, []);
  //style={{ display: tela ? "flex" : "none" }}
  return (
    <Container>
      <div className="picture">
        <img src={picture} />
      </div>
      <h3>Juskowiak Afonso</h3>
    </Container>
  );
}
