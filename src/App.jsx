import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filter(moviesList, query) {
  const goodQuery = query.toLowerCase().trim();

  const correctMovies = [...moviesList].filter((movie) => {
    const goodTitle = movie.title.toLowerCase();
    const goodDescription = movie.description.toLowerCase();

    return goodTitle.includes(goodQuery) || goodDescription.includes(goodQuery);
  });

  return correctMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filter(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
