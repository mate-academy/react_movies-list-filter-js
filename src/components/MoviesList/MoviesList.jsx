import './MoviesList.scss';
import { useState } from 'react';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => {
  const [query, setQuery] = useState('');

  const visibleMovies = movies.filter((movie) => {
    const formattedQuery = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(formattedQuery)
      || movie.description.toLowerCase().includes(formattedQuery)
    );
  });

  return (
    <div>
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="movies">
        {visibleMovies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
};
