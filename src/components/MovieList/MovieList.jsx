import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p className={css.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
