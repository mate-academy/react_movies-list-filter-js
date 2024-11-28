import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function Filtr(arr, filtr) {
  let tempArr = [...arr];

  if (filtr) {
    const lowCase = filtr.toLowerCase().trim();

    tempArr = tempArr.filter(
      movie =>
        movie.title.toLowerCase().includes(lowCase) ||
        movie.description.toLowerCase().includes(lowCase),
    );
  }

  return tempArr;
}

export const App = () => {
  const [serch, setSerch] = useState('');
  const visibleMovie = Filtr(moviesFromServer, serch);

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
                value={serch}
                onInput={e => setSerch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
