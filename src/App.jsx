import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchMovie(query, movies) {
  const queryToLower = query.toLowerCase().trim();
  const moviesToLower = movies.map(movie => {
    return {
      title: movie.title.toLowerCase(),
      description: movie.description.toLowerCase(),
      imdbId: movie.imdbId,
    };
  });

  return moviesToLower.filter(
    movie =>
      movie.description.includes(queryToLower) ||
      movie.title.includes(queryToLower),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filterMovies = searchMovie(query, moviesFromServer);
  const visibleMovies = moviesFromServer.filter(movie =>
    filterMovies.some(filteredMovie => filteredMovie.imdbId === movie.imdbId),
  );

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

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
                onChange={handleInputChange}
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
