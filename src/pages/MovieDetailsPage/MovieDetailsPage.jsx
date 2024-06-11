import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../fetchApi";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  const makeLinksClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <div className={css.container}>
      <Link to={backLink.current} className={css.goBackBtn}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <NotFoundPage />}

      {movie && (
        <div className={css.wrapper}>
          <img
            className={css.poster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div className={css.box}>
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.description}>{movie.overview}</p>
            <p className={css.details}>
              Popularity: <span>{Math.round(movie.popularity)}</span>
            </p>
            <p className={css.details}>
              Genres:{" "}
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
            </p>
          </div>
        </div>
      )}
      <h2>Additional Information</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast" className={makeLinksClass}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews" className={makeLinksClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default MovieDetailsPage;
