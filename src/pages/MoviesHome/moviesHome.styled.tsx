import styled from "styled-components";

import BackgroundImage from "../../assets/images/background-right.svg";
export const Container = styled.div`
  display: flex;
  background-image: url(${BackgroundImage});
  flex-direction: column;
`;

export const DivCarousel = styled.div`
  width: 100%;
  display: flex;
`;

export const DivMovies = styled.div`
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  padding: 1.5em;
  display: grid;
`;

export const DivTitle = styled.div`
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
  color: #fffe;

  height: 10em;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  margin-top: 0.5em;
`;
