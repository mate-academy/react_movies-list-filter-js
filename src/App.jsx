import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [search, setSearch] = useState('');
  const searchNormalized = search.trim().toLowerCase();

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  function getVisibleMovies() {
    return moviesFromServer.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      const titleIncludes = title.includes(searchNormalized);
      const descriptionIncludes = description.includes(searchNormalized);

      return titleIncludes || descriptionIncludes;
    });
  }

  const visibleMovies =
    searchNormalized === '' ? [...moviesFromServer] : getVisibleMovies();

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
                data-cy="search-query"
                className="input"
                placeholder="Type search word"
                onChange={searchHandler}
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
