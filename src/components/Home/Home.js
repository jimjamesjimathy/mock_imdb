import React, { useEffect }from 'react';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Home.scss';



export default function Home() {
  const dispatch = useDispatch();
  const movieText = 'Star Wars';
  const seriesText = 'Star Wars';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);

  return (
    <div className='Home'>
      <MovieList />
    </div>
  )
}
