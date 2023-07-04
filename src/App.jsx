import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFiltredMovies(movieList, query) {
  const visibleMoviesList = [...movieList];
  const preparedQuery = query.toLowerCase().trim();

  return visibleMoviesList.filter((movie) => {
    const preparedMovieTitle = movie.title.toLowerCase();
    const preparedMovieDescription = movie.description.toLowerCase();

    return preparedMovieTitle.includes(preparedQuery)
    || preparedMovieDescription.includes(preparedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFiltredMovies(moviesFromServer, query);

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
                onChange={(event => setQuery(event.target.value))}
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
