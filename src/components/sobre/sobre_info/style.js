import styled from "styled-components";
//import files
import "../../../Style/cores.css";
import Breakpoints from "../../../Style/breakpoints";
import breakpoints from "../../../Style/breakpoints";
export const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 6.5vh;
  position: relative;
  background: linear-gradient(180deg, var(--cor-dark1), var(--cor-dark4) 74%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  padding-bottom: 80px;
  &::after {
    position: absolute;
    content: "";
    width: 108%;
    height: 120px;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
    transition: 0.5s;
    @media ${breakpoints.ml} {
      width: 120%;
      bottom: -10%;
    }
    @media ${breakpoints.m} {
    }
    @media ${breakpoints.s} {
    }
  }
  .picture {
    min-width: 280px;
    transition: 0.5s;
    @media ${breakpoints.s} {
      min-width: 210px !important;
      max-width: 220px;
    }
  }
  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1.15rem;
    color: var(--cor-dark11);
    line-height: 1.5rem;
    span {
      font-weight: bold;
      text-shadow: 1px 1px 1px #000;
      color: var(--cor-dark9);
      font-size: 1.25rem;
    }
    .i {
      width: 20px;
      height: auto;
      margin-inline: 5px 2px;
    }
    @media ${breakpoints.ml} {
      width: 90%;
      text-align: center;
    }
    @media ${breakpoints.m} {
      font-size: 1rem;
    }
    @media ${breakpoints.xs} {
      font-size: 0.8rem;
    }
  }
  @media ${breakpoints.ml} {
    flex-direction: column-reverse;
    height: 120vh;
    padding-top: 0;
    @media ${breakpoints.s} {
      height: 125vh;
    }
  }
`;
