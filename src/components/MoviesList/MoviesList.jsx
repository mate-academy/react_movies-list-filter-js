import React from 'react';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => {
  return (
    <div className="container">
      <ul className="movies-list" data-cy="moviesList">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
