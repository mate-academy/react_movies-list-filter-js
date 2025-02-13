import React from 'react';

export const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
  </div>
);
