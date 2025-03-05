import React from 'react';
import './MoviesList.css';

function MoviesList({ movies }) {
    return (
        <ul className="movies">
            {movies.map(movie => (
                <li key={movie.id} className="movies__item">
                    <h2 className="movies__title">{movie.title}</h2>
                    <p className="movies__description">{movie.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default MoviesList;
