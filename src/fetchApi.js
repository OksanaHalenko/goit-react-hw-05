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
