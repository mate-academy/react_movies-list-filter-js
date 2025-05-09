import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const normalize = query.trim().toLowerCase();
  const visiblemMovies = movies.filter(
    item =>
      item.title.toLowerCase().includes(normalize) ||
      item.description.toLowerCase().includes(normalize),
  );

  return (
    <div className="movies">
      {visiblemMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
