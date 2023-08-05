import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const getFilterMovies = (movies, query) => {
    let prepearedMovies = [...moviesFromServer];
    const lowerQuery = query.toLowerCase().trim();

    prepearedMovies = prepearedMovies.filter(
      movie => movie.title.toLowerCase().includes(lowerQuery)
        || movie.description.toLowerCase().includes(lowerQuery),
    );

    return prepearedMovies;
  };

  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovies(moviesFromServer, query);

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

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
