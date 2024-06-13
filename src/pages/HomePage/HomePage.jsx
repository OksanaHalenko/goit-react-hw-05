import { useEffect, useState } from "react";
import { fetchApi } from "../../fetchApi";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
      <h1>The trends in the week</h1>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage
          text={"Whoops, something went wrong! Please try reloading this page!"}
        />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
