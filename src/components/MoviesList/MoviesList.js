import React from 'react';
import './MoviesList.css'
import { MovieListItem } from '../MovieListItem/MovieListItem'; 
import PropTypes from 'prop-types';

export function MoviesList({ movies }) {
  return (
    <div>
      <ul className="MoviesList">
      {movies.map((item, index) => (
        <MovieListItem
        key={`${item.id}+${index}`}
          imageUrl={item.poster_path}
          title={item.title}
          id={item.id}
        />
      ))}
    </ul>
    </div>
    
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};