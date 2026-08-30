import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (query, movies) => {
  if (!query) {
    return movies;
  }

  const normalizeQuery = query.trim().toLowerCase();
  const filteredMovies = movies.filter(movie => {
    const matchTitle = movie.title.toLowerCase().includes(normalizeQuery);

    const matchDescription = movie.description
      .toLowerCase()
      .includes(normalizeQuery);

    return matchTitle || matchDescription;
  });

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(query, moviesFromServer);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
