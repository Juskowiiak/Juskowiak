import styled from "styled-components";
import "../../../Style/cores.css";

export const Container = styled.ul`
  border: 1px solid green;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: 8px 0 0 0;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: var(--cor-dark1);
  li {
    border: 2px solid var(--cor-dark7);
    border-radius: 50%;
    padding: 3px;
  }
  .i {
    font-size: 1rem;
    display: flex;
    color: var(--cor-dark7);
    align-items: center;
  }
`;
