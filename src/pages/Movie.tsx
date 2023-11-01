import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/movieCard";
import * as C from "./Components.styled";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [posterUrl, setPosterUrl] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/api/getMovie?movie_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        if (data && data.poster_path) {
          getPosterUrl(data.poster_path);
        }
      })
      .catch((error) => console.error("Erro ao buscar o poster:", error));
  }, []);

  const getPosterUrl = (posterPath: string) => {
    fetch(`http://localhost:3000/api/searchPoster?poster_path=${posterPath}`)
      .then((response) => response.text())
      .then((imageUrl) => {
        setPosterUrl(imageUrl); // Atualiza o estado com o link do pôster
      })
      .catch((error) => console.error("Erro ao buscar o poster:", error));
  };

  return (
    <C.ContainerMovie className="h-screen overflow-y-auto">
      {movie && (
        <C.DivMovies>
          <>
            {movie && (
              <C.StyledImg
                src={posterUrl}
                width="390"
                height="200"
                className=""
                alt={movie?.title}
              />
            )}
          </>
        </C.DivMovies>
      )}
    </C.ContainerMovie>
  );
};

export default Movie;
