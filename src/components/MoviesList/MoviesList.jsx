import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => {
      if (movie !== false) {
        return (
          <MovieCard key={movie.imdbId} movie={movie} />
        );
      }

      return null;
    })}
  </div>
);
