import styled from "styled-components";
//importar files
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  width: 100%;
  height: 97vh;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 3rem;
  position: relative;
  z-index: 1;

  @media ${breakpoints.s} {
    padding-bottom: 4rem;
  }
`;
