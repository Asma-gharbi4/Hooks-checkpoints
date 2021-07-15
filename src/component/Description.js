import React from 'react'
import {useParams} from 'react-router-dom'
import {moviesData} from './MoviesData'
import { Link } from 'react-router-dom'
import StarRatingComponent from "react-star-rating-component";
function Description({movie}) {
    const {movieId}=useParams()
    return (
        <div className='descrip'>
        <div className='desc'>
            
            <img className='Movie-Description-Image' src={moviesData.find(movie=>movie.id==movieId).image} alt='' />
    <br/>
    <div className= "Movie-Description-informations">
    
    <h1 >Title: {moviesData.find(movie=>movie.id==movieId).title}</h1>
    <div className='over-view'>
        <h4 className='year'>Release Year: {moviesData.find(movie=>movie.id==movieId).year}</h4>
        <div className='star'>
        <StarRatingComponent
          name="Rate"
          className="star-rating-movie-Description"
          starColor="gold"
          emptyStarColor="grey"
          starCount={5}
          value={moviesData.find(movie=>movie.id==movieId).rating}
        />
        </div>
        <h2>Description</h2>
    <p>{moviesData.find(movie=>movie.id==movieId).description} </p>
    </div>
    <div className='trailer'>
    <h1>WATCH TRAILER</h1>
    <span> {moviesData.find(movie=>movie.id==movieId).trailer}</span>
    </div>
    <div className='back'>
        <Link to ='/' ><button className='back-btn'>Back</button></Link>
        </div>
    <br/>
    </div>
    
        </div>
        
        </div>
       
    )
}

export default Description