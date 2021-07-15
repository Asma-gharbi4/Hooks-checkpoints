import React from 'react';
import {moviesData} from './MoviesData' 
import MovieCard from './MovieCard';

const MoviesList = ({ moviesList, searchMovie, ratingSearch }) => {
return (
    <div
    className="movies-list"
    style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        flexWrap: 'wrap',
    }}
    >
    {moviesList
        .filter(
        (el) =>
            el.title.toLowerCase().includes(searchMovie.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((movie,i) => 
        <MovieCard key={i} movie={movie} />
        
        )}
    </div>
);
};

export default MoviesList;