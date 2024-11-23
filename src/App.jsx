import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  const lowerCaseQuery = query.trim().toLowerCase();

  return movies.filter(movie => {
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseDescription = movie.description.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseQuery) ||
      lowerCaseDescription.includes(lowerCaseQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, { query });

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
                onChange={e => setQuery(e.currentTarget.value)}
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
