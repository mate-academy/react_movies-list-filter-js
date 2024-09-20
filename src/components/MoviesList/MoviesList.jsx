import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, filterBy }) => {
  const visibleMovies = movies.filter(movie => {
    const normalizeFilter = filterBy.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalizeFilter) ||
      movie.description.toLowerCase().includes(normalizeFilter)
    );
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
