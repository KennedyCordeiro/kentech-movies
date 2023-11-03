import styled from "styled-components";
import BackgroundImage from "../assets/images/background-right.svg";
import BackgroundLeft from "../assets/images/background-left.svg";
import BackgroundMobile from "../assets/images/backgroundMobile.svg";
import BackgroundMobileLeft from "../assets/images/backgroundMobileLeft.svg";

export const Container = styled.div`
  display: flex;
  background-image: url(${BackgroundLeft});
  flex-direction: column;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-size: cover;
    background-image: url(${BackgroundMobileLeft});
  }
`;

export const ContainerHome = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  align-items: end;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    background-size: cover;
    background-image: url(${BackgroundMobile});
  }
`;

export const ContainerMovie = styled.div`
  display: flex;
  background-image: url(${BackgroundLeft});
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-size: cover;
    background-image: url(${BackgroundMobileLeft});
  }
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

export const DivPosterMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em 0 2em;

  @media screen and (max-width: 768px) {
    padding: 2em 1em 0 1em;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;

  @media screen and (max-width: 768px) {
    margin: 1em 1em;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }
`;

export const MovieOverview = styled.div`
  font-size: 1.1vw;
  width: 65%;
  @media screen and (max-width: 768px) {
    font-size: 3.3vw;
    width: 90%;
    text-align: center;
  }
`;

export const MovieRelease = styled.div`
  font-size: 1vw;
  font-weight: lighter;
  color: #94a1b2;

  @media screen and (max-width: 768px) {
    font-size: 3vw;
    padding: 0.5em;
  }
`;

export const MovieTitle = styled.div`
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: -0.2em;

  @media screen and (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 390px;
  height: 500px;
  &:hover {
    border: 0.5px solid white;
    transform: scale(1.05);
    transition: 0.3s ease-out;
  }
`;

export const StyledImgMovie = styled.img`
  object-fit: cover;
  width: 390px;
  height: 500px;
  margin: 0 1em 0 2em;
  &:hover {
    border: 0.5px solid white;
    transform: scale(1.05);
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    padding: 5em 1em 0 1em;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const DivTitle = styled.div`
  width: 18.625rem;
  height: 80px;
  align-self: center;
  display: flex;
  border-radius: 20% 0 20% 0;
  border: 1px solid #6639ef;
  font-family: "Poppins", sans-serif;
  color: #6639ef;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  margin: 1em 0 1em 0;
  font-size: 2.5vw;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fffe;
    color: #16161a;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 7vw;
    margin: 3em 0 0 0;
    width: 100%;
    height: 80px;
    border: 0;
    color: #fffe;
    cursor: default;

    &:hover {
      background-color: transparent;
      color: #fffe;
      transition: 0.5s ease-in-out;
    }
  }
`;

export const DivCarousel = styled.div`
  width: 100%;
  display: flex;
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

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 90%;
  }
`;
// **********Buttons ********************

export const ButtonBack = styled.button`
  --color: #6639ef;
  font-family: inherit;
  display: inline-block;
  width: 9em;
  height: 2.5em;
  line-height: 2.5em;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 600;
  color: var(--color);

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  &:hover {
    color: #fff;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  &:hover:before {
    top: -30px;
    left: -30px;
  }

  &:active:before {
    background: #6639ef;
    transition: background 0s;
  }
`;

const StyledButton = styled.button`
  padding: 1em 1em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #7f5af0;
  background-color: transparent;
  width: 250px;
  cursor: pointer;

  &.DivButton {
    margin-top: 60px;

    @media screen and (max-width: 900px) {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 900px) {
    letter-spacing: 2px;
    width: 250px;
    font-size: 12px;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.03);
    outline: 2px solid #7f5af0;
    box-shadow: 4px 5px 17px -4px #7f5af0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #7f5af0;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 700ms;
  }

  &:hover::before {
    width: 150%;
  }
`;
