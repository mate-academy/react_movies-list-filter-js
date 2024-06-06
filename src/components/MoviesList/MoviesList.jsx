import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const trimmedQuery = query.trim().toLowerCase();
  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(trimmedQuery) ||
      movie.description.toLowerCase().includes(trimmedQuery),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
