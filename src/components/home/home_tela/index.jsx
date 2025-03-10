import { useEffect, useState } from "react";
import { Container } from "./style";
//importar pictures
import picture from "../../../assets/home/menu2.png";
export default function HomeTela() {
  const [tela, setTela] = useState(true);

  //sempre que a pagina carregar, vai correr o useEffect
  useEffect(() => {
    const dados = sessionStorage.getItem("dado");

    //se o sessionStorage estiver vazio, recebe um dado novo
    if (dados == null) {
      sessionStorage.setItem("dado", 1);
      //quando passar 3 segundos a tela recebe display none
      setTimeout(() => {
        setTela(false);
      }, 4000);
    } else {
      //caso voltemos a pagina Home, a tela já não aparece, porque tem dados dentro do session storage
      setTela(false);
    }
  }, []);
  //
  return (
    <Container style={{ display: tela ? "flex" : "none" }}>
      <div className="picture">
        <img src={picture} />
      </div>
      <h3>Juskowiak Afonso</h3>
    </Container>
  );
}
