import { useState } from "react";
import * as C from "./Components.styled";
import ButtonStyled from "../components/buttonStyled";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/topMovies");
  };

  return (
    <C.ContainerHome className="h-screen overflow-y-auto">
      <C.DivText>
        <h1 className="text-6xl sm:text-8xl font-normal md:text-9xl lg:text-10xl xl:text-11xl  text-white">
          Bem vindo a Kentech Filmes
        </h1>
        <ButtonStyled Onclick={handleButton} Text="Vamos lá"></ButtonStyled>
      </C.DivText>
    </C.ContainerHome>
  );
};

export default Home;
