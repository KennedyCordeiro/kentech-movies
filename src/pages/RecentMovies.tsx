import React from "react";
import MovieCard from "../components/movieCard";
import { Container, DivTitle, DivMovies } from "./Components.styled";
import { useEffect, useState } from "react";

const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/up_coming")
      .then((response) => response.json())
      .then((data) => setRecentMovies(data))
      .catch((error) => console.error("Erro ao buscar os filmes:", error));
  }, []);

  return (
    <>
      <Container className="h-screen overflow-y-auto">
        <DivTitle>Recem chegados</DivTitle>
        <DivMovies>
          {recentMovies.length > 0 &&
            recentMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </DivMovies>
      </Container>
    </>
  );
};

export default RecentMovies;
