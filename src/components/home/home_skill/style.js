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
  border: 1px solid red;
  position: relative;
  height: 30%;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #000;
  .partCima,
  .partBaixo {
    display: inline-flex;
    gap: 30px;

    justify-content: center;
  }
  .partCima {
    margin-top: 2px;
    animation: moveCima 5s infinite alternate-reverse ease-in;
  }
  .partBaixo {
    margin-left: -95px;
    animation: moveCima 8s infinite alternate-reverse ease-out;
  }
  li {
    border: 1px solid var(--cor-dark3);
    height: 60px;
    min-width: 70px;
    border-radius: 10px;
    background-color: var(--cor-dark2);
    transition: 0.5s;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 10px;
      top: 0;
      left: 0;
    }
    &:hover {
      box-shadow: 1px 1px 10px #ffffff;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #ffffff;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 15%;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, transparent 5%, var(--cor-dark3) 100%);
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 15%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, transparent 5%, var(--cor-dark3) 100%);
  }

  @keyframes moveCima {
    0% {
      margin-left: -30px;
    }
    100% {
      margin-left: -30%;
    }
  }
`;

export const Skills = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  animation: moveBaixo 5s infinite alternate-reverse ease;

  li {
    position: relative;
    height: 60px;
    width: 60px;
    margin-block: 8px;
    border-radius: 10px;
    background-size: 50% 60%;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.9s;
    cursor: pointer;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 10px;
      top: 0;
      left: 0;
    }
  }
  li:first-child {
    background-image: url("${pict1}");
    &:hover {
      box-shadow: 1px 1px 10px #e34c26;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #e34c26;
    }
  }
  li:nth-child(2) {
    background-image: url("${pict2}");
    &:hover {
      box-shadow: 1px 1px 10px #2965f1;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #2965f1;
    }
  }
  li:nth-child(3) {
    background-image: url("${pict3}");
    &:hover {
      box-shadow: 1px 1px 10px #f0db4f;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #f0db4f;
    }
  }
  li:nth-child(4) {
    background-image: url("${pict4}");
    &:hover {
      box-shadow: 1px 1px 10px #cc6699;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #cc6699;
    }
    background-size: 70% 60%;
  }
  li:nth-child(5) {
    background-image: url("${pict5}");
    &:hover {
      box-shadow: 1px 1px 10px #f34f29;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #f34f29;
    }
  }
  li:nth-child(6) {
    background-image: url("${pict6}");
    &:hover {
      box-shadow: 1px 1px 10px #1c84bc;
    }
    &:hover:after {
      box-shadow: -1px -1px 10px #1c84bc;
    }
  }
  li:last-child {
    background-image: url("${pict7}");
    &:hover {
      box-shadow: 1px 1px 10px rgb(211, 53, 198);
    }
    &:hover:after {
      box-shadow: -1px -1px 10px rgb(211, 53, 198);
    }
  }
  @keyframes moveBaixo {
    0% {
      margin-right: 20%;
    }
    100% {
      margin-right: -20%;
    }
  }
`;
