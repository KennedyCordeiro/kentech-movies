import React from "react";
import MovieCard from "../components/movieCard";
import { Container, DivTitle, DivMovies } from "./Components.styled";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { StyledButton } from "../components/movieCard/movieCard.styled";
import ButtonStyled from "../components/buttonStyled";

const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetch("http://localhost:3000/api/up_coming")
      .then((response) => response.json())
      .then((data) => setRecentMovies(data))
      .catch((error) => console.error("Erro ao buscar os filmes:", error));
  }, []);

  const fetchMoreMovies = () => {
    const nextPage = page + 1;
    fetch(`http://localhost:3000/api/up_coming?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => {
        setRecentMovies((prevMovies) => [...prevMovies, ...data]);
        setPage(nextPage);
      })
      .catch((error) => console.error("Erro ao buscar mais filmes:", error));
  };

  return (
    <>
      <Container className="h-screen overflow-y-auto">
        <DivTitle>Recentes</DivTitle>
        <DivMovies>
          {recentMovies.length > 0 &&
            recentMovies.map((movie) => (
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

export default RecentMovies;
