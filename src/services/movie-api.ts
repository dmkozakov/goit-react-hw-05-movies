import { IMovie } from 'interfaces/IMovie';
import axios from 'axios';
import { IReview } from 'interfaces/IReviews';
import { ICast } from 'interfaces/ICast';
export let controller = new AbortController();

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDllNDQ3NzZkODk4M2I4MjUxZGIyM2UwYTBkMDc2NCIsInN1YiI6IjY0OTk0ZWIxNmY0M2VjMDEzOTliMDJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfMWjVI_xe7Qrg38kb3t2TBDdyF9nQKUMfvJwYSbESc';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  language: 'en-US',
  sort_by: 'popularity.desc',
  include_adult: false,
};

interface Movies {
  data: { results: IMovie[] };
}

interface SingleMovie {
  data: IMovie;
}

interface SingleReview {
  data: {
    results: IReview[];
  };
}

interface SingleCast {
  data: {
    cast: ICast[];
  };
}

function getTrendingMovies(): Promise<Movies> {
  return axios.get('trending/movie/day', {
    signal: controller.signal,
  });
}

function searchMovies(query: string, page = 1): Promise<Movies> {
  return axios.get(`search/movie?query=${query}&page=${page}`);
}

function getMovieDetails(movieId: string): Promise<SingleMovie> {
  return axios.get(`movie/${movieId}`);
}

function getMovieCredits(movieId: string): Promise<SingleCast> {
  return axios.get(`movie/${movieId}/credits`);
}

function getMovieReviews(movieId: string): Promise<SingleReview> {
  return axios.get(`movie/${movieId}/reviews`);
}

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
