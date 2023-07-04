import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (query) => {
  const filteredQuery = query.toLowerCase().trim();

  const movies = [...moviesFromServer].filter((movie) => {
    const formatedTitle = movie.title.toLowerCase();
    const formatedDesc = movie.description.toLowerCase();

    return formatedTitle.includes(filteredQuery)
     || formatedDesc.includes(filteredQuery);
  });

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(query);

  const queryChange = event => setQuery(event.target.value);

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
                onChange={queryChange}
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
