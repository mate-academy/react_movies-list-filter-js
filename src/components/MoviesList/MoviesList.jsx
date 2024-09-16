import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ filteredMovies }) => (
  <div className="movies">
    {filteredMovies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
