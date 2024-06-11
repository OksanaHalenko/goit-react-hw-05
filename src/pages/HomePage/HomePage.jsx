import { useEffect, useState } from "react";
import { fetchApi } from "../../fetchApi";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const HomePage = () => {
  const [movies, setMovies] = useState([{ id: 1, title: "halo" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await fetchApi();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      <Navigation />
      {loading && <Loader />}
      {error && <NotFoundPage />}
      <h1>Trending this week</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
