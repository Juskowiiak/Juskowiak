import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  padding: 8px;
  gap: 8px;
`;

export const HomePage = styled.div`
  border: 1px solid blue;
  width: 80%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  background-color: #ffffff;
`;

export const Janela = styled.ul`
  border: 1px solid green;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  li {
    height: 50%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    border-radius: 8px;
    h4 {
      border: 1px solid red;
      padding: 5px 8px;
      border-radius: 8px 0px 0px 0px;
      font-size: 15px;
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 8px;
      .i {
        border: 2px solid blue;
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
