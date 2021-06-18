import React from 'react';
import Rate from './Rate';

const SearchMovie = ({ setSearchMovie, ratingSearch, setRatingSearch }) => {
    return (
    <div className='search-container'>
        <input
        type='text'
        placeholder='Type movie name to search'
        onChange={(e) => setSearchMovie(e.target.value)}
        />
        <Rate  
        rating={ratingSearch} setRatingSearch={setRatingSearch}
        />
    </div>
    );
}

export default SearchMovie;