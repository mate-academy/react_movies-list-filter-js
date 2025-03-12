import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <h2 className="title">{movie.title}</h2>
    <p>{movie.description}</p>
  </div>
);
