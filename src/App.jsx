import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPreparedMovies = (movies, query) => {
  const trimQuery = query.trim().toLowerCase();

  return movies.filter((movie) => {
    const { title, description } = movie;

    return (
      title.toLowerCase().includes(trimQuery)
      || description.toLowerCase().includes(trimQuery)
    );
  });
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;

    setQuery(newQuery);
    const filteredMovies = getPreparedMovies(moviesFromServer, newQuery);

    setVisibleMovies(filteredMovies);
  };

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
                onChange={handleQueryChange}
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
