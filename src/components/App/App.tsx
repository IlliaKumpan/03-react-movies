import css from './App.module.css';
//import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';




export default function App() {
   
    return (
        <>
            <div className={css.app}>
                <SearchBar />
                <MovieGrid />
                <Loader />
                <ErrorMessage />
                <MovieModal />
            </div>
        </>
    );
}