import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetail, getSelected, removeSelected } from '../../features/movies/movieSlice';
import './MovieDetails.scss';


export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelected)

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));
    return () => {
      dispatch(removeSelected());
    }
  }, [dispatch, imdbID]);

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (<div>...Loading</div>) : 
      (<>
        <div className='section-left'>
          <div className='movie-title'><h2>{data.Title}</h2></div>
          <div className='movie-rating'>
            <p>
              IMDB Rating: {data.imdbRating}
            </p>
            <p>
              IMDB Votes: {data.imdbVotes}
            </p>
            <p>
              Run-time: {data.Runtime}
            </p>
            <p>
              Year: {data.Year}
            </p>
          </div>
          <div className='movie-plot'><h3>{data.Plot}</h3></div>
          <div className='movie-info'>
            <div>
              <p className='pc'>Directed by: </p>
              <p>{data.Director}</p>
            </div>
            <div>
              <p className='pc'>Cast: </p>
              <p>{data.Actors}</p>
            </div>
            <div>
              <p className='pc'>Genre</p>
              <p>{data.Genre}</p>
            </div>
            <div>
              <p className='pc'>Languages</p>
              <p>{data.Language}</p>
            </div>
            <div>
              <p className='pc'>Awards</p>
              <p>{data.Awards}</p>
            </div>
          </div>
        </div>
        <div className='section-right'>
          <img src={data.Poster} alt={data.Title}></img>
        </div>
      </>)}
    </div>
  )
}
