import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieSearchBar } from './components/MovieSearchBar';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const toLowerTitle = movie.title.toLowerCase().trim();
    const toLowerDescription = movie.description.toLowerCase().trim();
    const toLowerQuery = query.toLowerCase().trim();

    return (
      toLowerTitle.includes(toLowerQuery) ||
      toLowerDescription.includes(toLowerQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <MovieSearchBar setQuery={setQuery} />
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
