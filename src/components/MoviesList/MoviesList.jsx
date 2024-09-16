import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies, query }) => {
  let visibleMovies = movies;

  if (query) {
    visibleMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim()),
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
