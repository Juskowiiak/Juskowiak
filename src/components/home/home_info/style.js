import styled from "styled-components";
//importar file
import "../../../Style/cores.css";
export const Container = styled.ul`
  height: 80%;
  width: 90%;
  margin-inline: auto;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    width: 70%;
    h2 {
      font-size: 3rem;
      font-family: monospace;
      margin-bottom: 2rem;
      color: var(--cor-dark4);
      .um {
        letter-spacing: 2.8px;
      }
    }
    p {
      width: 80%;
      line-height: 1.5rem;
      font-size: 1.3rem;
      color: var(--cor-dark3);
      span:first-of-type {
        font-weight: bold;
        letter-spacing: 1px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        background: linear-gradient(green, red);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      span:last-child {
        font-weight: bold;
        letter-spacing: 1px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        background: linear-gradient(red, blue);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .i {
      width: 20px;
      height: auto;
      margin-inline: 5px 2px;
    }
  }
  .picture {
    min-width: 240px;
  }
`;
