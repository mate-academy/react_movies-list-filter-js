import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { searchInput }) {
  let visibleMovies = [...movies];

  if (searchInput) {
    visibleMovies = visibleMovies.filter((movie) => {
      const input = searchInput.trim().toLowerCase();
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();
      const isMatch = movieTitle.includes(input)
        || movieDescription.includes(input);

      return isMatch;
    });
  }

  return visibleMovies;
}

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, { searchInput });

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
                onChange={(event) => {
                  setSearchInput(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
