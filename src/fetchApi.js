import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjk1MGY5MGRmNGFmMjc4ZWZmYzI4MjQ2ODFhNGI2ZCIsInN1YiI6IjY2NWRmMWMwNTFjY2VmZWE3MGU1NDcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gM0JM_MNTyJ2VazkY_4xQCCBwQVw5RmzpC8vzn6v8NM",
  },
};

export const fetchApi = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const { data } = await axios.get(url, options);

  return data.results;
};
export const fetchMovieWithTopic = async (topic, page) => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const optionsTopicSearch = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjk1MGY5MGRmNGFmMjc4ZWZmYzI4MjQ2ODFhNGI2ZCIsInN1YiI6IjY2NWRmMWMwNTFjY2VmZWE3MGU1NDcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gM0JM_MNTyJ2VazkY_4xQCCBwQVw5RmzpC8vzn6v8NM",
    },
    params: {
      query: topic,
      page,
    },
  };
  const { data } = await axios.get(url, optionsTopicSearch);
  return data;
};

export const getMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  const { data } = await axios.get(url, options);
  return data;
};
export const getMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const { data } = await axios.get(url, options);
  return data;
};

export const getMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const { data } = await axios.get(url, options);
  return data.results;
};
