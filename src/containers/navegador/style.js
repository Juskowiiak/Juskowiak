import styled from "styled-components";
import "../../Style/cores.css";
export const Container = styled.div`
  position: absolute;
  top: 1.5vh;
  left: 1.5vh;
  height: 5vh;
  border-radius: 0 0 8px 0;
  background-color: var(--cor-dark1);
  animation: mudaCor 20s ease-in infinite alternate-reverse;

  #main {
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
  #second {
    position: absolute;
    top: 5vh;
    width: 210px;
    left: -270px;
    z-index: 1;
    transition: 0.5s;
    box-shadow: 1px 1px 3px var(--cor-dark1);
    padding-block: 0.3rem 1.2rem;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      var(--cor-dark6),
      var(--cor-dark1) 100%
    );
    .picture {
      width: 200px;
      margin-bottom: 2.2rem;
      margin-left: 5px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        a {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-family: monospace;
          color: var(--cor-dark9);
          transition: 0.5s;
          font-size: 1rem;
          text-shadow: 0.2px 0.2px 1px #000000;
          position: relative;
          &:hover {
            letter-spacing: 1px;
            color: #fff;
          }
          &::after {
            position: absolute;
            content: "";
            bottom: -8px;
            width: 60%;
            left: 50%;
            height: 3px;
            transform: translateX(-50%);
            background-color: var(--cor-dark3);
            border-radius: 50%;
          }
        }
      }
    }
  }
  .active {
    left: 0 !important;
    border: none !important;
  }
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
