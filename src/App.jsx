import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // Стан для збереження тексту пошуку
  const [query, setQuery] = useState('');

  // Прибираємо пробіли та приводимо до нижнього регістру
  const normalizedQuery = query.trim().toLowerCase();

  // Створюємо масив відфільтрованих фільмів
  const visibleMovies = moviesFromServer.filter(movie => {
    // Також приводимо назву і опис до нижнього регістру
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    // Перевіряємо, чи містять title або description введений текст
    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
    );
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
                // Значення інпуту береться зі state
                value={query}
                // При кожній зміні оновлюємо state
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Передаємо в MoviesList тільки відфільтровані фільми */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
