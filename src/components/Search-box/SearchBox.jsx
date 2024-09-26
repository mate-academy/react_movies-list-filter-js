import React, { useEffect } from 'react';
import moviesFromServer from '../../api/movies.json';

export const SearchBox = ({ setQuery, setVisibleMovies, query }) => {
  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const visibleMovies = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );

    setVisibleMovies(visibleMovies);
  }, [query, setVisibleMovies]);

  return (
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
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
