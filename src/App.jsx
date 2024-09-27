import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const visibleMovies = (movies, { query }) => {
  const queryTrimToLovercase = query.toLowerCase().trim();
  const filterMovies = movies.filter(({ title, description }) => {
    const titleLovercase = title.toLowerCase();
    const descriptionLovercase = description.toLowerCase();

    return (
      titleLovercase.includes(queryTrimToLovercase) ||
      descriptionLovercase.includes(queryTrimToLovercase)
    );
  });

  return filterMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = visibleMovies(moviesFromServer, { query });

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
