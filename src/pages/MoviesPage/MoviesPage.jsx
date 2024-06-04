import { lazy, useEffect, useState } from "react";
import { fetchMovieWithTopic } from "../../fetchApi";

import SearchBar from "../../components/SearchBar/SearchBar";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    if (topic === "") {
      return;
    }
    const handleSearch = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieWithTopic(topic, page);
        const newMovies = data;
        setMovies((prevMovies) => {
          return [...prevMovies, ...newMovies];
        });
        setTotalPage(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [page, topic]);

  const handleSubmit = async (dataSearch) => {
    setTopic(dataSearch);
    setMovies([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {error ? (
        <ErrorMessage
          text={"Whoops, something went wrong! Please try reloading this page!"}
        />
      ) : totalPage === 0 ? (
        <ErrorMessage text={"Sorry, no films was found. Try another query."} />
      ) : (
        <MovieList movies={movies} />
      )}

      <Loader loading={loading} />

      {!loading && movies.length > 0 && page !== totalPage && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </>
  );
}

export default MoviesPage;
