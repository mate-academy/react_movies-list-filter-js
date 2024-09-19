import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(query) {
  const normalizedQuery = query.toLowerCase().trim();

  return moviesFromServer.filter(movie => {
    const normalizedMovieTitle = movie.title.toLowerCase().trim();
    const normalizedMovieDescription = movie.description.toLowerCase().trim();

    return (
      normalizedMovieTitle.includes(normalizedQuery) ||
      normalizedMovieDescription.includes(normalizedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(query);

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
