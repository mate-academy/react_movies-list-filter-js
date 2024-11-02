import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (movies, query) => {
  if (query === '') {
    return movies;
  }

  const inputQuery = query.trim().toLowerCase();

  return [...movies].filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(inputQuery) || description.includes(inputQuery);
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={moviesFromServer}
          query={query}
          filterBy={(movies, searchQuery) =>
            getVisibleMovies(movies, searchQuery)
          }
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
