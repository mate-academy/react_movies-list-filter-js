import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export function MoviesList({ movies }) {
  if (movies.length === 0) {
    return <p className="no-results">No movies found.</p>;
  }

  return (
    <div className="MoviesList">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
