import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export function MoviesList({ movies, query }) {
  let visiblesMovies = movies;

  if (query) {
    visiblesMovies = movies.filter(
      movie =>
        movie.title.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description
          .trim()
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    );
  }

  return (
    <div className="movies">
      {visiblesMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}
