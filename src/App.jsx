import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import visibleMovies from './api/movies.json';

const filterMovies = (movies, searchQuery) => {
  if (!searchQuery) {
    return movies;
  }

  return movies.filter((movie) => {
    const preparedSearchQuery = searchQuery.toLowerCase().trim();
    const preparedTitle = movie.title.toLowerCase();
    const preparedDescription = movie.description.toLowerCase();

    return preparedTitle.includes(preparedSearchQuery)
      || preparedDescription.includes(preparedSearchQuery);
  });
};

export const App = () => {
  const [movies] = useState(visibleMovies);
  const [searchQuery, setSearchQuery] = useState('');

  const moviesForRender = filterMovies(movies, searchQuery);

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
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}

              />
            </div>
          </div>
        </div>
        <MoviesList movies={moviesForRender} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
