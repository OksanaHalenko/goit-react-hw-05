import "./App.css";

import { useEffect, useState } from "react";
import { fetchApi } from "../../fetchApi";

import MovieList from "../MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchApi();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("api");
      }
    }
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <>
      <MovieList />
    </>
  );
}

export default App;
