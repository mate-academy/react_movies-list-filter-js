import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

function filter(movies, query) {
  const lowQw = query.toLowerCase().trim();

  return [...movies].filter(
    movie =>
      movie.title.toLowerCase().includes(lowQw) ||
      movie.description.toLowerCase().includes(lowQw),
  );
}

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = filter(movies, query);

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
