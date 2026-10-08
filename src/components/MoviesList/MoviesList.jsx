import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchQuery }) => {
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const checkIsIncludes = item =>
    item.title.toLowerCase().includes(normalizedQuery) ||
    item.description.toLowerCase().includes(normalizedQuery);
  const visibleMovies = movies.filter(movie => checkIsIncludes(movie));

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
