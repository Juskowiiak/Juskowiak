import styled from "styled-components";
//import files
import "../../../Style/cores.css";
import Breakpoints from "../../../Style/breakpoints";
export const Container = styled.div`
  width: 100%;

  padding-top: 6.5vh;
  h2 {
    margin-bottom: 5rem;
  }
`;

export const Works = styled.ul`
  width: 85%;
  margin-inline: auto;
  display: flex;
  justify-content: space-around;
  gap: 60px 30px;
  flex-wrap: wrap;
  .card {
    width: 390px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding-block: 10px;
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

        h4 {
          text-align: center;
          font-family: monospace;
          color: var(--cor-dark3);
          letter-spacing: 1px;
          font-size: 1.3rem;
          transition: 0.5s;
          &:hover {
            color: blue;
          }
        }
        .i {
          font-size: 1rem;
          color: var(--cor-dark3);
        }
      }

      ul {
        display: flex;
        justify-content: center;
        gap: 15px;
        li {
          height: 35px;
          width: 35px;
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
    }
  }
`;
