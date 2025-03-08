import styled from "styled-components";
//importar file
import "../../../Style/cores.css";
import "../../../Style/breakpoints";
import breakpoints from "../../../Style/breakpoints";

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
      @media ${breakpoints.ml} {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      @media ${breakpoints.m} {
        font-size: 1.7rem;
        width: 90%;
        margin-inline: auto;
      }
    }
    p {
      width: 80%;
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
      @media ${breakpoints.ml} {
        width: 100%;
        font-size: 1.1rem;
      }
      @media ${breakpoints.s} {
        font-size: 0.9rem;
      }
      @media ${breakpoints.xs} {
        font-size: 0.7rem;
        line-height: 1rem;
      }
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
      text-align: center;
      width: 90%;
    }
  }
  .picture {
    min-width: 220px;
    height: 230px;
    border: 1px solid cyan;
    @media ${breakpoints.ml} {
      height: 30%;
      min-width: auto;
    }
    @media ${breakpoints.s} {
      height: 190px;
      min-width: 180px;
    }
  }
  @media ${breakpoints.ml} {
    justify-content: space-evenly;
    flex-direction: column-reverse;
    width: 100%;
    height: 75%;
  }
  @media ${breakpoints.s} {
    justify-content: space-evenly;
    flex-direction: column-reverse;
    width: 100%;
  }
`;
