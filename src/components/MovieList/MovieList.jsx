import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function MovieList({ movies }) {
  const location = useLocation();

  if (movies.length === 0) {
    return <ErrorMessage text="No movies to display" />;
  }
  return (
    <ul className={css.MovieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p className={css.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
