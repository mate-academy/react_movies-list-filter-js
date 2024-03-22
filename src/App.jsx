import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const getVissibleMovies = (movies, request) => {
    let prepMovies = [...movies];

    if (request) {
      const lowCaseReq = request.toLowerCase().replace(/\s+/g, '');

      prepMovies = prepMovies.filter(({ title, description }) => {
        return (
          title.toLowerCase().replace(/\s+/g, '').includes(lowCaseReq) ||
          description.toLowerCase().replace(/\s+/g, '').includes(lowCaseReq)
        );
      });
    }

    return prepMovies;
  };

  const [request, setRequest] = useState('');
  const vissibleMovies = getVissibleMovies(moviesFromServer, request);

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
                value={request}
                onChange={event => {
                  setRequest(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={vissibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
