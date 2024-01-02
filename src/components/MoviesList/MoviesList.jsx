import './MoviesList.scss';
// eslint-disable-next-line
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
