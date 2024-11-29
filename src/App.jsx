import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMoviesByQuery(movies, query) {
  if (!query) {
    return movies;
  }

  const normalQuery = query.toLowerCase().trim().split(/\s+/);

  const resMovies = movies.filter(movie => {
    const normalTitle = movie.title.toLowerCase();
    const normalDescription = movie.description.toLowerCase();

    return normalQuery.every(
      q => normalTitle.includes(q) || normalDescription.includes(q),
    );
  });

  return resMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMoviesByQuery(moviesFromServer, query);

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
