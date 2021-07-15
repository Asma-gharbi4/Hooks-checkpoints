import React from 'react';
import Rate from './Rate'
import { Link } from 'react-router-dom'
const MovieCard = ({ movie }) => {
return (
    <div key={movie.id} className='Movie-Container'>
    <img src={movie.image} alt='' />
    <Rate rating={movie.rating}/>
    <h1 className='Movie-Title'>{movie.title}</h1>
    <div className='over-view'>
        <h4 className='year'>{movie.year}</h4>
    
    </div>
    <Link to ={`/Description/${movie.id}`}><button className="description-btn">Description</button></Link>
    <div className="watch-btn">
    
                </div>
    </div>
);
};

export default MovieCard;