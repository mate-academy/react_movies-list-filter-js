import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ visibleMovies }) => (
  <div className="movies">
    {visibleMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
