import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function sortFilm(movies, query) {
  const loverQuerry = query.toLowerCase().trim();
  const films = [...movies];

  return films.filter(film => film.title.toLowerCase().includes(loverQuerry)
      || film.description.toLowerCase().includes(loverQuerry));
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = sortFilm(moviesFromServer, query);
  const newQuery = (event) => {
    setQuery(event.target.value);
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
                onChange={newQuery}
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
