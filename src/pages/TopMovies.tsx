import React, { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { Container, DivTitle, DivMovies } from "./Components.styled";
import Carousel from "../components/carousel";
import ButtonStyled from "../components/buttonStyled";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch("http://localhost:3000/api/top_movies")
      .then((response) => response.json())
      .then((data) => setTopMovies(data))
      .catch((error) => console.error("Erro ao buscar os filmes:", error));
  }, []);

  const fetchMoreMovies = () => {
    const nextPage = page + 1;
    fetch(`http://localhost:3000/api/top_movies?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTopMovies((prevMovies) => [...prevMovies, ...data]);
        setPage(nextPage);
      })
      .catch((error) => console.error("Erro ao buscar mais filmes:", error));
  };

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

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "2em",
          }}
        >
          <ButtonStyled
            Onclick={fetchMoreMovies}
            Text="Carregar mais"
          ></ButtonStyled>
        </div>
      </Container>
    </>
  );
};

export default TopMovies;
