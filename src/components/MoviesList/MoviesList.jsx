import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const criteria = query.toLowerCase().trim();

  const visibleMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(criteria) ||
      movie.description.toLowerCase().includes(criteria)
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
