import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function prepareMovies(moviesList, {query}) {
  let visibleMovies = moviesList;

  visibleMovies = visibleMovies.filter((movie) => movie.title.trim().toLowerCase().includes(query.trim().toLowerCase()) || movie.description.trim().toLowerCase().includes(query.trim().toLowerCase()));

  return visibleMovies;
}

export const App = () => {
 const [query, setQuery] = useState('');
 let visibleMovies = prepareMovies(moviesFromServer, {query});

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
            value={query}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={(event) => setQuery(event.target.value) }
            />
          </div>
        </div>
      </div>
      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>)
};
