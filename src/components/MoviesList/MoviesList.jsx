import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies: visibleMovies }) => (
  <div className="movies">
    {visibleMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
