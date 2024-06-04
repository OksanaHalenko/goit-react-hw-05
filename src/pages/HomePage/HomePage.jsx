import { useEffect, useState } from "react";
import { fetchApi } from "../../fetchApi";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = () => {
  const [movies, setMovies] = useState([{ id: 1, title: "halo" }]);

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

  return (
    <div>
      <Navigation />
      <h1>Trending this week</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
