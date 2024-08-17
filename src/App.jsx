import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  const filterMovies = (movies, input) => {
    setVisibleMovies(
      [...movies].filter(
        movie =>
          movie.title.toLowerCase().includes(input.toLowerCase().trim()) ||
          movie.description.toLowerCase().includes(input.toLowerCase().trim()),
      ),
    );
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
                onChange={e => {
                  filterMovies(moviesFromServer, e.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
