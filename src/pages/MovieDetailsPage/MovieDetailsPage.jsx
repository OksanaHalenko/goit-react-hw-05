import { Link, Outlet, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  return (
    <div className={css.container}>
      <h2>Movie {movieId} details page</h2>
      <h3>Addition information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
