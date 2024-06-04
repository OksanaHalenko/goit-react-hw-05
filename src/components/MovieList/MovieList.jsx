import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Link to="">{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
