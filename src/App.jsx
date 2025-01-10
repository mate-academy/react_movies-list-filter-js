import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const displayMovies = (movies, query) => {
    let showMovies = movies;
    const normalizeQuery = query?.trim().toLowerCase();

    if (normalizeQuery) {
      showMovies = showMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizeQuery) ||
          movie.description.toLowerCase().includes(normalizeQuery),
      );
    }

    return showMovies;
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
                placeholder="Type search word"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={displayMovies([...moviesFromServer], searchQuery)}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
