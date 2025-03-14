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
  background: linear-gradient(180deg, #000, var(--cor-dark6) 89%);
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
    min-width: 240px;
    height: auto;
    transition: 0.5s;
    @media ${breakpoints.ml} {
      height: 40%;
      min-width: auto;
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
    .front {
      text-decoration: underline;
      color: var(--cor-dark8);
    }
    .i {
      width: 20px;
      height: auto;
      margin-inline: 5px 2px;
      @media ${breakpoints.s} {
        width: 15px;
      }
    }
    @media ${breakpoints.ml} {
      width: 95%;
      text-align: center;
    }
    @media ${breakpoints.m} {
      font-size: 1rem;
    }
    @media ${breakpoints.s} {
      font-size: 0.85rem;
    }
  }
  @media ${breakpoints.ml} {
    flex-direction: column-reverse;
    height: 100vh;
    padding-top: 0;
    @media ${breakpoints.s} {
      justify-content: center;
      gap: 30px;
    }
  }
`;
