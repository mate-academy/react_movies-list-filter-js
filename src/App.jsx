import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const queryToLowerAndTrim = query.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(movie => {
    const movieTitleLowerCase = movie.title.toLowerCase().trim();
    const movieDescriptionToLowerCase = movie.description.toLowerCase().trim();

    return movieTitleLowerCase.includes(queryToLowerAndTrim) ||
      movieDescriptionToLowerCase.includes(queryToLowerAndTrim)
  })

  return(
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
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies}/>
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
  )
}
  

