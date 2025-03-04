import styled from "styled-components";
import "../../Style/cores.css";
export const Container = styled.div`
  border: 1px solid blue;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.3rem 0.5rem;
  border-radius: 0 0 8px 0;
  border: 2px solid var(--cor-dark1);
  background-color: var(--cor-dark1);
  .main {
    display: flex;
    height: 100%;
    gap: 8px;
    h5 {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      color: #fff;
    }
    .i {
      cursor: pointer;
      color: #fff;
      transition: 0.6s;
    }
  }
`;
