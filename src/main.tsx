import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie.tsx";
import Home from "./pages/Home/index.tsx";
import Search from "./pages/Search.tsx";
import MoviesHome from "./pages/MoviesHome/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider defaultColorScheme="dark">
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="moviesHome" element={<MoviesHome />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
