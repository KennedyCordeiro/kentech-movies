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

const theme = createTheme({
  colors: {
    dark: [
      "#16161A", // background
      "#94A1B2", // paragraph
      "#FFFFFE", // text-button
      "#7F5AF0", // button
    ],
  },
  fonts: {
    heading: "Euclid Circular A, sans-serif",
    body: "Poppins, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
