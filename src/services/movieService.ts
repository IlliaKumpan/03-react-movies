import axios from 'axios';
import type { Movie, FetchMoviesResponse } from '../types/movie'; 
const API_KEY = import.meta.env.VITE_TMDB_TOKEN;


axios.defaults.baseURL = 'https://api.themoviedb.org/3'; 

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query: query,
      include_adult: false,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };


  const response = await axios.get<FetchMoviesResponse>('/search/movie', config);
  return response.data.results;
};