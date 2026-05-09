import React from 'react';

export const MovieCard = ({ movie }) => {
  const { title, description, imgUrl, imdbUrl } = movie;

  return (
    <li className="movies-list__item">
      <div className="movie-card card" data-cy="movie">
        <div className="movie-card__image">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="movie-card__info">
          <h2 className="movie-card__title title" data-cy="movieTitle">
            {title}
          </h2>
          <p className="movie-card__description" data-cy="movieDescription">
            {description}
          </p>
          <a
            href={imdbUrl}
            className="movie-card__link"
            target="_blank"
            rel="noreferrer"
          >
            More details
          </a>
        </div>
      </div>
    </li>
  );
};
