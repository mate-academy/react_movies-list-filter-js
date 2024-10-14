import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function mergeMovies(a, b, predicate = (x, y) => x === y) {
  const c = [...a]; // copy to avoid side effects
  // add all items from B to copy C if they're not already present

  b.forEach(bItem => {
    return c.some(cItem => predicate(bItem, cItem)) ? null : c.push(bItem);
  });

  return c;
}

function prepareMovies(movies, query) {
  const preparedMovies = movies;
  const normalizedQuery = query.trim().toLowerCase();
  let preparedMoviesByTitle = [];
  let preparedMoviesByDescription = [];

  if (normalizedQuery) {
    preparedMoviesByTitle = preparedMovies.filter(movie => {
      return movie.title.toLowerCase().includes(normalizedQuery);
    });
  }

  if (normalizedQuery) {
    preparedMoviesByDescription = preparedMovies.filter(movie => {
      return movie.description.toLowerCase().includes(normalizedQuery);
    });
  }

  if (normalizedQuery) {
    const filteredMovies = mergeMovies(
      preparedMoviesByTitle,
      preparedMoviesByDescription,
    );

    const sortedMovies = filteredMovies.sort((movie1, movie2) => {
      return movie1.title.localeCompare(movie2.title);
    });

    return sortedMovies;
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
