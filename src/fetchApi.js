import axios from "axios";

export const fetchApi = async () => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjk1MGY5MGRmNGFmMjc4ZWZmYzI4MjQ2ODFhNGI2ZCIsInN1YiI6IjY2NWRmMWMwNTFjY2VmZWE3MGU1NDcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gM0JM_MNTyJ2VazkY_4xQCCBwQVw5RmzpC8vzn6v8NM",
    },
  };
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const { data } = await axios.get(url, options);

  return data.results;
};
export const fetchMovieWithTopic = async (topic, page) => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjk1MGY5MGRmNGFmMjc4ZWZmYzI4MjQ2ODFhNGI2ZCIsInN1YiI6IjY2NWRmMWMwNTFjY2VmZWE3MGU1NDcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gM0JM_MNTyJ2VazkY_4xQCCBwQVw5RmzpC8vzn6v8NM",
    },
    params: {
      query: topic,
      page,
    },
  };
  const { data } = await axios.get(url, options);
  return data.results;
};
