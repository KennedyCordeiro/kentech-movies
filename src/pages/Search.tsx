import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import * as C from "./Components.styled";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    fetch(`http://localhost:3000/api/search?search_path=${query}`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Erro ao buscar o poster:", error));
  }, [query]);

  return (
    <C.Container className="h-screen overflow-y-auto">
      <C.DivSearchTitle>Exibindo resultados para '{query}'</C.DivSearchTitle>

      <C.DivMovies>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </C.DivMovies>
    </C.Container>
  );
};

export default Search;
