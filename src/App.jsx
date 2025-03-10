import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getCurrentMovieList(movies, query) {
  // eslint-disable-next-line no-param-reassign
  query = query.trim().toLowerCase();

  return movies.filter(movie => {
    const isTitleMatching = movie.title?.toLowerCase().includes(query) || false;
    const isDescriptionMatching =
      movie.description?.toLowerCase().includes(query) || false;

    return isTitleMatching || isDescriptionMatching;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getCurrentMovieList(moviesFromServer, query);

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
