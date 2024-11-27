import React from 'react';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <h3 className="title">{movie.title}</h3>
    <p>{movie.description}</p>
  </div>
);
