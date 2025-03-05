import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

const cswiSearch = (
  str,
  substr, // (Case & Surrounding Whitespace) Insensitive search
) => str.toUpperCase().includes(substr.trim().toUpperCase());

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(
    ({ title, description }) =>
      cswiSearch(title, query) || cswiSearch(description, query),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
