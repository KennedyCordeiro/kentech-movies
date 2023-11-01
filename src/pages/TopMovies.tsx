import React, { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { Container, DivTitle, DivMovies } from "./Components.styled";
import Carousel from "../components/carousel";

const MoviesHome = () => {
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
        <DivTitle className="text-4xl">Top Filmes</DivTitle>
        <br />
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

export default MoviesHome;
