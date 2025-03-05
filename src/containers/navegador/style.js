import styled from "styled-components";
import "../../Style/cores.css";
export const Container = styled.div`
  position: absolute;
  top: 1.5vh;
  left: 1.5vh;
  padding: 0.3rem 0.5rem;
  border-radius: 0 0 8px 0;
  background-color: var(--cor-dark1);
  .main {
    display: flex;
    height: 100%;
    gap: 8px;
    padding: 0.2rem 0.5rem;
    h5 {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      color: #fff;
      font-family: monospace;
      letter-spacing: 1.2px;
    }
    .i {
      cursor: pointer;
      color: #fff;
      transition: 0.6s;
      font-size: 1.3rem;
    }
  }
  animation: mudaCor 20s ease-in infinite alternate-reverse;

  @keyframes mudaCor {
    0% {
      background-color: var(--cor-dark1);
    }
    20% {
      background-color: var(--cor-dark3);
    }
    40% {
      background-color: #000000;
    }
    60% {
      background-color: var(--cor-dark4);
    }
    80% {
      background-color: var(--cor-dark5);
    }
    100% {
      background-color: #000000;
    }
  }
`;
