import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../fetchApi";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {error && (
        <ErrorMessage
          text={"Whoops, something went wrong! Please try reloading this page!"}
        />
      )}
      {reviews.length === 0 ? (
        <ErrorMessage text={"We don't have any reviews for this movie"} />
      ) : (
        <div className={css.wrapper}>
          <ul className={css.list}>
            {reviews.map((review) => (
              <li key={review.id}>
                <div>
                  <p className={css.name}>{review.author}</p>
                  <p>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieReviews;
