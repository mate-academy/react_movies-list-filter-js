import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies.json';

function prepareArray(array, { query }) {
  let cloneArr = [...array];

  if (query) {
    cloneArr = cloneArr.filter(elem => (
      elem.title.toLowerCase().includes(query)
    || elem.description.toLowerCase().includes(query)
    ));
  }

  return cloneArr;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibeMovies = prepareArray(moviesFromServer, { query });

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
                onChange={e => setQuery(e.target.value.toLowerCase().trim())}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibeMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
