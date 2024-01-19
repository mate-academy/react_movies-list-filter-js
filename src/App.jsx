
import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = [...moviesFromServer].filter(movie => {
    const titleMatch
      = movie.title.toLowerCase().includes(query.toLowerCase().trim());
    const descriptionMatch
      = movie.description.toLowerCase().includes(query.toLowerCase().trim());

    return titleMatch || descriptionMatch;
  });

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
                onChange={event => setQuery(event.currentTarget.value)}
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
