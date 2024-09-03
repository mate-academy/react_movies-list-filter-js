import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {

const [query, setQuery] = useState('')

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
              onChange={event=>setQuery(event.target.value)}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>

      <MoviesList 
      movies={moviesFromServer} 
      query={query}
      />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
)};
