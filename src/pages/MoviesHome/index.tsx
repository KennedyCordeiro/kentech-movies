import React from "react";
import { useState, useEffect } from "react";

const MoviesHome = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch("/api/top-rated-movies");
        const data = await response.json();
        setTopMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {topMovies.map((movie, index) => (
          <li className="text-slate-700 text-4xl text-center" key={index}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesHome;
