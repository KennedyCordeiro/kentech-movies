import express from "express";
const app = express();
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export const getTopMovies = () => {
  app.get("/api/top-rated-movies", async (req, res) => {
    try {
      const response = await fetch(`${moviesUrl}/top_rated?${apiKey}`);
      const data = await response.json();
      res.json(data); // Envie os dados como resposta
    } catch (error) {
      console.error("Erro ao buscar os filmes:", error);
      res.status(500).json({ error: "Erro ao buscar os filmes" });
    }
  });
};
