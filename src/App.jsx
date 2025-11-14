import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies, query) => {
  const prepearedQuery = query.toLowerCase().trim();

  return movies.filter(movie => {
    const prepearedTitle = movie.title.toLowerCase().trim();
    const prepearedDesc = movie.description.toLowerCase().trim();

    if (
      prepearedTitle.includes(prepearedQuery) ||
      prepearedDesc.includes(prepearedQuery)
    ) {
      return true;
    }

    return false;
  });
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
