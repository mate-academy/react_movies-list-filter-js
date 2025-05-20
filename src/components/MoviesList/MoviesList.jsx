import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0
      ? movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)
      : null}
  </div>
);
