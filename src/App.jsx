import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filteredArrayOfMovies(q, m) {
  const normalizedQuery = q.trim().toLowerCase();

  const filteredMovies = m.filter(movie => {
    const alteredMovieTitle = movie.title.trim().toLowerCase();
    const alteredMovieDescription = movie.description.trim().toLowerCase();

    if (
      alteredMovieTitle.includes(normalizedQuery) ||
      alteredMovieDescription.includes(normalizedQuery)
    ) {
      return true;
    }

    return false;
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filteredArrayOfMovies(query, moviesFromServer);

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
                onChange={e => {
                  setQuery(e.target.value);
                }}
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
