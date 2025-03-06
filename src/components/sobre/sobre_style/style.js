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
  border: 1px solid blue;
  width: 80%;
  margin-inline: auto;
  display: flex;
  gap: 10px;
  .card {
    width: 200px;
    border: 2px solid orange;
  }
  .info {
    border: 2px solid red;
    margin-top: 3rem;
    padding-block: 1rem;
  }
`;
