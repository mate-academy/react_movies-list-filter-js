import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const lowerQuery = searchQuery.toLowerCase();

  const lowercasedMovies = moviesFromServer.map(movie => ({
    ...movie,
    lowercasedTitle: movie.title.toLowerCase(),
    lowercasedDescription: movie.description.toLowerCase(),
  }));

  const visibleMovies = lowercasedMovies.filter(
    movie =>
      movie.lowercasedTitle.includes(lowerQuery) ||
      movie.lowercasedDescription.includes(lowerQuery),
  );

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
                onChange={event => setSearchQuery(event.target.value.trim())}
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
