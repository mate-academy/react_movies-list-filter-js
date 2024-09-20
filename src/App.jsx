import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPreparedMoviesList = (moviesListRaw, filterSettings) => {
  // const visibleMoviesList = [...moviesListRaw];

  return moviesListRaw.filter(
    movie =>
      movie.title.toLowerCase().includes(filterSettings.toLowerCase().trim()) ||
      movie.description
        .toLowerCase()
        .includes(filterSettings.toLowerCase().trim()),
  );
};

export const App = () => {
  const [filterInstruction, setFilterInstruction] = useState('');

  const visibleMovieList = getPreparedMoviesList(
    moviesFromServer,
    filterInstruction,
  );

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
                onChange={event => setFilterInstruction(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
