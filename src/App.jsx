import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

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
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setVisibleMovies(
                    moviesFromServer.filter(
                      movie =>
                        movie.title
                          .toLowerCase()
                          .includes(e.target.value.trim().toLowerCase()) ||
                        movie.description
                          .toLowerCase()
                          .includes(e.target.value.trim().toLowerCase()),
                    ),
                  );
                }}
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
