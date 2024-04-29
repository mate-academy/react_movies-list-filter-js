import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filter(array, query) {
  return [...array].filter(item => {
    const { title, description } = item;

    const queryToLowerCase = query.toLowerCase().trim();

    const titleToLowerCase = title.toLowerCase();

    const descriptionToLowerCase = description.toLowerCase();

    return (
      titleToLowerCase.includes(queryToLowerCase) ||
      descriptionToLowerCase.includes(queryToLowerCase)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const preparedMovieList = filter(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
