import React, { useState } from 'react';
import { moviesData } from './component/MoviesData';
import Search from './component/Filter';
import MoviesList from './component/MovieList';
import AddMovie from './component/AddMovie';
import './App.css';
function Home() {
    const [moviesList, setMoviesList] = useState(moviesData);
    const [searchMovie, setSearchMovie] = useState('');
    const [ratingSearch, setRatingSearch] = useState(1);
    
    const AddNewMovie = (e, newMovie) => {
      e.preventDefault();
      setMoviesList([...moviesList, newMovie]);
    };
    
        return (
          <div className='App'>
            <h1 className="moviebest">BestMovies</h1>
            <Search
              setSearchMovie={setSearchMovie}
              ratingSearch={ratingSearch}
              setRatingSearch={setRatingSearch}
            />
            <AddMovie AddNewMovie={AddNewMovie} />
            <MoviesList
              moviesList={moviesList}
              searchMovie={searchMovie}
              ratingSearch={ratingSearch}
            />
          </div>
        );
    }
    export default Home;