import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  function filterBy(newQuary) {
    setQuery(newQuary);
    const filteredMovies = moviesFromServer.filter(movie => {
      const titleLowerCase = movie.title.toLowerCase();
      const descriptionLowerCase = movie.description.toLowerCase();
      const queryLowerCase = newQuary.trim().toLowerCase();

      return (
        titleLowerCase.includes(queryLowerCase) ||
        descriptionLowerCase.includes(queryLowerCase)
      );
    });

    setVisibleMovies(filteredMovies);
  }

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={event => filterBy(event.target.value)}
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
