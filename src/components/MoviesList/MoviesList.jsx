import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, byQuery }) => {
  const normQuery = byQuery.trim().toLowerCase();

  const visibleMovies = movies.filter(
    ({ description = '', title = '' }) =>
      description.trim().toLowerCase().includes(normQuery) ||
      title.trim().toLowerCase().includes(normQuery),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
