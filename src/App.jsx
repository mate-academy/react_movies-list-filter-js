import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const filterMovies = event => {
    const queryWithoutSpaces = event.replace(/\s+/g, '').toLowerCase();

    const filteredMovies = moviesFromServer.filter(movie => {
      const titleWithoutSpaces = movie.title.replace(/\s+/g, '').toLowerCase();
      const descriptionWithoutSpaces = movie.description
        .replace(/\s+/g, '')
        .toLowerCase();

      return (
        titleWithoutSpaces.includes(queryWithoutSpaces) ||
        descriptionWithoutSpaces.includes(queryWithoutSpaces)
      );
    });

    setVisibleMovies(filteredMovies);
  };

  const handleQuery = element => {
    const searchQuery = element.target.value;

    setQuery(searchQuery);
    filterMovies(searchQuery);
  };

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
                value={query}
                placeholder="Type search word"
                onChange={handleQuery}
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
