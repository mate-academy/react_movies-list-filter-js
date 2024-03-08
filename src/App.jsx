import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

function filterMovies(movies, query) {
  const lowerCasedQuery = query.toLowerCase().trim();

  return movies.filter(({ title, description }) => {
    const lowerCasedContent = [title, description].map(contentPart => {
      return contentPart.toLowerCase();
    });

    return lowerCasedContent.some(contentPart => {
      return contentPart.includes(lowerCasedQuery);
    });
  });
}

export const App = () => {
  const [filterValue, setFilterValue] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, filterValue);

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
                onChange={event => setFilterValue(event.target.value)}
                value={filterValue}
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
