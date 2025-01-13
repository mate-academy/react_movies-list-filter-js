import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let visibleMovies = [...movies];
  const modifiedQuery = query.trim().toLowerCase();

  if (modifiedQuery) {
    visibleMovies = visibleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(modifiedQuery) ||
        movie.description.toLowerCase().includes(modifiedQuery),
    );
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
