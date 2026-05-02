import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPreparedMovies = (movies, query) => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(normalizedQuery);

    const matchesDescription = movie.description
      ? movie.description.toLowerCase().includes(normalizedQuery)
      : false;

    return matchesTitle || matchesDescription;
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const visebleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                onChange={handleChange}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visebleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
