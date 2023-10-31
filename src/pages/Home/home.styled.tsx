import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"; // Substitua pelo seu roteador de escolha
import BackgroundImage from "../../assets/images/background-right.svg";

export const ContainerHome = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  align-items: end;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  right: 50%;
`;

export const DivText = styled.div`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-weight: 500;
  width: 40%;
  margin-right: 8em;
  flex-direction: column;
  padding: 0.5em;
`;
