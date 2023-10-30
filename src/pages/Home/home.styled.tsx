import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"; // Substitua pelo seu roteador de escolha
import BackgroundImage from "../../assets/images/background-right.svg";

export const ContainerHome = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
`;

export const ImageContainer = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  right: 50%;
`;
