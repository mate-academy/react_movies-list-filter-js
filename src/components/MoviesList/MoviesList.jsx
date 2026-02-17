import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
