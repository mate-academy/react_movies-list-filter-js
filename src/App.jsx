import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovieList(movies, { query }) {
  let movieList = [...movies];

  if (query) {
    const newQuery = query.toLowerCase().trim();

    movieList = movieList.filter(
      movie =>
        movie.title.toLowerCase().includes(newQuery) ||
        movie.description.toLowerCase().includes(newQuery),
    );
  }

  return movieList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovieList(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
