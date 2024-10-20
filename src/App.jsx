import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function filterMovie (movies, query){
  const normalizeQuery = query.trim().toLowerCase();
  return movies.filter(
    movie =>{
      return movie.title.toLowerCase().includes(normalizeQuery) ||
      movie.description.toLowerCase().includes(normalizeQuery);
    }
  )
}
export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovie(moviesFromServer, query);
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
              onChange={(e) =>setQuery(e.target.value)}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
)};
