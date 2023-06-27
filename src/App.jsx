import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepairedMovies(query) {
  let visibleMovies = [...moviesFromServer];
  const prepairedQuery = query.toLowerCase().trim();

  if (query.length === 0) {
    return visibleMovies;
  }

  visibleMovies = moviesFromServer.filter((movie) => {
    const { title, description } = movie;

    return title.trim().toLowerCase().includes(prepairedQuery)
      || description.trim().toLowerCase().includes(prepairedQuery);
  });

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPrepairedMovies(query);

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
                onChange={event => setQuery(event.target.value)}
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
