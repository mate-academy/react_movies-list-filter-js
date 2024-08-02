import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function getPreparedMovies(movies, query) {
  if (query) {
    return movies.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim())
    ));
  }
  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className='page'>
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query"
            className='label'>
              Search movie
            </label>

            <div className='control'>
              <input
              type="text"
              id="search-query"
              placeholder="Type search word"
              onChange={event => {
                setQuery(event.target.value)
              }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
