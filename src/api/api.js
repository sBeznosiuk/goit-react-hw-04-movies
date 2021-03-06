import axios from 'axios';

const API_KEY = '1ac1fd301cd441bc3d222350adc1c163';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const trendingMovies = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.data);
};

const searchMovie = movie => {
  return axios
    .get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}`)
    .then(res => res.data);
};

const movieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data);
};

const movieCast = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data);
};

const movieReviews = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
};

export { trendingMovies, searchMovie, movieDetails, movieCast, movieReviews };
