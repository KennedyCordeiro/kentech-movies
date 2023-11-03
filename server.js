import express from "express";
import cors from "cors";
import NodeCache from "node-cache";

const app = express();
const apiKey = "api_key=dd3b22c7dac9f4b6fef0ed1bdf88b9f0";
const movieURL = "https://api.themoviedb.org/3/movie/";
const searchURL = "https://api.themoviedb.org/3/search/movie";
const imgURL = "https://image.tmdb.org/t/p/w500";
const recentURL = "https://api.themoviedb.org/3/movie/upcoming";
const topMoviesURL = "https://api.themoviedb.org/3/movie/top_rated";
const PORT = 3000;
// **************Cache de filmes*************
const cache = new NodeCache();

// **************Cache de pesquisa *************
const searchHistoryCache = new NodeCache();

app.use(cors());

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/api/top_movies", async (req, res) => {
  try {
    const { page } = req.query;
    const cacheKey = `top_movies_${page || "default"}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("Dados encontrados no cache.");
      res.json(cachedData);
      return;
    }

    let response;
    page
      ? (response = await fetch(
          `${topMoviesURL}?${apiKey}&language=pt-BR&page=${page}`
        ))
      : (response = await fetch(`${topMoviesURL}?${apiKey}&language=pt-BR`));

    const data = await response.json();

    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    cache.set(cacheKey, data.results, 3600);

    res.json(data.results);
  } catch (error) {
    console.error("Erro ao buscar os filmes:", error);
    res.status(500).json({ error: "Erro ao buscar os filmes" });
  }
});

app.get("/api/up_coming", async (req, res) => {
  try {
    const { page } = req.query;

    const cacheKey = `up_coming${page || "default"}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("Dados encontrados no cache.");
      res.json(cachedData);
      return;
    }

    let response;
    page
      ? (response = await fetch(
          `${recentURL}?${apiKey}&language=pt-BR&page=${page}`
        ))
      : (response = await fetch(`${recentURL}?${apiKey}&language=pt-BR`));

    const data = await response.json();

    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    cache.set(cacheKey, data.results, 3600);

    res.json(data.results);
  } catch (error) {
    console.error("Erro ao buscar o poster do filme:", error);
    res.status(500).json({ error: "Erro ao buscar o poster do filme" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const { search_path } = req.query;
    const response = await fetch(
      `${searchURL}?${apiKey}&query=${search_path}&language=pt-BR`
    );
    const data = await response.json();

    searchHistoryCache.set(search_path);

    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.json(data.results);
  } catch (error) {
    console.error("Erro ao buscar o poster do filme:", error);
    res.status(500).json({ error: "Erro ao buscar o poster do filme" });
  }
});

app.get("/api/getMovie", async (req, res) => {
  try {
    const { movie_id } = req.query;
    const response = await fetch(
      `${movieURL}${movie_id}?${apiKey}&language=pt-BR`
    );
    const data = await response.json();

    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar o poster do filme:", error);
    res.status(500).json({ error: "Erro ao buscar o poster do filme" });
  }
});

app.get("/api/searchPoster", async (req, res) => {
  try {
    const { poster_path } = req.query;
    const imagePath = `${imgURL}${poster_path}`;

    res.header("Content-Type", "image/jpeg");
    res.send(imagePath);
  } catch (error) {
    console.error("Erro ao buscar o poster do filme:", error);
    res.status(500).json({ error: "Erro ao buscar o poster do filme" });
  }
});
