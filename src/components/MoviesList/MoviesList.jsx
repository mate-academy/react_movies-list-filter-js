import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  // 1. Готуємо запит (прибираємо пробіли та регістр)
  const normalizedQuery = query.trim().toLowerCase();

  // 2. Створюємо масив тільки з тих фільмів, що нам підходять
  const visibleMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);

    // Тут нам треба додати таку ж перевірку для movie.description
    const descriptionMatch = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    // Повертаємо true, якщо знайдено хоча б в одному полі
    return titleMatch || descriptionMatch;
  });

  // 3. Повертаємо JSX
  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
