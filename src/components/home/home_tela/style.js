import styled from "styled-components";
//importar files
import "../../../Style/cores.css";
import breakpoints from "../../../Style/breakpoints";
export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--cor-dark2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
  top: 0;
  .picture {
    transition: 0.6s;
    animation: logo 1.2s infinite alternate-reverse ease-in;
    @keyframes logo {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
  h3 {
    position: relative;
    font-size: 1.5rem;
    font-family: monospace;
    letter-spacing: 1.3px;
    color: #ffffff;
    text-shadow: 2px 2px 2px var(--cor-dark2);

    @media ${breakpoints.s} {
      font-size: 1.2rem;
    }
  }
`;
