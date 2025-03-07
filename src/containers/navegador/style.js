import styled from "styled-components";
//importar files
import "../../Style/breakpoints";
import "../../Style/cores.css";
import breakpoints from "../../Style/breakpoints";
export const Container = styled.div`
  position: absolute;
  top: 1.5vh;
  left: 1.5vh;
  right: 1.5vh;
  height: 97vh;
  width: 100%;
  #main {
    position: absolute;
    z-index: 2;
    animation: mudaCor 20s ease-in infinite alternate-reverse;
    top: 0;
    left: 0;
    display: flex;
    height: auto;
    gap: 8px;
    border-radius: 0 0 8px 0;
    padding: 0.2rem 0.5rem;
    align-items: center;
    h5 {
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      color: #fff;
      font-family: monospace;
      letter-spacing: 1.2px;
    }
    .i {
      cursor: pointer;
      color: #fff;
      transition: 0.6s;
      font-size: 1.3rem;
    }
  }
  #second {
    position: relative;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background: var(--cor-dark2);
    border-radius: 10px;
    border: 2px solid #000;
    opacity: 0;
    .picture {
      width: 50px;
      height: 50px;
      margin-bottom: 2rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      li {
        font-family: monospace;
        transition: 0.5s;
        font-size: 1rem;
        padding-block: 0.9rem;
        width: 100%;
        position: relative;
        a {
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.5s;
          letter-spacing: 1.2px;
          &:hover {
            color: var(--cor-dark8);
          }
        }
        &:hover {
          letter-spacing: 1px;
          padding-left: 8px;
        }
        &::after {
          position: absolute;
          content: "";
          width: 90%;
          height: 0.5px;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--cor-dark5);
        }
        @media ${breakpoints.s} {
          font-size: 0.8rem;
        }
        @media ${breakpoints.xs} {
          font-size: 0.6rem;
        }
      }
    }
    .close {
      position: absolute;
      color: #fff;
      top: 1rem;
      right: 1rem;
      font-size: 1.6rem;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: var(--cor-dark7);
      }
    }
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 97vh;
      background: transparent;
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
      z-index: -1;
      transform: translate(-50%, -50%);
    }
    @media ${breakpoints.s} {
      width: 260px;
    }
    @media ${breakpoints.xs} {
      width: 220px;
    }
  }

  .active {
    opacity: 1 !important;
    z-index: 3 !important;
  }
  @keyframes mudaCor {
    0% {
      background-color: var(--cor-dark1);
    }
    20% {
      background-color: var(--cor-dark3);
    }
    40% {
      background-color: #000000;
    }
    60% {
      background-color: var(--cor-dark4);
    }
    80% {
      background-color: var(--cor-dark5);
    }
    100% {
      background-color: #000000;
    }
  }
`;
