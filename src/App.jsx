import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalizationString = inputString => {
  return inputString.trim().replace(/\s+/g, ' ').toLowerCase();
};

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const onChangeInput = query => {
    const queryToFind = normalizationString(query);
    const moviesWithQuery = [...moviesFromServer].filter(movie => {
      const title = normalizationString(movie.title);
      const description = normalizationString(movie.description);

      return title.includes(queryToFind) || description.includes(queryToFind);
    });

    setVisibleMovies(moviesWithQuery);
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
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => onChangeInput(e.target.value)}
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
