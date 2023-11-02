import React, { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { Container, DivTitle, DivMovies } from "./Components.styled";
import Carousel from "../components/carousel";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/top_movies")
      .then((response) => response.json())
      .then((data) => setTopMovies(data))
      .catch((error) => console.error("Erro ao buscar os filmes:", error));
  }, []);

  return (
    <>
      <Container className="h-screen overflow-y-auto">
        <DivTitle>Top Filmes</DivTitle>
        <DivMovies>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </DivMovies>
      </Container>
    </>
  );
};

export default TopMovies;
