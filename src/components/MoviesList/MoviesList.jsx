import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="has-text-grey">No movies found.</p>;
  }

  return (
    <ul className="movies-list">
      {movies.map(movie => (
        <li key={movie.id} className="card">
          <div className="card-content">
            <h2 className="title is-5">{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
