import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieCard from "../components/movieCard";
import * as C from "./Components.styled";

const Movie = () => {
  const navigate = useNavigate();
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

  const formatCur = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleBack = () => {
    navigate("/topMovies");
  };

  return (
    <C.ContainerMovie className="h-screen overflow-y-auto">
      {movie && (
        <>
          <C.DivPosterMovie>
            {movie && (
              <C.StyledImg
                src={posterUrl}
                width="490"
                height="300"
                className=""
                alt={movie?.title}
              />
            )}
          </C.DivPosterMovie>
          <C.MovieDetails>
            <C.MovieTitle className="text-slate-200">
              {movie.title}
            </C.MovieTitle>

            <C.MovieRelease> {movie?.release_date}</C.MovieRelease>

            <C.MovieOverview
              className="text-slate-300"
              style={{ marginBottom: "0.3rem" }}
            >
              {" "}
              {movie?.overview}{" "}
            </C.MovieOverview>

            <C.MovieOverview className="text-slate-300">
              Lingua Original: {movie.original_language.toUpperCase()}{" "}
            </C.MovieOverview>

            <C.MovieOverview className="text-slate-300">
              {" "}
              Orçamento:{" "}
              {movie.budget > 0 ? formatCur(movie?.budget) : "Não divulgado"}
            </C.MovieOverview>

            <C.MovieOverview className="text-slate-300">
              Faturamento:{" "}
              {movie.revenue > 0 ? formatCur(movie?.revenue) : "Não divulgado"}
            </C.MovieOverview>
            <C.MovieOverview className="text-slate-300">
              {" "}
              Duração: {movie?.runtime} Minutos
            </C.MovieOverview>

            <C.ButtonBack onClick={handleBack} style={{ marginTop: "0.5em" }}>
              Voltar
            </C.ButtonBack>
          </C.MovieDetails>
        </>
      )}
    </C.ContainerMovie>
  );
};

export default Movie;
