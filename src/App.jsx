import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalizeText = text => text.trim().toLowerCase();

const filterMovies = (movies, query) => {
  let visibleMovies = [...movies];

  visibleMovies = visibleMovies.filter(movie => {
    const normalizedTitle = normalizeText(movie.title);
    const normalizedDescription = normalizeText(movie.description);
    const normalizedQuery = normalizeText(query);

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedDescription.includes(normalizedQuery)
    );
  });

  return visibleMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = filterMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
