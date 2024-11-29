import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterBy = (movies, query) => {
  if (!query) {
    return movies;
  }

  return movies.filter(movie => {
    const titleLower = movie.title.toLowerCase();
    const descriptionLower = movie.description.toLowerCase();

    return titleLower.includes(query) || descriptionLower.includes(query);
  });
};

export const App = () => {
  const [query, setQuery] = useState('');
  const queryLower = query.trim().toLowerCase();

  const visiableMovies = filterBy(moviesFromServer, queryLower);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
