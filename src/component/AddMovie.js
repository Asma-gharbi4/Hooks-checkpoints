import React, { useState } from 'react';
import Modal from 'react-modal';



Modal.setAppElement('#root');

const AddMovie = ({ AddNewMovie }) => {
const [modalIsOpen, setIsOpen] = useState(false);
const [title, setTitle] = useState('');
const [rating, setRating] = useState('');
const [image, setImage] = useState('');
const [description, setDescription] = useState('');
const [year , setYear]=useState('')
const [trailer,setTrailer]=useState('')
const [id,setId]=useState('')
const openModal = () => {
    setIsOpen(true);
};

const closeModal = () => {
    setIsOpen(false);
};

const handleChange = (e) => {
    let newMovie = {
    title,
    rating,
    image,
    description,
    year,
    trailer:<iframe width="650" height="350" src={`${trailer}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    id,
    };
    AddNewMovie(e, newMovie);
    setIsOpen(false);
    setTitle('');
    setRating('');
    setImage('');
    setDescription('');
    setYear('')
    setTrailer('')
    setId('')
};

    return (
    <div className='add-movie'>
        <button className='Add-btn' onClick={openModal}>
        Add Movie
        </button>
        <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        >
        
        <div className="center">
        <h1>Add A Movie</h1>
        <form>
        
         <div class="inputbox">
            <input type='text' required="required" name='id' value={id} onChange={(e) => setId(e.target.value)} />
            <span>Movie Id</span>
        </div>
            
        <div class="inputbox">
            <input type='text' required="required" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <span>Movie Name</span>
        </div>
        <div class="inputbox">
            
            <input type='number' required="required" name='rating'value={rating} onChange={(e) => setRating(e.target.value)} />
            <span>Movie Rate</span>
        </div>
        <div class="inputbox">
            <input type='number' required="required" name='year'value={year} onChange={(e) => setYear(e.target.value)} />
            <span>Release year</span>
         </div>
        <div class="inputbox">
           
            <input type="text" name="description" value={description} required rows="4" cols="50" onChange={(e) => setDescription(e.target.value)}/>
            <span>Movie Description</span>
        </div>
        <div class="inputbox">
            
            <input type='text' required="required" name='image' onChange={(e) => setImage(e.target.value)} />
            <span>Movie Image</span>
        </div>
        <div class="inputbox">
            
            <input type={(URL)} required="required" name='trailer' onChange={(e) => setTrailer(e.target.value)} />
            <span>Movie Trailer</span>
        </div>
           
           
        </form>
       
        <button className='Modal-btn' onClick={handleChange}>
            Submit
        </button>
        <button className='Modal-btn' onClick={closeModal}>
            close
        </button>
        </div>
        </Modal>
    </div>
    );
}

export default AddMovie;