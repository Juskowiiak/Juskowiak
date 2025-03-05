import styled from "styled-components";
//importar file
import "../../../Style/cores.css";
//importar pictures
import pict1 from "../../../assets/home/log1.png";
import pict2 from "../../../assets/home/log2.png";
import pict3 from "../../../assets/home/log3.png";
import pict4 from "../../../assets/home/log4.png";
import pict5 from "../../../assets/home/log5.png";
import pict6 from "../../../assets/home/log6.png";
import pict7 from "../../../assets/home/log7.png";

export const Container = styled.ul`
  position: relative;
  height: 20%;
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: start;
  padding-left: 8%;

  /*
    &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 30%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, transparent 5%, var(--cor-dark3) 100%);
  }
  */
  h5 {
    color: var(--cor-dark3);
    font-family: monospace;
    letter-spacing: 1.1px;
    margin-left: 5px;
  }
`;

export const Skills = styled.ul`
  display: flex;
  gap: 20px;
  li {
    position: relative;
    height: 55px;
    min-width: 65px;
    margin-block: 8px;
    border-radius: 10px;
    background-size: 50% 65%;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.4s;
    box-shadow: 3px 3px 2px var(--cor-dark2);
    cursor: pointer;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 10px;
      top: 0;
      left: 0;
      transition: 0.4s;
    }
    @keyframes alteraSize {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  }
  li:first-child {
    background-image: url("${pict1}");
    animation: alteraSize 2s ease-in infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px #e34c26;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #e34c26;
    }
  }
  li:nth-child(2) {
    background-image: url("${pict2}");
    animation: alteraSize 2s ease-in 2s infinite alternate-reverse;
    &:hover {
      box-shadow: 2px 2px 10px #2965f1;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #2965f1;
    }
  }
  li:nth-child(3) {
    background-image: url("${pict3}");
    animation: alteraSize 2s ease-in 3s infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px #f0db4f;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #f0db4f;
    }
  }
  li:nth-child(4) {
    background-image: url("${pict4}");
    animation: alteraSize 2s ease-in 4s infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px #563d7c;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #563d7c;
    }
  }
  li:nth-child(5) {
    background-image: url("${pict5}");
    animation: alteraSize 2s ease-in 5s infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px #f34f29;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #f34f29;
    }
  }
  li:nth-child(6) {
    background-image: url("${pict6}");
    animation: alteraSize 2s ease-in 6s infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px #1c84bc;
    }
    &:hover:after {
      box-shadow: -2px -2px 10px #1c84bc;
    }
    background-size: 60% 60%;
  }
  li:last-child {
    background-image: url("${pict7}");
    animation: alteraSize 2s ease-in 7s infinite alternate-reverse;

    &:hover {
      box-shadow: 2px 2px 10px rgb(211, 53, 198);
    }
    &:hover:after {
      box-shadow: -2px -2px 10px rgb(211, 53, 198);
    }
  }
`;
