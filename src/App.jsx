import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const adjustText = text => text.trim().toLowerCase();

const filterMovies = (movies, query) => {
  let visibleMovies = [...movies];

  visibleMovies = visibleMovies.filter(movie => {
    const adjustTitle = adjustText(movie.title);
    const adjustDescription = adjustText(movie.description);
    const adjustQuery = adjustText(query);

    return (
      adjustTitle.includes(adjustQuery) ||
      adjustDescription.includes(adjustQuery)
    );
  });

  return visibleMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = filterMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                value={query}
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
