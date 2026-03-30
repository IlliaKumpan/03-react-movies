import css from './App.module.css';
import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import type { Movie } from '../../types/movies';
import { fetchMovies } from '../../services/movieService';
//import MovieModal from '../MovieModal/MovieModal';
//import { useState } from 'react';


interface MoviesHttpResponse {
  hits: Movie[];
}


export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      
      //Запит
      const data = await fetchMovies(topic);
      
      setMovies(data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };



    return (
        <>
            <div className={css.app}>
                <SearchBar onSubmit={handleSearch}/>
                <MovieGrid />
                <Loader />
                <ErrorMessage />
                
            </div>
        </>
    );
}

//<MovieModal />