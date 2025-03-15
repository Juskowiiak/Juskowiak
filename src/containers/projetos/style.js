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
  gap: 12rem;
  overflow-y: scroll;
  padding-block: 4rem 6rem;
  transition: 0.5s;
  background: radial-gradient(
    circle,
    rgb(214, 214, 214) 13%,
    var(--cor-dark6) 83%
  );
  .card {
    width: 70%;
    position: relative;
    padding: 1.5rem 0.5rem 0.8rem 0.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10%;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
    &::after {
      position: absolute;
      content: "";
      width: 80%;
      left: 50%;
      height: 3px;
      bottom: -20%;
      transform: translateX(-50%);
      border-radius: 50%;
      background-color: var(--cor-dark5);
      @media ${breakpoints.s} {
        bottom: -10%;
        width: 60%;
      }
    }
    .picture {
      height: 250px;
      min-width: 130px;
      max-width: 130px;
      border-radius: 5px;
      overflow: hidden;
      transition: 0.5s;
      @media ${breakpoints.s} {
        height: 260px;
        min-width: 110px;
        max-width: 110px;
      }
    }
    .text {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .info {
        .card-nome {
          border: 1px solid red;
          display: inline-flex;
          align-items: center;
          margin-bottom: 2rem;
          background-color: var(--cor-dark2);
          border: 1px solid var(--cor-dark1);
          transition: 0.7s;
          padding: 0.5rem;
          gap: 20px;
          .card-nomeWeb {
            display: flex;
            font-size: 1.5rem;
            font-family: monospace;
            text-shadow: 1px 1px 1px #000;
            letter-spacing: 1.2px;
            display: flex;
            gap: 5px;
            align-items: center;
          }
          .card-nomeGit {
            display: flex;
            align-items: center;
          }
          a {
            color: var(--cor-dark10);
            font-size: 1.2rem;
            @media ${breakpoints.s} {
              font-size: 1.2rem;
            }

            &:hover {
              color: rgb(240, 192, 60);
            }
          }
        }

        .card-titulo {
          margin-bottom: 1.5rem;
          text-decoration: underline;
          color: rgb(46, 46, 45);
          @media ${breakpoints.ml} {
            margin-bottom: 1rem;
          }
        }
        .card-descricao {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-family: monospace;
          font-size: 1rem;
          color: var(--cor-dark1);
          line-height: 1.3rem;
          .autor {
            font-weight: bold;
            font-size: 0.5rem;
            margin-inline-start: 5px;
          }
          @media ${breakpoints.s} {
            font-size: 0.9rem;
            padding-inline: 0.3rem;
          }
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
    @media ${breakpoints.l} {
      width: 90%;
    }
    @media ${breakpoints.ml} {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    @media ${breakpoints.s} {
    }
  }
  .card:nth-child(2) {
    flex-direction: row-reverse;
    @media ${breakpoints.ml} {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 90%;
    }
  }
  @media ${breakpoints.s} {
    background: radial-gradient(
      circle,
      rgb(212, 212, 212) 13%,
      var(--cor-dark7) 83%
    );
  }
`;
