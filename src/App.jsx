import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  // Прибираємо пробіли на початку та в кінці й приводимо до нижнього регістру
  const normalizedQuery = query.trim().toLowerCase();

  // Фільтруємо фільми за заголовком або описом
  const visibleMovies = moviesFromServer.filter(movie => {
    const titleMatches = movie.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatches = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    return titleMatches || descriptionMatches;
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

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => setQuery(event.target.value)}
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
