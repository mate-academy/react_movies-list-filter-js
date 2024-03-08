import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMoviesArray = (movies, { query }) => {
  return movies.filter(movie => {
    const isInTitle = movie.title
      .toLowerCase()
      .includes(query.toLowerCase().trim());
    const isInDescription = movie.description
      .toLowerCase()
      .includes(query.toLowerCase().trim());

    return isInDescription || isInTitle;
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMoviesArray([...moviesFromServer], { query });

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
