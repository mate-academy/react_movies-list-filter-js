import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMoviesData(movies, query) {
  if (query) {
    const queryLower = query.toLowerCase().trim();

    return movies.filter(movie => {
      const titleLower = movie.title.toLowerCase();
      const descriptionLower = movie.description.toLowerCase();

      return (
        titleLower.includes(queryLower) || descriptionLower.includes(queryLower)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const visibleMovies = prepareMoviesData(moviesFromServer, filterQuery);

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
                onChange={event => setFilterQuery(event.target.value)}
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
