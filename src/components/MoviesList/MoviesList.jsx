import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({
  movies,
  query,
  filterBy,
}) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
