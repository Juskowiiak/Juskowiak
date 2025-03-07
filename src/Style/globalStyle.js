import { createGlobalStyle } from "styled-components";
import "./cores.css";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
  list-style: none;
  text-decoration: none;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  background-color:var(--cor-dark1);
  padding: 1.5vh;
  animation: mudaCor 20s ease-in infinite alternate-reverse;  
  overflow: hidden;
@keyframes mudaCor {
  0% {
    background-color:var(--cor-dark1);
  }
  20% {
    background-color:var(--cor-dark3);
  }
  40% {
    background-color:#000000;
  }
  60% {
    background-color:var(--cor-dark4);
  }
  80% {
    background-color:var(--cor-dark5);
  }
  100%{
    background-color:#000000;
  }
}
}

img {
  height: 100%;
  width: 100%;

}


`;
export default GlobalStyle;
