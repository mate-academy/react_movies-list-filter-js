import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredFilms(movies, query) {

  if (query) {
    const lowerQuery = query.trim().toLowerCase();
    return movies.filter(movie => {
      const lowerTitle = movie.title.toLowerCase();
      const lowerDescription = movie.description.toLowerCase();

      return (
        lowerTitle.includes(lowerQuery) || lowerDescription.includes(lowerQuery)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [filterBy, setfilterBy] = useState('');

  const filteredFilms = getFilteredFilms(moviesFromServer, filterBy);

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
                onChange={event => setfilterBy(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredFilms} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
