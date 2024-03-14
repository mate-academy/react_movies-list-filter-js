import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteringBy = (movies, query) => {
  let visibleMovies = [...movies];

  if (query) {
    visibleMovies = visibleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return visibleMovies;
};

export const App = () => {
  const [movies, setMovies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    const searchItem = e.currentTarget.value;

    setQuery(e.currentTarget.value);
    const visibleMovies = filteringBy(moviesFromServer, searchItem.trim());

    setMovies(visibleMovies);
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
                type="text"
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
