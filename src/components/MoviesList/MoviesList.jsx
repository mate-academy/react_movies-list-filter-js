import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const neededQuery = query.trim().toLowerCase();

  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(neededQuery) ||
      movie.description.toLowerCase().includes(neededQuery),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
