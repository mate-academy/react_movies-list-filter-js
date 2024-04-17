import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchMovie(query, movies) {
  const lowerCaseQuery = query.toLowerCase().trim();
  const lowerCaseMovies = movies.map(movie => {
    return {
      title: movie.title.toLowerCase(),
      description: movie.description.toLowerCase(),
      imdbId: movie.imdbId,
    };
  });

  return lowerCaseMovies.filter(
    movie =>
      movie.description.includes(lowerCaseQuery) ||
      movie.title.includes(lowerCaseQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filterMovies = searchMovie(query, moviesFromServer);
  const visibleMovies = moviesFromServer.filter(movie =>
    filterMovies.some(filteredMovie => filteredMovie.imdbId === movie.imdbId),
  );

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
