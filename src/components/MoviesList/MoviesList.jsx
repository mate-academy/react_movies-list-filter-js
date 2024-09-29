import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(
    m =>
      m.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      m.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
