import { useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MoviesFilterQuery } from './components/MoviesFilter';
import { filterMoviesByQuery } from './utils/filterMovies';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMoviesByQuery(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}

            <MoviesFilterQuery
              query={query}
              setQuery={setQuery}
            />
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  )
};
