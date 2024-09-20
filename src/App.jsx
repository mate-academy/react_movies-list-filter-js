import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filtered = moviesFromServer.filter(movie => {
    const fixTitle = movie.title.toLowerCase().trim();
    const fixDescription = movie.description.toLowerCase().trim();
    const fixQuery = query.toLowerCase().trim();

    return fixTitle.includes(fixQuery) || fixDescription.includes(fixQuery);
  });

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
                onChange={event => setQuery(event.target.value.trimStart())}
              />
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <MoviesList movies={filtered} />
        ) : (
          <p style={{ textAlign: 'center' }}>
            Sorry, the movie you are looking for was not found.
          </p>
        )}
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
