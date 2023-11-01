import express from "express";
import cors from "cors";
import timeout from "connect-timeout";
const app = express();
const apiKey = "api_key=dd3b22c7dac9f4b6fef0ed1bdf88b9f0";
const movieURL = "https://api.themoviedb.org/3/movie/";
const searchURL = "https://api.themoviedb.org/3/search/movie";
const imgURL = "https://image.tmdb.org/t/p/w500";
const recentURL = "https://api.themoviedb.org/3/movie/upcoming";

const PORT = 3000;
app.use(timeout("300000"));
app.use(cors());
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/api/top_movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=pt-BR`
    );
    const data = await response.json();

    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    res.json(data.results);
  } catch (error) {
    console.error("Erro ao buscar os filmes:", error);
    res.status(500).json({ error: "Erro ao buscar os filmes" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const { search_path } = req.query;
    const response = await fetch(
      `${searchURL}?${apiKey}&query=${search_path}&language=pt-BR`
    );
    const data = await response.json();

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
    const stest = `${movieURL}${movie_id}?${apiKey}`;
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
