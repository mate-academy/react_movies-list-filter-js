import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // Створюємо стан для збереження тексту пошуку
  // query — поточне значення, setQuery — функція для його оновлення
  const [query, setQuery] = useState('');

  // Нормалізуємо рядок: прибираємо зайві пробіли і зводимо до нижнього регістру
  const normalizedQuery = query.trim().toLowerCase();

  // Оновлюємо стан при зміні тексту в полі вводу
  const handleChange = event => {
    setQuery(event.target.value);
  };

  // Фільтруємо список фільмів за назвою або описом
  // (filter() повертає новий масив, не змінюючи оригінальний)
  const visibleMovies = moviesFromServer.filter(movie => {
    const title = movie.title ? movie.title.toLowerCase() : '';
    // Якщо опису або заголовку немає — повертаємо порожній рядок, щоб уникнути помилки
    const description = movie.description
      ? movie.description.toLowerCase()
      : '';

    // Повертаємо true, якщо знайдено збіг у назві або описі
    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
    );
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
                // Поточне значення поля
                value={query}
                // Оновлення стану при введенні тексту
                onChange={handleChange}
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
