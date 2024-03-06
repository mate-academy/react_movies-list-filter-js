import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function findCorrectMovies(movies, query) {
  let preparedMovies = [...movies];
  const queryToWorkWith = query.trim().toLowerCase();

  if (query) {
    preparedMovies = preparedMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(queryToWorkWith) ||
        movie.description.toLowerCase().includes(queryToWorkWith)
      );
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = findCorrectMovies(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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

export default App;
