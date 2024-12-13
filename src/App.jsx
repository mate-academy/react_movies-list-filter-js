import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');
  const visibleMovies = movies.filter(movie => {
    const searchTerm = query.trim().toLowerCase(); // Trim whitespace, convert to lowercase

    const title = movie.title || '';
    const description = movie.description || '';

    return (
      title.toLowerCase().includes(searchTerm) ||
      description.toLowerCase().includes(searchTerm)
    );
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
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
