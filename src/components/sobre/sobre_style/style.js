import styled from "styled-components";
//import files
import "../../../Style/cores.css";
import breakpoints from "../../../Style/breakpoints";
export const Container = styled.div`
  width: 100%;
  padding-top: 6.5vh;
  h2 {
    margin-bottom: 9rem;
    text-align: center;
    font-size: 2.5rem;
    color: var(--cor-dark4);
    text-shadow: 1px 1px 1px var(--cor-dark6);
    @media ${breakpoints.s} {
      font-size: 2.2rem;
      margin-bottom: 7rem;
    }
    @media ${breakpoints.xs} {
      font-size: 1.8rem;
    }
  }
`;

export const Works = styled.ul`
  width: 85%;
  margin-inline: auto;
  display: flex;
  justify-content: space-around;
  gap: 60px 50px;
  flex-wrap: wrap;
  transition: 0.5s;
  .card {
    width: 390px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 10px;
    transition: 0.5s;
    .picture {
      width: 100%;
      height: auto;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        align-items: center;
        margin-bottom: 0.5rem;
        h4 {
          text-align: center;
          font-family: monospace;
          color: var(--cor-dark3);
          letter-spacing: 1px;
          font-size: 1.3rem;
          transition: 0.5s;

          &:hover {
            color: orange;
          }
        }
        .logo {
          height: 32px;
          width: auto;
        }
        .i {
          font-size: 1rem;
          color: var(--cor-dark3);
        }
      }

      .listaSkill {
        display: flex;
        justify-content: center;
        gap: 15px;

        .listaSkill-card {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 80%;
            height: 80%;
          }
        }
      }
      .estado {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-weight: bold;
        font-family: monospace;
        color: var(--cor-dark1);
        font-size: 10px;
        .i {
          font-size: 8px;
        }
      }
    }
    @media ${breakpoints.s} {
      width: 300px;
    }
  }
  @media ${breakpoints.ml} {
    gap: 80px 30px;
  }
  @media ${breakpoints.s} {
    gap: 100px 30px;
    margin-bottom: 4rem;
  }
`;
