import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  let visibleMovies = [...movies];

  if (!query || !query.trim()) {
    return visibleMovies;
  }

  visibleMovies = visibleMovies.filter(
    movie =>
      movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      movie.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = getVisibleMovies(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={filteredMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
