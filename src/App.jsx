import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [lookingForWord, setLookForWord] = useState('');

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
                value={lookingForWord}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event => setLookForWord(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList
          lookForWord={lookingForWord}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
