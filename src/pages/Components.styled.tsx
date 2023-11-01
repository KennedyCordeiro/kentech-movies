import styled from "styled-components";
import BackgroundImage from "../assets/images/background-right.svg";
import BackgroundLeft from "../assets/images/background-left.svg";

export const Container = styled.div`
  display: flex;
  background-image: url(${BackgroundLeft});
  flex-direction: column;
`;
export const DivMovies = styled.div`
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  padding: 1.5em;
  display: grid;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const DivTitle = styled.div`
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
  color: #fffe;

  align-items: center;
  font-weight: bold;
  justify-content: center;
  margin: 1em 0 1em 0;
`;

export const DivCarousel = styled.div`
  width: 100%;
  display: flex;
`;

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
