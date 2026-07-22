import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [text, setText] = useState('');

  const moviesSearch = moviesFromServer.filter(m => {
    return m.title.toLowerCase().includes(text.toLowerCase().trim());
  });

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
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesSearch} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
