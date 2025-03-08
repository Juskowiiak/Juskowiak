import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 97vh;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: 428px) {
    border: 2px solid red;
  }
`;
