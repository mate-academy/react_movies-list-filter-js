import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovie(list, { query }) {
  const copyList = [...list];

  return copyList.filter(movie => {
    const { title, description } = movie;
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseQuery = query.toLowerCase().trim();

    return (
      lowerCaseTitle.includes(lowerCaseQuery) ||
      lowerCaseDescription.includes(lowerCaseQuery)
    );
  });
}

export const App = () => {
  const [query, setNewQuery] = useState('');
  const visibleMovie = filterMovie(moviesFromServer, { query });

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
                onChange={event => {
                  setNewQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
