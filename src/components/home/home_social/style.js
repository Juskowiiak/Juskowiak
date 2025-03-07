import styled from "styled-components";
import "../../../Style/cores.css";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0.3rem 0.1rem 0rem 0.7rem;
  border-radius: 8px 0 0 0;
  position: absolute;
  bottom: 1.5vh;
  right: 1.5vh;
  z-index: 2;
  background-color: var(--cor-dark1);
  li {
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 2px;
  }
  .i {
    font-size: 1rem;
    display: flex;
    color: #fff;
    align-items: center;
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
