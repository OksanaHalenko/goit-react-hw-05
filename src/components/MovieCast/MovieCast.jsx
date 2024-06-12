import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../fetchApi";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

function MovieCast() {
  const { movieId } = useParams();
  const scrollRef = useRef();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  useEffect(() => {
    if (cast.length > 0) {
      window.scrollTo({
        top: 560,
        behavior: "smooth",
      });
    }
  }, [cast]);
  return (
    <div className={css.wrapper} ref={scrollRef}>
      {loading && <Loader />}
      {error && (
        <ErrorMessage
          text={"Whoops, something went wrong! Please try reloading this page!"}
        />
      )}
      <ul className={css.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.item}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              width={300}
              alt={actor.name}
            />
            <p className={css.name}>{actor.name}</p>
            <p className={css.description}>
              <span className={css.accent}> Role:</span> {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
