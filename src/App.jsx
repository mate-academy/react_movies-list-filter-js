import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';


function getPreparedGoods(goods, { query }) {
  const copyGoods = [...goods];

  const preparedGoods = copyGoods.filter((good) => {
  const lowerTitle = good.title.toLowerCase();
  const lowerDescription = good.description.toLowerCase();
  const lowerQuery = query.trim().toLowerCase();

  return lowerTitle.includes(lowerQuery) || lowerDescription.includes(lowerQuery);
  });

  return preparedGoods;
};

export const App = () => {

  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedGoods(moviesFromServer, { query });


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
              onChange={(event) => {setQuery(event.target.value)}}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
  )
};
