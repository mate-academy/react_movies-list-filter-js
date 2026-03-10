import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // Стан для збереження введеного запиту
  const [query, setQuery] = useState('');
  const lowerQuery = query.trim().toLowerCase();

  // Фільтруємо фільми на основі запиту
  const visibleMovies = moviesFromServer.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = movie.description
      .toLowerCase()
      .includes(lowerQuery);

    return titleMatch || descriptionMatch;
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={event => setQuery(event.target.value)} // Зберігаємо введене значення
              />
            </div>
          </div>
        </div>

        {/* Передаємо у MoviesList вже відфільтровані фільми */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
