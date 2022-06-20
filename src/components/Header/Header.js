import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies,  fetchAsyncShows } from '../../features/movies/movieSlice';
import userImg from '../../images/placeholder.png';
import './Header.scss';


export default function Header() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('');
  }

  return (
    <div className='Header'>
        <div className='logo'>
          <Link to='/'>Movie App</Link>
        </div>
      
        <div className='search-bar'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={term} placeholder='find a show/movie' onChange={(e) => setTerm(e.target.value)}></input>
            <button type='submit'>Search</button>
          </form>
        </div>

      <div className='user-image'>
        <img src={userImg} alt='user' />
      </div>
    </div>
  )
};
