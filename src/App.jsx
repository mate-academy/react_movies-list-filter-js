import { useState } from 'react'; // Крок 1: Імпортуємо хук
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // Крок 2: Створюємо стан для запиту (query)
  const [query, setQuery] = useState('');

  // Крок 3: Очищуємо запит від зайвих пробілів та переводимо в нижній регістр
  const normalizedQuery = query.trim().toLowerCase();

  // Крок 4: Створюємо змінну для відфільтрованих фільмів
  const visibleMovies = moviesFromServer.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = movie.description

      .toLowerCase()
      .includes(normalizedQuery);

    // Перевіряємо, чи є збіг хоча б в одному з полів
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
                // Крок 5:Пов'яуємо input зі станом (Controlled Component)
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Крок 6: Передаємо відфільтрований список замість повного */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
