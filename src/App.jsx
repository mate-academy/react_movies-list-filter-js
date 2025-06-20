import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getSortedList = (list, query) => {
  const copyList = [...list];

  const sortedList = copyList.filter(
    el =>
      el.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      el.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return sortedList;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getSortedList(moviesFromServer, query);

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
              {/*  */}
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setQuery(e.target.value)}
              />
              {/*  */}
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
