import axios from 'axios';
const KEY = 'e57cb6e923888ba47f84eda8bb27c104';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getMainMovies = () => {
  return instance.get(`/trending/movie/day?api_key=${KEY}`);
};

export const getMovieById = id => {
  return instance.get(`/movie/${id}?api_key=${KEY}`);
};

export const getMovieByKeyword = (q, page = 1) => {
  return instance.get(
    `/search/movie?query=${q}}&api_key=${KEY}&include_adult=true&page=${page}`
  );
};

export const getMovieCast = id => {
  return instance.get(`/movie/${id}/credits?api_key=${KEY}`);
};

export const getMovieReviews = id => {
  return instance.get(`/movie/${id}/reviews?api_key=${KEY}`);
};
