/* eslint-disable consistent-return */
import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchMovie(movies, searchQuery) {
  const query = searchQuery.toLowerCase().trim();

  if (!searchQuery.trim()) {
    return [...moviesFromServer];
  }

  // eslint-disable-next-line array-callback-return
  const visibleFilteredMovies = movies.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      return movie;
    }
  });

  return visibleFilteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = searchMovie(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
