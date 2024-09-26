import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQeury] = useState('');

  const getFilteredMovies = () => {
    let filteredMovies = [...moviesFromServer];

    if (query !== '') {
      filteredMovies = filteredMovies.filter(movie => {
        const filterQuery = query.toLowerCase().trim();
        const filterTitle = movie.title.toLowerCase();
        const filterDescription = movie.description.toLowerCase();

        return (
          filterTitle.includes(filterQuery) ||
          filterDescription.includes(filterQuery)
        );
      });
    }

    return filteredMovies;
  };

  const visibleMovies = getFilteredMovies();

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
                onChange={event => setQeury(event.target.value)}
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
