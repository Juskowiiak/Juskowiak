import styled from "styled-components";
//importar files
import "../../Style/cores.css";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  padding: 8px;
  gap: 10px;
`;

export const HomePage = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  background-color: #ffffff;
`;

export const Janela = styled.ul`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    height: 50%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    border-radius: 8px;
    border: 2px solid #000;
    h4 {
      padding: 5px 8px;
      border-radius: 8px 0px 8px 0px;
      border-top: 2px solid #000;
      border-left: 2px solid #000;
      font-size: 15px;
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      color: #fff;
      transition: 0.8s;
      gap: 8px;
      background-color: var(--cor-dark1);
      font-family: monospace;
      font-size: 0.8rem;
      letter-spacing: 1px;
      &:hover {
        color: var(--cor-dark5);
        background-color: #fff;
      }
      .i {
        border: 2px solid var(--cor-dark5);
        border-radius: 50%;
        padding: 1px 1.1px;
        font-size: 20px;
      }
    }
    img {
      position: absolute;
      border-radius: 8px;
    }
  }
`;
