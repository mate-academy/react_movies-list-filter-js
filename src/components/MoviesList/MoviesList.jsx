import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ filterBy, movies }) => {
  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filterBy.toLowerCase().trim()) ||
      movie.description
        .toLowerCase()
        .trim()
        .includes(filterBy.toLowerCase().trim()),
  );

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
