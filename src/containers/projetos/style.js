import styled from "styled-components";
//importar files
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.ul`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  overflow-y: scroll;
  padding-block: 4rem 2rem;
  transition: 0.5s;
  background: radial-gradient(
    circle,
    var(--cor-dark7) 13%,
    var(--cor-dark4) 100%
  );
  .card {
    border: 1px solid blue;
    width: 80%;
    position: relative;
    padding: 1.5rem 0.5rem 0.8rem 0.5rem;
    display: flex;
    justify-content: space-evenly;
    gap: 10%;
    transition: 0.5s;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      left: 50%;
      height: 3px;
      bottom: -20%;
      transform: translateX(-50%);
      border-radius: 50%;
      background-color: var(--cor-dark5);
    }
    .picture {
      border: 1px solid cyan;
      height: 240px;
      min-width: 260px;
      max-width: 260px;
      box-shadow: 2px 2px 3px var(--cor-dark3);
    }
    .text {
      border: 1px solid green;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .info {
        a {
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.7s;
          color: var(--cor-dark10);
          margin-bottom: 2rem;
          .card-nome {
            font-size: 1.5rem;
            font-family: monospace;
            text-shadow: 1px 1px 1px #000;
            letter-spacing: 1.2px;
          }

          &:hover {
            color: var(--cor-dark2);
          }
        }
        .card-titulo {
          margin-bottom: 0.5rem;
          text-decoration: underline;
        }
        .card-descricao {
          font-family: monospace;
          font-size: 1rem;
          color: var(--cor-dark1);
        }
      }
      .estado {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: bold;
        font-family: monospace;

        color: var(--cor-dark1);
        .i {
          width: 8px;
        }
      }
      @media ${breakpoints.ml} {
        align-items: center;
        justify-content: center;
      }
    }
    @media ${breakpoints.ml} {
      flex-direction: column;
    }
  }
  .card:nth-child(2) {
    flex-direction: row-reverse;
  }
`;
