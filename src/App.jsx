import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  const filterMovies = searchValue => {
    return moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  const handleSearch = event => {
    const { value } = event.target;

    setQuery(value);
    const newMoviesData = filterMovies(value.trim());

    setVisibleMovies(newMoviesData);
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleSearch}
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
