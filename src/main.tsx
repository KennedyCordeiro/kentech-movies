import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie.tsx";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import TopMovies from "./pages/TopMovies.tsx";
import RecentMovies from "./pages/RecentMovies.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="topMovies" element={<TopMovies />} />
          <Route path="recentMovies" element={<RecentMovies />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
