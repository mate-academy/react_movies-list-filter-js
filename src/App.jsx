import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function serchMovies(movies, searchQuery) {
  const preparedMovies = [...movies];

  if (!searchQuery) {
    return preparedMovies;
  }

  return preparedMovies.filter((movie) => {
    const queryForSearch = searchQuery.toLowerCase().trim();
    const titleForSearch = movie.title.toLowerCase();
    const descriptionForSearch = movie.description.toLowerCase();

    return titleForSearch.includes(queryForSearch)
      || descriptionForSearch.includes(queryForSearch);
  });
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies] = useState(moviesFromServer);

  const moviesForRender = serchMovies(movies, searchQuery);

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
